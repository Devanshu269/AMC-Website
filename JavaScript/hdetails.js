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

document.getElementById('contact-form')
document.addEventListener('submit', submitForm);
var USN

function submitForm(e) {
    e.preventDefault();


    var roomNo = getInputVal('hroom_no');
    var Rsharing = getInputVal('ss_h');
    var Tamount = getInputVal('h_aa');
    var Hpaid = getInputVal('hf_p');
    var Hrecipt = getInputVal('hr_no');
    var Pdate = getInputVal('h_pd');

    USN = getInputVal('s_usn');

    if (USN != "") {

        saveMessage(roomNo, Rsharing, Tamount, Hpaid, Hrecipt, Pdate, USN);
        document.getElementById('contact-form').reset();
    } else {
        alert("Enter the Data First");
    }


}

function getInputVal(id) {
    return document.getElementById(id).value;
}


function saveMessage(roomNo, Rsharing, Tamount, Hpaid, Hrecipt, Pdate, USN) {

    firebase.database().ref('Hostel/' + USN).set({
        Student_RoomNo: roomNo,
        Room_sharing: Rsharing,
        Total_fee: Tamount,
        Paid_amount: Hpaid,
        Hostel_ReciptNo: Hrecipt,
        Paid_date: Pdate,
        USN: USN
    });
    alert("Data Uploaded");
}