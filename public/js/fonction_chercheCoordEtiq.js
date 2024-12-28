function chercheCoordEtiq(xyEtiq,tabRotCoord)
{
    /*Si les coord de l étiquette correspondent à une des coord de l'énoncé, on renvoie true*/

    //indexCoordTrouvees = tabJSNotes.findIndex((x) => x == xyPoint);
    var i = 0;

    var trouve = false;

    while( trouve=false && i<tabRotCoord.length);
    {
        if(xyEtiq == Math.round(tabRotCoord[i].xetiq)+":"+Math.round(tabRotCoord[i].yetiq))
        {
            trouve=true;
        }
        i++;
    }
    console.log(" x : y | x : y "+xyEtiq+" | "+Math.round(tabRotCoord[i].x)+":"+Math.round(tabRotCoord[i].y));
    return trouve;
}