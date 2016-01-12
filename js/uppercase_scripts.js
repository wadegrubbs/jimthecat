jQuery(document).ready(function() {

  $("form").submit(function(event) {

   var input = $("#formInput").val().toUpperCase()

  $("form").append(input);

      event.preventDefault();
    })
});
