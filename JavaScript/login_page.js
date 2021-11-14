var firebaseConfig = {
    apiKey: "AIzaSyAdWq4-ZE4Yv87w_AEyy5b5JwkW9A8iL3U",
    authDomain: "contact-form-38b0b.firebaseapp.com",
    projectId: "contact-form-38b0b",
    storageBucket: "contact-form-38b0b.appspot.com",
    messagingSenderId: "748179068137",
    appId: "1:748179068137:web:5d99c5e7b8012158990c78",
    measurementId: "G-KTGWG17W1K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('contact-form')
    //var type = getInputVal('login_type');



function getdata() {
    var type = document.getElementById("login_type").value;
    console.log(type.value);

    var A_ID = document.getElementById("exampleInputEmail1").value;
    var A_password = document.getElementById("exampleInputPassword1").value;
    //firebase data retrieval function
    //path of your data
    //.once will get all your data in one time
    if (type == 'ad') {
        console.log("working 1");
        firebase.database().ref('AdminID/' + A_ID).once('value').then(function(snapshot) {
            console.log("working 2");
            //here we will get data
            //enter your field name
            var S_ID = snapshot.val().AdminID;
            var S_password = snapshot.val().AdminPassword;
            console.log("working 3");
            if (A_ID == S_ID && A_password == S_password) {

                window.location = "admin_data.html";

            } else {
                alert("password does not matches");
            }

        }).catch(function(error) {
            //this will handle error
            var errorMessage = error.message;
            alert("Wrong ID or Password");
        });
    } else if (type == "fc") {
        firebase.database().ref('TeacherID/' + A_ID).once('value').then(function(snapshot) {
            //here we will get data
            //enter your field name
            var S_ID = snapshot.val().TeacherID;
            var S_password = snapshot.val().TeacherPassword;
            console.log("working");
            if (A_ID == S_ID && A_password == S_password) {
                window.location = "Admin_Dashboard.html";

            } else {
                alert("password does not matches");
            }

        }).catch(function(error) {
            //this will handle error
            var errorMessage = error.message;
            alert("Wrong ID or Password");
        });
      }
      else if (type == "tc") {
        firebase.database().ref('AdminID/' + A_ID).once('value').then(function(snapshot) {
            console.log("working 2");
            //here we will get data
            //enter your field name
            var S_ID = snapshot.val().AdminID;
            var S_password = snapshot.val().AdminPassword;
            console.log("working 3");
            if (A_ID == S_ID && A_password == S_password) {

                window.location = "datatable/transportdt_1.html";

            } else {
                alert("password does not matches");
            }

          }).catch(function(error) {
              //this will handle error
              var errorMessage = error.message;
              alert("Wrong ID or Password");
          });
        }
        else if (type == "hc") {
          firebase.database().ref('AdminID/' + A_ID).once('value').then(function(snapshot) {
              console.log("working 2");
              //here we will get data
              //enter your field name
              var S_ID = snapshot.val().AdminID;
              var S_password = snapshot.val().AdminPassword;
              console.log("working 3");
              if (A_ID == S_ID && A_password == S_password) {

                  window.location = "datatable/hosteldt_1.html";

              } else {
                  alert("password does not matches");
              }

            }).catch(function(error) {
                //this will handle error
                var errorMessage = error.message;
                alert("Wrong ID or Password");
            });
          }
          else if (type == "ac") {
            firebase.database().ref('AdminID/' + A_ID).once('value').then(function(snapshot) {
                console.log("working 2");
                //here we will get data
                //enter your field name
                var S_ID = snapshot.val().AdminID;
                var S_password = snapshot.val().AdminPassword;
                console.log("working 3");
                if (A_ID == S_ID && A_password == S_password) {

                    window.location = "datatable/feesdt0.html";

                } else {
                    alert("password does not matches");
                }

              }).catch(function(error) {
                  //this will handle error
                  var errorMessage = error.message;
                  alert("Wrong ID or Password");
              });
            }
      else if (type == "sc") {
        window.location = "retrive_s/retrive_student.html";
      }
     else {
        // firebase.database().ref('StudentID/' + A_ID).once('value').then(function(snapshot) {
        //     //here we will get data
        //     //enter your field name
        //     var S_ID = snapshot.val().UserUSN;
        //     var S_password = snapshot.val().Userpassword;
        //     console.log("working");
        //     if (A_ID == S_ID && A_password == S_password) {
        //         window.location = "retrive_s/retrive_student.html";

        //     } else {
        //         alert("password does not matches");
        //     }

        // }).catch(function(error) {
        //     //this will handle error
        //     var errorMessage = error.message;
        //     alert("Wrong ID or Password");
        // });
        alert("Enter the ID or Password");
    }



}
