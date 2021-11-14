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


    var routeNo = getInputVal('Route_no');
    var Transport_fee = getInputVal('t_fee');
    var Tfee_paid = getInputVal('t_feep');
    var Trecipt = getInputVal('t_receiptn');
    var PP = getInputVal('t_pp');
    var DP = getInputVal('t_dp');
    var Pdate = getInputVal('t_pd');
    USN = getInputVal('s_usn');

    if (USN != "") {

        saveMessage(routeNo, Transport_fee, Tfee_paid, Trecipt, PP, DP, Pdate, USN);
        document.getElementById('contact-form').reset();
    } else {
        alert("Enter the Data First");
    }


}

function getInputVal(id) {
    return document.getElementById(id).value;
}


function saveMessage(routeNo, Transport_fee, Tfee_paid, Trecipt, PP, DP, Pdate, USN) {

    firebase.database().ref('Transport/' + USN).set({
        Student_routeNo: routeNo,
        Transport_fee: Transport_fee,
        Fee_paid: Tfee_paid,
        Transport_ReciptNo: Trecipt,
        Pick_point: PP,
        Drop_point: DP,
        Paid_date: Pdate,
        USN: USN
    });
    alert("Data Uploaded");
}