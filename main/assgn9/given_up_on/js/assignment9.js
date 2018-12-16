/*
Chris Goyette
hw 9
christopher_goyette@student.uml.edu
*/

var Z_INDEX_DIALOG = 100;
var Z_INDEX_TILE_ON_DRAG = 99;
var TEXT_COLOR_ACTIVE = "#339933";
var TEXT_COLOR_NORMAL = "";
var TEXT_COLOR_INVALID = "red";



// ########################################### index values ########################################################################
// place to track scores
var scrabbleScore = { "score": 0, "totalscore": 0 };

// array provided in PDF
var scrabbleTiles = [] ;
scrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "img/Scrabble_Tile_A.jpg"  } ;
scrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_B.jpg"  } ;
scrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_C.jpg"  } ;
scrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tile_D.jpg"  } ;
scrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "image" : "img/Scrabble_Tile_E.jpg"  } ;
scrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_F.jpg"  } ;
scrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "image" : "img/Scrabble_Tile_G.jpg"  } ;
scrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_H.jpg"  } ;
scrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "img/Scrabble_Tile_I.jpg"  } ;
scrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tile_J.jpg"  } ;
scrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tile_K.jpg"  } ;
scrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tile_L.jpg"  } ;
scrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_M.jpg"  } ;
scrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/Scrabble_Tile_N.jpg"  } ;
scrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "image" : "img/Scrabble_Tile_O.jpg"  } ;
scrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_P.jpg"  } ;
scrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tile_Q.jpg"  } ;
scrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/Scrabble_Tile_R.jpg"  } ;
scrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tile_S.jpg"  } ;
scrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/Scrabble_Tile_T.jpg"  } ;
scrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tile_U.jpg"  } ;
scrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_V.jpg"  } ;
scrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_W.jpg"  } ;
scrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tile_X.jpg"  } ;
scrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_Y.jpg"  } ;
scrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tile_Z.jpg"  } ;
scrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_Blank.jpg"  } ;


// ########################################### Making the game board ########################################################################
// init an empty board for now
var board = {};
// place the squares in their slots, reference yong cho
board.slots = [];
board.slots[0] = [];
board.slots[0][0] = { "letterMultiplier": 1, "wordMultiplier": 2, "image": "img/dblwordscoretile.jpg"};
board.slots[0][1] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/blanktile.jpg"};
board.slots[0][2] = { "letterMultiplier": 1, "wordMultiplier": 2, "image": "img/dblwordscoretile.jpg"};
board.slots[0][3] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/blanktile.jpg"};
board.slots[0][4] = { "letterMultiplier": 1, "wordMultiplier": 2, "image": "img/dblwordscoretile.jpg"};
board.slots[0][5] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/blanktile.jpg"};
board.slots[0][6] = { "letterMultiplier": 1, "wordMultiplier": 2, "image": "img/dblwordscoretile.jpg"};
// get the number or rows and columns, although I might not have enough time to need columns
board.rowCount = Object.keys(board.slots).length;
board.columnCount = Object.keys(board.slots[0]).length;

// make da board!
board.createBoardHtml = function() {
  var row, col, bgImagePath, newSlot;

  // Set the fixed height for the board appropriate for the number of rows.
  $("#board").css("height", (89 * (2)) * board.rowCount);
  // Set the fixed width for the board to accomodate one full row.
  $("#board").css("width", (89 * (2)) * board.columnCount);

  // display the board
  for (row = 0; row < board.rowCount; row++) {
    for (col = 0; col < board.columnCount; col++) {
      bgImagePath = board.slots[row][col].image;
      newSlot = $("<div class=\"boardSlot\" row=\"" + row + "\" col=\"" + col + "\" style=\"background-image: url(" + bgImagePath + ")\" />");
      $("#board").append(newSlot);
      newSlot.css({"width": 81, "height": 87, "margin": 1, "border-width": 1});
    }
  }
}



// ########################################### caldulating values ########################################################################
scrabbleScore.calculateBoardScore = function() {
  var iRow, iCol, letter, letterValue, wordMultiplier = 1, boardScore = 0;

  // mathify the value of the word
  for (iRow = 0; iRow < board.rowCount; iRow++) {
    for (iCol = 0; iCol < board.columnCount; iCol++) {
      letter = board.slots[iRow][iCol].letter;
      if (letter) {
        letterValue = scrabbleTiles[letter].value;
        boardScore += letterValue * board.slots[iRow][iCol].letterMultiplier;
        wordMultiplier *= board.slots[iRow][iCol].wordMultiplier;
      }
    }
  }

  // definitly can be exponential on my board
  boardScore *= wordMultiplier;

  return boardScore;
}

