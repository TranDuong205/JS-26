var mang =[1,2,3,4,5,6,7,5,3,2];
var demPhanTu = {};
for (var i = 0; i <= mang.length; i++) {
    var phanTu = mang[i];
    demPhanTu[phanTu] = (demPhanTu[phanTu] || 0) + 1;
}

console.log("cac phan tu xuat hien tu hai lan tro len trong mang:");
for (var phanTu in demPhanTu) {
    if (demPhanTu.has0wnProperty(phanTu) && demPhanTu[phanTu] >= 2) {
        console.log(phanTu);
    }
}