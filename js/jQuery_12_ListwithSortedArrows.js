//alert("hello");
//jQuery_12_ListwithSortedArrows
//$()document.ready(function(){});

$(() => {
  //$(selector).actions;
  //conditional operator
  //condition ? True : False
  //similar to if (condition) {true statement}
  //else {false statement}
const comparator = (a, b, direction=1) =>
  a < b ? -direction : (a > b ? direction: 0);

$('#t-2')
  .find('thead th')
  .slice(1)
  .wrapInner($('<a/>').attr('href', '#'))
  .addClass('sort')
  .on('click', (e) => {
    e.preventDefault();
    const $target = $(e.currentTarget);
    //alert($target);
    const column = $target.index();
    //alert(column);
    const sortKey = $target.data('sort').key;
    //alert(sortKey);
    const sortDirection = $target.hasClass('sorted-asc') ? -1: 1;
    //alert(sortDirection);

    $('#t-2')
      .find('tbody > tr')
      .get()
      .sort((a, b) =>  comparator(
          $(a).data('cars')[sortKey],
          $(b).data('cars')[sortKey],
          sortDirection
      ) //comparator
    ) //sort
    .forEach((element) => {
      $(element)
        .parent()
        .append(element);

    }); //for each

    $target
    .siblings()
    .addBack()
    .removeClass('sorted-asc sorted-desc')
    .end()
    .end()
    .addClass(sortDirection ==1 ? 'sorted-asc': 'sorted-desc');

  }); //click

}); //ready
