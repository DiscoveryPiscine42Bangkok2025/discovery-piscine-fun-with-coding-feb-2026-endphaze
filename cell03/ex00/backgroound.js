// อ้างอิงถึงปุ่มและ body
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  // ฟังก์ชันสร้างสีแบบสุ่มในรูปแบบ Hex (#XXXXXX)
  // Math random จะสุมตัวเลขระหว่าง 0-1 * 16777215
  // 16777215 มาจาก R * G * B = 256 * 256  * 256
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // เปลี่ยนสีพื้นหลังของ body
  document.body.style.backgroundColor = randomColor;
});
