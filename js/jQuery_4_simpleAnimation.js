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
      }, 5500)  //animate
      //5500 is duration in millisecond
      // "fast"
      //"slow"


      .animate({
          width : '600px',
          height: '600px',
          opacity: 0.7,
          left: 200}, 5500)  //animate 2

        .animate({
              width : '500px',
              height: '500px',
              opacity: 0.3,
              bottom: 200}, 5500)  //animate

            .animate({
                  width : '100px',
                  height: '100px',
                  opacity: 0.95,
                  right: 200}, 5500);  //animate
  }); //clicker
}); //ready
