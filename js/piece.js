var Piece = function(ctx, iPosition, dimensions, orientations){
	var that = Object.create(Piece.prototype);
	var position = iPosition;
	that.setPosition = function(nPosition){
		position = nPosition
	}
	that.render = function(){
		var _tr = {x: position.x +dimensions[0], y: position.y};
		var _tl = {x: position.x , y: position.y};
		var _br = {x: position.x + dimensions[0] , y: position.y + dimensions[1]};
		var _bl = {x: position.x  , y: position.y + dimensions[1]};
		ctx.moveTo(position.x, position.y)
		if(orientations[0] == 'f'){
				ctx.lineTo(_tr.x, _tr.y);
		}
		else 
		{
			drawBez(ctx, edge(_tl, _tr, orientations[0]));
		}
		


		if(orientations[1] == 'f'){
			ctx.lineTo(_br.x, _br.y);
		}
		else 
		{
			drawBez(ctx, edge(_tr, _br, orientations[1]));
		}


		if(orientations[2] == 'f'){
			ctx.lineTo(_bl.x, _bl.y);
		}
		else 
		{
			drawBez(ctx, edge(_br, _bl, orientations[2]));
		}

		if(orientations[3] == 'f'){
			ctx.lineTo(_tl.x, _tl.y);
		}
		else 
		{
			drawBez(ctx, edge(_bl, _tl, orientations[3]));
		}
		
	}
	
	return that;



}