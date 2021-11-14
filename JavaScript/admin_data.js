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
var USN, USN1, USN2, USN3, USN4, USN5, USN6, USN7
var Squota, CETrank, PC, subCaste, Caste
var Program, Fname, Mname, Lname, YOF, sem, aadhar, gender, DOB, phone, email, houseNO, taluk, distric, state, country, pin, L_street, L_landmark, L_taluk, L_distric, section
var ten_board, ten_yp, ten_mark, ten_markO, ten_divison, ten_percentage, twelve_board, twelve_yp, twelve_mark, twelve_markO, twelve_divison, twelve_percentage, marks_phy, marks_chem, marks_math, PCM_percentage, tenth_medium
var receiptNO, paidDate, Tfees, Cfees, llsFee, Ufees, Efees, GIfees, CONfess, dueFee, remarkfee, totalfees
var roomNo, hType, Rsharing, Tamount, Hpaid, Hrecipt, HPdate, hsem,hbranch
var FatherN, Faadhar, Fphone, Femail, Foccupation, Foffice_address, MotherN, Maadhar, Mphone, Memail, Moccupation, Moffice_address
var routeNo, Transport_fee, Tfee_paid, Trecipt, PP, DP, Pdate, tsem,tbranch
var Lguardian, LGphone, LGaddress, otherC


function getInputVal(id) {
    return document.getElementById(id).value;
}


function ready() {


    USN = getInputVal('s_usn');
    USN1 = getInputVal('s_usn1');
    USN2 = getInputVal('s_usn2');
    USN3 = getInputVal('s_usn3');
    USN4 = getInputVal('s_usn4');
    USN5 = getInputVal('s_usn5');
    USN6 = getInputVal('s_usn6');
    USN7 = getInputVal('s_usn7');


    Program = getInputVal('s_program');
    Fname = getInputVal('s_fname');
    Mname = getInputVal('s_mname');
    Lname = getInputVal('s_lname');
    section = getInputVal('s_section');
    YOF = getInputVal('s_year');
    sem = getInputVal('s_sem');
    aadhar = getInputVal('s_aadhar');
    gender = getInputVal('s_sex');
    DOB = getInputVal('s_dob');
    phone = getInputVal('s_mob');
    email = getInputVal('s_email');
    houseNO = getInputVal('l_houseno');
    // street = getInputVal('s_street');
    // landmark = getInputVal('s_landmark');
    taluk = getInputVal('s_taluk');
    distric = getInputVal('l_district');
    L_street = getInputVal('l_street');
    L_landmark = getInputVal('l_landmark');
    L_taluk = getInputVal('l_taluk');
    L_distric = getInputVal('l_district');
    state = getInputVal('s_state');
    country = getInputVal('s_country');
    pin = getInputVal('s_pincode');

    //parent details
    FatherN = getInputVal('f_name');
    Faadhar = getInputVal('f_aadhar');
    Fphone = getInputVal('f_mob');
    Femail = getInputVal('f_email');
    Foccupation = getInputVal('f_occupation');
    Foffice_address = getInputVal('f_office_address_f');
    MotherN = getInputVal('m_name');
    Maadhar = getInputVal('m_aadhar');
    Mphone = getInputVal('m_mob');
    Memail = getInputVal('m_email');
    Moccupation = getInputVal('m_occupation');
    Moffice_address = getInputVal('m_office_address_m');


    //Admission details
    Squota = getInputVal('s_quota');
    CETrank = getInputVal('s_cetrank');
    COMEDKrank = getInputVal('s_comedkrank');
    PC = getInputVal('s_pc');
    subCaste = getInputVal('s_subcaste');
    Caste = getInputVal('s_caste');


    // 10th board
    ten_board = getInputVal('s_sslcboard');
    ten_yp = getInputVal('s_sslcpass');
    ten_mark = getInputVal('s_sslctm');
    ten_markO = getInputVal('s_sslcmo');
    ten_divison = getInputVal('s_sslcd');
    ten_percentage = getInputVal('s_sslcper');

    // //12 th board
    twelve_board = getInputVal('s_puboard');
    twelve_yp = getInputVal('s_pupass');
    twelve_mark = getInputVal('s_putm');
    twelve_markO = getInputVal('s_pumo');
    twelve_divison = getInputVal('s_pud');
    twelve_percentage = getInputVal('s_puper');
    marks_phy = getInputVal('s_phy');
    marks_chem = getInputVal('s_chm');
    marks_math = getInputVal('s_math');
    PCM_percentage = getInputVal('s_pcmper');
    tenth_medium = getInputVal('s_lang');

    //Fees Details
    receiptNO = getInputVal('fee_rn');
    paidDate = getInputVal('fee_p');
    Tfees = getInputVal('t_fee');
    Cfees = getInputVal('fee_clg');
    llsFee = getInputVal('fee_lls');
    Ufees = getInputVal('fee_u');
    Efees = getInputVal('fee_e');
    GIfees = getInputVal('fee_gi');
    CONfess = getInputVal('fee_conc');
    dueFee = getInputVal('fee_due');
    remarkfee = getInputVal('f_remarks');

    //Hostel Details
    hbranch = getInputVal('s_hbranch');
    hsem = getInputVal('s_hsem');
    hType = getInputVal('ss_s');
    roomNo = getInputVal('hroom_no');
    Rsharing = getInputVal('ss_h');
    Tamount = getInputVal('h_aa');
    Hpaid = getInputVal('hf_p');
    Hrecipt = getInputVal('hr_no');
    HPdate = getInputVal('h_pd');

    //Transport
    tbranch = getInputVal('s_tbranch');
    tsem = getInputVal('s_tsem');
    routeNo = getInputVal('Route_no');
    Transport_fee = getInputVal('t_fee');
    Tfee_paid = getInputVal('t_feep');
    Trecipt = getInputVal('t_receiptn');
    PP = getInputVal('t_pp');
    DP = getInputVal('t_dp');
    Pdate = getInputVal('t_pd');

    Lguardian = getInputVal('s_gaurdian');
    LGphone = getInputVal('g_phone');
    LGaddress = getInputVal('t_area');
    otherC = getInputVal('t_area');
}

