/*
Chris Goyette
christopher_Goyette@student.uml.edu
*/

// when the document is ready
// credit: https://www.youtube.com/watch?v=yaxUV3Ib4vM&feature=youtu.be
$().ready(function() {
  // make the sliders change numbers
  $("#xstartslider").slider({
      min: -10,
      max: 10,
      // stack stackoverflow https://stackoverflow.com/questions/44919113/jquery-slider-slide-function-event-ui-in-for-loop
      slide: function(event, ui) {
        // jquery forum https://forum.jquery.com/topic/how-to-dynamically-change-the-value-of-a-slider
        $("#xstart").val(ui.value);
        // stackoverflow https://stackoverflow.com/questions/6658937/how-to-check-if-a-form-is-valid-programmatically-using-jquery-validation-plugin
        $("#someform").submit();
      }
  });
  $("#xendslider").slider({
    min: -10,
    max: 10,
    // stack stackoverflow https://stackoverflow.com/questions/44919113/jquery-slider-slide-function-event-ui-in-for-loop
    slide: function(event, ui) {
      // jquery forum https://forum.jquery.com/topic/how-to-dynamically-change-the-value-of-a-slider
      $("#xend").val(ui.value);
      // stackoverflow https://stackoverflow.com/questions/6658937/how-to-check-if-a-form-is-valid-programmatically-using-jquery-validation-plugin
      $("#someform").submit();
    }
  });

  $("#ystartslider").slider({
    min: -10,
    max: 10,
    // stack stackoverflow https://stackoverflow.com/questions/44919113/jquery-slider-slide-function-event-ui-in-for-loop
    slide: function(event, ui) {
      // jquery forum https://forum.jquery.com/topic/how-to-dynamically-change-the-value-of-a-slider
      $("#ystart").val(ui.value);
      // stackoverflow https://stackoverflow.com/questions/6658937/how-to-check-if-a-form-is-valid-programmatically-using-jquery-validation-plugin
      $("#someform").submit();
    }
  });
  $("#yendslider").slider({
    min: -10,
    max: 10,
    // stack stackoverflow https://stackoverflow.com/questions/44919113/jquery-slider-slide-function-event-ui-in-for-loop
    slide: function(event, ui) {
      // jquery forum https://forum.jquery.com/topic/how-to-dynamically-change-the-value-of-a-slider
      $("#yend").val(ui.value);
      // stackoverflow https://stackoverflow.com/questions/6658937/how-to-check-if-a-form-is-valid-programmatically-using-jquery-validation-plugin
      $("#someform").submit();
    }
  });

  // if they manually type in the numbersvcitation : jdowning
  $("#xstart").on("keyup", function() {
    $("#xstartslider").slider("value", this.value);
    $("#someform").submit();
  });
  $("#xend").on("keyup", function() {
    $("#xendslider").slider("value", this.value);
    $("#someform").submit();
  });
  $("#ystart").on("keyup", function() {
    $("#ystartslider").slider("value", this.value);
    $("#someform").submit();
  });
  $("#yend").on("keyup", function() {
    $("#yendslider").slider("value", this.value);
    $("#someform").submit();
  });

  // functions to add/remove tabs
  // init the tab (from same source as cited in html)
  $("#demoTabs").tabs();
  // when the remove tab button is clicked
  $("#removeTabs").click(function() {
    // get the index of the tab
    var tabIndex = parseInt($("#indexValue").val(), 10);
    // remove the index of the tab
    var tab = $( "#demoTabs" ).find(".ui-tabs-nav li:eq(" + tabIndex + ")").remove();
    // refresh the tabs
    $("#demoTabs").tabs("refresh");
  });
  // when add tab is clicked
  var tabIndex = 0;
  $("#addTabs").click(function() {
    // add the tab as a link and append it to the ul
    $("<li><a href='#tab"+tabIndex+"'>New Tab</a></li>").appendTo("#demoTabs .ui-tabs-nav");
    $("#multable").clone().attr("id","tab"+tabIndex).appendTo("#demoTabs");
    tabIndex++;
    // refresh the tabs
    $("#demoTabs").tabs("refresh");
  });


  // validate the form
  $("#someform").validate({
    // do input checking
    // referenced jdowning
    rules: {
      xstart: {
        number: true,
        min: -10,
        max: 10,
        required: true
      },
      xend: {
        number: true,
        min: -10,
        max: 10,
        required: true
      },
      ystart: {
        number: true,
        min: -10,
        max: 10,
        required: true
      },
      yend: {
        number: true,
        min: -10,
        max: 10,
        required: true
      }
    },
    // they failed at putting in input, print out a message
    messages: {
      xstart: {
        number: "Are you sure you entered a NUMBER?",
        min: "Please enter a larger number, hint, the minimum may or may not be -10",
        max: "Please enter a smaller number, hint, the maxium number may or may not be 10",
        required: "..... you should really put something in here..."
      },
      xend: {
        number: "Are you sure you entered a NUMBER?",
        min: "Please enter a larger number, hint, the minimum may or may not be -10",
        max: "Please enter a smaller number, hint, the maxium number may or may not be 10",
        required: "..... you should really put something in here..."
      },
      ystart: {
        number: "Are you sure you entered a NUMBER?",
        min: "Please enter a larger number, hint, the minimum may or may not be -10",
        max: "Please enter a smaller number, hint, the maxium number may or may not be 10",
        required: "..... you should really put something in here..."
      },
      yend: {
        number: "Are you sure you entered a NUMBER?",
        min: "Please enter a larger number, hint, the minimum may or may not be -10",
        max: "Please enter a smaller number, hint, the maxium number may or may not be 10",
        required: "..... you should really put something in here..."
      }
    },
    // if the table is invalid, do not proceed
    invalidHandler: function() {
      $("#warning").empty();  // clear the warnings
      $("#multable").empty(); // may not be necessary, but if one was already printed out, lets clear it
    },
    // if everything is valid, calculate the table
    submitHandler: function() {
      dostuff();
      return false;
    }
  });
});

