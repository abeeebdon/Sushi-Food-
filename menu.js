const output = document.querySelector(".grid-container");
const foodItems = [
  { name: "Smashed Avo", src: "./menu_images/smashed_avo.png" },
  { name: "Yin and Yang", src: "./menu_images/Yin_and_yang.png" },
  { name: "Pancakes", src: "./menu_images/Pancakes.png" },
  { name: "Huevos Rancheros", src: "./menu_images/huevos_rancheros.png" },
  { name: "Rancheros(tofu)", src: "./menu_images/rancheros_tofu.png" },
  { name: "Breakkie Roll", src: "./menu_images/Breakkie_Roll.png" },
  { name: "Breakkie Roll", src: "./menu_images/Breakkie_Roll.png" },
  { name: "Burrito", src: "./menu_images/Burrito.png" },
];
foodItems.map((food) => {
  const { name, src } = food;
  output.innerHTML += ` <section class="grid-item">
              <div class="Food-item">
                <a href="index.html">
                  <img
                    src=${src}
                    alt="smashed_avo"
                    height="150px"
                    width="150px"
                /></a>
                <p>${name}</p>
              </div>
            </section>`;
});