//student information
document.getElementById('sub1').onclick = function() {

    try {
        ready();
        if (USN != "" && USN != "undefined") {
            // var returnValues = Sphoto();
            // if (returnValues == false) {
            //     alert("You didin't Upload a photo")
            // }
            firebase.database().ref('Student Data/' + USN).update({
                USN: USN,

                Program: Program,
                Fname: Fname,
                Mname: Mname,
                Lname: Lname,
                Student_Section: section,
                Syear: YOF,
                SEM: sem,
                Aadhar: aadhar,
                Gender: gender,
                DOB: DOB,
                Phone: phone,
                Email: email,
                HouseNo: houseNO,
                // Permanent_Street: street,
                // Permanent_Landmark: landmark,
                Permanent_Taluk: taluk,
                Permanent_Distric: distric,
                Local_Street: L_street,
                Local_Landmark: L_landmark,
                Local_Taluk: L_taluk,
                Local_Distric: L_distric,
                State: state,
                Country: country,
                Pin: pin,

            })

            document.getElementById('student_data').reset();
            // document.getElementById('contactForm').reset();
            alert("Data has been Uploaded");
        } else {
            alert("Enter the USN");
            document.getElementById('student_data').reset();
        }
    } catch (e) {
        alert("Some Error occur");
        console.log(e.message);
    }

}

//parent info
document.getElementById('sub2').onclick = function() {
    try {
        ready();
        if (USN1 != "" && USN1 != "undefined") {
            firebase.database().ref('Student Data/' + USN1).update({
                USN: USN1,
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
            })
            document.getElementById('student_data').reset();
            alert("Data has been Uploaded");
        } else {
            alert("Enter the USN");
            document.getElementById('student_data').reset();
        }
    } catch (e) {
        alert("Some Error occur");
        console.log(e.message);
    }

}

