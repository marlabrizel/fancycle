$(document).ready(function(){
  $('#justin').click(function(){
    var counter = $('#baby').find('#view-counter').text();
    // inside of this css class, find the counter and return the text from that element
    counter ++ // implement the counter up by one
    $('#baby').find('#view-counter').text(counter);
    // pass text var as a parameter to change it
    $('#baby').toggleClass('hidden');
    console.log(counter);
  });
});
// dollar sign initializes the library
// (document).ready -> wait until document is loaded
