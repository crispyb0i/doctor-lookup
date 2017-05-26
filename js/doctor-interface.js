var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var doctor = new Doctor ();

  $('#condition').submit(function(event) {
    event.preventDefault();
    var condition = $('#medical_issue').val();
    console.log(condition)
    doctor.getDoctors(condition);
  });
});
