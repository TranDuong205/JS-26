var mang = [10, -5, 8, -12, 3, 7, -2, 15];
var mangKetQua = mang.filter(function (so) {
    return so < 0;
}).concat(mang.filter(function (so) {
    return so >= 0;
}));

console.log("mang sau khi di chuyen cac phan tu am len dau va duong ve cuoi:");
console.log(mangKetQua);