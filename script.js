document.addEventListener("DOMContentLoaded", function () {
    const cartCount = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const toggleButton = document.createElement("button");

    let cart = new Set();

    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const productId = "product-" + index;
            if (cart.has(productId)) {
                cart.delete(productId);
                button.textContent = "Add to Cart";
                button.classList.remove("bg-red-600");
                button.classList.add("bg-blue-600");
            } else {
                cart.add(productId);
                button.textContent = "Remove from Cart";
                button.classList.remove("bg-blue-600");
                button.classList.add("bg-red-600");
            }
            cartCount.textContent = cart.size;
        });
    });

    var coll = document.getElementsByClassName("collapsible");
    var i;

        for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
            content.style.display = "none";
            } else {
            content.style.display = "block";
            }
        }
    );
    }


    // Dark mode toggle
    toggleButton.textContent = "Dark Mode";
    toggleButton.className = "ml-4 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded";
    document.querySelector("nav")?.appendChild(toggleButton);
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Simple fade-in effect
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = 1;
    }, 100);
    });
