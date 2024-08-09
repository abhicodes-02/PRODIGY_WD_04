const foorm=document.querySelector("form");
const fname=document.getElementById("name");
const emaili=document.getElementById("email");
const phonen=document.getElementById("phone");
const subjecty=document.getElementById("subject");
const bodym=document.getElementById("message");

function sendEmail(){
     const bodymsg= `FULL NAME : ${fname.value} <br> EMAIL : ${emaili.value} <br> PHONE NO. : ${phonen.value} <br> MESSAGE : ${bodym.value} <br>`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "abhimannyuchoudhurywork2002@gmail.com",
        Password : "43CA752959831C250766177637D0AFB41E23",
        To : 'abhimannyuchoudhurywork2002@gmail.com',
        From : "abhimannyuchoudhurywork2002@gmail.com",
        Subject : subjecty.value,
        Body : bodymsg
    }).then(
      message => {
        if(message=="OK"){
            Swal.fire({
                title: "Successful!",
                text: "Message Sent Successfully!!",
                icon: "success"
            });
        }
      }
    );
}
foorm.addEventListener("submit", (e) => {
      e.preventDefault();

      sendEmail();
      foorm.reset();
});