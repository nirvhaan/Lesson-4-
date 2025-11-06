try
{
    alert("Welcome!");
    alertmsg("Hello")
}

catch(err)
{
    document.getElementById("msg").innerHTML = err.message
}