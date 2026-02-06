$(document).ready(function () {
  // กำหนดค่าเริ่มต้น
  let size = 200;
  const colors = ["red", "green", "blue"];
  let colorIndex = 0;
  const $balloon = $("#balloon"); // ใส่ $ ไว้ข้างหน้าตัวแปรเพื่อให้รู้ว่าเป็น jQuery object

  // ฟังก์ชันอัปเดตลูกโป่ง
  function updateBalloon() {
    $balloon.css({
      width: size + "px",
      height: size + "px",
      "background-color": colors[colorIndex],
    });
  }

  // เมื่อคลิก (ขยายขนาด)
  $balloon.on("click", function () {
    size += 10;

    // เปลี่ยนสีตามลำดับ
    colorIndex = (colorIndex + 1) % colors.length;

    // ถ้าใหญ่เกิน 420px ให้ระเบิด (กลับไปค่าเริ่มต้น)
    if (size > 420) {
      size = 200;
      colorIndex = 0;
    }

    updateBalloon();
  });

  // เมื่อเมาส์ออก (ลดขนาด)
  $balloon.on("mouseleave", function () {
    if (size > 200) {
      size -= 5;
      // เปลี่ยนสีแบบย้อนลำดับ
      colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    }

    updateBalloon();
  });
});
