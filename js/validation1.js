const usernameerror = document.getElementById("username-error")
const nameerror = document.getElementById("name-error")
const phoneerror = document.getElementById("phone-error")
const passworderror = document.getElementById("password-error")
const emailerror = document.getElementById("email-error")

function val1() {
    if (subval4() && subval1() && subval2() && subval5() && subval3()) {
        return true
    }
    return false

}

function subval4() {
    const name = document.getElementById("name").value
    if (name.length > 3) {
        nameerror.innerHTML = ""

        return true

    } else {
        nameerror.innerHTML = "invalid name"
    }
    return false


}

function subval5() {
    const phone = document.getElementById("phone").value
    if (phone.length == 10) {
        phoneerror.innerHTML = ""

        return true

    } else {
        phoneerror.innerHTML = "invalid phone"
    }
    return false


}

function subval1() {
    const username = document.getElementById("username").value
    if (username.length > 3) {
        usernameerror.innerHTML = ""

        return true

    } else {
        usernameerror.innerHTML = "invalid username"
    }
    return false


}

function subval2() {
    const email = document.getElementById("email").value
    if (email.length > 3) {
        reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (reg.test(email)) {
            emailerror.innerHTML = ""

        } else {
            emailerror.innerHTML = "please enter valid"
        }
        return true
    } else {
        emailerror.innerHTML = "invalid email"
    }
    return false


}

function subval3() {
    const password = document.getElementById("password").value
    if (password.length > 3) {
        passworderror.innerHTML = ""

        return true
    } else {
        passworderror.innerHTML = "invalid password"
    }
    return false


}