function formVerification() 
{
    userName = document.getElementById("name").value;

    if (!verifName(userName)) 
    {
        alert("Unavailable name.");  
        return false;  
    }
}

function verifName(ch) 
{
    i = 0;
    while ( i < ch.length && ( (ch[i].toUpperCase()>="A" && ch[i].toUpperCase()<="Z" ) || ( i!= 0 && ch[i] == " " && ch[i+1] != " " && ch[i-1] != " ") ) ) {
        i++;
    }

    return i == ch.length && ch != "";
}
