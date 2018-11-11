function cambialike(LIKE) {
    
    if ( (" " + document.getElementById(LIKE).className + " ").replace(/[\n\t]/g, " ").indexOf(" opacity1 ") > -1 )
    {
        document.getElementById(LIKE).className = "opacity05";
    }
    else 
    {
        document.getElementById(LIKE).className = "opacity1";
    }
}