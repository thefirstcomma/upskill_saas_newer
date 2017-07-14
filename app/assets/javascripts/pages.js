//Alerts will fade out nicely across all pages.
$(document).on('turbolinks:load', function() {
  $('.alert').delay(1000).fadeOut(4000);
});