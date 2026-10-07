```javascript
let cartCount = 0;

function addToCart(productName) {

    cartCount++;

    document.getElementById("cartNumber").textContent = cartCount;

    alert(productName + " added to your cart!");
}


function showCart() {

    if (cartCount === 0) {
        alert("Your cart is empty.");
    } else {
        alert(
            "You have " +
            cartCount +
            " item(s) in your cart."
        );
    }
}


function searchProduct() {

    const search =
        document.getElementById("searchInput").value.trim();

    const category =
        document.getElementById("category").value;

    if (search === "") {

        alert("Please enter a product to search.");

        return;
    }

    alert(
        "Searching for \"" +
        search +
        "\" in " +
        category +
        "..."
    );
}


function scrollToDeals() {

    document.getElementById("deals").scrollIntoView({
        behavior: "smooth"
    });

}


function signIn() {

    alert("Sign in page opened!");

}


function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
```