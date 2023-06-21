// import smashed from "./menu_images/smashed_avo.png";
// import yin from "./menu_images/yin and yang.png";

// new changes
// const wrapper = document.querySelector(".cart-wrapper");
const cart = document.querySelector(".cart");

// foods
const items = [
  {
    id: 2,
    name: "smashed avo",
    price: 20,
    src: "./menu_images/smashed_avo.png",
  },
  {
    id: 2,
    name: "Yin $ Yang",
    price: 10,
    src: "./menu_images/Yin_and_Yang.png",
  },
  {
    id: 3,
    name: "smashed avo",
    price: 20,
    src: "./menu_images/smashed_avo.png",
  },
  {
    id: 4,
    name: "smashed avo",
    price: 20,
    src: "./menu_images/smashed_avo.png",
  },
];

console.log(items);

// wrapper.innerHTML()

const wrapper = document.createElement("div");

items.map((item, index) => {
  const { id, name, price, src } = item;
  // console.log(name, price, src, index);

  // const name = item.name
  // const price = item.price
  // const src = item.src

  // console.log("hello");
  wrapper.innerHTML += `<div class="food-type" id=${index}>
      <div class="img">
        <img
          src=${src}
          width="100px"
          height="100px"
          alt="smashed_avo"
          class="img"
        />
      </div>
      <div class="food-name">
        <p>${name}</p>
        <p >$<span class="price">${price}</span>.00</p>
      </div>
      <div class="math-wrap padding">
        <div class="add inline">
          <button class="btn" id="btnIS">
            +
          </button>
        </div>
        <div class="result inline">
          <span class="results" id="result">
            0
          </span>
        </div>

        <div class="decrease inline">
          <button class="btn" id="btnDS">
            -
          </button>
        </div>
      </div>
      <div class="cancel-wrap padding">
        <div class="cancel">
          <button class="btn" id="btnCancel">
            x
          </button>
        </div>
      </div>
    </div>`;
  cart.appendChild(wrapper);
});

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

// calculate amount

// const total = newWrapper.map((item) => {
//   const results = item.querySelector(".results").innerHTML;
//   const price = item.querySelector(".price").innerHTML;
//   item.addEventListener("click", () => {
//     console.log(results);
//     console.log(price);
//   });
// });
