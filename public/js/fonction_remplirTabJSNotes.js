function remplirTabJSNotes(enonce, tabRotCoord, taille){

    console.log("taille passée à remplir "+taille);
    var tabJSNotes = [];
    var enonce_str = enonce.toString();
    console.log(typeof enonce_str);
    for(i=0;i<enonce_str.length;i++){
        if(enonce_str[i]=="1"){
            tabJSNotes.push({
                numOrdreNote:+tabRotCoord[i].numOrdre, /*Peut servir à réinit la matrice après rotation*/
                nommidi:tabRotCoord[i].nommidi,
                frequence:tabRotCoord[i].frequence,
                nomNote:tabRotCoord[i].nomD,                /*Choix arbitraire du dièse par rapport au bémol*/
                x:+tabRotCoord[i].x,
                y:+tabRotCoord[i].y,
                taille:  +taille
            });
        }
    }

    return tabJSNotes;
}