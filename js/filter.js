// init Isotope
var $grid = $('#iso-grid').isotope({
  itemSelector: 'article'
});

// store user-selected filters
let filters = [];

// change is-checked class on buttons
$('#filter-buttons').on( 'click', 'button', function( event ) {
  const $target = $( event.currentTarget );
  $target.toggleClass('is-checked');
  let isChecked = $target.hasClass('is-checked');
  let filter = $target.attr('data-filter');
  if ( isChecked ) {
    addFilter( filter );
  } else {
    removeFilter( filter );
  }
  // filter isotope
  // group filters together, inclusive
  $grid.isotope({ filter: filters.join(',') });
});

function addFilter( filter ) {
  if ( filters.indexOf( filter ) == -1 ) {
    filters.push( filter );
  }
}

function removeFilter( filter ) {
  var index = filters.indexOf( filter);
  if ( index != -1 ) {
    filters.splice( index, 1 );
  }
}
