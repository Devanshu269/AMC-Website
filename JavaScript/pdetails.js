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


    var FatherN = getInputVal('f_name');
    var Faadhar = getInputVal('f_aadhar');
    var Fphone = getInputVal('f_mob');
    var Femail = getInputVal('f_email');
    var Foccupation = getInputVal('f_occupation');
    var Foffice_address = getInputVal('f_office_address_f');
    var MotherN = getInputVal('m_name');
    var Maadhar = getInputVal('m_aadhar');
    var Mphone = getInputVal('m_mob');
    var Memail = getInputVal('m_email');
    var Moccupation = getInputVal('m_occupation');
    var Moffice_address = getInputVal('m_office_address_m');

    USN = getInputVal('s_usn');

    if (USN != "") {
        saveMessage(FatherN, Faadhar, Fphone, Femail, Foccupation, Foffice_address, MotherN, Maadhar, Mphone, Memail, Moccupation, Moffice_address, USN);

        document.getElementById('contact-form').reset();
    } else {
        alert("Enter the Data First")
    }
}


function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(FatherN, Faadhar, Fphone, Femail, Foccupation, Foffice_address, MotherN, Maadhar, Mphone, Memail, Moccupation, Moffice_address, USN) {

    firebase.database().ref('Parent/' + USN).set({
        Father_Name: FatherN,
        Father_aadhar: Faadhar,
        Father_phone: Fphone,
        Father_email: Femail,
        Father_occupation: Foccupation,
        Father_Office_Address: Foffice_address,
        Mother_Name: MotherN,
        Mother_aadhar: Maadhar,
        Mother_phone: Mphone,
        Mother_email: Memail,
        Mother_occupation: Moccupation,
        Mother_Office_Address: Moffice_address,
        USN: USN
    });
    alert("Data Uploaded")
}