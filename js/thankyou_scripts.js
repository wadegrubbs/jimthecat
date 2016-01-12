$(document).ready(function () {

$("form").submit(function(event) {
var nameInput = $("#name").val()
var addressInput = $("#address").val()
$("#spitName").text(nameInput);
$("#spitAddress").text(addressInput);
$(".receipt").show()
  event.preventDefault();
})


})
