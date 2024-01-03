function keliling() {
    let a = parseInt(document.getElementById("input-a").value);
    let b = parseInt(document.getElementById("input-b").value);
    let c = parseInt(document.getElementById("input-c").value);

    let keliling = a + b + c;

    document.querySelector(".hasil-keliling").style.display = "block";

    document.getElementById("a").innerHTML = a;
    document.getElementById("b").innerHTML = b;
    document.getElementById("c").innerHTML = c;

    document.getElementById("hasil").innerHTML = keliling;
}