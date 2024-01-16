var mang = [1, 3 , 5, 7 , 8, 3, 5, 2, 1];
var soCanTim = parseInt(prompt("nhap so nguyen can tim:"));
var ketQua = mang.filter(function (so) {
    return so === soCanTim;
});
console.log("so " + soCanTim + " xuat hien " + ketQua.length + "lan xua hien cua so do la ");