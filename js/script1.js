document.write('задание 1<br/>');
document.write('калькулятор<br/>');
//калькулятор
var Calc = function(){
	this.get = function(){
		//this.a = +prompt('a = ');
		//this.b = +prompt('b = ');
		//this.oper = prompt('operation?+-/*');
		var str = prompt('введитевыражение для вычисления');
		for(i = 0; i < str.length; i++){
			str = str.replace(/[^\d\+]/g, '');
			if(str[i] == '*' || str[i] == '/' || str[i] == '+' || str[i] == '-'){
				var j = i;
				this.oper = str[i];
				str = str.split(str[i]);
				this.a = parseInt(str[0]);
				this.b = parseInt(str[1]);				
			}
		}		
		this.operation();
	};
	this.operation = function(){
		switch(this.oper) {
			case '+' : this.rezult = this.a+this.b;break;
			case '-' : this.rezult = this.a-this.b;break;
			case '*' : this.rezult = this.a*this.b;break;
			case '/' : this.rezult = this.a/this.b;break;
			default: this.rezult = 0;
		}

		this.result();
	};
	this.result = function(){
		document.write(	this.a + ' ' + 
				this.oper + ' ' + 
				this.b + ' = ' + 
				this.rezult + '<br/>');
	};
};

var calc = new Calc();
calc.get();
