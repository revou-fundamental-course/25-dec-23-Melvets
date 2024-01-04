function keliling() {
    let a = parseFloat(document.getElementById("input-a").value);
    let b = parseFloat(document.getElementById("input-b").value);
    let c = parseFloat(document.getElementById("input-c").value);

    if (!validasi(a, "message-a", "input-a") && !validasi(b, "message-b", "input-b") && !validasi(c, "message-c", "input-c")) {
        return;
    }

    if (!validasi(a, "message-a", "input-a") || !validasi(b, "message-b", "input-b") || !validasi(c, "message-c", "input-c")) {
        return;
    }

    let keliling = a + b + c;

    document.querySelector(".hasil-keliling").style.display = "block";
    document.getElementById('input-a').style.border = "lightgray solid 1px";
    document.getElementById('input-b').style.border = "lightgray solid 1px";
    document.getElementById('input-c').style.border = "lightgray solid 1px";
    document.getElementById("message-a").innerHTML = "";
    document.getElementById("message-b").innerHTML = "";
    document.getElementById("message-c").innerHTML = "";

    document.getElementById("a").innerHTML = a;
    document.getElementById("b").innerHTML = b;
    document.getElementById("c").innerHTML = c;

    document.getElementById("hasil-keliling").innerHTML = keliling;
}

function luas() {
    let alas = parseFloat(document.getElementById("input-alas").value);
    let tinggi = parseFloat(document.getElementById("input-tinggi").value);

    if (!validasi(alas, "message-alas", "input-alas") && !validasi(tinggi, "message-tinggi", "input-tinggi")) {
        return;
    }

    if (!validasi(alas, "message-alas", "input-alas") || !validasi(tinggi, "message-tinggi", "input-tinggi")) {
        return;
    }

    let luas = (alas * tinggi) / 2;

    document.querySelector(".hasil-luas").style.display = "block";
    document.getElementById('input-alas').style.border = "lightgray solid 1px";
    document.getElementById('input-tinggi').style.border = "lightgray solid 1px";
    document.getElementById("message-alas").innerHTML = "";
    document.getElementById("message-tinggi").innerHTML = "";

    document.getElementById("alas").innerHTML = alas;
    document.getElementById("tinggi").innerHTML = tinggi;

    document.getElementById("hasil-luas").innerHTML = luas;
}

function hilang() {
    document.getElementById("input-a").value = "";
    document.getElementById("input-b").value = "";
    document.getElementById("input-c").value = "";
    document.getElementById("input-alas").value = "";
    document.getElementById("input-tinggi").value = "";
    document.getElementById("message-a").innerHTML = "";
    document.getElementById("message-b").innerHTML = "";
    document.getElementById("message-c").innerHTML = "";
    document.getElementById("message-alas").innerHTML = "";
    document.getElementById("message-tinggi").innerHTML = "";
    document.querySelector(".hasil-keliling").style.display = "none";
    document.querySelector(".hasil-luas").style.display = "none";
    document.getElementById('input-a').style.border = "lightgray solid 1px";
    document.getElementById('input-b').style.border = "lightgray solid 1px";
    document.getElementById('input-c').style.border = "lightgray solid 1px";
    document.getElementById('input-alas').style.border = "lightgray solid 1px";
    document.getElementById('input-tinggi').style.border = "lightgray solid 1px";

}

function validasi(data, message, input) {
    if (data < 0) {
        document.getElementById(message).innerHTML = "Angka tidak boleh negatif!";
        document.getElementById(input).style.border= "red solid 1px";

        return false;

    } else if (isNaN(data)) {
        document.getElementById(message).innerHTML = "Harap diisi!";
        document.getElementById(input).style.border= "red solid 1px";

        return false;

    } else if (data == 0) {
        document.getElementById(message).innerHTML = "Angka tidak boleh 0!";
        document.getElementById(input).style.border= "red solid 1px";

        return false;
    } 

    return true;
}