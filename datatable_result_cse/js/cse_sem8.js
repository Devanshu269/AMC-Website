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
    let sub1, sub2, sub3, sub4, sub5 

    var table = $('#user_data').DataTable({
        data: dataSet,
        columns: [
            { data: USN, title: 'USN' },
            { data: Name, title: 'Name' },
            { data: Student_Section, title: 'Section'},
            { data: sub1, title: 'Internet of things' },
            { data: sub2, title: 'Professional elective 4' },
            { data: sub3, title: 'Internship' },
            { data: sub4, title: 'Project work phase 2' },
            { data: sub5, title: 'Technical seminar' },
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
    firebase.database().ref('Result/Sem8/CSE/IA1').on('child_added', function(snapshot) {
        dataSet = [USN = snapshot.val().USN, Name = snapshot.val().Name, Student_Section = snapshot.val().Section, sub1 = snapshot.val().Internet_of_things,
            sub2 = snapshot.val().Professional_elective_4,sub3 = snapshot.val().Internship,
            sub4 = snapshot.val().Project_work_phase_2,sub5 = snapshot.val().Technical_seminar,
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
    let sub1, sub2, sub3, sub4, sub5 

    var table = $('#user_data2').DataTable({
        data: dataSet,
        columns: [
            { data: USN, title: 'USN' },
            { data: Name, title: 'Name' },
            { data: Student_Section, title: 'Section'},
            { data: sub1, title: 'Internet of things' },
            { data: sub2, title: 'Professional elective 4' },
            { data: sub3, title: 'Internship' },
            { data: sub4, title: 'Project work phase 2' },
            { data: sub5, title: 'Technical seminar' },
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
    firebase.database().ref('Result/Sem8/CSE/IA2').on('child_added', function(snapshot) {
        dataSet = [USN = snapshot.val().USN, Name = snapshot.val().Name, Student_Section = snapshot.val().Section, sub1 = snapshot.val().Internet_of_things,
            sub2 = snapshot.val().Professional_elective_4,sub3 = snapshot.val().Internship,
            sub4 = snapshot.val().Project_work_phase_2,sub5 = snapshot.val().Technical_seminar,
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
    let sub1, sub2, sub3, sub4, sub5 

    var table = $('#user_data3').DataTable({
        data: dataSet,
        columns: [
            { data: USN, title: 'USN' },
            { data: Name, title: 'Name' },
            { data: Student_Section, title: 'Section'},
            { data: sub1, title: 'Internet of things' },
            { data: sub2, title: 'Professional elective 4' },
            { data: sub3, title: 'Internship' },
            { data: sub4, title: 'Project work phase 2' },
            { data: sub5, title: 'Technical seminar' },
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
    firebase.database().ref('Result/Sem8/CSE/IA3').on('child_added', function(snapshot) {
        dataSet = [USN = snapshot.val().USN, Name = snapshot.val().Name, Student_Section = snapshot.val().Section, sub1 = snapshot.val().Internet_of_things,
            sub2 = snapshot.val().Professional_elective_4,sub3 = snapshot.val().Internship,
            sub4 = snapshot.val().Project_work_phase_2,sub5 = snapshot.val().Technical_seminar,
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



