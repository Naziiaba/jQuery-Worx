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


// RESUME button
  const $resumeButton = $('<button/>')
  .text('Resume')
  .click(() => {
    //alert ("Resume");
      $('#cars').cycle('resume');
  })
  .appendTo($controls);


//Resume or Shake $pauseButton
//Resume
$('<button/>')
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


    //Slider
    $('<div/>')
    .attr('id', 'slider')
    .slider({
      min: 0,
      max: $cars.find('li').length -1,
      slide: (e, ui) => {
        $cars.cycle(ui.value);
      }
    })
    .appendTo($controls);

}); //ready
