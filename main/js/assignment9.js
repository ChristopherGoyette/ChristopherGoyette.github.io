/*
Chris Goyette
hw 9
christopher_goyette@student.uml.edu
*/

// array given in PDF
var pieces = [
  {"letter":"A", "value":1,  "amount":9},
  {"letter":"A", "value":1,  "amount":9},
  {"letter":"A", "value":1,  "amount":9},
  {"letter":"A", "value":1,  "amount":9},
  {"letter":"A", "value":1,  "amount":9},
  {"letter":"A", "value":1,  "amount":9},
  {"letter":"A", "value":1,  "amount":9},
  {"letter":"A", "value":1,  "amount":9},
  {"letter":"A", "value":1,  "amount":9},
  {"letter":"B", "value":3,  "amount":2},
  {"letter":"B", "value":3,  "amount":2},
  {"letter":"C", "value":3,  "amount":2},
  {"letter":"C", "value":3,  "amount":2},
  {"letter":"D", "value":2,  "amount":4},
  {"letter":"D", "value":2,  "amount":4},
  {"letter":"D", "value":2,  "amount":4},
  {"letter":"D", "value":2,  "amount":4},
  {"letter":"E", "value":1,  "amount":12},
  {"letter":"E", "value":1,  "amount":12},
  {"letter":"E", "value":1,  "amount":12},
  {"letter":"E", "value":1,  "amount":12},
  {"letter":"E", "value":1,  "amount":12},
  {"letter":"E", "value":1,  "amount":12},
  {"letter":"E", "value":1,  "amount":12},
  {"letter":"E", "value":1,  "amount":12},
  {"letter":"E", "value":1,  "amount":12},
  {"letter":"E", "value":1,  "amount":12},
  {"letter":"E", "value":1,  "amount":12},
  {"letter":"E", "value":1,  "amount":12},
  {"letter":"F", "value":4,  "amount":2},
  {"letter":"F", "value":4,  "amount":2},
  {"letter":"G", "value":2,  "amount":3},
  {"letter":"G", "value":2,  "amount":3},
  {"letter":"G", "value":2,  "amount":3},
  {"letter":"H", "value":4,  "amount":2},
  {"letter":"H", "value":4,  "amount":2},
  {"letter":"I", "value":1,  "amount":9},
  {"letter":"I", "value":1,  "amount":9},
  {"letter":"I", "value":1,  "amount":9},
  {"letter":"I", "value":1,  "amount":9},
  {"letter":"I", "value":1,  "amount":9},
  {"letter":"I", "value":1,  "amount":9},
  {"letter":"I", "value":1,  "amount":9},
  {"letter":"I", "value":1,  "amount":9},
  {"letter":"I", "value":1,  "amount":9},
  {"letter":"J", "value":8,  "amount":1},
  {"letter":"K", "value":5,  "amount":1},
  {"letter":"L", "value":1,  "amount":4},
  {"letter":"L", "value":1,  "amount":4},
  {"letter":"L", "value":1,  "amount":4},
  {"letter":"L", "value":1,  "amount":4},
  {"letter":"M", "value":3,  "amount":2},
  {"letter":"M", "value":3,  "amount":2},
  {"letter":"N", "value":1,  "amount":6},
  {"letter":"N", "value":1,  "amount":6},
  {"letter":"N", "value":1,  "amount":6},
  {"letter":"N", "value":1,  "amount":6},
  {"letter":"N", "value":1,  "amount":6},
  {"letter":"N", "value":1,  "amount":6},
  {"letter":"O", "value":1,  "amount":8},
  {"letter":"O", "value":1,  "amount":8},
  {"letter":"O", "value":1,  "amount":8},
  {"letter":"O", "value":1,  "amount":8},
  {"letter":"O", "value":1,  "amount":8},
  {"letter":"O", "value":1,  "amount":8},
  {"letter":"O", "value":1,  "amount":8},
  {"letter":"O", "value":1,  "amount":8},
  {"letter":"O", "value":1,  "amount":8},
  {"letter":"P", "value":3,  "amount":2},
  {"letter":"P", "value":3,  "amount":2},
  {"letter":"Q", "value":10, "amount":1},
  {"letter":"R", "value":1,  "amount":6},
  {"letter":"R", "value":1,  "amount":6},
  {"letter":"R", "value":1,  "amount":6},
  {"letter":"R", "value":1,  "amount":6},
  {"letter":"R", "value":1,  "amount":6},
  {"letter":"R", "value":1,  "amount":6},
  {"letter":"S", "value":1,  "amount":4},
  {"letter":"S", "value":1,  "amount":4},
  {"letter":"S", "value":1,  "amount":4},
  {"letter":"S", "value":1,  "amount":4},
  {"letter":"T", "value":1,  "amount":6},
  {"letter":"T", "value":1,  "amount":6},
  {"letter":"T", "value":1,  "amount":6},
  {"letter":"T", "value":1,  "amount":6},
  {"letter":"T", "value":1,  "amount":6},
  {"letter":"T", "value":1,  "amount":6},
  {"letter":"U", "value":1,  "amount":4},
  {"letter":"U", "value":1,  "amount":4},
  {"letter":"U", "value":1,  "amount":4},
  {"letter":"U", "value":1,  "amount":4},
  {"letter":"V", "value":4,  "amount":2},
  {"letter":"V", "value":4,  "amount":2},
  {"letter":"W", "value":4,  "amount":2},
  {"letter":"W", "value":4,  "amount":2},
  {"letter":"X", "value":8,  "amount":1},
  {"letter":"Y", "value":4,  "amount":2},
  {"letter":"Y", "value":4,  "amount":2},
  {"letter":"Z", "value":10, "amount":1},
  {"letter":"_", "value":0,  "amount":2},
  {"letter":"_", "value":0,  "amount":2}
];

