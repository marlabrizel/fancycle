$(document).ready(function(){
  $('#justin').click(function(){
    var song = $('#baby')
      counter = song.find('#view-counter').text();
    // inside of this css class, find the counter and return the text from that element
    song.toggleClass('hidden');
    if (song.attr('class') === 'song') {
      counter ++ // implement the counter up by one
      song.find('#view-counter').text(counter);
      // pass text var as a parameter to change it
    }
  });
});
// dollar sign initializes the library
// (document).ready -> wait until document is loaded
