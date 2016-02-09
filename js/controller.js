// flat = f
// concave = c
// convex = v
// short = s
// medium = m
// long = l
conPiece = function(canvas, initial_position, side){
	var dimensions = {
		sm: 60,
		me: 120,
		la: 140
	};

	var getFact = function(_t){
		var fact;
		if(_t[1] === 's'){
			fact = dimensions.sm;
		}
		else if (_t[1] === 'm')
		{
			fact = dimensions.me;
		}
		else if (_t[1] === 'l')
		{
			fact = dimensions.la;
		}
		return fact;
	}
	var c=document.getElementById(canvas);
	var ctx=c.getContext("2d");
	var _t = side[0];
	var _t_end = {x: 0, y: 0};
	var _t_fact = getFact(_t)
	console.log(_t_fact)
	if(_t[0] === 'f'){
		// draw a flat line
		
			
				ctx.moveTo(initial_position.x, initial_position.y);
				ctx.lineTo(initial_position.x + _t_fact, initial_position.y);
				_t_end.x = initial_position.x + _t_fact;
				_t_end.y = initial_position.y
			
		
	}
	if(_t[0] === 'v'){
		// draw a flat line
		
			
			
				//ctx.moveTo(initial_position.x, initial_position.y);
				var _tb = rotate(scale(coreBez(initial_position), 270/_t_fact), radians(-90));
				var tf = {x: (-_tb.btm.ex + initial_position.x), y: (-_tb.btm.ey + initial_position.y)};
				console.log(tf)
				_tb = translate(_tb, tf)
				drawBez(ctx, _tb);
				_t_end.x = _tb.ori.x;
				_t_end.y = _tb.ori.y;
	}

	if(_t[0] === 'c'){
		// draw a flat line
		
			
			
				//ctx.moveTo(initial_position.x, initial_position.y);
				var _tb = rotate(scale(coreBez(initial_position), 270/_t_fact), radians(90));
				var tf = {x: (-_tb.ori.x + initial_position.x), y: (-_tb.ori.y + initial_position.y)};
				// console.log(tf)
				_tb = translate(_tb, tf)
				drawBez(ctx, _tb);
				_t_end.x = _tb.btm.ex;
				_t_end.y = _tb.btm.ey;
	}

		


	var _r = side[1];
	var _r_end = {x: 0, y: 0};
	var _r_fact = getFact(_r)
	if(_r[0] === 'f'){
		// draw a flat line
		
			// ctx.moveTo(initial_position.x + 100, initial_position.y);
				ctx.lineTo(_t_end.x, initial_position.y + _r_fact);
				_r_end.x = _t_end.x;
				_r_end.y = initial_position.y + _r_fact;
				
		
	}
	//the right side
	if(_r[0] === 'c'){

				var _rb = scale(coreBez(_t_end), 270/_r_fact)
				var rf = {x: (-_rb.ori.x + _t_end.x), y: (-_rb.ori.y + _t_end.y)};
				_rb = translate(_rb, rf)
				drawBez(ctx, _rb);
				_r_end.x = _rb.btm.ex;
				_r_end.y = _rb.btm.ey;
	}

	if(_r[0] === 'v'){
		// draw a flat line
		
			
			
				//ctx.moveTo(initial_position.x, initial_position.y);
				var _rb = flipX(scale(coreBez(_t_end), 270/_r_fact));
				var rf = {x: (-_rb.ori.x + _t_end.x ), y: (-_rb.ori.y + _t_end.y)};
				// console.log(tf)
				_rb = translate(_rb, rf)
				drawBez(ctx, _rb);
				_r_end.x = _rb.btm.ex;
				_r_end.y = _rb.btm.ey;
	}



	// the btm side
	var _b = side[2];
	var _b_end = {x:0, y:0}
	var _b_fact = getFact(_b)
	if(_b[0] === 'f'){
		// draw a flat line
		
			
				ctx.lineTo(_r_end.x - _b_fact, _r_end.y);
				_b_end.x = _r_end.x - _b_fact;
				_b_end.y = _r_end.y;
	
	}

	if(_b[0] === 'c'){
		// draw a flat line
		
			
			
				//ctx.moveTo(initial_position.x, initial_position.y);
				var _bb = rotate(scale(coreBez(initial_position), 270/_b_fact), radians(-90));
				var bf = {x: (-_bb.ori.x + _r_end.x), y: (-_bb.ori.y + _r_end.y)};
				console.log(bf)
				_bb = translate(_bb, bf)
				drawBez(ctx, _bb);
				_b_end.x = _bb.btm.x;
				_b_end.y = _bb.btm.y;
	}

	if(_b[0] === 'v'){
		// draw a flat line
		
			
			
				//ctx.moveTo(initial_position.x, initial_position.y);
				var _bb = rotate(scale(coreBez(initial_position), 270/_b_fact), radians(90));
				var bf = {x: (-_bb.btm.ex + _r_end.x), y: (-_bb.btm.ey + _r_end.y)};
				// console.log(tf)
				_bb = translate(_bb, bf)
				drawBez(ctx, _bb);
				_b_end.x = _bb.ori.x;
				_b_end.y = _bb.ori.y;
	}






	var _l = side[3];
	var _l_end = {x:0, y:0}
	var _l_fact = getFact(_l);
	if(_l[0] === 'f'){
		// draw a flat line
		
				ctx.moveTo(initial_position.x, initial_position.y + _l_fact);
				ctx.lineTo(initial_position.x, initial_position.y);
				_l_end.x = initial_position.x
				_l_end.y = initial_position.y
			
		
	}
	if(_l[0] === 'v'){

				var _lb = scale(coreBez(initial_position), 270/_l_fact)
				var lf = {x: (-_lb.ori.x + initial_position.x), y: (-_lb.ori.y + initial_position.y)};
				_lb = translate(_lb, lf)
				drawBez(ctx, _lb);
				_l_end.x = _lb.btm.ex;
				_l_end.y = _lb.btm.ey;
	}

	if(_r[0] === 'c'){
		// draw a flat line
		
			
			
				//ctx.moveTo(initial_position.x, initial_position.y);
				var _rb = flipX(scale(coreBez(_t_end), 270/_r_fact));
				var rf = {x: (-_rb.ori.x + _t_end.x ), y: (-_rb.ori.y + _t_end.y)};
				// console.log(tf)
				_rb = translate(_rb, rf)
				drawBez(ctx, _rb);
				_r_end.x = _rb.btm.ex;
				_r_end.y = _rb.btm.ey;
	}

	// else if(top === 'c')
	// {

	// }

	ctx.stroke();
}