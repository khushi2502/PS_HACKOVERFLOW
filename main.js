function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "khushi11.2004@gmail.com",
    Password : "password",
    To : 'khushi11.2004@gmail.com',
    From : document.getElementById("emails").value,
    Subject : "New contact form enquiry",
    Body : "Name:" + document.getElementById("names")
}).then(
  message => alert(message)
);
}