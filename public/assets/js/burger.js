// Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//   $(".btn btn-success").on("click", function(event) {
//     var id = $(this).data("id");
//     var newEaten = $(this).data("newEaten");

//     var newEatenState = {
//       devoured: newEaten
//     };

//     // Send the PUT request.
//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: newEatenState
//     }).then(
//       function() {
//         location.reload();
//       }
//     );
//   }); 
// })
