function chercheNomenclatureEureka(rang,tabToutesLesMatrices)
{
    //Recherche toutes les Nomenclatures et Origines
    //d'après un rang
    //(pour v_eureka.php)

    var f=0;
    var trouve=false;
    var rangPur = [];
    var rangTop = [];
    var nomenclatures = "";

    while(f<tabToutesLesMatrices.length && trouve==false)
    {
        rangPur = tabToutesLesMatrices[f].rang.split(";");
        rangTop = rangPur[0].split("-");
        if(rangTop[0] == rang){
            trouve = true;
            while(f<tabToutesLesMatrices.length && rangTop[0] == rang)
            {
                nomenclatures += "<p>"+tabToutesLesMatrices[f].nomenclature+"</p><p class=texte-gris>"+tabToutesLesMatrices[f].origine+"</p>";
                f++;
                rangPur = tabToutesLesMatrices[f].rang.split(";");
                rangTop = rangPur[0].split("-");
            }
        }
        f++;
    }
    if(trouve==true){
        return nomenclatures;
    }
    else
    {
        return "";
    }
}