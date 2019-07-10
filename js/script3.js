document.write('задание 3<br/>');
document.write('чайник<br/>');
var Teapot = function(){
	this.information = function(){
		this.power = prompt('мощность чайника (Вт) = ');
		this.volume = prompt('объем чайника (л) = ');
		this.water = prompt('количество залитой воды (мл) = ');
		this.time_work();
	};
	this.work = function(){
		this.work_start = prompt('для вкл чайника нажмите 1\r\nдля выключения чайника нажмите 2');
		switch(this.work_start){
			case '1':
			this.information();
			break;
			case '2':
			break;
			default:
			alert('неверный ввод');
			this.work();
		}
	};
	this.time_work = function(){
		//t = m*c/w
		this.t = prompt('начальная температура воды = ');
		this.T = this.t - 90;
		this.time = ((this.water/1000) * 1.163 * Math.abs(this.T)) / this.power;
		
		this.result();
	};
	this.result = function(){
		document.write('Время закипания ' + this.water + 'мл воды' +  
					   '<br/>при мощности чайника ' + this.power +
					   '<br/>составляет --> ' + this.time + 'ч<br/>')
	};
};
var teapot = new Teapot();
teapot.work();