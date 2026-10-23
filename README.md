Creating an ATM console
# ATM Console

A pretend bank machine that runs in the browser. Pick a card, enter a PIN on the on-screen keypad, then check balance, deposit, withdraw, transfer or view history. Data is saved with `localStorage`, so it survives a refresh.

> Everything is pretend. Use only the demo cards below.

**Live demo:** _add link here_
**Team:** _Person 1_ and _Person 2_

![Menu screen](screenshots/menu.png)

## Run it

Open `index.html` in a browser. No install needed. To reset data, run `localStorage.clear()` in the console and refresh.

## Demo cards

| Customer | Card number | PIN | Balance |
|---|---|---|---|
| Ada Demo | 1000000001 | 1234 | ₦250,000 |
| Tunde Demo | 1000000002 | 4321 | ₦80,000 |
| Zainab Demo | 1000000003 | 2468 | ₦5,000 |

## Features

- One screen at a time, PIN shown as dots
- Balance, deposit, withdraw and transfer with validation
- Clear on-screen error messages
- Card locks for 5 minutes after 3 wrong PINs (survives refresh)
- History list and a 60-second auto logout with countdown

## Rules

- Withdraw: multiples of ₦500, ₦500 to ₦50,000, never above balance
- Deposit: ₦100 to ₦500,000

## Known issues

_None known, or list them here._
