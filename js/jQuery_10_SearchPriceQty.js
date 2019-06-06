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

//qty search
$('input[name=searchQTY]')
.click((e) => {
  //alert("Hello");
  $('table tr').show();
  const maxQTY = Number.parseFloat($('input(name=qty)').val());
  //alert(maxQTY)
  if (Number.isNaN(maxQTY)) {
    return;
  }
  $('table')
  .find('tr:has(td)')
  .not((i, element) => {
    const rowQTY = Number.parseFloat($(element)
    .children(':nth-child(4)')
  .text()
); //rowQTY
return rowQTY <= maxQTY;
  })
  .hide();
}); //click
}); //ready

//alert('$' + parseFloat(.text(), 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,").toString())
