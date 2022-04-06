class cartItem{
    constructor(price, name, img){
        this.name = name;
        this.price = price;
        this.img = img;
        this.qty = 1;
    }
    add_one(){
        this.qty++;
    }
}

var items = new Map();
var total = 0.00;
var row_total = 1;
var products_in_cart = 0;
/*
-store items in array
use push to add items
remake shoping cart
change the params then build the object in function
*/

function newAddCart(item){
    var cart = document.getElementById("cart_body");
    item = new cartItem(10.99,"test","img/women/pr2.jpg")
    total+=item.price;
    var content =` 
    <tr>
        <td class="shoping__cart__item">
            <img src="${item.img}" alt="product image">
            <h5>${item.name}</h5>
        </td>
        <td class="shoping__cart__price">
            $${item.price}
        </td>
        <td class="shoping__cart__quantity">
            <div class="quantity">
                <div class="pro-qty">
                    <input type="number" value="1" min="1">
                </div>
            </div>
        </td>
        <td class="shoping__cart__total">
        $${total}
        </td>
        <td class="shoping__cart__item__close">
            <span class="icon_close" onclick="removeItem(${row_total},${item.price})"></span>
        </td>
    </tr>`
    items.set(item.name,content);
    var row = document.createElement('tr');
    row.innerHTML = items.get(item.name);
    cart.append(row);
    products_in_cart++;
    document.getElementById("products-in-cart").innerHTML = products_in_cart;
    document.getElementById("cart-subtotal").innerHTML ="$"+ (Math.round(total * 100) / 100).toFixed(2);
    document.getElementById("cart-total").innerHTML = "$"+(Math.round(total * 1.13 * 100) / 100).toFixed(2);
    console.log("adding item" + item.name);
}


function updateCart(item){
    var cart = document.getElementById("cart_body");
        item = new cartItem(10.99,"test","img/cart/cart3.jpg")
        total+=item.price;
        var content =` 
        <tr>
        <td class="shoping__cart__item">
            <img src="${item.img}" alt="product image">
            <h5>${item.name}</h5>
        </td>
        <td class="shoping__cart__price">
            $${item.price}
        </td>
        <td class="shoping__cart__quantity">
            <div class="quantity">
                <div class="pro-qty">
                    <input type="number" value="1">
                </div>
            </div>
        </td>
        <td class="shoping__cart__total">
        $${total}
    </td>
    <td class="shoping__cart__item__close">
        <span class="icon_close" onclick="rItem(${item.name})"></span>
    </td>
</tr>`
        row_total++;
        var row = document.createElement('tr');
        row.innerHTML = content;
        cart.append(row);
        document.getElementById("cart-subtotal").innerHTML ="$"+ (Math.round(total * 100) / 100).toFixed(2);
        document.getElementById("cart-total").innerHTML = "$"+(Math.round(total * 1.13 * 100) / 100).toFixed(2);
        document.getElementById("total-from-cart").innerHTML = "$"+ (Math.round(total * 100) / 100).toFixed(2);
        console.log("adding item");
        console.log(total);
}

function rItem(name) {
    items.delete(name);
    for (let i = 1; i < row_total; i++) {
        document.getElementsByTagName("tr")[i].remove();
    }
    row_total =1;
    total = 0;
    var products_in_cart = 0;
    items.forEach(element => {
        updateCart(element);
    });
}

function removeItem(num,price){
    document.getElementsByTagName("tr")[num].remove();
    total -= price;
    products_in_cart--;
    document.getElementById("products-in-cart").innerHTML = products_in_cart;
    document.getElementById("cart-subtotal").innerHTML ="$"+ (Math.round(total * 100) / 100).toFixed(2);
    document.getElementById("cart-total").innerHTML = "$"+(Math.round(total * 1.13 * 100) / 100).toFixed(2);
    console.log(total);
}