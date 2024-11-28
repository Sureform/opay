function sendmail(){let parms ={
     phonenumber:getElementById("phonenuber").value,
     referralcode:getElementById("referralcode").value,
    }
    emailjs.send("service_p5v1sz7", "template_ak5d8h8",Parms).then(alert("email received we will message you shortly"))

}
