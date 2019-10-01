let canv = document.createElement('canvas');
let ctx = canv.getContext('2d');
canv.width = window.innerWidth;
canv.height = window.innerHeight;
document.body.appendChild(canv);

init();

function init() {

	draw();
	loop();
}

function loop() {
 draw();

 requestAnimationFrame(loop);

}

function draw() {
	ctx.strokeStyle = 'rgb(215,215,55)'
	 ctx.beginPath();
	 //В задании сказано с координатой 30 30, но у меня круг тогда на половину. 
	ctx.arc(30, 30, 50, 0, Math.PI * 2,);
	
	ctx.stroke();
}