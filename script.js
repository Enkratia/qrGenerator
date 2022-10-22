const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector("input"),
  qrImg = wrapper.querySelector("img"),
  generateBtn = wrapper.querySelector("button");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return;
  generateBtn.innerText = "Generating QR code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR code";
  });
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) wrapper.classList.remove("active");
});