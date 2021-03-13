const hasil = document.querySelector(".hasil");
const angka = document.querySelectorAll(".angka");
const operator = document.querySelectorAll(".operator");
const allClear = document.querySelector(".clear");
const equal = document.querySelector(".samadengan");

angka.forEach((a) => {
	a.addEventListener("click", function () {
		// jika hasil bernilai 0
		if (hasil.textContent == 0) {
			// ganti 0 dengan nilai dari angka yang ditekan
			hasil.textContent = a.textContent;
		} else {
			// jika tidak, tambahkan angka dibelakangnya
			hasil.textContent = `${hasil.textContent}${a.textContent}`;
		}
	});
});

operator.forEach((op) => {
	op.addEventListener("click", function () {
		if (hasil.textContent == 0) {
			alert(`Masukkan angka terlebih dahulu !`);
		} else {
			hasil.textContent = `${hasil.textContent} ${op.textContent} `;
		}
	});
});

// lakukan operasi perhitungan
equal.addEventListener("click", () => {
	let hasilHitung = eval(hasil.textContent);
	hasil.innerHTML = hasilHitung;
});

// clear hasil
allClear.addEventListener("click", () => {
	hasil.innerHTML = "0";
});
