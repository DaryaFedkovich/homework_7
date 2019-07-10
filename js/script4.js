document.write('задание 4<br/>');
document.write('автомобиль<br/>');
var Car = function(){
	this.information = function(){
		this.model_car = prompt('введите марку автомобиля');
		this.number = prompt('введите номер автомобиля');
		this.work_engine();
	};
	this.work_engine = function(){
		this.work_start = prompt('для вкл двигателя нажмите 1\r\nдля выключения двигателя нажмите 2');
		switch(this.work_start){
			case '1':
			this.work_transmission();
			break;
			case '2':
			this.distance();
			break;
			default:
			alert('неверный ввод');
			this.work_engine();
		}
	};	
	this.work_transmission = function(){
		this.transmission = prompt('включение передачи\r\n1 - передача Вперед\r\n2 - пердача Назад\r\n3 - Нейтральная');
		switch(this.transmission){
			case '1':
			this.forward();
			break;
			case '2':
			this.back();
			break;
			case '3':
			this.work_engine();
			break;
			default:
			alert('неверный ввод');
			this.work_transmission();
		}
	};
	this.forward = function(){
		this.speed1 = prompt('скорость движения автомобиля Вперед');//40
		this.t1 = 15; //minute		
		this.work_transmission();
		
	};
	this.back = function(){
		this.speed2 = prompt('скорость движения автомобиля Назад');//15
		this.t2 = 4; //minute		
		this.work_transmission();

	};
	this.distance = function(){
		var arr = [],
			sum = 0;
		this.s1 = this.speed1 * (this.t1 / 60);
		this.s2 = this.speed2 * (this.t2 / 60);
		//this.s = this.s1 + this.s2;
		arr.push(this.s1);
		arr.push(this.s2);

		for(i = 0; i < arr.length; i++){
			sum = sum + arr[i]; 
		}
		this.Sum = sum;
		this.result();
	};
	this.result = function(){
		document.write('Расстояние пройденное автомобилем ' + this.model_car + ' '+ this.number +
					   ' = ' + this.Sum + '<br/>');
	};
};
var car = new Car();
car.information();