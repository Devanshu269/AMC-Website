var firebaseConfig = {
    apiKey: "AIzaSyAdWq4-ZE4Yv87w_AEyy5b5JwkW9A8iL3U",
    authDomain: "contact-form-38b0b.firebaseapp.com",
    databaseURL: "https://contact-form-38b0b-default-rtdb.firebaseio.com",
    projectId: "contact-form-38b0b",
    storageBucket: "contact-form-38b0b.appspot.com",
    messagingSenderId: "748179068137",
    appId: "1:748179068137:web:2a3ad3ed4d8a07ac990c78",
    measurementId: "G-HC8E0ED0TD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var fname, lname, auth, psubject, message
var idd

function getInputVal(id) {
    return document.getElementById(id).value;
}

function ready() {
    fname = getInputVal("fname");
    lname = getInputVal("lname");
    auth = getInputVal("authority");
    idd = getInputVal("idd");
    psubject = getInputVal("problem_stat");
    message = getInputVal("problem_stat_1");

}

document.getElementById('sub2').onclick = function() {
    try {
        ready();
        if (idd != "" && idd != "undefined") {
            var name = fname + " " + lname
            console.log(name);
            console.log(idd);
            firebase.database().ref('Concern/' + idd).update({
                ID: idd,
                Name: name,
                Authority: auth,
                Problem: psubject,
                message: message,
            })
            document.getElementById('concern-form').reset();
            // alert("Ticket has been raise");
            sendemail(name, auth, psubject, message);
        } else {
            alert("Enter the USN");
            document.getElementById('student_data').reset();
        }
    } catch (e) {
        alert("Some Error occur");
        console.log(e.message);
    }
}

function sendemail(name, auth, psubject, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "devnshu.shekhar2@gmail.com",
        Password: "keqtppkfxgxekfpr",
        To: 'csgonikozy@gmail.com',
        From: "devnshu.shekhar2@gmail.com",
        Subject: `${psubject}`,
        Body: `Name:- ${name} <br/> Authority:- ${auth} <br/> Subject:- ${psubject} <br/> Message:- ${message}`,
    }).then(
        message => alert("Mail Sent to Admin")
    );
}
