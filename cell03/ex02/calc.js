// ฟังก์ชันหลักสำหรับการคำนวณ
document.getElementById("btn-submit").addEventListener("click", function () {
  const leftStr = document.getElementById("left-val").value;
  const rightStr = document.getElementById("right-val").value;
  const op = document.getElementById("operator").value;

  // 1. ตรวจสอบว่าเป็นเลขจำนวนเต็มบวก (>= 0) หรือไม่
  // ใช้ Regex เช็กว่าเป็นตัวเลขล้วนๆ
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

  // 3. เริ่มคำนวณ
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

// 4. ตั้งเวลาแจ้งเตือนทุก 30 วินาที (30,000 milliseconds)
setInterval(function () {
  alert("Please, use me...");
}, 30000);
