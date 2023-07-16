function mapD(items, wrapper, cart) {
  items.map((item, index) => {
    const { id, name, price, src } = item;
    // destructuring from the imported items
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
}
export default mapD;
