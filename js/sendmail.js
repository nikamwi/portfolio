const sendMail = document.getElementById("sendmesage");

sendMail.addEventListener("click", () => {

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
      
    const serviceID = "service_8o8349d";
    const templateID = "template_70c7b7p";
    
    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")
    
    })
    .catch(err=>console.log(err));
});