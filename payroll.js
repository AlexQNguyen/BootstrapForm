var jsonData = {
  "status": -1,
  "message": "Form validation errors",
  "formErrors": {
    "username": [{
      "noNumber": "'Bob' must contain at least one number (0-9)"
    }, {
      "noSymbol": "'Bob' must contain at least one symbol (!@#$%^&*)"
    }],
    "password": [{
      "noNumber": "'Must contain at least one letter (a-z A-Z)"
    }]
  }
};

$.ajax({
  type: 'POST',
  dataType: 'json',
  url: '/echo/json/',
  data: {
    json: JSON.stringify(jsonData)
  },
  success: function(data) {

  }
});

var jsonData = {
  "status": -1,
  "message": "Form validation errors",
  "formErrors": {
    "username": [{
      "noNumber": "'Bob' must contain at least one number (0-9)"
    }, {
      "noSymbol": "'Bob' must contain at least one symbol (!@#$%^&*)"
    }],
    "password": [{
      "noNumber": "'Must contain at least one letter (a-z A-Z)"
    }]
  }
};
$("#checkoutSubmit").on('click', function(){
$.ajax({
  type: 'POST',
  dataType: 'json',
  url: '/echo/json/',
  data: {
    json: JSON.stringify(jsonData)
  },
  success: function(data) {

    if(data.status === -1 && data.formErrors) {
      $('.alert').html(data.message);
      $('.alert').addClass('alert-danger');
      for(var i in jsonData.formErrors){
       if(Array.isArray(jsonData.formErrors[i])){
         for(var k in jsonData.formErrors[i]) {
           for( var l in jsonData.formErrors[i][k]) {
            $("#"+i).next('.help-block').addClass('has-error').append(jsonData.formErrors[i][k][l]).append("<br/>");
         $("#"+i).parent('.form-group').addClass('has-error');
          }
        }
     }
   }

  }
  else{
              	$('.alert').removeClass('alert-danger').empty();
              	$(".help-block").empty();
              	$('.form-group').removeClass('has-error');
              }
  }
  });
  });
