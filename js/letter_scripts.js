jQuery(document).ready(function() {

$("form").submit(function(event) {
var name = $("input").val()
$("span").text(name)

event.preventDefault()
})



  })
