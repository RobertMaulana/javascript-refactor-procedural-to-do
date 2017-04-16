var model = {
  diceSelector: function(){
    return '.dice';
  },
  appendClass: function(){
    return '<div class="die">0</div>';
  },
  dieSelector: function(){
    return '.die';
  },
  mathRandom: function(){
    return Math.floor((Math.random()*6)+1);
  }
}
