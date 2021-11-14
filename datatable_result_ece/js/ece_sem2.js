// window.onload = function(){}
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
    let dataSet
    let USN
    let Name
    let Student_Section
    let sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8

    var table = $('#user_data').DataTable({
        data: dataSet,
        columns: [
            { data: USN, title: 'USN' },
            { data: Name, title: 'Name' },
            { data: Student_Section, title: 'Section'},
            { data: sub1, title: 'Basic Electronics' },
            { data: sub2, title: 'C Programming for Problem Solving' },
            { data: sub3, title: 'Calculus and Linear Algebra' },
            { data: sub4, title: 'Elements of Mechanical Engineering' },
            { data: sub5, title: 'Engineering Chemistry' },
            { data: sub6, title: 'Engineering Chemistry Laboratory' },
            { data: sub7, title: 'C Programming Laboratory' },
            { data: sub8, title: 'Technical English I' },
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
    firebase.database().ref('Result/Sem2/ECE/IA1').on('child_added', function(snapshot) {
        dataSet = [USN = snapshot.val().USN, Name = snapshot.val().Name, Student_Section = snapshot.val().Section, sub1 = snapshot.val().Basic_Electronics,
            sub2 = snapshot.val().C_Programming_for_Problem_Solving,sub3 = snapshot.val().Calculus_and_Linear_Algebra,
            sub4 = snapshot.val().Elements_of_Mechanical_Engineering,sub5 = snapshot.val().Engineering_Chemistry,
            sub6 = snapshot.val().Engineering_Chemistry_Laboratory,sub7 = snapshot.val().C_Programming_Laboratory,
            sub8 = snapshot.val().Technical_English_I,];
        table.rows.add([dataSet]).draw();
    });
 

});
$(document).ready(function() {
    let dataSet
    let USN
    let Name
    let Student_Section
    let sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8

    var table = $('#user_data2').DataTable({
        data: dataSet,
        columns: [
            { data: USN, title: 'USN' },
            { data: Name, title: 'Name' },
            { data: Student_Section, title: 'Section'},
            { data: sub1, title: 'Basic Electronics' },
            { data: sub2, title: 'C Programming for Problem Solving' },
            { data: sub3, title: 'Calculus and Linear Algebra' },
            { data: sub4, title: 'Elements of Mechanical Engineering' },
            { data: sub5, title: 'Engineering Chemistry' },
            { data: sub6, title: 'Engineering Chemistry Laboratory' },
            { data: sub7, title: 'C Programming Laboratory' },
            { data: sub8, title: 'Technical English I' },
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
    firebase.database().ref('Result/Sem2/ECE/IA2').on('child_added', function(snapshot) {
        dataSet = [USN = snapshot.val().USN, Name = snapshot.val().Name, Student_Section = snapshot.val().Section, sub1 = snapshot.val().Basic_Electronics,
            sub2 = snapshot.val().C_Programming_for_Problem_Solving,sub3 = snapshot.val().Calculus_and_Linear_Algebra,
            sub4 = snapshot.val().Elements_of_Mechanical_Engineering,sub5 = snapshot.val().Engineering_Chemistry,
            sub6 = snapshot.val().Engineering_Chemistry_Laboratory,sub7 = snapshot.val().C_Programming_Laboratory,
            sub8 = snapshot.val().Technical_English_I,];
        table.rows.add([dataSet]).draw();
    });
 

});
$(document).ready(function() {
    let dataSet
    let USN
    let Name
    let Student_Section
    let sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8

    var table = $('#user_data3').DataTable({
        data: dataSet,
        columns: [
            { data: USN, title: 'USN' },
            { data: Name, title: 'Name' },
            { data: Student_Section, title: 'Section'},
            { data: sub1, title: 'Basic Electronics' },
            { data: sub2, title: 'C Programming for Problem Solving' },
            { data: sub3, title: 'Calculus and Linear Algebra' },
            { data: sub4, title: 'Elements of Mechanical Engineering' },
            { data: sub5, title: 'Engineering Chemistry' },
            { data: sub6, title: 'Engineering Chemistry Laboratory' },
            { data: sub7, title: 'C Programming Laboratory' },
            { data: sub8, title: 'Technical English I' },
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
    firebase.database().ref('Result/Sem2/ECE/IA3').on('child_added', function(snapshot) {
        dataSet = [USN = snapshot.val().USN, Name = snapshot.val().Name, Student_Section = snapshot.val().Section, sub1 = snapshot.val().Basic_Electronics,
            sub2 = snapshot.val().C_Programming_for_Problem_Solving,sub3 = snapshot.val().Calculus_and_Linear_Algebra,
            sub4 = snapshot.val().Elements_of_Mechanical_Engineering,sub5 = snapshot.val().Engineering_Chemistry,
            sub6 = snapshot.val().Engineering_Chemistry_Laboratory,sub7 = snapshot.val().C_Programming_Laboratory,
            sub8 = snapshot.val().Technical_English_I,];
        table.rows.add([dataSet]).draw();
    });
 

});



