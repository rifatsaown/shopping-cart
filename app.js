function productQuantity(product ,price, isAdd){
    const inputValue = document.getElementById('input-'+product);
    let inputQuantity = inputValue.value;

    if(isAdd){
        inputQuantity =  parseInt(inputQuantity) + 1;
    }
    else if (inputQuantity > 0){
        inputQuantity = parseInt(inputQuantity) - 1;
    }
    inputValue.value = inputQuantity;
    const productTotal = document.getElementById(product+"-total");
    productTotal.innerText = inputQuantity * price;
    total();
}

function productValue(product){
    const inputValue = document.getElementById("input-"+product);
    const inputQuantity =parseInt(inputValue.value);
    return inputQuantity;
}
function total(){
    const phoneTotal = productValue("mobile") *1219;
    const caseTotal = productValue("case") *59;
    const subTotal = phoneTotal+caseTotal;
    const taxTotal = subTotal / 10;
    const total = taxTotal + subTotal;

    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax").innerText = taxTotal;
    document.getElementById("total").innerText= total;
}