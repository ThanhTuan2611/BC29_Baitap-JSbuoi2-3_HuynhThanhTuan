/**
 * Bài 1: Tính tiền lương
 * - Đầu vào: 
 * + Lương 1 ngày: 100000
 * + Số ngày làm
 * 
 * - Xử lý:
 * + Đặt biến có tên là luongMotNgay = 100000
 * + Đặt biến có tên là soNgayLam
 * + Đặt biến có tên là Luong
 * + Luong = soNgayLam * luongMotNgay
 * 
 * - Đầu ra: Lương
 */

var luongMotNgay = 100000;
document.getElementById("tiencong").onclick = function () {
    //Lấy giá trị
    var soNgayLam = document.getElementById("ngaycong").value;

    // Xử lý
    var Luong = soNgayLam * luongMotNgay;
    // Format VND
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var ketQua = "Tổng số tiền là: " + currentFormat.format(Luong) + "VNĐ";

    //Show kết quả
    document.getElementById("ketqua").innerHTML = ketQua;

    //Thêm class
    document.getElementById("ketqua").classList.add("show-info");
}


/**
 * Bài 2: Tính giá trị trung bình
 * - Đầu vào:
 * + 5 số thực
 * 
 * - Xử lý:
 * đặt biến cho 5 số thực lần lược là so1, so2, so3, so4, so5;
 * Tính giá trị trung bình = (so1 + so2 + so3 + so4 + so5) / 5;
 * 
 * - Đầu ra: Giá trị trung bình
 */

document.getElementById("trungbinh").onclick = function () {
    // Lấy giá trị
    var so1 = document.getElementById("so1").value;
    var so2 = document.getElementById("so2").value;
    var so3 = document.getElementById("so3").value;
    var so4 = document.getElementById("so4").value;
    var so5 = document.getElementById("so5").value;

    // Chuyển String-->Number
    so1 = parseInt(so1);
    so2 = parseInt(so2);
    so3 = parseInt(so3);
    so4 = parseInt(so4);
    so5 = parseInt(so5);

    // Xử lý
    var tong = so1 + so2 + so3 + so4 + so5;
    var trungBinh = tong / 5;
    trungBinh = parseFloat(trungBinh);
    var ketQua = "Trung bình tổng là: " + trungBinh;

    // Show
    document.getElementById("trungBinh").innerHTML = ketQua;

    //add class
    document.getElementById("trungBinh").classList.add("show-info");
}

/**
 * Bài 3: Quy đổi tiền
 * - Đầu vào: giá 1 đô = 23500 VNĐ
 * 
 * - Xử lý:
 * + Đặt biến const có tên là VND = 23500;
 * + Đặt biến var có tên USD là số tiền người dùng nhập vào;
 * + Số tiền sau quy đổi = USD * VND;
 * 
 * - Đầu ra: Số tiền sau quy đổi
 */

const VND = 23500;
document.getElementById("quydoi").onclick = function () {
    // Lấy giá trị
    var USD = document.getElementById("sotien").value;

    // Xử lý
    var quyDoi = USD * VND;

    // Format VND
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var ketQua = "Số tiền sẽ nhận được sau khi quy đổi là: " + currentFormat.format(quyDoi) + "VNĐ";

    // Show kết quả
    document.getElementById("quyDoi").innerHTML = ketQua;

    // Add class
    document.getElementById("quyDoi").classList.add("show-info");
}

/**
 * Bài 4: Tính chu vi & diện tích hình chữ nhật
 * - Đầu vào:
 * + Độ dài chiều dài
 * + Độ dài chiều rộng
 * 
 * - Xử lý:
 * + Đặt biến dai là tên của độ dài chiều dài của hình chữ nhật
 * + Đặt biến rong là tên của độ dài chiều rộng của hình chữ nhật
 * + Chu vi hình chữ nhật = (dai + rong) * 2;
 * + Diện tích hình chữ nhật = dai * rong;
 * 
 * - Đầu ra: Chu vi & diện tích hình chứ nhật
 */

document.getElementById("layketqua").onclick = function () {
    // Lấy giá trị
    var dai = document.getElementById("dai").value * 1;
    var rong = document.getElementById("rong").value * 1;

    // Xử lý
    var chuVi = (dai + rong) * 2;
    var dienTich = dai * rong;
    var ketQuaChuVi = "Chu vi hình chữ nhật là: " + chuVi;
    var ketQuaDienTich = " & Diện tích hình chữ nhật là: " + dienTich;
    var ketQua = ketQuaChuVi + ketQuaDienTich;

    // Show
    document.getElementById("CVvaDT").innerHTML = ketQua;

    // Add class
    document.getElementById("CVvaDT").classList.add("show-info");
}


/**
 * Bài 5: Tính tổng 2 số ký
 * - Đầu vào
 * + Số có 2 chữ số
 * 
 * - Xử lý
 * + Đặt biến soKy là tên của số người nhập
 * + Đặt biến hangChuc là tên của số hàng chục = soKy / 10;
 * + Đặt biến hangDonVi là tên của số hàng hàng đơn vị = soKy % 10;
 * + Tổng số ký = hangChuc + hangDonVi;
 * 
 * - Đầu ra: Tổng 2 ký số
 */
document.getElementById("tongky").onclick = function () {
    // Lấy giá trị
    var soKy = document.getElementById("soky").value;

    // Xử lý
    soKy = parseInt(soKy);
    var hangChuc = soKy / 10;
    var hangDonVi = soKy % 10;
    hangChuc = parseInt(hangChuc);
    hangDonVi = parseInt(hangDonVi);
    var tongSoKy = hangChuc + hangDonVi;
    var ketQua = "Tổng 2 ký số là: " + tongSoKy;

    // Show
    document.getElementById("tongKy").innerHTML = ketQua;

    // Add class
    document.getElementById("tongKy").classList.add("show-info");
}