// show the score
scrabbleScore.refresh = function() {
  var boardScore = scrabbleScore.calculateBoardScore();

  $("#score").html(scrabbleScore.score + " (+<span id='boardScore'>" + boardScore + "</span>)");
  $("#totalscore").html(scrabbleScore.totalscore);
}
scrabbleScore.commit = function() {
  var boardScore = scrabbleScore.calculateBoardScore();

  scrabbleScore.score += boardScore;
  $("#score").html(scrabbleScore.score);

  if (scrabbleScore.score > scrabbleScore.totalscore) {
    scrabbleScore.totalscore = scrabbleScore.score;
    $("#totalscore").html(scrabbleScore.score);
  }
}


// ####################################### reset stuff #################################
// reset the scores if reeset is clicked
scrabbleScore.restart = function() {
  scrabbleScore.score = 0;
  $("#score").html(0);
}
// remove the tiles from the baord
board.clearBoard = function() {
  var iRow, iCol;

  $("#board img").remove();

  // update the data
  for (iRow = 0; iRow < board.rowCount; ++iRow) {
    for (iCol = 0; iCol < board.columnCount; ++iCol) {
      delete board.slots[iRow][iCol].tileId;
      delete board.slots[iRow][iCol].letter;
    }
  }
}
// reset board and tiles
function restart() {
  // Clear the rack. (We're putting all tiles back to the deck.)
  $("#letterRack img").remove();

  // Remove all tiles from the board.
  board.clearBoard();

  // Reset the deck data structure.
  for (var key in scrabbleTiles) {
    if (scrabbleTiles.hasOwnProperty(key)) {
      scrabbleTiles[key]["number-remaining"] = scrabbleTiles[key]["original-distribution"];
    }
  }

  scrabbleScore.restart();

  nextWord();
}

// ############################################## quality of life functions ######
// getter for tile id
board.getTileIdFromSlot = function(row, col) {
  return board.slots[row][col].tileId;
}
// getter for tile letter
board.getLetterFromSlot = function(row, col) {
  return board.slots[row][col].letter;
}
// check to see if slot is empty
board.isSlotEmpty = function(row, col) {
  return typeof(board.slots[row][col].tileId) === "undefined";
}
// quality of life function to get the number of tiles in the rack
function numTilesOnRack() {
  return $("#letterRack img").length;
}


// ############################### functions to move and update tiles ###########
// function to move tiles
board.addToSlot = function(tileId, letter, row, col) {
  var iRow, iCol;

  // remove from previous slot
  for (iRow = 0; iRow < board.rowCount; ++iRow) {
    for (iCol = 0; iCol < board.columnCount; ++iCol) {
      if (board.slots[iRow][iCol].tileId === tileId) {
        delete board.slots[iRow][iCol].tileId;
        delete board.slots[iRow][iCol].letter;
      }
    }
  }
  // update the new position
  board.slots[row][col].letter = letter;
  board.slots[row][col].tileId = tileId;
}
// make empty slot
board.deleteFromSlot = function(row, col) {
  delete board.slots[row][col].tileId;
  delete board.slots[row][col].letter;
}

// Find slot position by ID
board.findSlotFromTileId = function(tileId) {
  var iRow, iCol;

  // search each row/column
  for (iRow = 0; iRow < board.rowCount; ++iRow) {
    for (iCol = 0; iCol < board.columnCount; ++iCol) {
      if (board.slots[iRow][iCol].tileId === tileId) {
        return [iRow, iCol];
      }
    }
  }

  return false;
}

// ################################# getting random tiles ########################
// get random tiles
function getFromDeck(n) {
  var hand = [];
  var allTiles = [];

  // make an array of tiles
  for (var key in scrabbleTiles) {
    if (scrabbleTiles.hasOwnProperty(key)) {
      var remaining = scrabbleTiles[key]["number-remaining"];
      for (var i = 0; i < remaining; ++i) {
        allTiles.push(key);
      }
    }
  }
  // pick out some number of tiles
  for (var i = 0; i < n; ++i) {
    if (allTiles.length) {
      var randomIndex = getRandomInt(0, Object.keys(allTiles).length - 1);
      var randomLetter = allTiles[randomIndex];
      hand.push(randomLetter);
      --scrabbleTiles[randomLetter]["number-remaining"];
      allTiles.splice(randomIndex, 1);  // Removes one element from the array.
    }
  }

  return hand;
}

