var setup = function(){
	var c=document.getElementById("myCanvas");

	var ctx=c.getContext("2d");

	sp = {x: 100, y: 100};

	osp = {x: 240, y:110}
	// f = edge(sp, osp, 'c')
	sp3 = {x: 140, y: 140};
	// console.log(e)
	sp4  = {x: 100, y: 150};

	var p = Piece(ctx, sp, [50, 50], 'fvvf');
	p.render();

	var p2 = Piece(ctx, osp, [50, 50], 'cvvf');
	p2.render();

	    
	// ctx.closePath();
	ctx.stroke();
	// // console.log(c)
	// drawBez("myCanvas", oc)

	// ctx.beginPath();
	// sp = {x: 100, y: 50};
	// c = coreBez(sp);

	// b = scale(c, 1.2);
	// // console.log(b);

	// ctx.moveTo(b.ori.x, b.ori.y);
	// ctx.quadraticCurveTo(b.top.cx, b.top.cy, b.top.ex, b.top.ey)
	// ctx.bezierCurveTo(b.indent.c1x, b.indent.c1y, b.indent.c2x, b.indent.c2y, b.indent.ex, b.indent.ey);
	// ctx.quadraticCurveTo(b.bottom.cx, b.bottom.cy, b.bottom.ex, b.bottom.ey)
	// ctx.stroke();


	// var c=document.getElementById("myCanvas");
	// var ctx=c.getContext("2d");
	// ctx.beginPath();
	// ctx.moveTo(100,50);
	// ctx.quadraticCurveTo(60, 190, 100, 150)
	// ctx.bezierCurveTo(165,87,165,278,100,220);
	// ctx.quadraticCurveTo(60, 190, 120, 320)
	// ctx.stroke();

};


var update = function(){
	
};

var render = function(){

};

(function run(){
	setup();
})();



