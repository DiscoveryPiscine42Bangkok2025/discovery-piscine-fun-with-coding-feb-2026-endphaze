$(document).ready(function () {
  // เมื่อคลิกปุ่ม "Try me!"
  $("#btn-submit").on("click", function () {
    // ดึงค่าจาก input โดยใช้ jQuery .val()
    const leftStr = $("#left-val").val();
    const rightStr = $("#right-val").val();
    const op = $("#operator").val();

    // 1. ตรวจสอบว่าเป็นเลขจำนวนเต็มบวก (>= 0) หรือไม่
    if (!/^\d+$/.test(leftStr) || !/^\d+$/.test(rightStr)) {
      alert("Error :(");
      return;
    }

    const left = parseInt(leftStr);
    const right = parseInt(rightStr);

    // 2. ตรวจสอบการหารหรือ Modulo ด้วย 0
    if ((op === "/" || op === "%") && right === 0) {
      const msg = "It’s over 9000!";
      alert(msg);
      console.log(msg);
      return;
    }

    // 3. เริ่มคำนวณ logic เหมือนเดิม
    let result;
    switch (op) {
      case "+":
        result = left + right;
        break;
      case "-":
        result = left - right;
        break;
      case "*":
        result = left * right;
        break;
      case "/":
        result = left / right;
        break;
      case "%":
        result = left % right;
        break;
    }

    // แสดงผล
    alert(result);
    console.log(result);
  });

  // 4. ตั้งเวลาแจ้งเตือนทุก 30 วินาที
  setInterval(function () {
    alert("Please, use me...");
  }, 30000);
});