// calculate the table
function dostuff() {
  // get the numbers from the form
  var xstart = Number(document.getElementById('xstart').value);
  var xend = Number(document.getElementById('xend').value);
  var ystart = Number(document.getElementById('ystart').value);
  var yend = Number(document.getElementById('yend').value);

  // i changed this instead of throwing an error for backwards input, it just swaps them
  if (xstart > xend) {
    var temp;
    temp = xend;
    xend = xstart;
    xstart = temp;
  }
  if (ystart > yend) {
    var temp;
    temp = yend;
    yend = ystart;
    ystart = temp;
  }

  // need an empty array
  var table = {};
  // need to know how many rows and columns
  var numrows = xend - xstart;
  var numcolumns = yend - ystart;

  // need counters to iterate through
  var x = xstart;
  var y = ystart;


  var temp = [];
  for (var a = 0; a <= numcolumns; a++) {
    // need a temporary array to store stuff in
      temp = [];

      for (var b = 0; b <= numrows; b++) {
        // Calculate the value
        var calc = x * y;
        // store it into our temporary array
        temp[b] = calc;
        // save the row into the column
        table["row" + a] = temp;
        // increment the counter
        x++;
    }



    x = xstart;        // Reset each pass since we're moving down a row.
    y++;
  }

  populatetable(table);
  return false;
}

// print the table to the webpage
function populatetable(table) {
  // get the numbers from the form
  var xstart = Number(document.getElementById('xstart').value);
  var xend = Number(document.getElementById('xend').value);
  var ystart = Number(document.getElementById('ystart').value);
  var yend = Number(document.getElementById('yend').value);

  // i changed this instead of throwing an error for backwards input, it just swaps them
  if (xstart > xend) {
    var temp;
    temp = xend;
    xend = xstart;
    xstart = temp;
  }
  if (ystart > yend) {
    var temp;
    temp = yend;
    yend = ystart;
    ystart = temp;
  }

  // need to know how many rows and columns again
  var numrows = Math.abs(xend - xstart);
  var numcolumns = Math.abs(yend - ystart);

  // tables suck, and the variable table is already used
  var grid = "<table>";

  // dont fill in cell[0][0]
  grid += "<tr><td>*</td>";

    // column counter
    var y = ystart;
    for(var a = xstart; a <= xend; a++){
      grid += "<th>" + a + "</th>";
    }
    grid += "</tr>";
    // now that the unique cell is done....
    for (var a = 0; a <= numcolumns; a++) {
      grid += "<tr><td>" + y + "</td>";

      // need the calculated data
      for (var b = 0; b <= numrows; b++) {
        grid += "<td>" + table["row" + a][b] + "</td>";
      }
      y++;

      // Close each row.
      grid += "</tr>";
    }


  // the end
  grid += "</table>";

  // add grid
  document.getElementById("multable").innerHTML = grid;
}
