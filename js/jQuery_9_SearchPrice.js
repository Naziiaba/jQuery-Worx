//alert('Hello')
$(() => {
  //$(selector).actions;
$('input[name=search]')
.click((e) => {
    $('table tr').show();
    const maxPrice = Number.parseFloat($('input[name=price]').val());
    //alert(maxPrice)
    if (Number.isNaN(maxPrice)) {
      return;
    }
    $('table')
    .find('tr:has(td)')              //.(dot) means action
    .not((i, element)  => {
        const rowPrice = Number.parseFloat($(element)
        .children(':nth-child(5)')
        .text()
      ); //rowPricprice
      //alert(rowPrice);
      return rowPrice <= maxPrice;  // <= less than or equal
    })
    .hide();  //not
}); //click
}); //ready
