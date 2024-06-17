//console.log("Welcome")
//console.error("error: data mahasiswa gagal ditfetch")

//const nama = "konstan"
//console.log(nama)

//const tombol = document.querySelector(".btn")
//console.log(tombol)

//event: kejadian, aksi, peristiwa (click, dll)
//listener tugas: melakukan sesuatu jika terjadi sebuah event

//tombol.addEventListener("dblclick", function(){
//    console.log("Tombol dipencet")
//    document.body.style.backgroundColor = "#212233"
//}
//)
const mahasiswa = ["Rendi", "Brenda", "Rere", "Didi"];
document.write("<h1>Daftar Mahasiswa</h1>")
document.write("<ul>")
    for(let i=0; 1<mahasiswa.length; i++) {
        document.write("<li>" + mahasiswa[i] + "</li>");
    }
document.write("</ul>")
