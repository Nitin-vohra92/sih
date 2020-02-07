
		function myfunction(){
            var input = document.getElementById('input');
            var list = document.getElementById('list');
            var str = input.value;
            var n = str.indexOf('welcome');
            
            if(n==-1)
            {
                var node = document.createElement("LI");
                var text = document.createTextNode("Offensive");
                node.appendChild(text);
            }
            else
            console.log('offensive');
            
            }