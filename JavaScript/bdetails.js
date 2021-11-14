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

function submitForm(e) {
    e.preventDefault();

    // var unique_id = getInputVal('s_Unique_Id');
    var Program = getInputVal('s_program');
    var Fname = getInputVal('s_fname');
    var Mname = getInputVal('s_mname');
    var Lname = getInputVal('s_lname');
    var YOF = getInputVal('s_year');
    var USN = getInputVal('s_usn');
    var sem = getInputVal('s_sem');
    var aadhar = getInputVal('s_aadhar');
    var gender = getInputVal('s_gender');
    var DOB = getInputVal('s_dob');
    var phone = getInputVal('s_mob');
    var email = getInputVal('s_email');
    var houseNO = getInputVal('s_houseno');
    var street = getInputVal('s_street');
    var landmark = getInputVal('s_landmark');
    var taluk = getInputVal('s_taluk');
    var distric = getInputVal('s_district');
    var state = getInputVal('s_state');
    var country = getInputVal('s_country');
    var pin = getInputVal('s_pincode');


    if (USN != "") {
        saveMessage(Program, Fname, Mname, Lname, YOF, USN, sem, aadhar, gender, DOB, phone, email, houseNO, street, landmark, taluk, distric, state, country, pin);

        document.getElementById('contact-form').reset();
    } else {
        alert("Enter the Data First");
    }

}

function getInputVal(id) {
    return document.getElementById(id).value;
}



function saveMessage(Program, Fname, Mname, Lname, YOF, USN, sem, aadhar, gender, DOB, phone, email, houseNO, street, landmark, taluk, distric, state, country, pin) {
    // var i = 001
    // unique_id = unique_id + i
    firebase.database().ref('Personal/' + USN).set({


        // unique_id: unique_id,
        Program: Program,
        Fname: Fname,
        Mname: Mname,
        Lname: Lname,
        Syear: YOF,
        USN: USN,
        SEM: sem,
        Aadhar: aadhar,
        Gender: gender,
        DOB: DOB,
        Phone: phone,
        Email: email,
        HouseNo: houseNO,
        Street: street,
        Landmark: landmark,
        Taluk: taluk,
        Distric: distric,
        State: state,
        Country: country,
        Pin: pin
    });
    alert("Data is Uploaded");
}