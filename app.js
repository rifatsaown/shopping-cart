function productQuantity(product , isAdd){
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
    if (product == "case") {
        productTotal.innerText = inputQuantity * 59;
    }
    else if (product == "mobile"){
        productTotal.innerText = inputQuantity * 1219;
    }
    
}