jQuery(document).ready(function() {

$("form").submit(function (event) {
var foodVar = $("#foodInput").val()
var musicVar = $("#musicInput").val()
var animalVar = $("#animalInput").val()

$("#h1Food").text(foodVar);
$("#h1Music").text(musicVar);
$("#h1Animal").text(animalVar);

$(".invis").show()


event.preventDefault();



})




})
