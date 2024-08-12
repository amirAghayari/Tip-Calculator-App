`use strict`;

const bill = document.querySelector(".first-input");

const selectFive = document.querySelector(".select-one");
const selectTen = document.querySelector(".select-two");
const selectFifteen = document.querySelector(".select-three");
const selectTwentyfive = document.querySelector(".select-four");
const selectFifty = document.querySelector(".select-five");

const selectInp = document.querySelector(".select-inp");
const peopleNumber = document.querySelector(".last-inp");

const tipShow = document.querySelector(".tip-shower");
const totalShow = document.querySelector(".total-shower");

// bill.addEventListener("input", () => console.log(bill.value));

// a function to calculate the tip
let ourTip = 0;
let calcTip = function (percent) {
  ourTip = (Number(bill.value) * (percent / 100)).toFixed(2);
  return ourTip;
};

// total section
let total = 0;
const calcTotal = function () {
  total = Number(ourTip + Number(bill.value)).toFixed(2);

  return total;
};

//Add tip amount per percentage
selectFive.addEventListener("click", () => {
  tipShow.textContent = "$" + calcTip(5);
  totalShow.textContent = "$" + calcTotal();
});
selectTen.addEventListener("click", () => {
  tipShow.textContent = "$" + calcTip(10);
  totalShow.textContent = "$" + calcTotal();
});
selectFifteen.addEventListener("click", () => {
  tipShow.textContent = "$" + calcTip(15);
  totalShow.textContent = "$" + calcTotal();
});
selectTwentyfive.addEventListener("click", () => {
  tipShow.textContent = "$" + calcTip(25);
  totalShow.textContent = "$" + calcTotal();
});
selectFifty.addEventListener("click", () => {
  tipShow.textContent = "$" + calcTip(50);
  totalShow.textContent = "$" + calcTotal();
});

//Add tip amount per percentage taken from user
const customTip = function () {
  ourTip = ((Number(bill.value) * Number(selectInp.value)) / 100).toFixed(2);
  tipShow.textContent = "$" + ourTip;
  totalShow.textContent = "$" + calcTotal();
};
selectInp.addEventListener("input", customTip);

if (tipShow.textContent !== "$0.00") {
  selectInp.value = "";
  bill.value = "";
}
