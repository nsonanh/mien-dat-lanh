window.onload=function() {
    document.getElementById('contact-form').onsubmit=function() {
    /* do what you want with the form */
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    Email.send("lubabyyy@gmail.com", "anhsonandynguyen@gmail.com",
    // Subject
    "Message from: " + name + " " + surname, 
    // Body
    "Email: " + email + "\n Message: " + message, 
    // Credentials
    {token: "b076d1ac-f042-4a95-8d46-1fda9d2f87d5"});
    
    // Should be triggered on form submit
    alert('hi');

    // Clear form
    document.getElementById('contact-form').reset();

    // toastr
    showToastr("Email sent.", true);

    // You must return false to prevent the default form behavior
    return false;
  }
}

function showToastr(message, success) {
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
    if (success) {
      toastr["success"](message);
    } else {
      toastr["error"](message);
    }
}