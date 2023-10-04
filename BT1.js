function bai1() {
    let mangso = []
    let mangsolon10 = []
    for (let i = 0; i < 10; i++) {
        mangso[i] = +prompt("Nhập số (mảng)")
    }
    document.write("mangso = [" + mangso + "]<br>")

    for (let i = 0; i < mangso.length; i++) {

        if (mangso[i] > 10) {
            mangsolon10.push(mangso[i])
        }
    }
    document.write("Các phần tử >= 10 : &nbsp;" + mangsolon10 + "<br>")
}
    function bai2() {


        let mangso = []
        let max = 0, vitri = 0

        for (let i = 0; i < 10; i++) {
            mangso[i] = +prompt("Nhập số (mảng)")
        }
        document.write("mangso = [" + mangso + "]<br>")

        for (let i = 0; i < mangso.length; i++) {
            if (max < mangso[i]) {
                max = mangso[i]
                vitri = i
            }
        }
        document.write("Phần tử lớn nhất trong mảng là " + max + " tại vị trí mangso " + vitri)
    }

function bai3() {
    let mangso = []
    let max = 0, tong = 0

    for (let i = 0; i < 10; i++) {
        mangso[i] = +prompt("Nhập số (mảng)")
    }
    document.write("mangso = [" + mangso + "]<br>")

    for (let i = 0; i < mangso.length; i++) {
        if (max < mangso[i]) {
            max = mangso[i]
        }
    }
    document.write("gia tri lon nhat = " + max + "<br>")

    for (let i = 0; i < mangso.length; i++) {
        tong += mangso[i];
    }
    tong = tong / mangso.length
    document.write("Gia tri trung binh cua mang la " + tong)
}
function bai4() {
    let mangso = []
    for (let i = 0; i < 10; i++) {
        mangso[i] = +prompt("Nhập số (mảng)")
    }
    document.write("mangso = [" + mangso + "]<br>")
    document.write("mangso = [" + mangso.reverse() + "]<br>")
}
function bai5() {

let mangso = []
let mangsoam = []
for (let i = 0; i < 10; i++) {
    mangso[i] = +prompt("Nhập số (mảng)")
}
document.write("mangso = [" + mangso + "]<br>")

for (let i = 0; i < mangso.length; i++) {

    if (mangso[i] <0) {
        mangsoam.push(mangso[i])
    }
}
document.write("Các phần tử am : &nbsp;" + mangsoam + "<br>")}

function bai6() {
    let mangso = [], boo = true

    for (let i = 0; i < 10; i++) {
        mangso[i] = prompt("Nhập số vào mảng")
        if(mangso[i] == "V"){
            boo =false
        }
    }
    document.write("Mang = ["+mangso+"]<br>")
    if(boo == false){
        document.write("V is in the array")
    }else{
        document.write("V is not in the array")
    }
}
function bai7() {

    let mangso = [], boo = true
    let mangv = []

    for (let i = 0; i < 10; i++) {
        mangso[i] = prompt("Nhập số vào mảng")
        if (mangso[i] == "V") {
            boo = false
        }

        if (mangso[i] != "V") {
            mangv.push(mangso[i])
        }
    }
    document.write("Mang = [" + mangso + "]<br>")
    if (boo == false) {
        mangv.push(0)
        document.write("Đã xóa phần tử V . Mang = [" + mangv + "]<br>")
    }
}
function bai8() {

    let mangso = [], min = 0
    for (let i = 0; i < 10; i++) {
        mangso[i] = +prompt("Nhập số (mảng)")
    }
    document.write("mangso = [" + mangso + "]<br>")
    for (let i = 0; i < mangso.length - 1; i++) {
        for (let j = i + 1; j < mangso.length; j++) {
            if (mangso[i] < mangso[j]) {
                min = mangso[i]
                mangso[i] = mangso[j]
                mangso[j] = min
            }
        }
    }
    document.write("SX Max to Min : [" + mangso + "]<br> ")
}
function bai9() {
    let mangsoa = []
    for (let i = 0; i < 10; i++) {
        mangsoa[i] = +prompt("Nhập số (mảng a)")
    }
    document.write("mangso a = [" + mangsoa + "]<br>")

    let mangsob = []
    for (let i = 0; i < 10; i++) {
        mangsob[i] = +prompt("Nhập số (mảng b)")
    }
    document.write("mangso b = [" + mangsob + "]<br>")

    mangsoc = mangsoa;
    for (let i = 0; i < mangsob.length; i++) {
        mangsoc.push(mangsob[i])
    }
    document.write("Mảng c = [" + mangsoc + "] <br>")
}
