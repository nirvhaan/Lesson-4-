var text = "Welcome to my class"
var pos = text.search("to")
var txt1 = text.replace("my", "coding")

document.getElementById("res1").innerHTML = txt1
document.getElementById("res2").innerHTML = "Position of to is " + pos