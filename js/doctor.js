var apiKey = require('./../.env').apiKey;

Doctor = function(){
};

Doctor.prototype.getDoctors = function(medicalCondition, displayList) {
  console.log('Get the Doctor');
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+medicalCondition+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key='+apiKey).then(function(response) {
    console.log(response)
    displayList(response);
  })
};

exports.doctorModule = Doctor;
