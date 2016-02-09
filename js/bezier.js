
// var c=document.getElementById("myCanvas");
// var ctx=c.getContext("2d");
// ctx.beginPath();
// ctx.moveTo(100,50);
// ctx.quadraticCurveTo(60, 190, 100, 150)
// ctx.bezierCurveTo(165,87,165,278,100,220);
// ctx.quadraticCurveTo(60, 190, 120, 320)
// ctx.stroke();

//contains the basic bezier curve definition for convex puzzle edge with inset groove.
//defines several functions to transform the bezier curve

coreBez = function(starting_point){
	// console.log("drawing");
	return {
		ori: starting_point,
		tp: {
				cx: starting_point.x - 40,
				cy: starting_point.y + 140,
				ex: starting_point.x,
				ey: starting_point.y+100
		},

		indent: {
				c1x: starting_point.x + 65,
				c1y: starting_point.y + 37,
				c2x: starting_point.x + 65,
				c2y: starting_point.y + 228,
				 ex: starting_point.x,
				 ey: starting_point.y + 170 

		},
		btm: {
				cx: starting_point.x - 40,
				cy: starting_point.y + 140,
				ex: starting_point.x + 20,
				ey: starting_point.y+270
			}
		};

};

//returns the scaled version of the p_bez
scale = function(p_bez, factor){
	// console.log("")
	return {
		ori: {x: p_bez.ori.x/factor, y:p_bez.ori.y/factor},
		tp: {
				cx: p_bez.tp.cx/factor,
				cy: p_bez.tp.cy/factor,
				ex: p_bez.tp.ex/factor,
				ey: p_bez.tp.ey/factor
		},

		indent: {
				c1x: p_bez.indent.c1x/factor,
				c1y: p_bez.indent.c1y/factor,
				c2x: p_bez.indent.c2x/factor,
				c2y: p_bez.indent.c2y/factor,
				 ex: p_bez.indent.ex/factor,
				 ey: p_bez.indent.ey/factor

		},
		btm: {
				cx: p_bez.btm.cx/factor,
				cy: p_bez.btm.cy/factor,
				ex: p_bez.btm.ex/factor,
				ey: p_bez.btm.ey/factor
		}

		};

};

translate = function(p_bez, factor){
	// console.log("")
	return {
		ori: {x: p_bez.ori.x + factor.x, y:p_bez.ori.y +factor.y},
		tp: {
				cx: p_bez.tp.cx+factor.x,
				cy: p_bez.tp.cy+factor.y,
				ex: p_bez.tp.ex+factor.x,
				ey: p_bez.tp.ey+factor.y
		},

		indent: {
				c1x: p_bez.indent.c1x+factor.x,
				c1y: p_bez.indent.c1y+factor.y,
				c2x: p_bez.indent.c2x+factor.x,
				c2y: p_bez.indent.c2y+factor.y,
				 ex: p_bez.indent.ex+factor.x,
				 ey: p_bez.indent.ey+factor.y

		},
		btm: {
				cx: p_bez.btm.cx+factor.x,
				cy: p_bez.btm.cy+factor.y,
				ex: p_bez.btm.ex+factor.x,
				ey: p_bez.btm.ey+factor.y
		}

		};

};

flipX = function(p_bez, line){
	if(!line){
		line = p_bez.ori.x;
	}
	return {
		ori: {x: p_bez.ori.x, y:p_bez.ori.y},
		tp: {
				cx: 2*line - p_bez.tp.cx,
				cy: p_bez.tp.cy,
				ex: 2*line - p_bez.tp.ex,
				ey: p_bez.tp.ey
		},

		indent: {
				c1x: 2*line - p_bez.indent.c1x,
				c1y: p_bez.indent.c1y,
				c2x: 2*line - p_bez.indent.c2x,
				c2y: p_bez.indent.c2y,
				 ex: 2*line - p_bez.indent.ex,
				 ey: p_bez.indent.ey

		},
		btm: {
				cx: 2*line - p_bez.btm.cx,
				cy: p_bez.btm.cy,
				ex: 2*line - p_bez.btm.ex,
				ey: p_bez.btm.ey
		}

		};

}
flipY = function(p_bez, line){
	if(!line){
		line = p_bez.ori.y;
	}
	return {
		ori: {x: p_bez.ori.x,  y: 2*line - p_bez.ori.y},
		tp: {
				cx: p_bez.tp.cx,
				cy: 2*line - p_bez.tp.cy,
				ex: p_bez.tp.ex,
				ey: 2*line - p_bez.tp.ey
		},

		indent: {
				c1x: p_bez.indent.c1x,
				c1y: 2*line - p_bez.indent.c1y,
				c2x: p_bez.indent.c2x,
				c2y: 2*line - p_bez.indent.c2y,
				 ex: p_bez.indent.ex,
				 ey: 2*line - p_bez.indent.ey

		},
		btm: {
				cx: p_bez.btm.cx,
				cy: 2*line - p_bez.btm.cy,
				ex: p_bez.btm.ex,
				ey: 2*line - p_bez.btm.ey
		}

		};
}

rotatePoint = function(point, theta){
	// console.log(point.x*Math.cos(theta) + point.y*Math.sin(theta))
	return {
		x: (point.x*Math.cos(theta) + point.y*Math.sin(theta)),
		y: (point.y*Math.cos(theta) - point.x*Math.sin(theta)) 
	};
}
//returns the rotated version of the p_bez
rotate = function(p_bez, angle){

	tc = rotatePoint({x: p_bez.tp.cx, y: p_bez.tp.cy}, angle);
	te = rotatePoint({x: p_bez.tp.ex, y: p_bez.tp.ey}, angle);
	ic1 = rotatePoint({x: p_bez.indent.c1x, y: p_bez.indent.c1y}, angle);
	ic2 = rotatePoint({x: p_bez.indent.c2x, y: p_bez.indent.c2y}, angle);
	ie = rotatePoint({x: p_bez.indent.ex, y: p_bez.indent.ey}, angle);
	bc = rotatePoint({x: p_bez.btm.cx, y: p_bez.btm.cy}, angle);
	be = rotatePoint({x: p_bez.btm.ex, y: p_bez.btm.ey}, angle);
	// console.log(tc)
	return {
	ori: rotatePoint(p_bez.ori, angle),
	tp: {
				cx: tc.x,
				cy: tc.y,
				ex: te.x,
				ey: te.y
		},
	indent: {
				c1x: ic1.x,
				c1y: ic1.y,
				c2x: ic2.x,
				c2y: ic2.y,
				 ex: ie.x,
				 ey: ie.y

		},
		btm: {
				cx: bc.x,
				cy: bc.y,
				ex: be.x,
				ey: be.y
		}
	};

};

radians = function(degrees) {
  return degrees * Math.PI / 180;
};


