//optional param
function fullname(firstname, lastname, middlename) {
    return firstname + " " + (middlename ? middlename : "") + " " + (lastname ? lastname : "");
}
console.log(fullname("sachin", "tendulkar", "Ramesh"));
console.log(fullname("virat", "kholi"));
console.log(fullname("rahul"));
//default param
function discount(price, dis_per) {
    if (dis_per === void 0) { dis_per = 0.05; }
    return price - (price * dis_per);
}
console.log(discount(100, 0.1));
console.log(discount(50));
function taxWithDiscount(price, dis_price, gstTax) {
    if (dis_price === void 0) { dis_price = 0.5; }
    if (gstTax === void 0) { gstTax = 0.18; }
    var totalTax = price - (price * gstTax);
    var TotalPrice = price - (price * dis_price);
    TotalPrice = TotalPrice + totalTax;
    return TotalPrice;
}
console.log(taxWithDiscount(100));
//Rest param
function sum(n1) {
    var rem_nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rem_nums[_i - 1] = arguments[_i];
    }
    var total = 0;
    for (var i = 0; i < rem_nums.length; i++) {
        total = total + rem_nums[i];
    }
    console.log(total);
}
// sum()
sum(10);
sum(10, 20);
sum(10, 20, 30);
// Task -> create a function which will concatenate n No.of string with hyphen(_);
function concatenateString() {
    var con_string = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        con_string[_i] = arguments[_i];
    }
    var resultString = "";
    for (var i = 0; i < con_string.length; i++) {
        resultString = resultString + "_" + con_string[i];
    }
    return resultString;
}
console.log(concatenateString("mY", "name", "is", "Rashid", "ziya", "and", "i lives ", "in", "Nawada"));
