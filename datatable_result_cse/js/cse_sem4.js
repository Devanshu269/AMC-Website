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
            { data: sub1, title: 'Design and analysis of algorithm' },
            { data: sub2, title: 'Additional Mathematics II' },
            { data: sub3, title: 'Complex Analysis' },
            { data: sub4, title: 'Data communication' },
            { data: sub5, title: 'Object Oriented Concepts' },
            { data: sub6, title: 'Operating Systems' },
            { data: sub7, title: 'Design and analysis of algorithm Laboratory' },
            { data: sub8, title: 'MicroController and Embedded systems Laboratory' },

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
    firebase.database().ref('Result/Sem4/CSE/IA1').on('child_added', function(snapshot) {
        dataSet = [USN = snapshot.val().USN, Name = snapshot.val().Name, Student_Section = snapshot.val().Section, sub1 = snapshot.val().Design_and_analysis_of_algorithm,
            sub2 = snapshot.val().Additional_Mathematics_II,sub3 = snapshot.val().Complex_Analysis,
            sub4 = snapshot.val().Data_communication,sub5 = snapshot.val().Object_Oriented_Concepts,
            sub6 = snapshot.val().Operating_Systems,sub7 = snapshot.val().Design_and_analysis_of_algorithm_Laboratory,
            sub8 = snapshot.val().MicroController_and_Embedded_systems_Laboratory,];
        table.rows.add([dataSet]).draw();
    });
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
            { data: sub1, title: 'Design and analysis of algorithm' },
            { data: sub2, title: 'Additional Mathematics II' },
            { data: sub3, title: 'Complex Analysis' },
            { data: sub4, title: 'Data communication' },
            { data: sub5, title: 'Object Oriented Concepts' },
            { data: sub6, title: 'Operating Systems' },
            { data: sub7, title: 'Design and analysis of algorithm Laboratory' },
            { data: sub8, title: 'MicroController and Embedded systems Laboratory' },

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
    firebase.database().ref('Result/Sem4/CSE/IA2').on('child_added', function(snapshot) {
        dataSet = [USN = snapshot.val().USN, Name = snapshot.val().Name, Student_Section = snapshot.val().Section, sub1 = snapshot.val().Design_and_analysis_of_algorithm,
            sub2 = snapshot.val().Additional_Mathematics_II,sub3 = snapshot.val().Complex_Analysis,
            sub4 = snapshot.val().Data_communication,sub5 = snapshot.val().Object_Oriented_Concepts,
            sub6 = snapshot.val().Operating_Systems,sub7 = snapshot.val().Design_and_analysis_of_algorithm_Laboratory,
            sub8 = snapshot.val().MicroController_and_Embedded_systems_Laboratory, ];
        table.rows.add([dataSet]).draw();
    });
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
            { data: sub1, title: 'Design and analysis of algorithm' },
            { data: sub2, title: 'Additional Mathematics II' },
            { data: sub3, title: 'Complex Analysis' },
            { data: sub4, title: 'Data communication' },
            { data: sub5, title: 'Object Oriented Concepts' },
            { data: sub6, title: 'Operating Systems' },
            { data: sub7, title: 'Design and analysis of algorithm Laboratory' },
            { data: sub8, title: 'MicroController and Embedded systems Laboratory' },
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
    firebase.database().ref('Result/Sem4/CSE/IA3').on('child_added', function(snapshot) {
        dataSet = [USN = snapshot.val().USN, Name = snapshot.val().Name, Student_Section = snapshot.val().Section, sub1 = snapshot.val().Design_and_analysis_of_algorithm,
            sub2 = snapshot.val().Additional_Mathematics_II,sub3 = snapshot.val().Complex_Analysis,
            sub4 = snapshot.val().Data_communication,sub5 = snapshot.val().Object_Oriented_Concepts,
            sub6 = snapshot.val().Operating_Systems,sub7 = snapshot.val().Design_and_analysis_of_algorithm_Laboratory,
            sub8 = snapshot.val().MicroController_and_Embedded_systems_Laboratory, ];
        table.rows.add([dataSet]).draw();
    });
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



