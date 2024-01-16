function timPhanTuNhoNhatChuaXuatHien(mang) {
    var phanTuNhoNhat = 1;
    mang.sort(function(a,b){
        return a - b;
    });
    for (var i = 0; i < mang.lenght; i++) {
        if (mang[i] <= phanTuNhoNhat) {
            phanTuNhoNhat = mang[i] + 1;
        }
    }
    return phanTuNhoNhat;
}

var mang1 = [1,2,5,7];
console.log("mang:", mang1);
console.log("phan tu lon hon 0 nho nhat chua xuat hien:", timPhanTuNhoNhatChuaXuatHien(mang1));

var mang2 = [10,5,7];
console.log('mang:', mang2);
console.log("phan tu lon hon 0 nho nhat chua xuat hien:", timPhanTuNhoNhatChuaXuatHien(mang2));