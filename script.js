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
const BankSlt = document.getElementById("BankSlt")
const confirmName = document.getElementById("confirmName")
const transferAmt = document.getElementById("transferAmt")
const confirmInfo = document.getElementById("confirmInfo")
const insertAcctNum = document.getElementById("insertAcctNum")
const SendMoney = document.getElementById("SendMoney")
const tranferPgBtn = document.getElementById("tranferPgBtn")
const ProviderSlt = document.getElementById("ProviderSlt")
const confirmMeter = document.getElementById("confirmMeter")
const confirmMeterUser = document.getElementById("confirmMeterUser")
const exit = document.getElementById("exit")
const ElectricBtn = document.getElementById("ElectricBtn")
const insertMeterNum = document.getElementById("insertMeterNum")
const buyElectricity = document.getElementById("buyEletricity")
const ElectricAmt = document.getElementById("ElectricAmt")

const bankusers =  [
    {pin: 2000, name: "Aderanti Peter", balance: 50000, bank: "GTBank", acctNum:"1111111111"},
    {pin: 1234, name: "Babaranti Yusuf", balance: 15000, bank: "opay", acctNum: "8123223280"},
    {pin: 2345, name: "Clinton Clinton", balance: 30000, bank: "UBA", acctNum: "2222222222"},
    {pin: 2333, name: "Owoade Adams", balance: 45000, bank: "First Bank", acctNum: "3333333333"}
]
 
let users = JSON.parse(localStorage.getItem ("users")) || bankusers

localStorage.setItem("users", JSON.stringify(users))

function saveUser(updated){
    const i = users.findIndex((u) => u.acctNum === updated.acctNum)
    if (i !== -1) users[i] = updated
    localStorage.setItem('users', JSON.stringify(users))
    // localStorage.setItem('selectedUser', JSON.stringify(updated))
}

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
        localStorage.setItem("users", JSON.stringify(users))
    })
    localStorage.setItem("users", JSON.stringify(users)) 
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
            alert("Withdrawal successful")

            selectedUser.balance = newBalance

            saveUser(selectedUser)
        }

    })

}


if (BankSlt && confirmName && confirmInfo && insertAcctNum && SendMoney && transferAmt) {
    users.forEach((recieve) => {
        const option = document.createElement("option")

        option.value = recieve.bank
        option.innerText = recieve.bank

        BankSlt.append(option)
    })

    confirmInfo.addEventListener("click", () => {
        const receiver =users.find((person) => {
            return person.bank === BankSlt.value
        })

        if(receiver && receiver.acctNum === insertAcctNum.value){
            confirmName.innerText = receiver.name
        } else {confirmName.innerText = "Information Mismatch"}
    } )

    const selectedUser = JSON.parse(
        localStorage.getItem("selectedUser")
    )


    SendMoney.addEventListener("click", () => {

    const amount = Number(transferAmt.value)

    const selectedUser = JSON.parse(
        localStorage.getItem("selectedUser")
    )

    const receiver = users.find((person) => {
        return person.bank === BankSlt.value &&
               person.acctNum === insertAcctNum.value
    })

    if (!transferAmt.value || amount <= 0) {
        alert("Invalid amount")
        return
    }

    if (!receiver) {
        alert("Confirm the receiver's account details")
        return
    }

    if (receiver.acctNum === selectedUser.acctNum) {
        alert("You cannot transfer money to yourself")
        return
    }

    if (amount > selectedUser.balance) {
        alert("Insufficient balance")
        return
    }

    selectedUser.balance -= amount

    receiver.balance += amount

    saveUser(selectedUser)
    saveUser(receiver)

    localStorage.setItem(
        "selectedUser",
        JSON.stringify(selectedUser)
    )

    alert("Transfer successful!")
})

}

if (tranferPgBtn) {
    tranferPgBtn.addEventListener ("click", () => {
        window.location.href = "transfer.html"
    })
}

const MeterUsers = [
    {num: "12345678910", provider: "IBEDC", name: "Adebimpe Rukayat Kafayat"},
    {num: "23456789012", provider: "PHCN", name: "Adekunle Wasiu Joel"}
]

if (ProviderSlt && confirmMeter && insertMeterNum && buyElectricity && confirmMeterUser) {

    MeterUsers.forEach((users) => {

        const option = document.createElement("option")

        option.value = users.provider
        option.innerText = users.provider

        ProviderSlt.append(option)
    })

    confirmMeter.addEventListener("click", () => {
        const purchase = MeterUsers.find((meter) => {
            return meter.provider === ProviderSlt.value &&
                    meter.num === insertMeterNum.value
        })
        if(!purchase){
            alert("Confirm details")
        }
        if(purchase && purchase.num === insertMeterNum.value){
            confirmMeterUser.innerText = purchase.name;

            buyElectricity.addEventListener("click", () => {
                if (ElectricAmt.value > selectedUser.balance){
                    alert("insufficient funds")
                }
                    
            })
            
        } else {
            return
        }
        
    })
}

if (exit) {
    exit.addEventListener("click", () => {
        window.location.href = "index.html"
    })
}
if (ElectricBtn){
    ElectricBtn.addEventListener("click", () => {
        window.location.href = "electricitybill.html"
    })
}