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
$(document).ready(function() {
    var Fname, Fphone, Mname, Mphone
    var dataSet
    var USN
    var Student_Section
    var Program
    var sem
    var table = $('#user_data').DataTable({
        data: dataSet,
        columns: [

            { data: USN, title: 'USN' },
            { data: Program, title: 'Branch' },
            { data: Student_Section, title: 'Section'},
            { data: sem, title: 'SEM' },
            { data: Fname, title: 'Father Name' },
            { data: Fphone, title: 'Father Phone' },
            { data: Mname, title: 'Mother Name' },
            { data: Mphone, title: 'Mother Phone' },
        ],
        dom: 'Bfrtip',
        orderCellsTop: true,
        fixedHeader: true,
        targets: -1,
        className: 'dt-body-right',
        responsive: true,
        hover: 1,
        // select: {
        //     style: 'os',
        //     selector: 'td:first-child'
        // },
        buttons: [

            'excel', 'pdf', 'print'
        ]

    });
    firebase.database().ref('Student Data').on('child_added', function(snapshot) {
        var dataSet = [USN = snapshot.val().USN, Program = snapshot.val().Program, Student_Section = snapshot.val().Student_Section, sem = snapshot.val().SEM, Fname =snapshot.val().Father_Name, Fphone = snapshot.val().Father_phone, Mname = snapshot.val().Mother_Name, Mphone = snapshot.val().Mother_phone];
        table.rows.add([dataSet]).draw();
    });
    $('#cse').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[1] == "CSE") {
                        return dataSet[1]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })

    $('#ece').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[1] == "ECE") {
                        return dataSet[1]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })

    $('#civil').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[1] == "CIVIL") {
                        return dataSet[1]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })

    $('#mech').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[1] == "MECH") {
                        return dataSet[1]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })
    $('#sem1').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[3] == 1) {
                        return dataSet[3]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })
    $('#sem2').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[3] == 2) {
                        return dataSet[3]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })

    $('#sem3').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[3] == 3) {
                        return dataSet[3]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })
    $('#sem4').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[3] == 4) {
                        return dataSet[3]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })
    $('#sem5').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[3] == 5) {
                        return dataSet[3]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })
    $('#sem6').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[3] == 6) {
                        return dataSet[3]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })
    $('#sem7').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[3] == 7) {
                        return dataSet[3]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })
    $('#sem8').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[3] == 8) {
                        return dataSet[3]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })

    $('#secA').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[2] == "A") {
                        return dataSet[2]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })

    $('#secB').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[2] == "B") {
                        return dataSet[2]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })

    $('#secC').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[2] == "C") {
                        return dataSet[2]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })

    $('#secD').on('change', function() {
        if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, dataSet, dataIndex) {
                    if (dataSet[2] == "D") {
                        return dataSet[2]
                    }
                }
            )
        } else {
            $.fn.dataTable.ext.search.pop()
        }
        table.draw()
    })

});




// var rootRef = firebase.database().ref().child("Parent");



// rootRef.once("child_added", snap => {

//     USN = snap.child("USN").val();
//     Fname = snap.child("Father_Name").val();
//     Fphone = snap.child("Fathe_phone").val();
//     Mname = snap.child("Mother_name").val();
//     Mphone = snap.child("Mother_phone").val();

//     document.getElementById("USN").innerHTML = USN;
//     document.getElementById("Fname").innerHTML = Fname;
//     document.getElementById("Fphone").innerHTML = Fphone;
//     document.getElementById("Mname").innerHTML = Mname;
//     document.getElementById("Mphone").innerHTML = Mphone;



// })






// firebase.database().ref('Parent').get().then(function(snapshot) {

//         if (snapshot.exists()) {
//             var USN = snapshot.val().USN;
//             var Fname = snapshot.val().Father_Name;
//             var Fphone = snapshot.val().Fathe_phone;
//             var Mname = snapshot.val().Mother_name;
//             var Mphone = snapshot.val().Mother_phone;

//             document.getElementById("USN").innerHTML = USN;
//             document.getElementById("Fname").innerHTML = Fname;
//             document.getElementById("Fphone").innerHTML = Fphone;
//             document.getElementById("Mname").innerHTML = Mname;
//             document.getElementById("Mphone").innerHTML = Mphone;
//             console.log(snapshot.val());
//         } else {
//             console.log(data.val());
//         }
//     })
//     .catch(function(error) {
//         console.log(error);
//     });