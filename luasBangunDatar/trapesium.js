const panjang = document.getElementById("Ppersegi");
const lebar = document.getElementById("Lpersegi");
const bawah = document.getElementById("Bpersegi");
const luasPersegi = document.querySelector(".Lpersegi");
const hitungLuas = document.querySelector(".luaspersegi");
const warning = document.querySelector(".warning");
// fungsi validasi
function validasi(input) {
  return !isNaN(input);
}
// hitung luas persegi
hitungLuas.addEventListener("click", () => {
  const P = parseInt(panjang.value);
  const L = parseInt(lebar.value);
  const B = parseInt(bawah.value);

  if (validasi(P) && validasi(L) && validasi(B)) {
    const luas = ((P + B) * L) / 2;
    luasPersegi.innerHTML = luas;
    warning.classList.remove("active");
  } else {
    warning.classList.add("active");
    luasPersegi.innerHTML = "";
  }
});
