function chercheIndiceMatrice(rang,tabToutesLesMatrices)
{
    //Contrôle de saisie :
    //Hasardeux ? Je décide de convertir le num matrice saisi de str en float
    //Puis extraire la partie entière (seulement les u, d, centaines).
    var flt_rang = parseFloat(rang); //Les caractères non num sont ignorés/droppés
    rang = Math.trunc(flt_rang); //Seulement la partie entière est gardée.
    
    //Recherche un rang matrice d'après un id matrice (pour manuelB.php)

    var f=0;
    var trouve=false;
    var rangPur = [];
    var rangTop = [];

    while(f<tabToutesLesMatrices.length && trouve==false)
    {
        rangPur = tabToutesLesMatrices[f].rang.split(";");
        rangTop = rangPur[0].split("-");

        if( rangTop[0] == rang){
            var indice = f;
            trouve = true;
        }
        f++;
    }
    if(trouve==true){
        return indice;
    }
    else
    {
        return null;
    }
}