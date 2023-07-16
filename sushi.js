import items from "./utis/items.js";
// foods

import func from "./utis/theCart.js";
//importing the functionality
//that shows the cart food, price and others

const cart = document.querySelector(".cart");

const wrapper = document.createElement("div");
// functionality from the import
func(items, wrapper, cart);

const newWrapper = Array.from(wrapper.childNodes);
// increase
newWrapper.forEach((item, index) => {
  const increaseBtn = item.querySelector("#btnIS");
  const results = item.querySelector(".results");
  const price = parseInt(item.querySelector(".price").innerHTML);

  increaseBtn.addEventListener("click", () => {
    let output = parseInt(results.innerHTML);

    output++;

    results.innerHTML = output;

    let amt = document.querySelector("#amount");
    let oldAmt = parseInt(amt.innerHTML);

    amt.innerHTML = oldAmt + price;
  });
});

// decrease

newWrapper.forEach((item, index) => {
  const decreaseBtn = item.querySelector("#btnDS");
  const results = item.querySelector(".results");
  const price = parseInt(item.querySelector(".price").innerHTML);

  decreaseBtn.addEventListener("click", () => {
    let output = parseInt(results.innerHTML);
    if (output === 0) return;
    output--;

    results.innerHTML = output;

    let amt = document.querySelector("#amount");
    let oldAmt = parseInt(amt.innerHTML);

    if (oldAmt === 0) return;
    amt.innerHTML = oldAmt - price;
  });
});

// cancel

newWrapper.forEach((item, index) => {
  const cancelBtn = item.querySelector("#btnCancel");
  const price = parseInt(item.querySelector(".price").innerHTML);

  cancelBtn.addEventListener("click", () => {
    let resultDom = item.querySelector(".results");
    let result = resultDom.innerHTML;
    // const amount = item.querySelector("#amount");

    let amt = document.querySelector("#amount");
    let oldAmt = parseInt(amt.innerHTML);

    amt.innerHTML = oldAmt - result * price;

    resultDom.innerHTML = `0`;
  });
});
