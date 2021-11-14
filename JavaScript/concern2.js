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
var fname, lname, auth, psubject, message, branch
var idd

function getInputVal(id) {
    return document.getElementById(id).value;
}

function ready() {
    fname = getInputVal("fname");
    lname = getInputVal("lname");
    // auth = getInputVal("authority");
    idd = getInputVal("idd");
    // psubject = getInputVal("problem_stat");
    message = getInputVal("problem_stat_1");
    branch = getInputVal("branch");
    sem = getInputVal("sem");

}

document.getElementById('sub2').onclick = function() {
    try {
        ready();
        if (idd != "" && idd != "undefined") {
            var name = fname + " " + lname
            console.log(name);
            console.log(idd);
            firebase.database().ref(`Concern Student/${branch}/`+ idd).update({
                ID: idd,
                Name: name,
                // Authority: auth,
                // Problem: psubject,
                Message: message,
                Branch: branch,
                Sem: sem,
            })
            document.getElementById('concern-form').reset();
            // alert("Ticket has been raise");
  
            sendemail(name, idd, sem, message, branch);
        } else {
            alert("Enter the USN");
            document.getElementById('student_data').reset();
        }
    } catch (e) {
        alert("Some Error occur");
        console.log(e.message);
    }
}

function sendemail(name, idd, sem, message, branch) {
    var too
    if (branch == "CSE") {
        too = 'anivedkamal9251@gmail.com';
    } else if (branch == "ECE") {
        too = 'csgonikozy@gmail.com';
    }
    else if (branch == "EEE") {
        too = 'csgonikozy@gmail.com';
    }
    else if (branch == "IS") {
        too = 'csgonikozy@gmail.com';
    }
    else if (branch == "MECH") {
        too = 'csgonikozy@gmail.com';
    }
    else {
        too = "devnshu.shekhar2@gmail.com";
    }
    Email.send({
        Host: "smtp.gmail.com",
        Username: "devnshu.shekhar2@gmail.com",
        Password: "keqtppkfxgxekfpr",
        To: too,
        From: "devnshu.shekhar2@gmail.com",
        Subject: `Student Realted`,
        Body: `Name:- ${name} <br/> ID:- ${idd} <br/> SEM:- ${sem} <br/> Message:- ${message}`,
    }).then(
        message => alert("Mail Sent to Facultiy")
    );
}
