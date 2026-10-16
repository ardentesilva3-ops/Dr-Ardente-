// DR ARMACI — Basic website interactions

document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to DR ARMACI!");

    // Search products
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");

    if (searchButton && searchInput) {
        searchButton.addEventListener("click", function () {
            const searchTerm = searchInput.value.trim();

            if (searchTerm === "") {
                alert("Please enter a product to search for.");
            } else {
                alert("Searching for: " + searchTerm);
            }
        });
    }

    // Seller registration demonstration
    const sellerButton = document.getElementById("sellerButton");

    if (sellerButton) {
        sellerButton.addEventListener("click", function () {
            alert("Seller registration will be available in a future version.");
        });
    }
});
