import { fileURLToPath } from 'url'
import { dirname } from 'path'
import path from 'path';
import express from 'express';
import fs from 'fs';
import csvParser from 'csv-parser';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files like CSS and images
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/data')));
app.use(express.static(path.join(__dirname, 'controllers')));
app.use(express.static(path.join(__dirname, 'models')));

// Routes

app.get('/', (req, res) => {
    res.render('index'); // Render main page with clickable images
});

app.get('/v_eureka', (req, res) => {
    res.render('v_eureka'); // Render the "v_eureka.ejs" page
});

app.get('/v_manuel', (req, res) => {
    res.render('v_manuel'); // Render the "v_manuel.ejs" page
});

app.get('/v_manuelB', (req, res) => {
    res.render('v_manuelB'); // Render the "v_manuelB.ejs" page
});

app.get('/v_etude_manuel', (req, res) => {
    res.render('v_etude_manuel'); // Render the "v_etude_manuel.ejs" page
});

app.get('/v_spirale_manuel', (req, res) => {
    res.render('v_spirale_manuel'); // Render the "v_spirale_manuel.ejs" page
});

app.get('/v_piano', (req, res) => {
    res.render('v_piano'); // Render the "v_piano.ejs" page
});

app.get('/v_guitare', (req, res) => {
    res.render('v_guitare'); // Render the "v_guitare.ejs" page
});

// Function to parse CSV
const lireCSV = (idMat,filePath) => {
    return new Promise((resolve, reject) => {
      const results = [];
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            // Filter rows matching the condition
            var idEtRang = results
                .filter(row => row.enonce === idMat)
                .map(row => ({  id: row.id,
                                nbSons: row.nbSons,
                                enonce: row.enonce.toString(),
                                rang: row.rang,
                                nomenclature: row.nomenclature,
                                origine: row.origine,
                                origineAnnexe: row.origineAnnexe,
                                couleur: row.couleur,
                                musicalite: row.musicalite,
                                geometrie: row.geometrie,
                                bicolore: row.nbSons == 6 ? true : false
                            }))
                ;

            resolve(idEtRang);
        })
        .on('error', (err) => reject(err));
    });
  };
  
  // CSV Parsing Endpoint (Inline Logic)
  app.get('/v_etude', async (req, res) => {
    try {
        const idmat = req.query.idMatriceEnvoye;
        const filePath = path.join(__dirname, 'public', 'ressources', 'listeMatrices4_2022_MusiEtGeo.csv');
        const data = await lireCSV(idmat,filePath); // Parse the file
        res.render('v_etude', {data: data, idmat: idmat}) // Render the "v_etude.ejs" page
    } catch (error) {
        res.status(500).send('Erreur de lecture du fichier CSV : ' + error.message);
    }
  });

app.get('/v_encyclopedie', (req, res) => {
    res.render('v_encyclopedie'); // Render the "v_encyclopedie.ejs" page
});

app.get('/v_auto', (req, res) => {
    const results = [];
    const filePath = path.join(__dirname, 'public', 'ressources', 'listeMatrices4_2022_MusiEtGeo.csv');
    fs.createReadStream(filePath)
    .pipe(csvParser())
    .on('data', (lig) => { //data représente chaque ligne, qu'on nommera "lig"
        results.push(lig);
    })
    .on('end', () => {

        var nblig = results.length; //Compter les lignes du fichier
        var alea = Math.floor(Math.random() * nblig);
        var rangAlea = Object.values(results)[alea].rang.substring(0, 3);
        var nbSons = Object.values(results)[alea].nbSons;
        var enonce = Object.values(results)[alea].enonce.toString();
        var nomencEtOrig = [];

        var nomencEtOrig = results
            .filter(row => row.rang.substring(0, 3) === rangAlea)
            .map(row => row.nomenclature + "@" + row.origine);

        res.render('v_auto', {donnee: results, matriceAlea: rangAlea, nbSons: nbSons, nomencEtOrig: nomencEtOrig, enonce: enonce.toString()});
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur lancé à http://localhost:${PORT}`);
});