document.getElementById('sub3').onclick = function() {
    try {
        ready();
        if (USN2 != "" && USN2 != "undefined") {
            // var returnValues1 = TCU();
            // var returnValues2 = CCU();
            // if (returnValues1 == false) {
            //     alert("You didin't Select a Transfer Certificate")
            // }
            // if (returnValues2 == false) {
            //     alert("You didin't Select a Caste Certificate")
            // }
            firebase.database().ref('Student Data/' + USN2).update({
                USN: USN2,
                Admission_category: Squota,
                CET_rank: CETrank,
                COMEDK_rank: COMEDKrank,
                Physically_Challenged: PC,
                SUB_Caste: subCaste,
                CASTE: Caste,
            })
            document.getElementById('student_data').reset();
            alert("Data has been Uploaded");
        } else {
            alert("Enter the USN");
            document.getElementById('student_data').reset();
        }
    } catch (e) {
        alert("Some Error occur");
        console.log(e.message);
    }

}

document.getElementById('sub4').onclick = function() {
    try {
        ready();
        if (USN3 != "" && USN3 != "undefined") {
            // var returnValues3 = SSLCmarks();
            // var returnValues4 = PUmarks();
            // if (returnValues3 == false) {
            //     alert("You didin't Select a 10th marks Certificate")
            // }
            // if (returnValues4 == false) {
            //     alert("You didin't Select a 12th marks Certificate")
            // }
            firebase.database().ref('Student Data/' + USN3).update({
                USN: USN3,
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
            })
            document.getElementById('student_data').reset();
            alert("Data has been Uploaded");
        } else {
            alert("Enter the USN");
            document.getElementById('student_data').reset();
        }
    } catch (e) {
        alert("Some Error occur");
        console.log(e.message);
    }

}

document.getElementById('sub5').onclick = function() {
    try {
        ready();
        if (USN4 != "" && USN4 != "undefined") {

            firebase.database().ref('Student Data/' + USN4).update({
                USN: USN4,
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
                // Total_fees: totalfees,
            })
            document.getElementById('student_data').reset();
            alert("Data has been Uploaded");
        } else {
            alert("Enter the USN");
            document.getElementById('student_data').reset();
        }
    } catch (e) {
        alert("Some Error occur");
        console.log(e.message);
    }

}

document.getElementById('sub6').onclick = function() {
    try {
        ready();
        if (USN5 != "" && USN5 != "undefined") {

            firebase.database().ref('Hostel/' + USN5).update({
                USN: USN5,
                SEM: hsem,
                Branch: hbranch,
                Hostel_Type: hType,
                Student_RoomNo: roomNo,
                Room_sharing: Rsharing,
                Total_fee: Tamount,
                Paid_amount: Hpaid,
                Hostel_ReciptNo: Hrecipt,
                Paid_date: HPdate,
            })
            document.getElementById('student_data').reset();
            alert("Data has been Uploaded");
        } else {
            alert("Enter the USN");
            document.getElementById('student_data').reset();
        }
    } catch (e) {
        alert("Some Error occur");
        console.log(e.message);
    }

}

document.getElementById('sub7').onclick = function() {
    try {
        ready();
        if (USN6 != "" && USN6 != "undefined") {

            firebase.database().ref('Transport/' + USN6).update({
                USN: USN6,
                SEM: tsem,
                Branch: tbranch,
                Student_routeNo: routeNo,
                Transport_fee: Transport_fee,
                Fee_paid: Tfee_paid,
                Transport_ReciptNo: Trecipt,
                Pick_point: PP,
                Drop_point: DP,
                Paid_date: Pdate,
            })
            document.getElementById('student_data').reset();
            alert("Data has been Uploaded");
        } else {
            alert("Enter the USN");
            document.getElementById('student_data').reset();
        }
    } catch (e) {
        alert("Some Error occur");
        console.log(e.message);
    }

}

document.getElementById('sub8').onclick = function() {
    try {
        ready();
        if (USN7 != "" && USN7 != "undefined") {

            firebase.database().ref('Student Data/' + USN7).update({
                USN: USN7,
                Local_Guardian_Name: Lguardian,
                Local_Guardian_Phone: LGphone,
                Local_Guardian_Address: LGaddress,
                Other_comments: otherC,
            })
            document.getElementById('student_data').reset();
            alert("Data has been Uploaded");
        } else {
            alert("Enter the USN");
            document.getElementById('student_data').reset();
        }
    } catch (e) {
        alert("Some Error occur");
        console.log(e.message);
    }

}



