$.getScript("../controllers/app.js", function(){

    $('#roller button.add').on('click', function() {
      controller.getDice();
    })

    $('#roller button.roll').on('click', function() {
      controller.getRoll();
    })

});
