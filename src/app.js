import QRCode from "qrcode";

const githubUrl =
  "https://github.com/mkajs/Frontend-Mentor---QR-code-component";

const opts = {
  errorCorrectionLevel: "H",
  type: "image/jpeg",
  quality: 5,
  margin: 1,
  width: 400,
  color: {
    dark: "#fff",
    light: "#2B7DFA",
  },
};

QRCode.toDataURL(githubUrl, opts, function (err, url) {
  if (err) throw err;

  let img = document.getElementById("qrcode");
  img.src = url;
});
