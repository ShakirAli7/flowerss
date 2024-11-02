onload = () => {
  document.body.classList.remove("container");
  const birthdayMessage = document.getElementById("birthdayMessage");
  birthdayMessage.addEventListener("mouseover", () => {
    birthdayMessage.remove();
    const newMessage = document.createElement("h1");
    newMessage.classList.add("top-center", "new-message");
    newMessage.textContent = "Wish you a very happy birthday";
    document.body.appendChild(newMessage);
  }, { once: true }); 
};
