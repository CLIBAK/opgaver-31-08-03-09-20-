console.log('Truth table for Disjunction');
console.log('var1\tvar2\tvar3\tvar1 || var2 || var3');
var var1 = true;
var var2 = true;
var var3 = true;
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + (var1 || var2 || var3));
var var1 = true;
var var2 = true;
var var3 = false;
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + (var1 || var2 || var3));
var var1 = true;
var var2 = false;
var var3 = true;
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + (var1 || var2 || var3));
var var1 = false;
var var2 = true;
var var3 = true;
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + (var1 || var2 || var3));
var var1 = false;
var var2 = false;
var var3 = true;
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + (var1 || var2 || var3));
var var1 = false;
var var2 = false;
var var3 = false;
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + (var1 || var2 || var3));
var var1 = false;
var var2 = true;
var var3 = false;
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + (var1 || var2 || var3));
var var1 = true;
var var2 = false;
var var3 = false;
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + (var1 || var2 || var3));