// Sound player
const soundContainers = document.querySelectorAll('.sound-container');

soundContainers.forEach(element => {
  element.addEventListener('click', function() {
    element.classList.add('pushed');
    var arrayOfSounds = element.querySelectorAll('audio');
    var rand = arrayOfSounds[Math.floor(Math.random() * arrayOfSounds.length)];
    rand.play();
    setTimeout(function(){
      element.classList.remove('pushed');
    }, 500);
  });
});


var options = {
  strings: [
    "Waoh ! quand tu cliques, t'entends la pop !",
    "Et en plus, t'as plus qu'à la coller dans le chat !",
    "C'est complètement dingue !",
    "On n'arrête pas le progrès !",
  ],
  typeSpeed: 50,
  backSpeed: 20,
  backDelay: 3000,
  shuffle: false,
  showCursor: false,
  loop: true,
  loopCount: Infinity
};

// random sentences
var typed = new Typed('.random-sentences', options);


// clipboard.js
var clipboard = new ClipboardJS('.uk-card');

// clipboard.on('success', function(e) {
//     console.info('Action:', e.action);
//     console.info('Text:', e.text);
//     console.info('Trigger:', e.trigger);

//     e.clearSelection();
// });