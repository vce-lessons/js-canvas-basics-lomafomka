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
	ctx.fillRect(100,100,160,120);

}