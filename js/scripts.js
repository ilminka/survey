$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    debugger;
    var person1Input = $("input#person1").val();
    var foodInput = $("#food").val();
    var animalInput= $("input:radio[name=animal]:checked").val();
    var colorInput = $("#color").val();
    var dob = $("#born").val();

    $(".person1").text(person1Input);
    $(".color").text(colorInput);
    $(".food").text(foodInput);
    $(".animal").text(animalInput);
    $(".born").text(dob);

    $("#story").show();

    event.preventDefault();
    });
  });
