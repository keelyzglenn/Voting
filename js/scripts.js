$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var age = parseInt($(input).val());

    if (age >= 18) {
      $(".over-18").show();
    }

    else (age < 18) {
      $(".under-18").show();
    }
  });
});
