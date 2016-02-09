drawBez = function(ctx, bez){
	
	ctx.moveTo(bez.ori.x, bez.ori.y);
	b = bez;
	ctx.quadraticCurveTo(b.tp.cx, b.tp.cy, b.tp.ex, b.tp.ey)
	ctx.bezierCurveTo(b.indent.c1x, b.indent.c1y, b.indent.c2x, b.indent.c2y, b.indent.ex, b.indent.ey);
	ctx.quadraticCurveTo(b.btm.cx, b.btm.cy, b.btm.ex, b.btm.ey)
	// ctx.stroke();
	return ctx;

}