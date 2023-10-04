function bai1() {
    let mangso = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ]
    for (let i = 0; i < mangso.length; i++) {
        document.write("Rows: " + (i + 1) + "<br>")
        for (let j = 0; j < mangso[i].length; j++) {
            document.write(mangso[i][j] + "<br>")
        }
    }
}
function bai2() {

    let mangso = ["c", "s", "c", 2, 6, 1]
    document.write("mangso = [" + mangso + "]<br>")
    document.write("mangso dao nguoc = [" + mangso.reverse() + "]<br>")
}
function bai3() {
    let mangso = [4, "A", 3, "B", 6, "C", "X", 1]
    let count = 0
    document.write("mang = [" + mangso + "]<br>")
    for (let i = 0; i < mangso.length; i++) {
        if (mangso[i] % 2 == 0 || mangso[i] % 2 == 1) {
            count++;
        }
    }
    document.write("Các ký tự số trong mảng là " + count + " số<br>")
}
function bai4() {

    let mangso = ["BSF", "A", "FSFD", "BGDF", "GS", "CGFD", "XAS", "HSD"]
    document.write("mang = [" + mangso + "]<br>")
    for (let i = 0; i < mangso.length; i++) {
        document.write("Mảng [" + mangso[i] + "] có " + mangso[i].length + " kí tự <br>")
    }
}
function bai5() {
    let chuoia = prompt("Nhap a")
    let chuoib = prompt("Nhap b")
    let sosanh = true
    document.write("chuoi a" + chuoia + "<br>")
    document.write("chuoi b" + chuoib + "<br>")
    if (chuoia.length != chuoib.length) {
        document.write("do dai khong bang nhau")
    } else {
        for (let i = 0; i < chuoia.length; i++) {
            for (let j = 0; j < chuoib.length; j++)
                if (chuoia[i] == chuoib[j]) {
                    sosanh = true
                } else {
                    sosanh = false
                }
        }
    }
    if (sosanh == true) {
        document.write("chuoi giong nhau")
    } else {
        document.write("chua chac da giong dau")
    }
}
function bai6() {
    let mangso = prompt("Nhap chuoi")
    let chuoifix = []
    document.write("mangso [" + mangso + "]<br>")
    for (let i = 0; i < mangso.length; i++) {

        if (mangso[i] == "-") {
            mangso[i] = "_"
            chuoifix.push("_")
        } else {
            chuoifix.push(mangso[i])
        }

    }

    document.write("Mảng sửa gồm [" + chuoifix.join("") + "]<br>")
}