const name = document.querySelector("#name");
const mobile = document.querySelector('#mobile');
const email = document.querySelector("#email");
const message = document.querySelector("#message");

function submit(){

    var email_val = email.value

    Email.send({
        Host : "smtp.gmail.com",
        Username : "mohammedsaqeeb8122@gamil.com",
        Password : "saqeeb877869",
        To : email_val,
        From : "mohammedsaqeeb8122@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}