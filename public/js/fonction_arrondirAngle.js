function arrondirAngle(rotation)
{
    /*Arrondir à la trentaine sup ou inf*/
    var rot = rotation;
    var arron_rot = Math.round(rot);
    console.log("ROT : "+rot+" ARRONDI : "+arron_rot);

    /*var arrondiAngle = Math.ceil(group'.$this->id.'.rotation()/30)*30;*/
    if(arron_rot%30 == 0)
    {
        var arrondiAngle = arron_rot;
        console.log("pas arrondi");
    }
    else
    {
        if(arron_rot%30>15)
        {
            var arrondiAngle = Math.ceil(arron_rot/30)*30;
            console.log("reste > 15 arrondiAngle : "+arrondiAngle);
        }
        else
        {
            var arrondiAngle = Math.floor(arron_rot/30)*30;
            console.log("reste < 15 arrondiAngle : "+arrondiAngle);
        }
    }
    return arrondiAngle;
}