var a = parseInt(prompt("nhap so nguyen duong a:"));
var b = parseInt(prompt("nhap so nguyen duong b:"));

var mangKetQua = [];

for (var i = 1; i <= a; i++) {
    if (i % b === 0) {
        mangKetQua.push(i);
    }
}

for (var j=1; j<=b; j++) {
    if (j % a === 0 && mangKetQua.indexOf(j) === -1) {
        mangKetQua.push(j);
    }
}

console.log("cac so chia het cho " + b + " hoac " + a + " trong khoang tu 1 den " + Math.max(a,b) + ":");
console.log(mangKetQua);