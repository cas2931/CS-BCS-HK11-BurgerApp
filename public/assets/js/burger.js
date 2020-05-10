// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("#devourButton").on("click", function(event) {
    var id = $(this).data("id");
    var newEaten = $(this).data("newEaten");

    var newEatenState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function() {
        location.reload();
      }
    );
  }); 
})
