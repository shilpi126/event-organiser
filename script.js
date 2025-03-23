const handleFormSubmit = (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const userData = {username,email,mobile, message}
console.log(userData)
    alert("Form Submitted Successfully!!")
    localStorage.setItem("userData",JSON.stringify(userData))
    document.getElementById("username").value = "";
    document.getElementById("mobile").value ="";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
};
