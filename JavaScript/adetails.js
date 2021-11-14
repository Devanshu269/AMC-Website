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

    var Squota = getInputVal('s_quota');
    var CETrank = getInputVal('s_cetrank');
    var COMEDKrank = getInputVal('s_comedkrank');
    var PC = getInputVal('s_pc');
    var subCaste = getInputVal('s_subcaste');
    var Caste = getInputVal('s_caste');
    USN = getInputVal('s_usn');
    if (USN != "") {
        saveMessage(Squota, CETrank, COMEDKrank, PC, subCaste, Caste, USN);

        TCU();

        CCU();
        document.getElementById('contact-form').reset();

    } else {
        alert("Enter the Data First");
    }

}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(Squota, CETrank, COMEDKrank, PC, subCaste, Caste, USN) {
    firebase.database().ref('Admission/' + USN).set({
        Admission_category: Squota,
        CET_rank: CETrank,
        COMEDK_rank: COMEDKrank,
        Physically_Challenged: PC,
        SUB_Caste: subCaste,
        CASTE: Caste,
        USN: USN,


    });
    alert('Data is uploaded');
}

//Transfer certificate upload
function TCU() {

    //get your select image
    var files = document.getElementById("pc_file").files[0];
    //now get your files name
    // var filesName = files.name;
    //firebase  storage reference
    //it is the path where yyour files will store
    var storageRef = firebase.storage().ref('Transfer certificate/' + USN + '.png');
    //upload files to selected storage reference

    var uploadTask = storageRef.put(files);

    uploadTask.on('state_changed', function(snapshot) {
        //observe state change events such as progress , pause ,resume
        //get task progress by including the number of bytes uploaded and total
        //number of bytes
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("upload is " + progress + " done");
    }, function(error) {
        //handle error here
        console.log(error.message);
    }, function() {
        //handle successful uploads on complete

        uploadTask.snapshot.ref.getDownloadURL().then(function(downlaodURL) {
            //get your upload image url here...
            console.log(downlaodURL);
            var TCU_URL = downlaodURL;

            firebase.database().ref('Admission/' + USN).update({
                TCU: TCU_URL
            });
        });
    });
}


//caste certificate upload
function CCU() {

    //get your select image
    var files = document.getElementById("caste_file").files[0];
    //now get your files name
    // var filesName = files.name;
    //firebase  storage reference
    //it is the path where yyour files will store
    var storageRef = firebase.storage().ref('Caste certificate/' + USN + '.png');
    //upload files to selected storage reference

    var uploadTask = storageRef.put(files);

    uploadTask.on('state_changed', function(snapshot) {
        //observe state change events such as progress , pause ,resume
        //get task progress by including the number of bytes uploaded and total
        //number of bytes
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("upload is " + progress + " done");
    }, function(error) {
        //handle error here
        console.log(error.message);
    }, function() {
        //handle successful uploads on complete

        uploadTask.snapshot.ref.getDownloadURL().then(function(downlaodURL) {
            //get your upload image url here...
            console.log(downlaodURL);
            var CCU_URL = downlaodURL;

            firebase.database().ref('Admission/' + USN).update({
                CCU: CCU_URL
            });

        });
    });
}