function arpegeAscendant(arpege,rot)
{
    var depasseLeSi = false;

    var notes = new Array("C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B");

    var NumOrdrePrecedent = 0;

    var numOrdreNote;
    
    /*Construction arpège + Transpo des notes qui dépassent le B pour construire un arpège montant !*/

    if(rot != 360)
    {
        var s;
        
        for(s=0;s<=arpege.length-1;s++)//La note 0 ne sera pas traitée
        {   

            /*Il faut traiter toutes les  notes de arpege sauf la PREMIERE
            Et 
            voir si le numéro de la note décroît => +1 num octave
             = Si on tombe sur une note dont le nom est classé AVANT dans la gamme 
            (i.e. dans le tableau contenant le numéro des notes)
            = Si on dépasse le si, aussi ...
            */
           
           //A FAIRE : récup la valeur choisie dans hauteur pour construire l'arpege à la bonne octave.
           
           //Recherche note de l'arpege dans notes, récup de l'indice correspondant
           numOrdreNote = notes.indexOf(arpege[s].toString().substring(0,1).toUpperCase());
           
           if(numOrdreNote<NumOrdrePrecedent)
           {
               depasseLeSi = true;
           }
           
           //Si elle dépasse B, on la transpose
           if(depasseLeSi)
           {
               //Transpo d'une octave au dessus
               arpege[s] = Tone.Frequency(Tone.Midi(arpege[s]).transpose(12).toMidi(),"midi").toNote(); 
               console.log("Transpo de "+arpege[s]);
               
            }
            
            NumOrdrePrecedent = numOrdreNote;
        }
    }
    return arpege;
}