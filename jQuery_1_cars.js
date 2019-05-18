
//jQuery_1_cars
$(() => {
  //$(selector).action();
  $('#cars').change(() => {
    //NOTE: "()==>" these two together a function.
    const favoriteCar = $('#cars option:selected').text();
    $('#car-choice').text(favoriteCar);
    $('#DateToTestDrive').text("Select Date to Test Drive");
    $('#DateToTestDrive').datepicker();

  }); //change
}); //ready
