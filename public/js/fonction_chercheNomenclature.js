function chercheNomenclature(idMat,tabToutesLesMatrices)
{
    //Recherche un descriptif/nomenclature
    //matrice d'après un id matrice (pour spirale.php)
    var f=0;
    var trouve=false;
    while(f<tabToutesLesMatrices.length && trouve==false)
    {
        if(tabToutesLesMatrices[f].id == idMat){
            var nomenclature = tabToutesLesMatrices[f].nomenclature;
            trouve = true;
        }
        f++;
    }
    if(trouve==true){
        return nomenclature;
    }
    else
    {
        return null;
    }
}