// Define airwaybill details and items
const airwaybillData = {
    sender: "John Doe",
    recipient: {
        name: "Jane Smith",
        address: "1234 Elm St",
        city: "Metropolis",
        country: "Fictionland"
    },
    items: [
        "Item 1 - Description",
        "Item 2 - Description",
        "Item 3 - Description"
    ]
};

// Populate the airwaybill with data
document.getElementById("sender-name").textContent = airwaybillData.sender;
document.getElementById("recipient-name").textContent = airwaybillData.recipient.name;
document.getElementById("recipient-address").textContent = airwaybillData.recipient.address;
document.getElementById("recipient-city").textContent = airwaybillData.recipient.city;
document.getElementById("recipient-country").textContent = airwaybillData.recipient.country;

// URL of the page to display items in a table
const itemPageUrl = `https://yourwebsite.com/displayItems.html?items=${encodeURIComponent(JSON.stringify(airwaybillData.items))}`;

// Generate QR code with link to item list page
const qr = new QRious({
    element: document.getElementById("qr-code"),
    size: 150,
    value: itemPageUrl
});
