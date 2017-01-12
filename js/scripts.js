$("document").ready(function() {
  $("form").submit(function(event) {
    debugger
    var age1 = parseInt($("input#age").val());

    if (age1 >= 18) {
      $(".over-18").show();
      $(".under-18").hide();
    }

    else {
      $(".under-18").show();
      $(".over-18").hide();
    }

    event.preventDefault();
  });
})
