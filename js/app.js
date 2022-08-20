
const cartArray = [];

function displayProduct(productArray) {

    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    let totalPrice = 0;
    for (let i = 0; i < productArray.length; i++) {

        const name = productArray[i].productName;
        const price = productArray[i].productPrice;

        totalPrice = totalPrice + price;

        const tr = document.createElement("tr");
        tr.innerHTML = `
                <th>${i + 1}</th>
                <td>${name}</td>
                <td>${price}</td>
        `;

        tableBody.appendChild(tr);
    }
    const tr = document.createElement("tr");
    tr.innerHTML = `
                <th>>>></th>
                <td>Total Price</td>
                <td>${totalPrice}</td>
        `;
    tableBody.appendChild(tr);
}

function addToCart(element) {
    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = parseFloat(element.parentNode.parentNode.children[1].children[0].innerText);

    productObject = {
        productName: productName,
        productPrice: productPrice
    }
    cartArray.push(productObject);

    const addedProduct = document.getElementById('added-product');
    addedProduct.innerText = cartArray.length;

    displayProduct(cartArray);

}