function drag (id){

	var obj =  document.getElementById(id);
	var disX = 0;
	var disY = 0;
	obj.onmousedown = function(){
		disX = ev.pageX - obj.offsetLeft;
		disY = ev.pageY - obj.offsetTop;
		document.onmousemove = function(ev){
			obj.style.left = ev.clienrX  - disX + 'px';
			obj.style.top = ev.clienrY  - disY + 'px';

			obj.style.left = ev.disrX  - disX + 'px';
			obj.style.top = ev.disrY  - disY + 'px';
		}
	}

}