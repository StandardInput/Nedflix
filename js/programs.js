var ipc = require('ipc');
window.$ = window.jQuery = require('./js/jquery-1.11.3.min.js');

ipc.on('getRTL', function(data) {
  rtlJson = JSON.parse(data);
  $('#rtl-xl .page-content').html();

  $.each(rtlJson, function(i, val) {
    item = '<div class="nedflix__program-card mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp">' +
           '<div style="background: url('+ rtlJson[i].poster +') center / cover;" class="nedflix__program-card__title mdl-card__title mdl-color--grey-200">' +
           '<span class="nedflix__program-card__title-text mdl-card__title-text mdl-color-text--white">' + rtlJson[i].name + '</span>' +
           '</div>' +
           '<div class="mdl-card__actions">' +
           '<a class="mdl-button mdl-js-button mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple">Afleveringen<span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></a>' +
           '</div>' +
           '</div>';
    $('#rtl-xl .page-content').append(item);          
  });
});
        
ipc.on('getNPO', function(data) {
  npoJson = JSON.parse(data);
  $('#npo .page-content').html();

  $.each(npoJson, function(i, val) {
    item = '<div class="nedflix__program-card mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp">' +
           '<div style="background: url('+ npoJson[i].poster +') center / cover;" class="nedflix__program-card__title mdl-card__title mdl-color--grey-200">' +
           '<span class="nedflix__program-card__title-text mdl-card__title-text mdl-color-text--white">' + npoJson[i].name + '</span>' +
           '</div>' +
           '<div class="mdl-card__actions">' +
           '<a class="mdl-button mdl-js-button mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple">Afleveringen<span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></a>' +
           '</div>' +
           '</div>';
    $('#npo .page-content').append(item);          
  });
});

ipc.on('getMTV', function(data) {
  mtvJson = JSON.parse(data);
  $('#mtv .page-content').html();

  $.each(mtvJson, function(i, val) {
    item = '<div class="nedflix__program-card mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp">' +
           '<div style="background: url('+ mtvJson[i].poster +') center / cover;" class="nedflix__program-card__title mdl-card__title mdl-color--grey-200">' +
           '<span class="nedflix__program-card__title-text mdl-card__title-text mdl-color-text--white">' + mtvJson[i].name + '</span>' +
           '</div>' +
           '<div class="mdl-card__actions">' +
           '<a class="mdl-button mdl-js-button mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple">Afleveringen<span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></a>' +
           '</div>' +
           '</div>';
    $('#mtv .page-content').append(item);          
  });
});
