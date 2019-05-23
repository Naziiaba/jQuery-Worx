
//jQuery_5_enlargeFont
$(() => {
  //$(selector).action();
    //alert("hi"); it is just for testing

    const sizeMap = {

      'switcher-small': n => n/1.4,    // "=>"means a function
      'switcher-large': n => n*1.4,
      'switcher-default': () => defaultSize
    };
const $speech = $('div.speech');
    const defaultSize = parseFloat($speech.css('fontSize'));
    //alert(defaultSize);

    $('#switcher button').click((e) => {
      const num = parseFloat($speech.css('fontSize'));
      $speech.css(
        'fontSize',
        `${sizeMap[e.target.id](num)}px`
      ); //css
    }); //click
});
