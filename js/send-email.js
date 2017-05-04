// function processForm(e) {
//     if (e.preventDefault) e.preventDefault();

//     /* do what you want with the form */
//     var name = document.getElementById('name');
//     var surname = document.getElementById('surname');
//     var email = document.getElementById('email');
//     var message = document.getElementById('message');

//     Email.send("lubabyyy@gmail.com", "anhsonandynguyen@gmail.com",
//     // Subject
//     "Message from: " + name + " " + surname, 
//     // Body
//     "Email: " + email + "\n Message: " + message, 
//     // Credentials
//     {token: "2e6493e8-61bc-408e-8d35-ad8cda87dc14"});

//     // You must return false to prevent the default form behavior
//     return false;
// }

// var form = document.getElementById('contact-form');
// if (form.attachEvent) {
//     form.attachEvent("submit", processForm);
// } else {
//     form.addEventListener("submit", processForm);
// }

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
    {token: "13dc364f-8b66-40c6-bae1-9fd3a0f093dc"});
    
    // Should be triggered on form submit
    alert('hi');
    // You must return false to prevent the default form behavior
    return false;
  }
}