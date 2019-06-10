//jQuery
//$()document.ready(function(){});

$(() => {
  //$(selector).actions;
$('table')
  .each((i, table) => {
    const tableId = "table-title-" + i;
    const tableText = 'Table ' + (i+1);
    $('<h3/>', {

    }).insertBefore(table);  //h3



  )}; //each
}); //ready
