function timPhanTuChung(mang1, mang2, mang3) {
    var i = 0, j = 0, k = 0;
    var phanTuChung = [];
    while (i < mang1.length && j < mang2.length && k < mang3.length) {
        if (mang1[i] === mang2[j] && mang2[j] === mang3[k]) {
            phanTuChung.push(mang1[i]);
            i++;
            j++;
            k++;
        } else if (mang1[i] < mang2[j]) {
            i++;
        } else if (mang2[j] < mang3[k]) {
            j++;
        } else {
            k++;
        }
    }
    return phanTuChung;
}

var mang1 = [1,2,3,4,5];
var mang2 = [-3,-1,0,1,5];
var mang3 = [1,5,6,7];

var ketQua = timPhanTuChung(mang1, mang2, mang3);
console.log("cac phan tu chung cua 3 mang da duoc sap xep:");
console.log(ketQua);