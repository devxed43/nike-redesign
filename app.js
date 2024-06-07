const modal = document.querySelector(".modal");
const close_modal = document.querySelector(".close");
const submit_email = document.querySelector(".submit");
const signUpMsg = document.querySelector(".sign-up-msg");

let showModalTimeout = setTimeout(function () {
  modal.classList.add("show");

  // Set another timer to remove the modal after 5 seconds if no user interaction
  let autoRemoveTimeout = setTimeout(function () {
    modal.classList.remove("show");
  }, 5000);

  // Function to handle user interaction
  function handleUserInteraction() {
    clearTimeout(autoRemoveTimeout); // Clear the auto-remove timeout
    document.removeEventListener("click", handleUserInteraction); // Remove the event listener
  }

  // Add an event listener for user interaction
  document.addEventListener("click", handleUserInteraction);
}, 2000);

let handleSubmit = function () {
  submit_email.addEventListener("click", function (e) {
    e.preventDefault();
    signUpMsg.innerHTML = "signed up!";
  });
};

// When the user clicks on <span> (x), close the modal
close_modal.onclick = function () {
  modal.classList.remove("show");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
};

// function calls

handleSubmit();
