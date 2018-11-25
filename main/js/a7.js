/*
Chris Goyette
christopher_Goyette@student.uml.edu
*/

// credit: https://www.youtube.com/watch?v=yaxUV3Ib4vM&feature=youtu.be
$().ready(function() {
  $("#someform").validate({
    // do input checking
    // referenced jdowning
    rules: {
      xstart: {
        number: true,
        min: -1000,
        max: 1000,
        required: true
      },
      xend: {
        number: true,
        min: -1000,
        max: 1000,
        required: true
      },
      ystart: {
        number: true,
        min: -1000,
        max: 1000,
        required: true
      },
      yend: {
        number: true,
        min: -1000,
        max: 1000,
        required: true
      }
    },
    // they failed at putting in input, print out a message
    messages: {
      xstart: {
        number: "Are you sure you entered a NUMBER?",
        min: "Please enter a larger number, hint, the minimum may or may not be -1000",
        max: "Please enter a smaller number, hint, the maxium number may or may not be 1000",
        required: "..... you should really put something in here..."
      },
      xend: {
        number: "Are you sure you entered a NUMBER?",
        min: "Please enter a larger number, hint, the minimum may or may not be -1000",
        max: "Please enter a smaller number, hint, the maxium number may or may not be 1000",
        required: "..... you should really put something in here..."
      },
      ystart: {
        number: "Are you sure you entered a NUMBER?",
        min: "Please enter a larger number, hint, the minimum may or may not be -1000",
        max: "Please enter a smaller number, hint, the maxium number may or may not be 1000",
        required: "..... you should really put something in here..."
      },
      yend: {
        number: "Are you sure you entered a NUMBER?",
        min: "Please enter a larger number, hint, the minimum may or may not be -1000",
        max: "Please enter a smaller number, hint, the maxium number may or may not be 1000",
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

  //, check input
  if (xstart > xend) {
    alert("I think you accidently input the numbers in the wrong place");
    return;
  }
  if (ystart > yend) {
    alert("I think you accidently input the numbers in the wrong place");
    return;
  }

  // check input again to see if theyre in range
  if ( (Math.abs(xstart) + Math.abs(xend) > 2000) || (Math.abs(ystart) + Math.abs(yend) > 2000)) {
    alert("The range cannot excede 2k");
    return;
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


function populatetable(table) {
  // same as before. compliments of w3schools
  var xstart = Number(document.getElementById('xstart').value);
  var xend = Number(document.getElementById('xend').value);
  var ystart = Number(document.getElementById('ystart').value);
  var yend = Number(document.getElementById('yend').value);

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
