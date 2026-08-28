// coba perilaku hoisting => error
// console.log(convertCelciusToFahrenheit(2));

const convertCelciusToFahrenheit = function (temp) {
    const result = (9 / 5) * temp + 32;
    return result;
}
// convertCelciusToFahrenheit = Identifier atau nama fungsi
// function = keyword function
// (temp) = parameter
// {} = function body atau isi function

console.info("CONTOH FUNCTION EXPRESSION");
console.log(convertCelciusToFahrenheit(20));