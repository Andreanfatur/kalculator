const panjang = document.getElementById("Ppersegi");
const lebar = document.getElementById("Lpersegi");
const tinggi = document.getElementById("Bpersegi");
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
  const T = parseInt(tinggi.value);

  if (validasi(P) && validasi(L) && validasi(T)) {
    const luas = P * L * T;
    luasPersegi.innerHTML = luas;
    warning.classList.remove("active");
  } else {
    warning.classList.add("active");
    luasPersegi.innerHTML = "";
  }
});
