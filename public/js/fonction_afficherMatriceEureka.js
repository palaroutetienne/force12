function afficherMatriceEureka(calqueNoteEtCercle,point,enonceString,r,zoneDessin,ladiv,tabJSMat,tabToutesLesMatrices)
{

    var angleNote = [
        0,
        Math.PI/6,
        Math.PI/3,
        Math.PI/2,
        2*Math.PI/3,
        5*Math.PI/6,
        Math.PI,
        7*Math.PI/6,
        4*Math.PI/3,
        3*Math.PI/2,
        5*Math.PI/3,
        11*Math.PI/6
    ];

    //Trouver les infos sur la note dans tabJSNotes en fonction des coord et les SUPPRIMER DANS tabJSNotes
    index = tabToutesLesMatrices.findIndex(x => x.enonce.toString() === enonceString);

    console.log("Matrice trouvée dans tabToutesLesMatrices "+index);

    //Traitement résultat recherche et MAJ infos sur la matrice active
    var bico = false;
    tabJSMat = [];
    if(tabToutesLesMatrices[index].couleur == "bicolore")
    {
        bico = true;
    }
    tabJSMat.push({
        nomStage: "zoneDessin",
        enonce: tabToutesLesMatrices[index].enonce,
        x:ladiv.width/2,
        y:ladiv.height/2,
        rayon:r,
        numMat:tabToutesLesMatrices[index].id,
        couleur:tabToutesLesMatrices[index].couleur,
        bicolore: bico,
        rang:tabToutesLesMatrices[index].rang
    });
    if(tabJSNotes.length == 2) //Tracer la corde et l'arc ;-)
    {
        var angle1;
        var angle2;
        
        angle1 = angleNote[tabJSNotes[0].numOrdreNote];
        angle2 = angleNote[tabJSNotes[1].numOrdreNote];
        
        //Dessiner un chemin et le remplir
        
        if(angle2-angle1 <= Math.PI) //Pour renverser l'arc passé un certain point
        {
            var donneesSVG = "A 140 140 0 1 0 "+(tabJSNotes[1].x-tabJSNotes[0].x)+","+(tabJSNotes[1].y-tabJSNotes[0].y);
        }
        else
        {
            //4ième param SVG de A sert à définir si on dépasse 180 (valeur 1) ou non (valeur 0)
            var donneesSVG = "A 140 140 0 0 0 "+(tabJSNotes[1].x-tabJSNotes[0].x)+","+(tabJSNotes[1].y-tabJSNotes[0].y);
        }
        var arcBleu = new Konva.Path({
            x: tabJSNotes[0].x,
            y: tabJSNotes[0].y,
            data: donneesSVG,
            fill: tabJSMat[0].couleur,
            scaleX: 1,
            scaleY: 1,
            name: "arcBleu"
        });

        calqueNoteEtCercle.add(arcBleu);
        arcBleu.zIndex(10);
    }
    else
    {
        var arcBleu = zoneDessin.find(".arcBleu");
        if(arcBleu!="")
        {
            arcBleu.destroy();
            
            //----------------------------------------------------------------------------------------                    
            //-----------------ICI, PENSER à METTRE AUSSI à JOUR la COULEUR MATRICE et l'input enone -
            //----------------------------------------------------------------------------------------
        }
        
    }

    //Tracer les lignes et le fond
    var calqueLignes = point.getStage().find('#calqueLignes');
    calqueLignes.destroy();
    
    zoneDessin.add(calqueNoteEtCercle);
    zoneDessin.draw();
    
    traceLignes(tabJSMat,tabJSNotes,zoneDessin);

    //console.log(tabJSMat[tabJSMat.length-1].numMat);
    return tabJSMat[tabJSMat.length-1].numMat;
    //console.log("tabToutesLesMatrices[index].enonce "+tabToutesLesMatrices[index].enonce);
}