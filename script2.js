var clock = document.getElementById("clock");
Number.prototype.zeroLead = function() {
	var s = String(this);
	while (s.length < 2) {
		s = "0" + s;
	}
	return s;
}

function updateTime() {
	var now = new Date();
	
	clock.innerHTML = now.getHours().zeroLead() + ":" + now.getMinutes().zeroLead();
	var seconds = now.getSeconds();
	
	if (seconds < 30 ) {
		document.getElementsByClassName("progress-circle")[0].className = "progress-circle s" + seconds;
		document.getElementsByClassName("left-half-clipper")[0].style='position:absolute;';
	} else {
		document.getElementsByClassName("progress-circle")[0].className = "progress-circle over-30s s" + seconds;
		document.getElementsByClassName("left-half-clipper")[0].style='position:relative;';
	}
}
setInterval("updateTime()", 100);
