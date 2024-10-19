// global variables
let remainingTries = 3;
let isMainScreenHidden = true;
const balanceEl = document.querySelector("#balance");
const triesSpanEl = document.querySelector(".tries");

// dummy data
let accountBalance = 500;
const PIN_CODE = "1234";
balanceEl.innerHTML = accountBalance;

// btn elems:
const insertCardEl = document.querySelector(".insert-card-btn");
const submitPinEl = document.querySelector(".enter-pin-btn");
const withdrawBtnEl = document.querySelector(".withdraw-action-btn");
const depositBtnEl = document.querySelector(".deposit-action-btn");
const exitBtnsEl = document.querySelectorAll(".exit-action-btn");
const confirmBtnsEl = document.querySelectorAll(".confirm-btn");

// screen(container) elems:
const welcomeScreenEl = document.querySelector("#welcome-screen");
const passwordScreenEl = document.querySelector("#password-screen");
const actionsScreenEl = document.querySelector("#actions-screen");
const withdrawScreenEl = document.querySelector("#withdraw-screen");
const depositScreenEl = document.querySelector("#deposit-screen");

// move to Password Screen
insertCardEl.addEventListener("click", () => {
  welcomeScreenEl.classList.add("hidden");
  passwordScreenEl.classList.remove("hidden");
});

// event listener to handle password
submitPinEl.addEventListener("click", () => {
  const enteredPin = document.querySelector("#pin-input");
  const wrongPinMessageEl = document.querySelector(".pin-message");

  if (enteredPin.value === PIN_CODE) {
    passwordScreenEl.classList.add("hidden");
    actionsScreenEl.classList.remove("hidden");
    isMainScreenHidden = false;
  }
  //   if PIN code is wrong
  else {
    remainingTries--;
    triesSpanEl.innerText = remainingTries;
    wrongPinMessageEl.innerText = `PIN submitted is incorrect. You have ${triesSpanEl.innerHTML} tries left.`;
  }
  if (remainingTries <= 0) {
    wrongPinMessageEl.innerText =
      "Your account is locked. Please contact the bank.";
    submitPinEl.disabled = true;
    enteredPin.classList.add("hidden");
  }
});

// move to withdraw screen
withdrawBtnEl.addEventListener("click", () => {
  actionsScreenEl.classList.add("hidden");
  withdrawScreenEl.classList.remove("hidden");
  isMainScreenHidden = true;
});

// move to deposit screen
depositBtnEl.addEventListener("click", () => {
  actionsScreenEl.classList.add("hidden");
  depositScreenEl.classList.remove("hidden");
  isMainScreenHidden = true;
});

// handle confirm btns (Withdraw/Deposit)
confirmBtnsEl.forEach((btn) =>
  btn.addEventListener("click", () => {
    const withdrawAmountEl = document.querySelector("#Withdraw-amount-inp");
    const depositAmountEl = document.querySelector(".deposit-amount-inp");
    const withdrawValidationMessage = document.querySelector(
      ".validate-withdraw-message"
    );
    const depositValidationMessage = document.querySelector(
      ".validate-depost-message"
    );

    // Reset the message display
    withdrawValidationMessage.innerHTML = "";
    depositValidationMessage.innerHTML = "";

    // Handle Withdrawals
    if (!withdrawScreenEl.classList.contains("hidden")) {
      const withdrawAmount = Number(withdrawAmountEl.value);
      if (withdrawAmount > 0 && withdrawAmount <= accountBalance) {
        accountBalance -= withdrawAmount;
        balanceEl.innerHTML = accountBalance;
        actionsScreenEl.classList.remove("hidden");
        withdrawScreenEl.classList.add("hidden");
      } else {
        withdrawValidationMessage.innerHTML = "Insufficient Funds.";
      }
    }

    // Handle Deposits
    if (!depositScreenEl.classList.contains("hidden")) {
      const depositAmount = Number(depositAmountEl.value);
      if (depositAmount > 0) {
        accountBalance += depositAmount;
        balanceEl.innerHTML = accountBalance;
        actionsScreenEl.classList.remove("hidden");
        depositScreenEl.classList.add("hidden");
      } else {
        depositValidationMessage.innerHTML = "Cant enter a negative value.";
      }
    }

    isMainScreenHidden = false;
  })
);

// handle exit
exitBtnsEl.forEach((btn) =>
  btn.addEventListener("click", () => {
    actionsScreenEl.classList.remove("hidden");
    withdrawScreenEl.classList.add("hidden");
    depositScreenEl.classList.add("hidden");
    isMainScreenHidden = false;
  })
);
