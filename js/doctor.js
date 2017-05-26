var apiKey = require('./../.env').apiKey;

Doctor = function(){
};

Doctor.prototype.getDoctors = function(medicalCondition) {
$("#doctor_info").empty();
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+medicalCondition+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key='+apiKey).then(function(response) {
      console.log(response["data"].length===0)
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
    };
  });
};


exports.doctorModule = Doctor;
