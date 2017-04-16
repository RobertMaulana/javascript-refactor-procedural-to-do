var controller = {
  getDice: function(){
    $.getScript("../models/roller_model.js", function(data){
      return $(model.diceSelector()).append(model.appendClass());
    });
  },
  getRoll: function(){
    $.getScript("../models/roller_model.js", function(data){
      $(model.dieSelector()).each(function(k, die) {
        return $(die).text(model.mathRandom())
      })
    });
  }
};
