$(document).ready(function () {
  // เมื่อคลิกปุ่มที่มี id="btn"
  $("#btn").on("click", function () {
    // ฟังก์ชันสร้างสีแบบสุ่มในรูปแบบ Hex (#XXXXXX)
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    // ใช้ jQuery เปลี่ยน CSS ของ body
    $("body").css("background-color", randomColor);

    // แถม: พิมพ์สีที่สุ่มได้ออกมาดูใน Console
    console.log("Current color: " + randomColor);
  });
});
