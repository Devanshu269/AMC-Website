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


    var receiptNO = getInputVal('fee_rn');
    var paidDate = getInputVal('fee_p');
    var Tfees = getInputVal('t_fee');
    var Cfees = getInputVal('fee_clg');
    var llsFee = getInputVal('fee_lls');
    var Ufees = getInputVal('fee_u');
    var Efees = getInputVal('fee_e');
    var GIfees = getInputVal('fee_gi');
    var CONfess = getInputVal('fee_conc');
    var dueFee = getInputVal('fee_due');
    var remarkfee = getInputVal('f_remarks');
    console.log(llsFee);
    console.log(Tfees);
    console.log(Cfees);
    console.log(Ufees);
    console.log(Efees);
    console.log(GIfees);
    console.log(CONfess);
    console.log(dueFee);
    var totalfees = Tfees + Cfees + llsFee + Ufees + Efees + GIfees + CONfess - dueFee;
    console.log(totalfees);
    USN = getInputVal('s_usn');

    if (USN != "") {

        saveMessage(receiptNO, paidDate, Tfees, Cfees, llsFee, Ufees, Efees, GIfees, CONfess, dueFee, remarkfee, totalfees, USN);
        document.getElementById('contact-form').reset();
    } else {
        alert("Enter the Data First");
    }


}

function getInputVal(id) {
    return document.getElementById(id).value;
}


function saveMessage(receiptNO, paidDate, Tfees, Cfees, llsFee, Ufees, Efees, GIfees, CONfess, dueFee, remarkfee, totalfees, USN) {

    firebase.database().ref('Fees/' + USN).set({
        ReceiptNo: receiptNO,
        Paid_date: paidDate,
        Tuition_fee: Tfees,
        College_fee: Cfees,
        LLS_fee: llsFee,
        University_fee: Ufees,
        Exam_fee: Efees,
        Group_Insurance_fee: GIfees,
        Fee_concession: CONfess,
        Fee_due: dueFee,
        Remarks: remarkfee,
        Total_fees: totalfees,
        USN: USN
    });
    alert("Data Uploaded");
}