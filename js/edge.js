var norm = function(point1, point2){
	return Math.sqrt(Math.pow(point2.x - point1.x, 2)+Math.pow(point2.y - point1.y, 2));
}
var theta = function(point1, point2){
	var th = Math.atan((point2.x- point1.x)/(point2.y-point1.y));
	
	if (point2.x-point1.x < 0){
		
		if(point2.y - point1.y < 0){
			return th + Math.PI;
		}
		else{
			return  th ;
		}
	}
	else{
		if(point2.y - point1.y < 0){
			return Math.PI  + th;
		}
		else{
			return + th ;
		}

	}

}

var edge = function(point1, point2, orientation){
	var fact = norm(point1, point2);
	var angle = theta(point1, point2)
	if(orientation === 'c'){
		var _tb = rotate(flipX(scale(coreBez(point1), 270/fact)), (Math.atan(20/270) + angle));
	}
	else{
		var _tb = rotate(scale(coreBez(point1), 270/fact), -Math.atan(20/270) + angle);
	}
	var tf = {x: (-_tb.ori.x + point1.x), y: (-_tb.ori.y + point1.y)};
	_tb = translate(_tb, tf)
	return _tb;
}

// var fEdge = function(point1, point2){

// }