// Start with 7 tiles (values with be changed later)
var game_tiles = [
  {"id": "piece0", "letter": "A"},
  {"id": "piece1", "letter": "B"},
  {"id": "piece2", "letter": "C"},
  {"id": "piece3", "letter": "D"},
  {"id": "piece4", "letter": "E"},
  {"id": "piece5", "letter": "F"},
  {"id": "piece6", "letter": "G"}
]

// spaces available on the board
var game_board = [
  {"id": "drop0",  "tile": "empty"},
  {"id": "drop1",  "tile": "empty"},
  {"id": "drop2",  "tile": "empty"},
  {"id": "drop3",  "tile": "empty"},
  {"id": "drop4",  "tile": "empty"},
  {"id": "drop5",  "tile": "empty"},
  {"id": "drop6",  "tile": "empty"},
  {"id": "drop7",  "tile": "empty"},
  {"id": "drop8",  "tile": "empty"},
  {"id": "drop9",  "tile": "empty"},
  {"id": "drop10", "tile": "empty"},
  {"id": "drop11", "tile": "empty"},
  {"id": "drop12", "tile": "empty"},
  {"id": "drop13", "tile": "empty"},
  {"id": "drop14", "tile": "empty"}
]
var globalword;
var globalscore = 0;
var globaltotalscore = 0;
// ************************************* read the board ********************************
// read the board for tiles on it and total the value(s)
function get_word_off_board_and_calc_values() {
  var word = "";
  var score = 0;

  // go through the board and figure out the letter and values
  for(var i = 0; i < 15; i++) {
    if(game_board[i].tile != "empty") {
      word += get_letter(game_board[i].tile);
      score += get_tile_value(game_board[i].tile);
      globalword = word;
      globalscore = score;
    }
  }

  // factor in if its a double word score (a number plus itself is  number * 2)
  score += (score * is_double_word_score());

  // update the display
  $("#score").html(score);
  if(score > 0) {
    $("#word").html(word);
    return;
  }
  $("#word").html("(empty)");
}

// ***************************** funtions to get values and letter of tile ************************
function get_tile_value(given_id) {
  // First figure out which letter we have.
  var letter = get_letter(given_id);
  var score = 0;

  // for each object in the array of tiles
  for(var i = 0; i < 100; i++) {
    // Get an object to look at.
    var temp = pieces[i];
    // if its the right letter on the tile of the temp object we just made
    if(temp.letter == letter) {
      // gets its value
      score = temp.value;
      // check to see if its on a double letter score tile
      score += (score * is_double_letter_score(given_id));
      return score;
    }
  }

  // something went wrong
  return -1;
}
// get the letter of the tile given its position on the board
function get_letter(given_id) {
  // known 7 letters given therefore hardcoded
  for(var i = 0; i < 7; i++) {
    if(game_tiles[i].id == given_id) {
      // return corresponding letter
      return game_tiles[i].letter;
    }
  }

  // oops
  return -1;
}

// ********************************** functions for getting double word or letter  *********************
// figure out double word or double value score
function is_double_word_score() {
  return ( (game_board[2].tile != "empty") || (game_board[12].tile != "empty") );
}
// are we on a double letter score tile?
function is_double_letter_score(given_id) {
  var dropID = get_boardID_of_tile(given_id);
  return (dropID == "drop6" || dropID == "drop8");
}

// ******************************* getters for ID and index of ID's ******************************
// find the position (element index) on the board, given the board ID
function get_board_position(given_id) {
  for(var i = 0; i < 15; i++) {
    if(game_board[i].id == given_id) {
      return i;
    }
  }
}
// returm board id given tile id
function get_boardID_of_tile(given_id) {
  for(var i = 0; i < 15; i++){
    if(game_board[i].tile == given_id) {
      return game_board[i].id;
    }
  }

  // oops
  return -1;
}

