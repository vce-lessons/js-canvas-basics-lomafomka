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
	ctx.strokeStyle = 'rgb(0,0,0)'
	ctx.beginPath()
	ctx.moveTo(innerWidth/2,innerHeight/3);
	ctx.lineTo(939,400);
		ctx.lineTo(850,400);
			ctx.lineTo(850,484);
				ctx.lineTo(939,484);
	ctx.stroke();


}