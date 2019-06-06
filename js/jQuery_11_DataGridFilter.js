//alert('hello');

$(() => {
  //$(selector).actions;
const stripe = () => {
  $('#news')
  .find('tr.alt')
  .removeClass('alt')
  .end()
  .find('tbody')
  .each((i, element) => {
    $(element)
    .children('visible')
    .has('td')
    .filter(i => (i%4)<2)
    .addClass('alt')
  }); //each
} //stripe

  stripe();

  }); //ready
