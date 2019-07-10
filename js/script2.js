document.write('задание 2<br/>');
document.write('лампочка<br/>');
var Lamp = function(){
	//анные лампочки
	this.get = function(){
		this.power = prompt('мощность лампочки (Вт) = ');
		this.cost = prompt('стоимость электроэнергии = ');
		this.cost_elctro();
	};
	//работает или нет лампочка
	this.work = function(){
		//t = 3 day
		this.work_start = prompt('для вкл лампочки нажмите 1\r\nдля выключения лампочки нажмите 2');
		switch(this.work_start){
			case '1':
			this.get();
			break;
			case '2':
			break;
			default:
			alert('неверный ввод');
			this.work();
		}
	};
	//расход горения лампочки
	this.cost_elctro = function(){
		this.time = prompt('время горения лампочки (часы/день) = ');
		this.money = ((this.power / 1000) * this.time * 30 * this.cost);
		this.counter();
	};
	//счетчик
	this.counter = function(){
		document.write('мощность лампочки: ' + this.power + 'Вт' + '<br/>' +
					   'стоимость электроэнергии: ' + this.cost + 'р' + '<br/>' +
					   'время горения лампочки: ' + this.time  + ' час/день' + '<br/>' +
					   'cчет за электроэнергию: ' + this.money  + 'р' + '<br/>');
	};
};
var lamp = new Lamp();
lamp.work();