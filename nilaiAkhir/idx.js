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
  const B = parseInt(bawah.value);
  const L = parseInt(lebar.value);

  if (validasi(P) && validasi(L) && validasi(B)) {
    const T = P * 20;
    const TS = B * 30;
    const AS = L * 50;
    const luas = (T + TS + AS) / 100;
    luasPersegi.innerHTML = luas;
    warning.classList.remove("active");
  } else {
    warning.classList.add("active");
    luasPersegi.innerHTML = "";
  }
});
