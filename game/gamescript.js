var letters =  ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var flipvalues=[];
var flipids=[];
var tilesflipped = 0;

Array.prototype.shufflearray = function () {
	var start = this.length-1	;
	var end, temp;
	while(start>0){
		end = Math.floor(Math.random()*(start));
		temp = this[end];
		this[end]= this[start];
		this[start]=temp;
		start--;
	}
};

function newBoard(){
	tilesflipped=0;
	var output='';
	letters.shufflearray();
    console.log("come in new board "+letters);
	for (var i = 0; i < letters.length; i++) {
		output += '<div id= "tile_'+i+'" onclick="drawfliptile(this,\''+letters[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML =output;
}

function drawfliptile(tile, value){
    console.log("clicked value is "+value);
	if(tile.innerHTML=="" && flipvalues.length<2){
		tile.style.background = '#fff';
		tile.innerHTML = value;
		if(flipvalues.length==0){
			flipvalues[0] =value;
			flipids[0]= tile.id;
		}
		else if(flipvalues.length==1){
			flipvalues[1]=value;
			flipids[1] =tile.id;
			if(flipvalues[0]==flipvalues[1]){
				tilesflipped +=2;
				flipvalues =[];
				flipids=[];

				if(tilesflipped == letters.length){
					alert("done");
					document.getElementById("memory_board").innerHTML ="";
					newBoard();
				}
			}
			else{
				function flip2back(){
                    console.log("come in the flip2back");
					var tile1 = document.getElementById(flipids[0]);
					var tile2 = document.getElementById(flipids[1]);
					tile1.style.background ='url(images/box.png) no-repeat';
					tile1.innerHTML = "";
					tile2.style.background='url(images/box.png) no-repeat';
					tile2.innerHTML="";		
					flipvalues=[];
					flipids=[];
				}
				setTimeout(flip2back,700);
			}
		}
	}
}

window.onload = function(){
	newBoard();
}