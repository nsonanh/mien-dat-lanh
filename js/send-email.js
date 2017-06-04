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
    document.getElementById('contact-form').reset();

    // toastr
    showToastr("Chúng tôi sẽ trả lời bạn sớm nhất có thể.", true);

    // You must return false to prevent the default form behavior
    return false;
  }
}

function showToastr(message, success) {
  alertify.logPosition("bottom right");
  if (success) {
    var msg = "<h5>Cám ơn bạn, thông tin đã được gửi.</h5>" +
        "<h6>" + message + "</h6>";

    alertify.success(msg);
  } else {
      var msg = "<img src='http://i.imgur.com/b4yyOHw.jpg'>" +
      "<h3>Failure</h3>" +
      "<p>" + message + "</p>";

    alertify.error(msg);
  }
}