// **************************** initializing the tile rack tiles and make draggable ****************************
// initializes random tiles
// reference jason downing
function init_scrabble_tiles() {
  // all the tiles of interest have the same beginning part of the file name
  var base_url = "img/scrabble/Scrabble_Tile_";
  var random_num = 1;
  var piece = "<img class='pieces' id='piece" + i + "' src='" + base_url + random_num + ".jpg" + "'></img>";
  var piece_ID = "";
  var what_piece = "";

  // known number of tiles
  for(var i = 0; i < 7; i++) {
    // we have 27 pieces, so 0 to 26
    var loop = true;
    while(loop == true){
      random_num = getRandomInt(0, 100);

      // update the quantity
      if(pieces[random_num].amount != 0) {
        loop = false;
        pieces[random_num].amount--;
      }
    }



    // making a img class for easy apendature
    piece = "<img class='pieces' id='piece" + i + "' src='" + base_url + pieces[random_num].letter + ".jpg" + "'></img>";
    piece_ID = "#piece" + i;
    game_tiles[i].letter = pieces[random_num].letter;

    // stackoverflow
    var pos = $("#the_rack").position();

    // just math to position and space the locations on the rack
    var img_left = -165 + (50 * i);
    var img_top = -130;

    // stackoverflow
    // append piece to our rack section on the html
    $("#rack").append(piece);

    // this is where our earlier math comes into play
    $(piece_ID).css("left", img_left).css("top", img_top).css("position", "relative");

    // make draggable
    $(piece_ID).draggable();
  }
}
// rand() reference stackoverflow
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ************************************************ makes positions on the page droppable *****************
// make images droppable
// reference jason downing
function make_droppable() {
  var img_url = "img/scrabble/Scrabble_Droppable.png";
  var drop = "<img class='droppable' id='drop" + i + "' src='" + img_url + "'></img>";
  var drop_ID = "#drop" + i;

  for(var i = 0; i < 15; i++) {
    drop = "<img class='droppable' id='drop" + i + "' src='" + img_url + "'></img>";
    drop_ID = "#drop" + i;

    // get the position of the board
    var pos = $("#the_board").position();

    // more math to figure out the droppable areas
    var img_left = 0;
    var img_top = -125;

    // add img to the html
    $("#board").append(drop);

    // position the img in relation to the board
    $(drop_ID).css("left", img_left).css("top", img_top).css("position", "relative");

    // Make the img droppable
    $(drop_ID).droppable({
      // URL: https://jqueryui.com/droppable/#default
      // var to hold the dropped piece
      drop: function(event, ui) {
        // https://stackoverflow.com/questions/5562853/jquery-ui-get-id-of-droppable-element-when-dropped-an-item
        var draggableID = ui.draggable.attr("id");
        var droppableID = $(this).attr("id");

        // verify was dropped on board
        game_board[get_board_position(droppableID)].tile = draggableID;

        // calculate the total of the dropped tiles
        get_word_off_board_and_calc_values();
      },
      // if the tile was moved off the board
      out: function(event, ui) {
        var draggableID = ui.draggable.attr("id");
        var droppableID = $(this).attr("id");

        // update the game board
        game_board[get_board_position(droppableID)].tile = "empty";

        // update the word and value
        get_word_off_board_and_calc_values();
      }
    });
  }
}

// ***************************************** submit word ****************************************

var dict = {};

// given in the hw PDF
// URL: http://linuxcommando.blogspot.com/2008/05/how-to-convert-text-files-to-all-upper.html
$.get( "files/dictionary.txt", function( txt ) {
  console.log("dictionary snagged");
    // Get an array of all the words
    var words = txt.split( "\n" );

    // add words as index
    for ( var i = 0; i < words.length; i++ ) {
        dict[ words[i] ] = true;
    }
});


function submit() {
  var bool_match = false;

  // test to see if its in the dictionary. for some reason "undefined" is considered true
  bool_match = (typeof dict[ globalword.toLowerCase() ]) == "undefined" ;
  if( (typeof dict[ globalword.toLowerCase() ]) == "undefined" ) {
    bool_match = false;
  }
  else {
    bool_match = true;
  }
  // do corresponding work
  if ( bool_match ) {
    // update total score
    globaltotalscore += globalscore;
    globalscore = 0;
    $("#totalscore").html(globaltotalscore);
    $("#score").html(globalscore);
    $("#word").html("(empty)");
    globalword = "";
    reset();
    return;
  }
  else {
    alert("Not a word");
  }
}

function reset() {
  // Remove rack tiles
  for(var i = 0; i < 7; i++) {
    var tileID = '#' + game_tiles[i].id;
    $(tileID).draggable("destroy");
    $(tileID).remove();
  }
  // remove board positions
  for(var i = 0; i < 15; i++) {
    var boardID = '#' + game_board[i].id;
    $(boardID).droppable("destroy");
    $(boardID).remove();
  }
  // make new ones
  init_scrabble_tiles();
  make_droppable();

  return;
}
