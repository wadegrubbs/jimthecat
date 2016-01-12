jQuery(document).ready(function() {

$("form").submit(function(event) {
  var nameInput = $("#name").val()
  var addressInput = $("#address").val()
  var startTimeInput = $("#startTime").val()
  var endTimeInput = $("#endTime").val()

  $("#spitName").text(nameInput);
  $("#spitTime").text(startTimeInput);

  event.preventDefault();

})



  })
