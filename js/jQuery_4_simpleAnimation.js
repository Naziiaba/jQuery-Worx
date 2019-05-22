//jQuery_4_simpleAnimation
$(() => {
  //$(selector).action();

    //NOTE: "()==>" these two together a function.

    $('#clicker').click(() => {
      //alert('Hi');
      $('#square').animate({
          width : '300px',
          height: '300px',
          opacity: 0.2,
          bottom: 0




      });  //animate

  }); //clicker
}); //ready
