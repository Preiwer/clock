let time 			=document.querySelector('.time');
let date			=document.querySelector(".date");

my_time=setInterval(()=>{
	let now			=new Date()
	time.innerHTML	=`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
	now.setMonth(1)
	date.innerHTML	=`${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`;
},1000);