
const deletebtn = document.querySelector('.delete')
const website = document.querySelector('.inputwebsite')
const namebox = document.querySelector('.inputname')
const password = document.querySelector('.inputpassword')
const submitbtn = document.querySelector('.submit')
const maincontainer2 = document.querySelector('tbody');
const passwordcontainer = document.querySelector('.passwordcontainer');
const copied = document.querySelector('.copied')


let information = JSON.parse(localStorage.getItem('information')) || [];



function submit() {
    const websiteinput = website.value;
    const nameinput = namebox.value;
    const passwordinput = password.value;

    information.push({ websiteinput, nameinput, passwordinput });

    website.value = ""
    namebox.value = ""
    password.value = ""
    passwordcontainer.style.display = "block"

    alert("Your id information will be save")
    displayarray()
    saveToLocalStorage()

}
submitbtn.addEventListener('click', submit)

function displayarray() {

    if (information.length === 0) {

        passwordcontainer.style.display = 'none'
    }
    maincontainer2.innerHTML = '';
    information.forEach(function (value, index) {
        const trElement = document.createElement('tr');

        trElement.innerHTML = ` <td>${value.websiteinput}</td>
                        <td>${value.nameinput}</td>
                        <td>${value.passwordinput}</td>
                        <td><button class="delete" onclick="deletetextfromarray(${index})">delete</button></td>`;

        maincontainer2.appendChild(trElement);
    })
}
function deletetextfromarray(index) {
    information.splice(index, 1);
    alert("data will be remove")
    displayarray();
    saveToLocalStorage()
    
}

function saveToLocalStorage() {
    localStorage.setItem('information', JSON.stringify(information));
}
displayarray()
