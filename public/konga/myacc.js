let deleteAcc = document.getElementById('deleteAcc')
let deliveryAddress = document.getElementById('deliveryAddress')
let AccountInforma = document.getElementById('AccountInforma')
let contain = document.getElementById('contain')
let containing = document.getElementById('containing')
let accoun = document.getElementById('accoun')
// contain.style.display = 'none'
deleteAcc.style.display = 'none'
containing.style.display = 'none'
accoun.addEventListener('click', function () {
    deleteAcc.style.display = 'block'
    contain.style.display = 'none'
    containing.style.display = 'none'
})
AccountInforma.addEventListener('click', function () {
    deleteAcc.style.display = 'none'
    contain.style.display = 'block'
})
deliveryAddress.addEventListener('click', function () {
    contain.style.display = 'none'
    containing.style.display = 'block'
})


let menus = document.getElementById('menus')
let cancel = document.getElementById('cancel')
let closes = document.getElementById('close')
let input = document.getElementById('input')
menus.style.display = 'none'
closes.style.display = 'none'
let mymenus;
function menu(){
if (mymenus == 1) {
menus.style.display = 'none'
cancel.style.display = 'block'
closes.style.display = 'none'
mymenus = 0
} else {
menus.style.display = 'block'
closes.style.display = 'block'
cancel.style.display = 'none'
mymenus = 1
}
}

let browse = document.getElementById('browse')
let dropdown3 = document.getElementById('dropdown3')
let nav4 = document.getElementById('nav4')
let ddcategories = document.getElementById('ddcategories')
dropdown3.style.display = 'none'
browse.addEventListener('click', function() {
dropdown3.style.display = 'block'
nav4.style.display = 'none'
input.style.display = 'none'
})
ddcategories.addEventListener('click', function(){
dropdown3.style.display = 'none'
nav4.style.display = 'block'
input.style.display = 'block'
})



let firstname = document.getElementById('firstname')
let lastname = document.getElementById('lastname')
let email = document.getElementById('email')
let number = document.getElementById('number')
let password = document.getElementById('password')
let confirmpressword = document.getElementById('confirmpressword')
let newPressword = document.getElementById('newPressword')
let curruser;
function myuser() {
// let detail = {
//     firstname:firstname.value,
//     lastname:lastname.value,
//     email:email.value,
//     password:password.value,
// }
firebase.auth().onAuthStateChanged((user) => {
if (user) {
// User is signed in, see docs for a list of available properties
// https://firebase.google.com/docs/reference/js/v8/firebase.User
var uid = user.uid;
curruser=user
firstname.innerHTML =`${user.displayName.slice(0,10)}`
password.innerHTML =`${user.displayName}`
email.innerHTML = `${user.displayName}`
// ...
} else {
alert('it not working')
}
});

}
myuser()




let myname = document.getElementById('myname')
let username = document.getElementById('username')
let myemail = document.getElementById('myemail')
function dispusers() {
firebase.auth().onAuthStateChanged((user) => {
if (user) {
// User is signed in, see docs for a list of available properties
// https://firebase.google.com/docs/reference/js/v8/firebase.User
var uid = user.uid;
console.log(user)
myname.innerHTML =`${user.displayName}`
username.innerHTML =`${user.displayName.slic}`
myemail.innerHTML = `${user.displayName}`
// ...
} else {
alert('you are not login ur page')

window.location.href = 'login.html'
}
});
}
dispusers()

let kangas = document.getElementById('kangas')

kangas.addEventListener('click', function () {
  firebase.auth().signOut().then(() => {
        alert('sign out')
        window.location.href = 'login.html'
}).catch((error) => {
  alert('u can never log out')
  console.log(error)
});
})

let loged = document.getElementById('loged')

loged.addEventListener('click', function () {
  firebase.auth().signOut().then(() => {
        alert('sign out')
        window.location.href = 'index.html'
}).catch((error) => {
  alert('u can never log out')
  console.log(error)
});
})