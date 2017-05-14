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
  alertify.logPosition("bottom right");
  if (success) {
    var msg = "<img src='http://3.bp.blogspot.com/-qUH2sD4GWB0/UUn5xBphLjI/AAAAAAAAA2o/MMYWv7n8sNw/s1600/thumb-up-terminator+pablo+M+R.jpg'>" +
        "<h3>Success</h3>" +
        "<p>" + message + "</p>";

    alertify.success(msg);
  } else {
      var msg = "<img src='http://i.imgur.com/b4yyOHw.jpg'>" +
      "<h3>Failure</h3>" +
      "<p>" + message + "</p>";

    alertify.error(msg);
  }
}