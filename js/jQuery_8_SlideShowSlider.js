//alert("Hello Lab 7");
$(() => {
  $.fn.cycle.defaults.timeout=10000;
  $.fn.cycle.defaults.random =true;

  const $cars = $('#cars').cycle({   //RESOURCE: http://jquery.malsup.com/cycle2/api/
    slides: "> li",
    timeout: 2000,
    speed: 200,
    pauseOnHover: true

  }); //cycle

  //add the controls

  const $controls = $('<div/>')
  .attr('id', 'cars-controls')
  .insertAfter($cars);


// PAUSE button
  const $pauseButton = $('<button/>')
  .text('Pause')
  .click(() => {
    //alert ("Paused");
    $('#cars').cycle('pause');
  })
  .appendTo($controls);

  // STOP button
    const $stopButton = $('<button/>')
    .text('Stop')
    .click(() => {
      //alert ("Paused");
      $('#cars').cycle('stop');
    })
    .appendTo($controls);

// RESUME button
  const $resumeButton = $('<button/>')
  .text('Resume')
  .click(() => {
    //alert ("Resume");
      $('#cars').cycle('resume');
  })
  .appendTo($controls);


//Resume or Shake $pauseButton
const $shakeButton = $('<button/>')
.text('Resume or Shake')
.click((e) => {
  //alert ("Resume");
  const paused = $cars.is('.cycle-paused');
  if (paused) {
    $cars.cycle('resume');
  }
    else {
      $(e.target)
        .effect('shake', {distance: 10});
    }

}) // click
.appendTo($controls);


//add an icon to the pause button
$pauseButton.button({
    icons: {primary: 'ui-icon-pause'}
}); // $pauseButton


//add an icon to the resume button
$resumeButton.button({
    icons: {primary: 'ui-icon-play'}
}); // $resumeButton

//add an icon to the stop button
$stopButton.button({
    icons: {primary: 'ui-icon-stop'}
}); // $stopButton

//add an icon to the shake button
$shakeButton.button({
    icons: {primary: 'ui-icon-shake'}
}); // $shakeButton

    //Slider
    $('<div/>')
    .attr('id', 'slider')
    .slider({
      orientation: "vertical",
      min: 0,
      max: $cars.find('li').length -1,
      slide: (e, ui) => {
        $cars.cycle(ui.value);
      }
    })
    .appendTo($controls);


// Move the slider indicator with slideshow
$cars.on('cycle-before', (event, options) => {
const slideIndex = options.nextSlide;
$('#slider').slider('value', slideIndex);

});  //indicator

//change the title background then pauseOnHover
$cars.hover((e) => {
$(e.currentTarget)
  .find('.title')
  .animate({backgroundColor: '#eee',
            color: '#000'
            }, 1000);
  },


  (e) => {
    $(e.currentTarget)
      .find('.title')
      .animate({backgroundColor: '#000',
                color: '#fff'
                }, 1000);

}); //hover

  //highlighted focus

$('h1')
  .click((e) => {
    $(e.target)
      .toggleClass(
        'highlighted',
        'slow',
        'easeInExpo'
      );
  });


}); //ready
