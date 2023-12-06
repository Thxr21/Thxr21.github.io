function formVerification() 
{
    userName = document.getElementById("name").value;
    rof = document.getElementById("reason");
    subject = document.getElementsByName("subject");
    userMessage = document.getElementById("message").value;

    if (!verifName(userName)) 
    {
        alert("Unavailable name.");  
        return false;  
    }

    if (!verifSelect(rof))
    {
        alert("You have to select a reason of contact.");
        return false;
    }

    if (!verifSubject(subject))
    {
        alert("You have to select a subject.");
        return false;
    }

    if (!verifMessage(userMessage)) 
    {
        alert("Unavailable message.");
        return false;
    }

    return true;
}

function verifName(ch) 
{
    i = 0;
    while ( i < ch.length && ( (ch[i].toUpperCase()>="A" && ch[i].toUpperCase()<="Z" ) || ( i!= 0 && ch[i] == " " && ch[i+1] != " " && ch[i-1] != " ") ) ) {
        i++;
    }

    return i == ch.length && ch != "";
}

function verifSelect(sel) 
{
    return !sel[0].selected;
}

function verifSubject(sub) 
{
    return sub[0].checked || sub[1].checked || sub[2].checked;    
}

function verifMessage(ch) 
{
    i = 0;
    while ( i < ch.length && ( (ch[i].toUpperCase()>="A" && ch[i].toUpperCase()<="Z" ) || (ch[i]>="0" && ch[i]<="9") || ( i!= 0 && ch[i] == " " && ch[i+1] != " " && ch[i-1] != " ") ) ) {
        i++;
    }
    return i == ch.length && ch != "";

}