const tableBody = document.querySelector('#products tbody');
const massDeleteBtn = document.querySelector('#mass-delete-btn');


fetch('http://localhost/s-w_api/api/v1/get')
    .then(response => {
        console.log(response.status);
       return response.json()})
    .then(products => {


        products["allData"].forEach(product => {
            const row = document.createElement('tr');
            const inpcell = document.createElement('td');
            const inp = document.createElement('input');
            inp.type = "checkbox";
            inp.name = "delete[]";
            inp.classList.add("delete-checkbox");
            inp.id = product.sku;
            const skuCell = document.createElement('td');
            skuCell.textContent = product.sku;
            const nameCell = document.createElement('td');
            nameCell.textContent = product.name;
            const priceCell = document.createElement('td');
            priceCell.textContent = product.price;
            const productTypeCell = document.createElement('td');
            productTypeCell.textContent = product.category;
            const productAttributeCell = document.createElement('td');
            let parsed = JSON.parse(product.attributes);

            if (product.category === 'DVD') {

                productAttributeCell.textContent = parsed.size + ' MB';
            } else if (product.category === 'Book') {


                productAttributeCell.textContent = parsed.weight + ' Kg';

            } else if (product.category === 'Furniture') {

                productAttributeCell.textContent = `${parsed.height} x ${parsed.width} x ${parsed.length}`;
            }
            row.appendChild(inpcell);
            inpcell.appendChild(inp)
            row.appendChild(skuCell);
            row.appendChild(nameCell);
            row.appendChild(priceCell);
            row.appendChild(productTypeCell);
            row.appendChild(productAttributeCell);
            tableBody.appendChild(row);
        });


        // add event listener to Mass Delete button
        massDeleteBtn.addEventListener('click', () => {
          
            const checkedBoxes = document.querySelectorAll('input.delete-checkbox:checked');
            const checkedIds = Array.from(checkedBoxes).map(box => { return box.id});
            // console.log('Checked IDs:', JSON.stringify(checkedIds));


            checkedIds.forEach(send=>{

                // send DELETE request for checked IDs
                fetch('http://localhost/s-w_api/api/v1/delete', {
                    method: 'DELETE',
                    headers: {    
                        'Accept': 'application/json',
                        'Content-Type': 'application/json', },
                    body: JSON.stringify({
                        sku: send,
                        
                        
                    }),
                   
                })
                    .then(response => {
                        console.log(JSON.stringify(send));
                        if (!response.ok) {

                            throw new Error('Failed to delete items');
                        }
                        // reload page after successful delete
                        location.reload();
                    })
                    .catch(error => console.error(error));

            })
        });
    })
    .catch(error => console.error(error));

