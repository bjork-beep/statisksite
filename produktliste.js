const myCategory = new URLSearchParams(window.location.search).get("category");
// console.log("produktliste category", category);

const listContainer = document.querySelector(".container");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) =>
        `<div class="box"> 
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="blåtshirt">
                <h2>${product.productdisplayname}</h2>
                <p> ${product.articletype} | ${product.brandname}</p>
                <div>
                <p>Prev. DKK 1595,- </p> 
                <p> Now DKK ${product.price},-</p>
                </div>
                <a class="more" href="produkt.html?id=${product.id}">Read more</a>
                <div class="discount">
                    <p>28%</p>
                </div>
            </div>`
    )
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
