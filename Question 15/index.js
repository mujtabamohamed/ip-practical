// Define inventory data (in a real application, this would come from a database)
const inventoryData = [
    { id: 1, name: "Aspirin", quantity: 100, price: 5.99 },
    { id: 2, name: "Ibuprofen", quantity: 80, price: 7.49 },
    // Add more products here
];

// Populate the product select dropdown with inventory data
const productSelect = document.getElementById("product");
inventoryData.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.text = product.name;
    productSelect.appendChild(option);
});

// Handle the sales form submission
const salesForm = document.getElementById("sales-form");
salesForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const productId = parseInt(productSelect.value, 10);
    const quantity = parseInt(document.getElementById("quantity").value, 10);
    const product = inventoryData.find((p) => p.id === productId);

    if (product && product.quantity >= quantity) {
        // Update inventory and perform sales operation (in a real app, this would involve server-side logic)
        product.quantity -= quantity;
        alert(`Sale successful. Total: $${(product.price * quantity).toFixed(2)}`);
    } else {
        alert("Invalid product or insufficient quantity.");
    }

    // Reset the form
    salesForm.reset();
});

// Populate the inventory table with inventory data
const inventoryTable = document.querySelector(".inventory table tbody");
inventoryData.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.quantity}</td>
        <td>$${product.price.toFixed(2)}</td>
    `;
    inventoryTable.appendChild(row);
});
