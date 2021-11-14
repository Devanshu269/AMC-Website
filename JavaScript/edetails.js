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
//document.addEventListener('submit', upload);

var USN

function submitForm(e) {
    e.preventDefault();

    // 10th board
    var ten_board = getInputVal('s_sslcboard');
    var ten_yp = getInputVal('s_sslcpass');
    var ten_mark = getInputVal('s_sslctm');
    var ten_markO = getInputVal('s_sslcmo');
    var ten_divison = getInputVal('s_sslcd');
    var ten_percentage = getInputVal('s_sslcper');

    //12 th board
    var twelve_board = getInputVal('s_puboard');
    var twelve_yp = getInputVal('s_pupass');
    var twelve_mark = getInputVal('s_putm');
    var twelve_markO = getInputVal('s_pumo');
    var twelve_divison = getInputVal('s_pud');
    var twelve_percentage = getInputVal('s_puper');
    var marks_phy = getInputVal('s_phy');
    var marks_chem = getInputVal('s_chm');
    var marks_math = getInputVal('s_math');
    var PCM_percentage = getInputVal('s_pcmper');
    var tenth_medium = getInputVal('s_lang');

    USN = getInputVal('s_usn');
    if (USN != "") {
        saveMessage(ten_board, ten_yp, ten_mark, ten_markO, ten_divison, ten_percentage,
            twelve_board, twelve_yp, twelve_mark, twelve_markO, twelve_divison, twelve_percentage, marks_phy, marks_chem, marks_math, PCM_percentage, tenth_medium, USN);

        SSLCmarks();

        PUmarks();
        document.getElementById('contact-form').reset();
    } else {
        alert("Enter the Data First");
    }

}

function getInputVal(id) {
    return document.getElementById(id).value;
}



function saveMessage(ten_board, ten_yp, ten_mark, ten_markO, ten_divison, ten_percentage,
    twelve_board, twelve_yp, twelve_mark, twelve_markO, twelve_divison, twelve_percentage, marks_phy, marks_chem, marks_math, PCM_percentage, tenth_medium, USN) {
    firebase.database().ref('Education/' + USN).set({
        Tenth_board: ten_board,
        Tenth_year_Passing: ten_yp,
        Tenth_Total_marks: ten_mark,
        Tenth_marks_obtained: ten_markO,
        Tenth_divison: ten_divison,
        Tenth_percentage: ten_percentage,

        Twelve_board: twelve_board,
        Twelve_year_Passing: twelve_yp,
        Twelve_Total_marks: twelve_mark,
        Twelve_marks_obtained: twelve_markO,
        Twelve_divison: twelve_divison,
        Twelve_percentage: twelve_percentage,
        Physic_marks: marks_phy,
        Chemistry_marks: marks_chem,
        Math_marks: marks_math,
        PCM_Percentage: PCM_percentage,
        Medium: tenth_medium,

        USN: USN
    })
}


//10th marks upload
function SSLCmarks() {

    //get your select image
    var files = document.getElementById("sslc_file").files[0];
    //now get your files name
    // var filesName = files.name;
    //firebase  storage reference
    //it is the path where yyour files will store
    var storageRef = firebase.storage().ref('SSLCmarks/' + USN + '.png');
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
            var file10URL = downlaodURL;

            firebase.database().ref('Education/' + USN).update({
                Link10th: file10URL
            });
        });
    });
}


//12th marks upload
function PUmarks() {

    //get your select image
    var files = document.getElementById("pc_pufile").files[0];
    //now get your files name
    // var filesName = files.name;
    //firebase  storage reference
    //it is the path where yyour files will store
    var storageRef = firebase.storage().ref('PUmarks/' + USN + '.png');
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
            var file12URL = downlaodURL;

            firebase.database().ref('Education/' + USN).update({
                Link12th: file12URL
            });
        });
    });
}