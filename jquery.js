jQuery.validator.addMethod("noSpace", function(value, element) {
    return value == '' || value.trim().length != 0;
    }, "don't leave empty");
    jQuery.validator.addMethod("customEmail", function(value, element) {
    return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value );
    }, "Please enter valid email address!");
    $.validator.addMethod( "alphanumeric", function( value, element ) {
    return this.optional( element ) || /^\w+$/i.test( value );
    }, "Letters, numbers, and underscores only please" );
    var $registrationForm = $('#registration_form');
    if($registrationForm.length){
    $registrationForm.validate({
    rules:{
    //username is the name of the textbox
    username: {
    required: true,
    //alphanumeric is the custom method, we defined in the above
    alphanumeric: true
    },
    email: {
    required: true,
    customEmail: true
    },
    password: {
    required: true
    },
    repassword: {
    required: true,
    equalTo: '#form_password'
    }
    },
    messages:{
    username: {
    required: 'Please enter username!'
    },
    email: {
    required: 'Please enter email!',
    email: 'Please enter valid email!'
    },
    password: {
    required: 'Please enter password!'
    },
    repassword: {
    required: 'Please retype password!',
    } 
    } 
    });
    }