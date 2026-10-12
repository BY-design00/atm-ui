const InsertATM = document.getElementById("atmCard")
const pinLogin = document.getElementById("pinLogin")
const LoginBtn = document.getElementById("LoginBtn")
const welcomeName = document.getElementById("WelcomeName")

const pin = 2000

InsertATM.addEventListener("click", () => {
    window.location.href = "login.html"
})

LoginBtn.addEventListener("click", () => {
    if (Number(pinLogin.value) === pin){
        window.location.href = "welcome.html"
    } else {alert('Incorrect pin')}
    
})



