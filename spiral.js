function print( matrix ) {
	console.log( JSON.stringify( matrix ).slice(1,-1).replace(/\],/g,"]\n") );
}

function spiral ( n ){
	var res = [];
	var even = n%2 == 0;
	var center = {x:parseInt(n*0.5) - 1,y:parseInt(n*0.5)};
	if( !even ) center.x++;
	center = JSON.stringify(center);

	for (var i = 0; i < n; i++) {
		res.push([]);
	}
	var position = { x: 0, y: 0 };
	var counter = 1;
	var end = false;
	while( !end ){
		//EAST
		while( position.x != n - position.y - 1 ){
			res[position.y][position.x] = counter;
			counter++;
			position.x++;
		}
		res[position.y][position.x] = counter;
		counter++;
		end = ( JSON.stringify(position) == center );
		position.y++;
		if( !end ){
			//SOUTH
			while( position.x != position.y ){
				res[position.y][position.x] = counter;
				counter ++;
				position.y++;
			}
			res[position.y][position.x] = counter;
			counter++;
			position.x--;
			//WEST
			while( position.x != n - position.y - 1){
				res[position.y][position.x] = counter;
				counter ++;
				position.x--;
			}
			res[position.y][position.x] = counter;
			counter++;
			end = ( JSON.stringify(position) == center );
			position.y--;
			if( !end ){
				//NORTH
				while( position.x != position.y){
					res[position.y][position.x] = counter;
					counter ++;
					position.y--;
				}
				position.y++;
				position.x++;
			}
		}
	}

	print(res)
}

spiral(2);
spiral(3);
spiral(4);