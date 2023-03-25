
  // hide product attribute divs on page load
  document.querySelectorAll(".product_attributes").forEach(function (el) {
    el.style.display = "none";
  });

  // show/hide product attribute divs based on selected product type
  document
    .querySelector("#productType")
    .addEventListener("change", function () {
      document.querySelectorAll(".product_attributes").forEach(function (el) {
        el.style.display = "none";
      });

      let selectedOption = this.options[this.selectedIndex].value;
      document.querySelector(
        "#" + selectedOption.toLowerCase() + "_attributes"
      ).style.display = "block";
    });

    let api_k="Ahmed_Elkoumey";
    console.log(api_k);
  // add event listener for form submission
  document.querySelector("#product_form").addEventListener("submit", function (event) {
    event.preventDefault(); // prevent default form submission behavior

    // get form values
    let sku = document.querySelector("#sku").value;
    let name = document.querySelector("#name").value;
    let price = document.querySelector("#price").value;
    let productType = document.querySelector("#productType").value;
    // get product type-specific attribute values

    let productAttributes = {};

    if (productType === "DVD") {
      productAttributes.size = document.querySelector("#size").value;
    } else if (productType === "Book") {
      productAttributes.weight = document.querySelector("#weight").value;
    } else if (productType === "Furniture") {
      productAttributes.height = document.querySelector("#height").value;
      productAttributes.width = document.querySelector("#width").value;
      productAttributes.length = document.querySelector("#length").value;
    }

    // create data object
    let data = {
      api_key:api_k,
      sku: sku,
      name: name,
      price: price,
      category: productType,
      attributes: productAttributes,
    };
console.log(data);
   // send POST request to API endpoint
    fetch("http://localhost/s-w_api/api/v1/add/", {
      method: "POST",
      headers: {    
        'Accept': 'application/json',
        'Content-Type': 'application/json', },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        alert("Product added successfully!");
        document.querySelector("#product_form").reset(); // reset form
      })
      .catch(function (error) {
        console.error("Error:", error);
        alert("An error occurred while adding the product.");
      });
  });

  