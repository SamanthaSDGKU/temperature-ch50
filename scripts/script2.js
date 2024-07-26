//creating the function
//display on the console the mult by 5
function multiplication(myNumber){//myNumber is local variable (scope of vars)
    document.write("<p class='test'>" + myNumber*5 + "</p>");
}

//multiplication(3);//run/execute the function

function taxesCalculation(){
    var product = prompt("Enter the product's name:");
    var price = Number(prompt("Enter the price:"));
    var qty = Number(prompt("Enter the qty:"));
    const taxes=1.08;
    var subtotal=price*qty;
    var total = subtotal*taxes;


    //document.write("<p> Name:" + product+ "</p>" +"<p> Subtotal:" + subtotal + "</p>" + "<p>Total:"+total+"</p>");

    // document.write(`
    //     <p> Name: ${product} </p>
    //     <p> Subtotal: ${subtotal} </p>
    //     <p> Total: ${total} </p>
    // `);
    document.getElementById("products").innerHTML+=`
        <div class="product-item">
            <h5>My awesome amazon store</h5>
            <p> Name: ${product} </p>
            <p> Subtotal: ${subtotal} </p>
            <p> Total: ${total} </p>
        </div>
    `;

}
