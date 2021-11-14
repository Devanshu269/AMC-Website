var branch
var sem

$("button").click(function() {
    $("divId").empty();
});
$("button").click(function() {
    $("divId_1").empty();
});
$("button").click(function() {
    $("divId_8").empty();
});

document.getElementById('download').onclick = function() {
    console.log(sem1);
    if (branch == "cse" && sem == "sem1") {
        console.log(sem1);
        document.getElementById("divId_1").style.display = "inline-block";
          document.getElementById("divId").style.display = "none";
        sem1 = ""
        branch = ""
        document.getElementById('sidebar').reset();
    } else if (branch == "cse" && sem == "sem2") {
          console.log(sem2);
          document.getElementById("divId_2").style.display = "inline-block";
          document.getElementById("divId").style.display = "none";
          sem2 = ""
          branch = ""
          document.getElementById('sidebar').reset();
    } else if (branch == "cse" && sem == "sem3") {
      document.getElementById("divId_3").style.display = "inline-block";
      document.getElementById("divId").style.display = "none";
      sem3 = ""
      branch = ""
      document.getElementById('sidebar').reset();
    } else if (branch == "cse" && sem == "sem4") {
      document.getElementById("divId_4").style.display = "inline-block";
      document.getElementById("divId").style.display = "none";
      sem4 = ""
      branch = ""
      document.getElementById('sidebar').reset();
    } else if (branch == "cse" && sem == "sem5") {
      document.getElementById("divId_5").style.display = "inline-block";
      document.getElementById("divId").style.display = "none";
      sem5 = ""
      branch = ""
      document.getElementById('sidebar').reset();
    } else if (branch == "cse" && sem == "sem6") {
      document.getElementById("divId_6").style.display = "inline-block";
      document.getElementById("divId").style.display = "none";
      sem6 = ""
      branch = ""
      document.getElementById('sidebar').reset();
    } else if (branch == "cse" && sem == "sem7") {
      document.getElementById("divId_7").style.display = "inline-block";
      document.getElementById("divId").style.display = "none";
      sem7 = ""
      branch = ""
      document.getElementById('sidebar').reset();
    } else if (branch == "cse" && sem == "sem8") {
      document.getElementById("divId_8").style.display = "inline-block";
      document.getElementById("divId").style.display = "none";
      sem8 = ""
      branch = ""
      document.getElementById('sidebar').reset();
    } else if (branch == "ece" && sem == "sem1") {
      console.log(sem2);
      document.getElementById("divId_9").style.display = "inline-block";
      document.getElementById("divId").style.display = "none";
      sem1 = ""
      branch = ""
      document.getElementById('sidebar').reset();
    } else if (branch == "ece" && sem == "sem2") {
      document.getElementById("divId_10").style.display = "inline-block";
      document.getElementById("divId").style.display = "none";
      sem2 = ""
      branch = ""
      document.getElementById('sidebar').reset();
    } else if (branch == "ece" && sem == "sem3") {
      document.getElementById("divId_11").style.display = "inline-block";
      document.getElementById("divId").style.display = "none";
      sem3 = ""
      branch = ""
      document.getElementById('sidebar').reset();
    } else if (branch == "ece" && sem == "sem4") {
      document.getElementById("divId_12").style.display = "inline-block";
      document.getElementById("divId").style.display = "none";
      sem4 = ""
      branch = ""
      document.getElementById('sidebar').reset();
    } else if (branch == "ece" && sem == "sem5") {
      document.getElementById("divId_13").style.display = "inline-block";
      document.getElementById("divId").style.display = "none";
      sem5 = ""
      branch = ""
      document.getElementById('sidebar').reset();
    } else if (branch == "ece" && sem == "sem6") {
      document.getElementById("divId_14").style.display = "inline-block";
      document.getElementById("divId").style.display = "none";
      sem6 = ""
      branch = ""
      document.getElementById('sidebar').reset();
    } else if (branch == "ece" && sem == "sem7") {
      document.getElementById("divId_15").style.display = "inline-block";
      document.getElementById("divId").style.display = "none";
      sem7 = ""
      branch = ""
      document.getElementById('sidebar').reset();
    } else if (branch == "ece" && sem == "sem8") {
      document.getElementById("divId_16").style.display = "inline-block";
      document.getElementById("divId").style.display = "none";
      sem8 = ""
      branch = ""
      document.getElementById('sidebar').reset();
    } else {
        alert("Invaild Data");
        document.getElementById('restarea').reset();
    }

}

$('#sem1').on('change', function() {
    if ($(this).is(':checked')) {
        sem = document.getElementById('sem1').value;
        console.log(sem);
    }
})
$('#sem2').on('change', function() {
    if ($(this).is(':checked')) {
        sem = document.getElementById('sem2').value;
        console.log(sem);
    }
})
$('#sem3').on('change', function() {
    if ($(this).is(':checked')) {
        sem = document.getElementById('sem3').value;
        console.log(sem);
    }
})
$('#sem4').on('change', function() {
    if ($(this).is(':checked')) {
        sem = document.getElementById('sem4').value;
        console.log(sem);
    }
})
$('#sem5').on('change', function() {
    if ($(this).is(':checked')) {
        sem = document.getElementById('sem5').value;
        console.log(sem);
    }
})
$('#sem6').on('change', function() {
    if ($(this).is(':checked')) {
        sem = document.getElementById('sem6').value;
        console.log(sem);
    }
})
$('#sem7').on('change', function() {
    if ($(this).is(':checked')) {
        sem = document.getElementById('sem7').value;
        console.log(sem);
    }
})
$('#sem8').on('change', function() {
    if ($(this).is(':checked')) {
        sem = document.getElementById('sem8').value;
        console.log(sem);
    }
})
$('#cse').on('change', function() {
    if ($(this).is(':checked')) {
        branch = document.getElementById('cse').value;
        console.log(branch);
    }
})
$('#civil').on('change', function() {
    if ($(this).is(':checked')) {
        branch = document.getElementById('civil').value;
        console.log(branch);
    }
})
$('#mech').on('change', function() {
    if ($(this).is(':checked')) {
        branch = document.getElementById('mech').value;
        console.log(branch);
    }
})
$('#ece').on('change', function() {
    if ($(this).is(':checked')) {
        branch = document.getElementById('ece').value;
        console.log(branch);
    }
})
