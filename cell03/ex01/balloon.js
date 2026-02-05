const balloon = document.getElementById("balloon");

let size = 200;
const colors = ["red", "green", "blue"];
let colorIndex = 0;

// เมื่อคลิก
balloon.addEventListener("click", () => {
  size += 10;

  // เปลี่ยนสีตามลำดับ
  colorIndex = (colorIndex + 1) % colors.length;

  // ถ้าใหญ่เกิน 420px ให้ระเบิด
  if (size > 420) {
    size = 200;
    colorIndex = 0;
  }

  updateBalloon();
});

// เมื่อเมาส์ออก
balloon.addEventListener("mouseleave", () => {
  size -= 5;

  if (size < 200) {
    size = 200;
  } else {
    // เปลี่ยนสีแบบย้อนลำดับ
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
  }

  updateBalloon();
});

function updateBalloon() {
  balloon.style.width = size + "px";
  balloon.style.height = size + "px";
  balloon.style.backgroundColor = colors[colorIndex];
}
