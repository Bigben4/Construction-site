
function addToCart(product){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(product.name + " added to cart");
}

function loadCart(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartTable = document.getElementById('cart-items');
    let total = 0;

    if(cartTable){
        cart.forEach((item,index)=>{
            total += item.price;
            cartTable.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>FCFA ${item.price}</td>
            </tr>`;
        });
        document.getElementById('total').innerText = "FCFA " + total;
    }
}
