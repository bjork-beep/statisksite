console.log("loaded");

const listContainer = document.querySelector(".grid_3");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  console.log(data);

  const markup = data
    .map(
      (element) => `<a class="knap1" href="produktliste.html?category=${element.category}">${element.category}</a>
  </div>`
    )
    .join("");

  console.log(markup);
  listContainer.innerHTML = markup;
}
