function Destination(country, city, season, notes, id){
  this.country = country;
  this.city = city;
  this.season = season;
  this.notes = notes;
  this.id = id;
}

var seattle = new Destination("USA", "Seattle", "Summer", "What a great, but grey place to live.", 1);
var bali = new Destination("Indonesia", "Bali", "Sunny", "The island life, right?", 2);
var santaBarbara = new Destination("USA", "Santa Barbara", "Fall", "Nice beach town.", 3);
var chicago = new Destination("USA", "Chicago", "Winter", "It's really cold there, don't go.", 4);
var sanFrancisco = new Destination("USA", "SF", "Fog", "$10,000 for one room.", 5);
var destinations = [
  seattle, bali, santaBarbara, chicago, sanFrancisco
];


$(document).ready(function(){
  for (var i = 0; i < destinations.length; i++){
    $(".destinations").append(`<p id="${destinations[i].id}">${destinations[i].city}</p>`);
  }

  for (let i = 0; i < destinations.length; i++){
    $(`#${destinations[i].id}`).click(function(){
      $(".details").text(`${destinations[i].country} ${destinations[i].season} ${destinations[i].notes}`);
    })
  }

})