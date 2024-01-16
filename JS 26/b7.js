var mang = [1,5,6,3,2,1,1,5,6,7];
var tongCanTim = parseInt(prompt("nhap vao so can tim mang con co tong:"));
var mangCon = [];
var timThay = false;

for (var i = 0; i < mang.length && !timThay; i++) {
    var tongTamThoi = 0;
    mangCon = [];

    for (var j = i; j < mang.length; j++) {
        tongTamThoi += mang[j];
        mangCon.push(mang[j]);

        if (tongTamThoi === tongCanTim) {
            timThay = true;
            break;
        }
    }
}

if (timThay){
    console.log("mang con thoa man co tong bang " + tongCanTim + ":");
    console.log(mangCon);
} else {
    console.log("ko co mang con thoa man");
}