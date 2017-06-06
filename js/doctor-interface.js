var Doctor = require('./../js/doctor.js').doctorModule;

var displayList = function(response) {
  $("#doctor_info").empty();
  console.log(response)
    if(response["data"].length===0){
      $("#doctor_info").append("<h3>Your search did not turn up any results</h3>")
    }else{
      for(var i=0;i<response["data"].length;i++){
        if(response["data"][i]["profile"]["middle_name"]!==undefined){
        $("#doctor_info").append("<img id=doctor"+i+">")
        $("#doctor"+i).attr("src", response["data"][i]["profile"]["image_url"])
        $("#doctor_info").append("<h4>Name: "+response["data"][i]["profile"]["first_name"]+" "+response["data"][i]["profile"]["middle_name"]+ " "+ response["data"][i]["profile"]["last_name"]+"</h4>");
        $("#doctor_info").append("<h4>Bio: "+response["data"][i]["profile"]["bio"]+"</h4>")
        console.log(response["data"][i]["practices"][0]["visit_address"]["street"])
        $("#doctor_info").append("<h4>Practice Name: "+response["data"][i]["practices"][0]["name"]+"</h4>")
        $("#doctor_info").append("<h4>Phone Number: "+response["data"][i]["practices"][0]["phones"][0]["number"]+"</h4>")
        $("#doctor_info").append("<h4>Address: "+response["data"][i]["practices"][0]["visit_address"]["street"]+"</h4>")
        $("#doctor_info").append("<h4>City: "+response["data"][i]["practices"][0]["visit_address"]["city"]+"</h4>")
        $("#doctor_info").append("<h4>State: "+response["data"][i]["practices"][0]["visit_address"]["state"]+"</h4>")
        $("#doctor_info").append("<h4>Zip: "+response["data"][i]["practices"][0]["visit_address"]["zip"]+"</h4>")
      }else{
        $("#doctor_info").append("<img id=doctor"+i+">")
        $("#doctor"+i).attr("src", response["data"][i]["profile"]["image_url"])
        $("#doctor_info").append("<h4>Name: "+response["data"][i]["profile"]["first_name"]+" "+ response["data"][i]["profile"]["last_name"]+"</h4>");
        $("#doctor_info").append("<h4>Bio: "+response["data"][i]["profile"]["bio"]+"</h4>")
      }
      $("#doctor_info").append("<hr>")
    }
  }
};

$(document).ready(function() {
  var doctor = new Doctor ();

  $('#condition').submit(function(event) {
    event.preventDefault();
    var condition = $('#medical_issue').val();
    console.log(condition)
    doctor.getDoctors(condition,displayList);
  });
});
