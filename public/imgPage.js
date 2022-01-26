
var num = 1;
var tmpDate = new Date();
var imgPop = document.getElementById("photo");
function gallery(direct) {
	if(direct){
		if(num == 3) return;
		num++;
		console.log(num);
	}
	else{
		if(num == 1) return;
		num--;
	}
	imgPop.setAttribute('src', 'images/cat' + num + '.jpg');
	console.log(imgPop);
}
