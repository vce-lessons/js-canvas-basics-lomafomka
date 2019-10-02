let canv = document.createElement('canvas');
let ctx = canv.getContext('2d');
canv.width = window.innerWidth;
canv.height = window.innerHeight;
document.body.appendChild(canv);
let x = 30;
let y = 30;

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
	ctx.clearRect(0,0,window.innerWidth,window.innerWidth);
	ctx.strokeStyle = 'rgb(0,0,0)';
	 ctx.beginPath();
	 //В задании сказано с координатой 30 30, но у меня круг тогда на половину. 
	ctx.arc(x++, y++, 20, 0, Math.PI * 2,);
	
	ctx.fill();
}