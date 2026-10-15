const pinLogin = document.getElementById("pinLogin")
const LoginBtn = document.getElementById("LoginBtn")
const usersContain = document.getElementById("usersContain")
const WelcomeName = document.getElementById("WelcomeName")
const Name = document.getElementById("Name")
const BalBtn = document.getElementById("BalBtn")
const balance = document.getElementById("balance")
const backBtn = document.getElementById("backBtn")
const withdrawPgBtn = document.getElementById("withdrawPgBtn")
const withdrawBtn = document.getElementById("withdrawBtn")
const WithdrawAmt = document.getElementById("WithdrawAmt")
const newBalNotif = document.getElementById("newBalNotif")

const users = [
    {pin: 2000, name: "Aderanti Peter", balance: 20000},
    {pin: 1234, name: "Babaranti Yusuf", balance: 15000}
]


if (usersContain) {
    users.forEach((user) => {
        const userBtn = document.createElement("button")

        userBtn.innerText = user.name
        userBtn.style.padding = "10px 50px"
        userBtn.style.border = "none"
        userBtn.style.borderRadius = "30px"

        userBtn.addEventListener("click", () => {
            localStorage.setItem("selectedUser", JSON.stringify(user))

            window.location.href = "login.html"
        })

        usersContain.append(userBtn)
    })
}


if (LoginBtn && pinLogin) {
    LoginBtn.addEventListener("click", () => {

        const selectedUser = JSON.parse(
            localStorage.getItem("selectedUser")
        )

        if (Number(pinLogin.value) === selectedUser.pin) {
            window.location.href = "welcome.html"
        } else {
            alert("Incorrect PIN")
        }

    })
}


if(WelcomeName && BalBtn) {
    
    const selectedUser = JSON.parse(
        localStorage.getItem("selectedUser")
    )
    
    const DivName = selectedUser.name.split(" ")
    const FirstName = DivName[0]
    
    const head = document.createElement("h1")

    head.innerText = `Welcome, ${FirstName}`
    head.style.fontSize = "100%"

    WelcomeName.append(head)

    BalBtn.addEventListener("click", () => {
        window.location.href = "checkbal.html"
    })
}

if (Name) {

    const selectedUser = JSON.parse(
        localStorage.getItem("selectedUser")
    )

    Name.innerText = selectedUser.name

    Name.style.fontFamily = "calibri"
    Name.style.margin = "20px"
    
}

if (backBtn) {
    const selectedUser = JSON.parse(
        localStorage.getItem("selectedUser")
    )

    backBtn.addEventListener("click", () => {
        window.location.href = 'welcome.html'
    })

}

if (balance) {

    const selectedUser = JSON.parse(
        localStorage.getItem("selectedUser")
    )

    balance.innerText = selectedUser.balance.toLocaleString('en-NG', {style: 'currency', currency: 'NGN'})

}

if (withdrawPgBtn) {
    withdrawPgBtn.addEventListener("click", () => {
        window.location.href = "withdraw.html"
    })
}

if (Name) {
    const selectedUser = JSON.parse(
        localStorage.getItem("selectedUser")
    )

    Name.innerText = selectedUser.name
}

if(withdrawBtn && WithdrawAmt) {
    const selectedUser = JSON.parse(
        localStorage.getItem("selectedUser")
    )

    withdrawBtn.addEventListener("click", () => {
        if (WithdrawAmt.value === "") {
            alert("insert amount")
        } else if (WithdrawAmt.value > selectedUser.balance){
            alert ("insufficient funds")
        } else {
            const newBalance = selectedUser.balance - WithdrawAmt.value
            newBalNotif.innerText = `Your new Balance is ${newBalance.toLocaleString('en-NG', {style: "currency", currency:"NGN"})}`
            alert("Transaction successful")
        }

    })

}