//Student_photo
function Sphoto() {
    USN = getInputVal('s_usn');
    console.log(document.getElementById("stud_photo").files[0]);
    //get your select image
    var files = document.getElementById("stud_photo").files[0];
    if (document.getElementById("stud_photo").files[0] == undefined) {
        alert("Enter the photo");
        document.getElementById('student_data').reset();
        // return false
    } else if (USN == "") {
        alert("Enter the USN");
        document.getElementById('student_data').reset();
    } else {
        try {
            var storageRef = firebase.storage().ref('Student Photo/' + USN + '.png');
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
                    var s_photo_URL = downlaodURL;

                    firebase.database().ref('Student Data/' + USN).update({
                        Student_photo: s_photo_URL
                    });

                });
            });
            alert("Photo is Uploded");
            // document.getElementById('student_data').reset();
        } catch (error) {
            alert("Some error occur");
            console.log(error.message);
        }

    }


}

//Transfer certificate upload
function TCU() {
    USN2 = getInputVal("s_usn2")
        //get your select image
    var files = document.getElementById("pc_file").files[0];
    if (document.getElementById("pc_file").files[0] == undefined) {
        alert("Enter the photo")
        document.getElementById('student_data').reset();
    } else if (USN2 == "") {
        alert("Enter the USN")
        document.getElementById('student_data').reset();
    } else {
        try {
            var storageRef = firebase.storage().ref('Transfer certificate/' + USN2 + '.png');
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

                    firebase.database().ref('Student Data/' + USN2).update({
                        TCU: TCU_URL
                    });
                });
                alert("Photo is Uploded");
                // document.getElementById('student_data').reset();
            });
        } catch (error) {
            alert("Some error occur");
            console.log(error.message);
        }

    }
}

//caste certificate upload
function CCU() {
    USN2 = getInputVal("s_usn2");
    //get your select image
    var files = document.getElementById("caste_file").files[0];
    if (document.getElementById("caste_file").files[0] == undefined) {
        alert("Enter the photo")
        document.getElementById('student_data').reset();
    } else if (USN2 == "") {
        alert("Enter the USN")
        document.getElementById('student_data').reset();
    } else {
        try {
            var storageRef = firebase.storage().ref('Caste certificate/' + USN2 + '.png');
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

                    firebase.database().ref('Student Data/' + USN2).update({
                        CCU: CCU_URL
                    });

                });
                alert("Photo is Uploded");
                // document.getElementById('student_data').reset();
            });

        } catch (error) {
            alert("Some error occur");
            console.log(error.message);
        }
    }
}

//10th marks upload
function SSLCmarks() {
    USN3 = getInputVal("s_usn3");
    //get your select image
    var files = document.getElementById("sslc_file").files[0];
    if (document.getElementById("sslc_file").files[0] == undefined) {
        alert("Enter the photo")
        document.getElementById('student_data').reset();
    } else if (USN3 == "") {
        alert("Enter the USN")
        document.getElementById('student_data').reset();
    } else {
        try {
            var storageRef = firebase.storage().ref('SSLCmarks/' + USN3 + '.png');
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

                    firebase.database().ref('Student Data/' + USN3).update({
                        Link10th: file10URL
                    });
                });
                alert("Photo is Uploded");
                // document.getElementById('student_data').reset();
            });

        } catch (error) {
            alert("Some error occur");
            console.log(error.message);
        }
    }
    //now get your files name
    // var filesName = files.name;
    //firebase  storage reference
    //it is the path where yyour files will store

}


//12th marks upload
function PUmarks() {
    USN3 = getInputVal("s_usn3");
    //get your select image
    var files = document.getElementById("pc_pufile").files[0];
    if (document.getElementById("pc_pufile").files[0] == undefined) {
        alert("Enter the photo")
        document.getElementById('student_data').reset();
    } else if (USN3 == "") {
        alert("Enter the USN")
        document.getElementById('student_data').reset();
    } else {
        try {
            var storageRef = firebase.storage().ref('PUmarks/' + USN3 + '.png');
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

                    firebase.database().ref('Student Data/' + USN3).update({
                        Link12th: file12URL
                    });
                });
                alert("Photo is Uploded");
                // document.getElementById('student_data').reset();
            });
        } catch (error) {
            alert("Some error occur");
            console.log(error.message);
        }
    }


}