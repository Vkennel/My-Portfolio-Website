let emailInputField = document.querySelector("#email");
let nameInputField = document.querySelector("#name");
let messageInputField = document.querySelector(".box message");
let subjectInputField = document.querySelector("#subject");

const sendbtn = document.querySelector(".btn");

sendbtn.addEventListener("click", () => {
    if (
      nameInputField.value == "" ||
      emailInputField.value == "" ||
      subjectInputField.value == "" ||
      messageInputField.value == ""
    ) {
      window.alert("Please fill all input boxes");
    }else{
        window.alert("Thanks for Contacting Me");
    }
});