// JavaScript source code
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }
}
function validateForm() {
    var y = document.forms["myForm"]["lname"].value;
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }
}
function validateForm() {
    var z = document.forms["myForm"]["email"].value;
    if (z == "") {
        alert("Email must be filled out");
        return false;
    }
}
function validateForm() {
    var a = document.forms["myForm"]["message"].value;
    if (a == "") {
        alert("Message must be filled out");
        return false;
    }
}
function startTime() {
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var second = today.getSeconds();
    minutes = checkTime(minutes);
    second = checkTime(second);

    document.getElementById('txt').innerHTML =
        "Today is " + month + "/" + day + "/" + year
       + " and the time is "+ hours + ":" + minutes + ":" + second;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + 1
    };
    //add zero infront of numbers <10
    return i;
}
