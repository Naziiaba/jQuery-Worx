//jQuery_2_sizeContainer
$(() => {
  //$(selector).action();

    //NOTE: "()==>" these two together a function.
    const $square = $('#square');
    $('#clicker').click(() => {
      //alert("d");
      const width = parseFloat($square.css('width'));
      //alert(width);
      //css("propertyname", "value");
      $square.css('width', `${width * 1.2}px`);
      $square.css('height', `${width * 1.2}px`);
      $square.css({"background-color": "blue", "font-size": "200%"});

  }); //change
}); //ready
