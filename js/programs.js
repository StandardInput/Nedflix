var ipc = require('ipc');
window.$ = window.jQuery = require('./js/jquery-1.11.3.min.js');

ipc.on('getRTL', function(data) {
  $.get('templates/episodes.hbs', function (templateData) {
      var template = Handlebars.compile(templateData);
      $('#rtl-xl .page-content').html(template(JSON.parse(data)));
  });
});
        
ipc.on('getNPO', function(data) {
  $.get('templates/episodes.hbs', function (templateData) {
      var template = Handlebars.compile(templateData);
      $('#npo .page-content').html(template(JSON.parse(data)));
  });
});

ipc.on('getMTV', function(data) {
  $.get('templates/episodes.hbs', function (templateData) {
      var template = Handlebars.compile(templateData);
      $('#mtv .page-content').html(template(JSON.parse(data)));
  });
});

ipc.on('getVTM', function(data) {
  $.get('templates/episodes.hbs', function (templateData) {
      var template = Handlebars.compile(templateData);
      $('#vtm .page-content').html(template(JSON.parse(data)));
  });
});
