function ValidateEmail(inputText) {
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        alert("You have entered a valid email address!");    //The pop up alert for a valid email address
        document.form1.text1.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
        document.form1.text1.focus();
        return false;
    }
}
function myFunction(){

    var fname = document.getElementById('fname').value;
    var fathername = document.getElementById('fathername').value;
    var mname = document.getElementById('mname').value;
    var sname = document.getElementById('sname').value;
    var birthday = document.getElementById('birthday').value;
    var fname = document.getElementById('fname').value;

    alert("succes");
    ValidateEmail
}