// Adds up the score. Removes all tiles from the board and adds to the rack whatever number of
// new tiles needed.
function nextWord() {
  var i, key, tileImageId, newTile, hand;

  scrabbleScore.commit();

  // Clear the board.
  board.clearBoard();

  // Draw as many tiles as needed to refill the rack with 7 tiles. Lay out the tile images.
  hand = getFromDeck(7 - numTilesOnRack());
  for (i = 0; i < hand.length; ++i) {
    key = hand[i];
    tileImageId = generateTileId();
    newTile = $("<img id=\"" + tileImageId + "\" src=\"" + scrabbleTiles[key]["image"] + "\" class=\"letterTile\" letter=\"" + key + "\" />");
    if (key == "_") {
      newTile.addClass("blankTile");
    }
    // Add tile image.
    $("#letterRack").append(newTile);

    // Apply CSS condition for the tile being on the rack. Apply CSS rule to this class to do minor position
    // adjustment to the tile image in order to make it sit naturally on the rack background image.
    newTile.addClass("letterTileOnRack");

    // Make the tile draggable.
    newTile.draggable({
      revertDuration: 200,  // msec
      start: function(event, ui) {
        // Tile should be on top of everything else when being dragged.
        $(this).css("z-index", Z_INDEX_TILE_ON_DRAG);

        // Revert option needs to be manually reset because it may be modified by droppables
        // to force reverting after dropping has occured.
        $(this).draggable("option", "revert", "invalid");
      },
      stop: function() {
        // Once finished dragging, revert the z-index.
        $(this).css("z-index", "");
      }
    });
  }

  // Clear the current word display.
  $("#word").html("");
}

function generateTileId() {
  var id;

  generateTileId.id = ++generateTileId.id || 1;
  id = "tile" + generateTileId.id.toString();

  return id;
}

// rand() stackoverflow
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


$(window).load(function() {
  var row, col;

  board.createBoardHtml();

  // Make the board slots droppable.
  $(".boardSlot").droppable({
    // This function determines whether the slot gets highlighted as an acceptable dropping zone
    // when a tile is being dragged.
    accept: function(draggable) {
      var row, col;

      row = $(this).attr("row");
      col = $(this).attr("col");

      if (board.getTileIdFromSlot(row, col) === draggable.attr("id")) {
        // The tile should be allowed to drop back in to the slot it was lifted out of.
        return true;
      } else if (board.isSlotEmpty(row, col)) {
        // The slot is empty.
        return true;
      } else {
        // The slot is already occupied.
        return false;
      }
    },
    activeClass: "dragHighlight",
    hoverClass: "hoverHighlight",
    drop: function(event, ui) {
      var row, col, letter, word, tileId, previousPositionOnBoard;

      ui.draggable.removeClass("letterTileOnRack");
      ui.draggable.addClass("letterTileOnBoard");

      row = $(this).attr("row");
      col = $(this).attr("col");

      letter = ui.draggable.attr("letter");
      tileId = ui.draggable.attr("id");

      // Make the dropped tile snap to the board image.
      // TODO: I think there is a built-in jQuery UI way of doing this.
      $(ui.draggable).css("top", "");
      $(ui.draggable).css("left", "");
      $(this).append(ui.draggable);

      console.log("Dropped " + letter + " (" + tileId + ") on (" + row + ", " + col + ").");

      // When a blank tile is first placed on the board, open up a dialog and let the user
      // pick a letter for the blank tile. Otherwise move on.
      previousPositionOnBoard = board.findSlotFromTileId(tileId);
      if ($(ui.draggable).hasClass("blankTile") && !previousPositionOnBoard) {
        // var newLetter = openBlankTileDialog();  // NOT POSSIBLE
        // We cannot have this function return the new letter selected from the dialog because
        // there is no way to make a blocking dialog. Everything that needs to happen
        // after the user picks the letter for the blank tile must happen in some kind of
        // callback function supplied to the dialog.
        openBlankTileDialog($(ui.draggable), tileId, row, col);
      } else {
        board.addToSlot(tileId, letter, row, col);
        // Validate and display the word we have so far.
        validateWord();

        // Calculate the score and update the page.
        scrabbleScore.refresh();
      }
    }
  });

  // Make the rack droppable so the tiles can be moved from the board to the rack.
  $("#letterRack").droppable({
    activeClass: "dragHighlight",
    hoverClass: "hoverHighlight",
    tolerance: "touch",
    drop: function(event, ui) {
      var tileId, word, pos;

      ui.draggable.removeClass("letterTileOnBoard");
      ui.draggable.addClass("letterTileOnRack");

      // When a blank tile comes back on to the rack, change its image back to the
      // blank tile image.
      if ($(ui.draggable).hasClass("blankTile")) {
        $(ui.draggable).attr("src", scrabbleTiles["_"]["image"]);
      }

      tileId = ui.draggable.attr("id");
      pos = board.findSlotFromTileId(tileId);
      if (pos) {
        // The tile came from the board. Mark it off the board data structure.
        board.deleteFromSlot(pos[0], pos[1]);  // pos[0]: row, pos[1]: column

        // Snap the tile image to the back of the rack.
        $("#letterRack").append(ui.draggable);
        ui.draggable.css({"position": "relative", "top": "", "left": ""});

        // Validate and display the word we have so far.
        word = validateWord();

        // Calculate the score and update the page.
        scrabbleScore.refresh();
      } else {
        // User grabbed the tile and put it right back on the rack. Use the revert function
        // to put the tile in the same spot it came out of.
        ui.draggable.draggable("option", "revert", true);
      }
    }
  });

  // Set the board and tiles. Start the first word.
  restart();
});
