function extractNotesEnonce(){
    
    console.log("extractNotesEnonce");

    var tabRotCoord = [];

    //A FAIRE : ajouter nomDUs et nomBUs pour notation US des notes ou EXTRAIRE depuis nommidi
    tabRotCoord.push({
        angle: "O",
        nomDUs:"C",
        nomBUs:"C",
        nomD:"Do",
        nomB:"Do",
        nommidi:"C4",
        rotation:rotation-0*30,
        x:"380",
        y:"240",
        xetiq:"420",
        yetiq:"240",
        frequence:"262",
        numOrdre:"0"
    });
    

    //A FAIRE : ajouter nomDUs et nomBUs pour notation US des notes ou EXTRAIRE depuis nommidi
    tabRotCoord.push({
        angle: Math.PI/6,
        nomDUs:"C#",
        nomBUs:"Db",
        nomD:"Do#",
        nomB:"Réb",
        nommidi:"C#4",
        rotation:rotation-1*30,
        x:"361.24355652982",
        y:"310",
        xetiq:"395.8845726812",
        yetiq:"330",
        frequence:"277",
        numOrdre:"1"
    });
    

    //A FAIRE : ajouter nomDUs et nomBUs pour notation US des notes ou EXTRAIRE depuis nommidi
    tabRotCoord.push({
        angle: Math.PI/3,
        nomDUs:"D",
        nomBUs:"D",
        nomD:"Ré",
        nomB:"Ré",
        nommidi:"D4",
        rotation:rotation-2*30,
        x:"310",
        y:"361.24355652982",
        xetiq:"330",
        yetiq:"395.8845726812",
        frequence:"294",
        numOrdre:"2"
    });
    

    //A FAIRE : ajouter nomDUs et nomBUs pour notation US des notes ou EXTRAIRE depuis nommidi
    tabRotCoord.push({
        angle: Math.PI/2,
        nomDUs:"D#",
        nomBUs:"Eb",
        nomD:"Ré#",
        nomB:"Mib",
        nommidi:"D#4",
        rotation:rotation-3*30,
        x:"240",
        y:"380",
        xetiq:"240",
        yetiq:"420",
        frequence:"311",
        numOrdre:"3"
    });
    

    //A FAIRE : ajouter nomDUs et nomBUs pour notation US des notes ou EXTRAIRE depuis nommidi
    tabRotCoord.push({
        angle: 2*Math.PI/3,
        nomDUs:"E",
        nomBUs:"E",
        nomD:"Mi",
        nomB:"Mi",
        nommidi:"E4",
        rotation:rotation-4*30,
        x:"170",
        y:"361.24355652982",
        xetiq:"150",
        yetiq:"395.8845726812",
        frequence:"330",
        numOrdre:"4"
    });
    

    //A FAIRE : ajouter nomDUs et nomBUs pour notation US des notes ou EXTRAIRE depuis nommidi
    tabRotCoord.push({
        angle: 5*Math.PI/6,
        nomDUs:"F",
        nomBUs:"F",
        nomD:"Fa",
        nomB:"Fa",
        nommidi:"F4",
        rotation:rotation-5*30,
        x:"118.75644347018",
        y:"310",
        xetiq:"84.115427318801",
        yetiq:"330",
        frequence:"349",
        numOrdre:"5"
    });
    

    //A FAIRE : ajouter nomDUs et nomBUs pour notation US des notes ou EXTRAIRE depuis nommidi
    tabRotCoord.push({
        angle: Math.PI,
        nomDUs:"F#",
        nomBUs:"Gb",
        nomD:"Fa#",
        nomB:"Solb",
        nommidi:"F#4",
        rotation:rotation-6*30,
        x:"100",
        y:"240",
        xetiq:"60",
        yetiq:"240",
        frequence:"370",
        numOrdre:"6"
    });
    

    //A FAIRE : ajouter nomDUs et nomBUs pour notation US des notes ou EXTRAIRE depuis nommidi
    tabRotCoord.push({
        angle: 7*Math.PI/6,
        nomDUs:"G",
        nomBUs:"G",
        nomD:"Sol",
        nomB:"Sol",
        nommidi:"G4",
        rotation:rotation-7*30,
        x:"118.75644347018",
        y:"170",
        xetiq:"84.115427318801",
        yetiq:"150",
        frequence:"392",
        numOrdre:"7"
    });
    

    //A FAIRE : ajouter nomDUs et nomBUs pour notation US des notes ou EXTRAIRE depuis nommidi
    tabRotCoord.push({
        angle: 4*Math.PI/3,
        nomDUs:"G#",
        nomBUs:"Ab",
        nomD:"Sol#",
        nomB:"Lab",
        nommidi:"G#4",
        rotation:rotation-8*30,
        x:"170",
        y:"118.75644347018",
        xetiq:"150",
        yetiq:"84.115427318801",
        frequence:"415",
        numOrdre:"8"
    });
    

    //A FAIRE : ajouter nomDUs et nomBUs pour notation US des notes ou EXTRAIRE depuis nommidi
    tabRotCoord.push({
        angle: 3*Math.PI/2,
        nomDUs:"A",
        nomBUs:"A",
        nomD:"La",
        nomB:"La",
        nommidi:"A4",
        rotation:rotation-9*30,
        x:"240",
        y:"100",
        xetiq:"240",
        yetiq:"60",
        frequence:"440",
        numOrdre:"9"
    });
    

    //A FAIRE : ajouter nomDUs et nomBUs pour notation US des notes ou EXTRAIRE depuis nommidi
    tabRotCoord.push({
        angle: 5*Math.PI/3,
        nomDUs:"A#",
        nomBUs:"Bb",
        nomD:"La#",
        nomB:"Sib",
        nommidi:"A#4",
        rotation:rotation-10*30,
        x:"310",
        y:"118.75644347018",
        xetiq:"330",
        yetiq:"84.115427318801",
        frequence:"466",
        numOrdre:"10"
    });
    

    //A FAIRE : ajouter nomDUs et nomBUs pour notation US des notes ou EXTRAIRE depuis nommidi
    tabRotCoord.push({
        angle: 11*Math.PI/6,
        nomDUs:"B",
        nomBUs:"B",
        nomD:"Si",
        nomB:"Si",
        nommidi:"B4",
        rotation:rotation-11*30,
        x:"361.24355652982",
        y:"170",
        xetiq:"395.8845726812",
        yetiq:"150",
        frequence:"494",
        numOrdre:"11"
    });
    return tabRotCoord;
    //Créer un tableau des notes à faire figurer sur le cadrant choisi dans la fenêtre précédente
}