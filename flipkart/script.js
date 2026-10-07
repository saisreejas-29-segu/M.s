```javascript
let cartCount = 0;


/* ADD PRODUCT TO CART */

function addToCart(productName) {

    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert(
        productName +
        " has been added to your cart!"
    );

}


/* SEARCH */

function searchProduct() {

    const search =
        document
        .getElementById("searchInput")
        .value
        .trim();


    if (search === "") {

        alert(
            "Please enter a product name."
        );

        return;
    }


    alert(
        "Searching for: " +
        search
    );

}


/* CART */

function showCart() {

    if (cartCount === 0) {

        alert(
            "Your cart is empty."
        );

    } else {

        alert(
            "You have " +
            cartCount +
            " item(s) in your cart."
        );

    }

}


/* LOGIN */

function login() {

    alert(
        "Login page opened!"
    );

}


/* SHOP NOW */

function shopNow() {

    document
        .querySelector(".section")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* VIEW ALL */

function viewAll() {

    alert(
        "Showing all available deals!"
    );

}


/* BACK TO TOP */

function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
```