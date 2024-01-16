var mang = [10, 20, 30, 40,50];
var giaTriCanTim = parseInt(prompt("nhap gia tri can tim kiem:"));
var viTri = mang.indexOf(giaTriCanTim);
if (viTri !== -1) {
    console.log("phan tu duoc tim thay tai vi tri " + viTri);
} else {
    console.log("phan tu ko ton tai trong mang");
}