// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase();
}

const setBestCustomer = function(){
    var bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'totally bob';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'bob\'s brother';
}