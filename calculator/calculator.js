const inputCalculator1 = document.getElementById("calculator1");
const inputCalculator2 = document.getElementById("calculator2");
const tambah = document.getElementById("tambah");
const kurang = document.getElementById("kurang");
const kali = document.getElementById("kali");
const bagi = document.getElementById("bagi");
const clear = document.getElementById("clear");
const hasil = document.querySelector(".hasil");
const message = document.querySelector(".message");

function validasi(input) {
  return !isNaN(input);
}
tambah.addEventListener("click", () => {
  const nilai1 = parseInt(inputCalculator1.value);
  const nilai2 = parseInt(inputCalculator2.value);
  if (validasi(nilai1) && validasi(nilai2)) {
    const jumlah = nilai1 + nilai2;
    hasil.innerHTML = jumlah;
    message.classList.remove("active");
  } else {
    message.classList.add("active");
  }
});
kurang.addEventListener("click", () => {
  const nilai1 = parseInt(inputCalculator1.value);
  const nilai2 = parseInt(inputCalculator2.value);
  if (validasi(nilai1) && validasi(nilai2)) {
    const jumlah = nilai1 - nilai2;
    hasil.innerHTML = jumlah;
    message.classList.remove("active");
  } else {
    message.classList.add("active");
  }
});
kali.addEventListener("click", () => {
  const nilai1 = parseInt(inputCalculator1.value);
  const nilai2 = parseInt(inputCalculator2.value);
  if (validasi(nilai1) && validasi(nilai2)) {
    const jumlah = nilai1 * nilai2;
    hasil.innerHTML = jumlah;
    message.classList.remove("active");
  } else {
    message.classList.add("active");
  }
});
bagi.addEventListener("click", () => {
  const nilai1 = parseInt(inputCalculator1.value);
  const nilai2 = parseInt(inputCalculator2.value);
  if (validasi(nilai1) && validasi(nilai2)) {
    const jumlah = nilai1 / nilai2;
    hasil.innerHTML = jumlah;
    message.classList.remove("active");
  } else {
    message.classList.add("active");
  }
});
clear.addEventListener("click", () => {
  inputCalculator1.value = null;
  inputCalculator2.value = null;
  message.classList.remove("active");
  hasil.innerHTML = "";
});
