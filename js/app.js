//declarar un array que representara los asientos de nuestro avion con false indicando que estos estan vacíos
//ocupado = true

var airlineSeats = [
false,
false,
false,
false,
false,
false,
false,
false;
false;
false;
];

//contador que nos ayudara a rastrear el numeroo de asientos ocupados
var busySeats = 0;

var paintSeats = function(array) {
	 var containerSeats = document.getElementById("seats");

	 for(var i=0, i < array.length; i++) {
	 	var seat = document.createElement("div");
	 	seat.className = "seats";

	 	//del primer elemento al cuarto, en nuestro arreglo va a ser primera clase, que seroa del indice 0 al 4
	 	if (i < 4) {
	 		seat.style.background = "purple";
	 	}else{
	 		seat.style.background = "yellow"
	 	 }
	 	 containerSeats.appendChild(seat);
	 	}
};

var reserve = function(){
	var btn = document.getElementById("btn");
	btn.addEventListener("click", chooseZone);
};

var chooseZone = function();{
	var choice = prompt("En que zona prefieres reservar \n 1.Primera Clase \n 2.Economica \n \n Por favor ingresa el numero de tu preferencia"
);

    if(choice ==1){
	checkFirstClassZone();
	}else if(choice == 2) {
	checkEconomicZone();
	}else {
		alert("Por favor ingresa un numero valido");
	}
};

var checkFirstClassZone = function (){
  var zone = "primera Clase";
   //recorre del elemento 0 al elemento 3 y verifica cuales estan disponibles
  for(var index = 0; index < 4; index++) {
  	if(airlineSeats[index] == false) {
  		airlineSeats[index] = true;
  		reserveSeat(index);
  		paintTicket(index, zone);
  		busySeats++;
  		//al reservar un asiento no necesitamos seguir recorriendo nuestro arreglo
  		//rompemos el for con break
  		break;
  	}else if(index == 3 && airlineSeats[index] ==true)
  	reasignEconomicZone();
  }
};

var checkEconomicZone = function() {
  var zone = "Economica";
  for(var index = 4; index < 10; index++){
  	if(airlineSeats[index] == false) {
  		airlineSeats[index] = true;
  		reserveSeat(index);
  		paintTicket(index, zone);
  		busySeats++;
  		break;
  	}else if(index == 9 && airlineSeats[index]== true){
  		reasignFirstClassZone(zone);
  	}
  }
};

var reserveSeat = function(indexToPaint){
var seat = document.getElementsByClassName("seats");
seat[indexToPaint].textContent = "ocupado";
};

var reasignEconomicZone = function(zone){
	if(busySeats == 10){
		noSeats();
		nextFlight();
	}else{
  var reasign = confirm(
  	"Ya no quedan asientos disponibles en " + zone + " :( \n Quieres reservar en zona Economica?"
  	);
if (reasign == true) {
	checkEconomicZone();
}else {
	nextFlight();
}	
}
};

var reasignFirstClassZone =function(zone){
	if (busySeats == 10){
		noSeats();
		nextFlight();
	} else {
	var reasign = confirm(
		"ya no quedan asientos en " + zone + " :( \n Quieres reservar eb primera clase?"
		);


	if (reasign == true){
		checkFirstClassZone();
	}else{
		nextFlight();
	}	
	}
};	

var paintTicket = function(index, zone){
	var containerTickets = document.getElementById("tickets");
	vat ticket = document.createElement("div");
	ticket.className = "seats";
	var title = document.createElement("p");
	var reservedSeating = document.createElement("p");
	var zoneClass = document.createElement("p");
	title.textContent = "PASE DE ABORDAR";
	reservedSeating.textContent = "N° de asiento; " +(index +1);
	zoneClass.textContent = zone;
	ticke.appendChild(title);
	ticket.appendChild(reservedSeating);
	ticket.appendChild(zoneClass);
	containerTickets.appendChild(ticket);
};

var nextFlight = function(){
	alert("nuestro proximo vuel sale en 3 horas!")
};

var noSeats= function(){
	alert("Lo sentimos, \n ya no quedan asientos disponibles en este avion.");
};
paintSeats(airlineSeats);
reserve();
