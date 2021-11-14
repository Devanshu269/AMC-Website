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
            { data: sub1, title: 'Digital communication' },
            { data: sub2, title: 'Embedded systems' },
            { data: sub3, title: 'Open Elective A' },
            { data: sub4, title: 'Professional Elective I' },
            { data: sub5, title: 'Microwave and antennas' },
            { data: sub6, title: 'Communication Laboratory' },
            { data: sub7, title: 'Embedded system Laboratory' },

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
    firebase.database().ref('Result/Sem6/ECE/IA1').on('child_added', function(snapshot) {
        dataSet = [USN = snapshot.val().USN, Name = snapshot.val().Name, Student_Section = snapshot.val().Section, sub1 = snapshot.val().Digital_communication,
            sub2 = snapshot.val().Embedded_systems,sub3 = snapshot.val().Open_elective_A,
            sub4 = snapshot.val().Professional_elective_I,sub5 = snapshot.val().Microwave_and_antennas,
            sub6 = snapshot.val().Communication_Laboratory,sub7 = snapshot.val().Embedded_system_Laboratory,
];
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
            { data: sub1, title: 'Digital communication' },
            { data: sub2, title: 'Embedded systems' },
            { data: sub3, title: 'Open Elective A' },
            { data: sub4, title: 'Professional Elective I' },
            { data: sub5, title: 'Microwave and antennas' },
            { data: sub6, title: 'Communication Laboratory' },
            { data: sub7, title: 'Embedded system Laboratory' },

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
    firebase.database().ref('Result/Sem6/ECE/IA2').on('child_added', function(snapshot) {
        dataSet = [USN = snapshot.val().USN, Name = snapshot.val().Name, Student_Section = snapshot.val().Section, sub1 = snapshot.val().Digital_communication,
            sub2 = snapshot.val().Embedded_systems,sub3 = snapshot.val().Open_elective_A,
            sub4 = snapshot.val().Professional_elective_I,sub5 = snapshot.val().Microwave_and_antennas,
            sub6 = snapshot.val().Communication_Laboratory,sub7 = snapshot.val().Embedded_system_Laboratory,
];
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
            { data: sub1, title: 'Digital communication' },
            { data: sub2, title: 'Embedded systems' },
            { data: sub3, title: 'Open Elective A' },
            { data: sub4, title: 'Professional Elective I' },
            { data: sub5, title: 'Microwave and antennas' },
            { data: sub6, title: 'Communication Laboratory' },
            { data: sub7, title: 'Embedded system Laboratory' },

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
    firebase.database().ref('Result/Sem6/ECE/IA3').on('child_added', function(snapshot) {
        dataSet = [USN = snapshot.val().USN, Name = snapshot.val().Name, Student_Section = snapshot.val().Section, sub1 = snapshot.val().Digital_communication,
            sub2 = snapshot.val().Embedded_systems,sub3 = snapshot.val().Open_elective_A,
            sub4 = snapshot.val().Professional_elective_I,sub5 = snapshot.val().Microwave_and_antennas,
            sub6 = snapshot.val().Communication_Laboratory,sub7 = snapshot.val().Embedded_system_Laboratory,
];
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



