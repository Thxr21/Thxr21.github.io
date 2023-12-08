
function formVerification() 
{
    fName = document.getElementById("fname").value;
    lName = document.getElementById("lname").value;

    rof = document.getElementById("reason");
    subject = document.getElementsByName("subject");
    userMessage = document.getElementById("message").value;
    errorMsg = document.getElementById("error");

    if (!verifName(fName)) 
    {
        errorMsg.innerHTML = "<span>First Name Error:</span><br>The first name must consist of only alphabetic letters and spaces and must not be empty.";
        return false;  
    }
    if (!verifName(lName)) 
    {
        errorMsg.innerHTML = "<span>Last Name Error:</span><br>The last name must consist of only alphabetic letters and spaces and must not be empty.";
        return false;  
    }

    localStorage.setItem("nametothank", fName);

    if (!verifSelect(rof))
    {
        errorMsg.innerHTML = "<span>Reason of Contact Error:</span><br>Invalid Reason of Contact: Selecting a reason of contact is obligatory.";
        return false;
    }

    if (!verifSubject(subject))
    {
        errorMsg.innerHTML = "<span>Subject Error:</span><br>Selecting a subject is obligatory.";
        return false;
    }

    if (!verifMessage(userMessage)) 
    {
        errorMsg.innerHTML = "<span>Message Error:</span><br>The message must consist of only alphabetic letters, numbers, spaces, dots, periods and semi-colons and must not be empty.";
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
    while ( i < ch.length && ( ch[i] == "." || ch[i] == "," || ch[i] == ";" || (ch[i].toUpperCase()>="A" && ch[i].toUpperCase()<="Z" ) || (ch[i]>="0" && ch[i]<="9") || ( i!= 0 && ch[i] == " " && ch[i+1] != " " && ch[i-1] != " ") ) ) {
        i++;
    }
    return i == ch.length && ch != "";

}


function clearError() {
    document.getElementById("error").innerHTML = "";
}


function loadThank()
{
    username = localStorage.getItem("nametothank"); 
    document.getElementById("thankName").innerHTML = " "+username;
}