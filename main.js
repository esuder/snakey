function snakeWildMorph(){
	document.getElementById('snakedrawing').src="img/snakedrawingwildtype.png";
}

function snakeAlbinoMorph(){
	document.getElementById('snakedrawing').src="img/snakedrawingalbino.png";
}

function snakeLeucisticMorph(){
	document.getElementById('snakedrawing').src="img/snakedrawingleucistic.png";
}

function snakeCondaMorph(){
	document.getElementById('snakedrawing').src="img/snakedrawingconda.png";
}

function snakeBlep(){
    if (document.getElementById("snakeblep").style.visibility === "visible") {
    	document.getElementById("snakeblep").style.visibility = "hidden";
  	} else {
  		document.getElementById("snakeblep").style.visibility = "visible";
  	}
}

function snakeHat(){
    if (document.getElementById("snakehat").style.visibility === "visible") {
    	document.getElementById("snakehat").style.visibility = "hidden";
  	} else {
  		document.getElementById("snakehat").style.visibility = "visible";
  	}
}