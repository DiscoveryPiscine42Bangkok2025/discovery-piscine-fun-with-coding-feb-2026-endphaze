const ftList = document.getElementById("ft_list");
const newBtn = document.getElementById("new_btn");

// โหลดข้อมูลจาก Cookie เมื่อเปิดหน้าเว็บ
window.onload = function () {
  const cookies = document.cookie.split("; ");
  const todoCookie = cookies.find((row) => row.startsWith("todo_list="));

  if (todoCookie) {
    // แปลง JSON string กลับเป็น Array และสร้าง Element
    const items = JSON.parse(decodeURIComponent(todoCookie.split("=")[1]));
    // วนจากท้ายมาหน้าเพื่อให้ลำดับการแสดงผลถูกต้อง (ของใหม่จะอยู่บนเสมอ)
    items.reverse().forEach((text) => {
      createTodoElement(text);
    });
  }
};

// ฟังก์ชันเซฟรายการทั้งหมดลงใน Cookie
function saveToCookie() {
  const items = [];
  const todoElements = ftList.querySelectorAll(".todo-item");
  todoElements.forEach((el) => items.push(el.innerText));

  // ตั้งเวลาหมดอายุ 7 วัน (Cookie เก็บข้อมูลได้จำกัด ควรระวังเรื่องขนาด)
  const d = new Date();
  d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();

  document.cookie =
    "todo_list=" +
    encodeURIComponent(JSON.stringify(items)) +
    ";" +
    expires +
    ";path=/";
}

// ฟังก์ชันสร้าง Element และใส่ลงใน DOM
function createTodoElement(text) {
  const div = document.createElement("div");
  div.className = "todo-item";
  div.innerText = text;

  // เมื่อคลิกที่รายการ เพื่อลบ
  div.onclick = function () {
    if (confirm("Do you really want to remove this TO DO?")) {
      div.remove();
      saveToCookie(); // อัปเดต Cookie หลังลบ
    }
  };

  // โจทย์สั่ง: เมื่อสร้างแล้วต้องไปอยู่ที่ "ด้านบนสุด" ของรายการ
  ftList.prepend(div);
}

// ปุ่มสร้างรายการใหม่
newBtn.onclick = function () {
  const task = prompt("Enter your new TO DO:");

  if (task !== null && task.trim() !== "") {
    createTodoElement(task);
    saveToCookie(); // อัปเดต Cookie หลังเพิ่ม
  }
};
