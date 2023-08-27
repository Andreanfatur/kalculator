const panjang = document.getElementById("Ppersegi");
const lebar = document.getElementById("Lpersegi");
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

  if (validasi(P) && validasi(L)) {
    const luas = P * L;
    luasPersegi.innerHTML = luas;
    warning.classList.remove("active");
  } else {
    warning.classList.add("active");
    luasPersegi.innerHTML = "";
  }
});
