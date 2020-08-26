
var requestURL = 'https://goddess-salsas.github.io/js/products.json';
var productData = {};


function loadProductsJSON() {
    return new Promise(resolve => {
        if (productData && productData.length > 0) {
            resolve(productData);
        } else {
            var request = new XMLHttpRequest();
            request.open('GET', requestURL);
            request.responseType = "json";
            request.send();
            request.onload = function() {
                productData = request.response;
                resolve(productData);
            };
        }
    });
}
