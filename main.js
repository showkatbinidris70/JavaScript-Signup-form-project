const formElm = document.querySelector("form");
const buttonElm = document.querySelector("#button");
const firstNameElm = document.querySelector(".firstName");

function handleForm(event) {
    event.preventDefault();
}

formElm.addEventListener('submit', handleForm)


function handleFirstName() {
    if (firstNameElm === "") {
        alert("Fillup first name")

    } else {
        alert("first name submitted")
        console.log(firstNameElm)
    }
}

buttonElm.addEventListener('click', handleFirstName)
console.log("Showkat");
