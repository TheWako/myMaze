window.onload = function(){
		function createBoard(x,y){
			var tab = [];
			for(var i=0;i<y;i++){
				var tab2 = [];
				for(var j=0;j<x;j++){
					var random = Math.floor((Math.random() * 2) + 1);			
					if(random == 1){
						tab2.push('&nbsp.&nbsp');
					}else{
						tab2.push('X');
					}
				}
				tab.push(tab2);
			}
			return tab;
		}

		function createPath(tab, x, y){
			var random = Math.floor((Math.random() * 4) + 1);
			var Tra = tab.length-1;
			var Trc = tab[0].length-1;
			if(x <= Tra && y < Trc){
				if(x==Tra){
					var RR = x;
					var TT = y+1;
					tab[RR][TT] = '<span style="color: red">O</span>';
				}else if(random == 3){
					if(typeof tab[x-1] !== 'undefined' && tab[x-1][y] == '&nbsp.&nbsp'){
						var RR = x-1;
						var TT = y;
						tab[RR][TT] = '<span style="color: red">O</span>';
					}else{
						createPath(tab, x, y);
					}
				}else if(random == 4){
					if(typeof tab[x][y-1] !== 'undefined' && tab[x][y-1] == '&nbsp.&nbsp'){
						var RR = x;
						var TT = y-1;
						if(typeof tab[RR] !== "undefined"){
							tab[RR][TT] = '<span style="color: red">O</span>';
						}
					}else{
						createPath(tab, x, y);
					}
				}else if(random == 1){
					var RR = x;
					var TT = y+1;
					tab[RR][TT] = '<span style="color: red">O</span>';
				}else{
					var RR = x+1;
					var TT = y;
					if(typeof tab[RR] !== "undefined"){
						tab[RR][TT] = '<span style="color: red">O</span>';
					}
				}
				createPath(tab, RR, TT);
			}else if(y==Trc && x <= Tra){
				var RR = x+1;
				var TT = y;
				if(typeof tab[RR] !== "undefined"){
						tab[RR][TT] = '<span style="color: red">O</span>';
				}
				createPath(tab, RR, TT);
			}
		}

		function createWall(tab,index,x,y){
			if(index=='notIndex'){
				tab[x+1][y+1] = 'X';
			}else{
				if(index==0){
					tab[x][y] = 'X';
				}else if(index==1){
					tab[x][y+1] = 'X';
				}else if(index==2){
					tab[x+1][y] = 'X';
				}else{
					tab[x+1][y+1] = 'X';
				}
			}
		}

		function labirynthe(x,y){
			var tab = createBoard(x,y);
			tab[0][0] = '<span style="color: red">O</span>';
			tab[y-1][x-1] = '&nbsp.&nbsp';
			createPath(tab, 0, 0);
			for(var i in tab){
				document.body.innerHTML += '<br>';
				for(var j in tab[i]){
					document.body.innerHTML += tab[i][j];
				}
			}
		}

		labirynthe(25,15);
}