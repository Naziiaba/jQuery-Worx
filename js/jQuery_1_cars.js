
//jQuery_1_cars
$(() => {
  //$(selector).action();
  $('#cars').change(() => {
    //NOTE: "()==>" these two together a function.
    const favoriteCar = $('#cars option:selected').text();
    $('#car-choice').text(favoriteCar);
    $('#askDateToTestDrive').text("Select Date to Test Drive");
    $('#DateToTestDrive').datepicker();

    alert(favoriteCar);
    switch (favoriteCar) {
      case 'BMW':
      alert("BMW");
          $("#theCar").html("<img src='/images/lexus.jpg' width='320' height='260' "+ "\">");
          break;

      case 'BMW':
          $("#theCar").html("<img src='/images/bmw.jpg' width='320' height='260' "+ "\">");
          break;

      case 'Tesla':
          $("#theCar").html("<img src='/images/tesla.jpg' width='320' height='260' "+ "\">");
          break;

      case 'Ford':
          $("#theCar").html("<img src='/images/ford.jpg' width='320' height='260' "+ "\">");
          break;

      case 'Toyota':
          $("#theCar").html("<img src='/images/toyota.jpg' width='320' height='260' "+ "\">");
          break;

      case 'Bentley':
          $("#theCar").html("<img src='/images/bentley.jpg' width='320' height='260' "+ "\">");
          break;

      case 'Jeep':
          $("#theCar").html("<img src='/images/jeep.png' width='320' height='260' "+ "\">");
          break;
    } //switch

  }); //change
}); //ready
