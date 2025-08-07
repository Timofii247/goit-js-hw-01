let content = "50px";
let padding = "8px";
let border = "4px";

let contentWidth = parseFloat(content); 
let totalPadding = parseFloat(padding) * 2;
let totalBorder = parseFloat(border) * 2;

let totalWidth = contentWidth + totalPadding + totalBorder;

console.log(totalWidth);
