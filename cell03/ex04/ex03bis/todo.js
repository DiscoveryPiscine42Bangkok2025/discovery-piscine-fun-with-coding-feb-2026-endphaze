$(document).ready(function () {
  const $ftList = $("#ft_list");

  // 1. โหลดข้อมูลจาก Cookie เมื่อเปิดหน้าเว็บ
  const loadCookies = () => {
    const cookies = document.cookie.split("; ");
    const todoCookie = cookies.find((row) => row.startsWith("todo_list="));

    if (todoCookie) {
      const items = JSON.parse(decodeURIComponent(todoCookie.split("=")[1]));
      // วนลูปสร้างรายการ (reverse เพื่อให้ลำดับถูกต้อง)
      $.each(items.reverse(), function (index, text) {
        createTodoElement(text);
      });
    }
  };

  // 2. ฟังก์ชันเซฟลง Cookie
  const saveToCookie = () => {
    const items = [];
    // วนลูปดึง text จากทุก .todo-item
    $(".todo-item").each(function () {
      items.push($(this).text());
    });

    const d = new Date();
    d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();

    document.cookie =
      "todo_list=" +
      encodeURIComponent(JSON.stringify(items)) +
      ";" +
      expires +
      ";path=/";
  };

  // 3. ฟังก์ชันสร้าง Element
  const createTodoElement = (text) => {
    // สร้าง div ใหม่ด้วย jQuery
    const $div = $("<div></div>").addClass("todo-item").text(text);

    // ดักจับการคลิกเพื่อลบ
    $div.on("click", function () {
      if (confirm("Do you really want to remove this TO DO?")) {
        $(this).remove();
        saveToCookie();
      }
    });

    // เอาไปใส่บนสุดของรายการ
    $ftList.prepend($div);
  };

  // 4. ปุ่ม New
  $("#new_btn").on("click", function () {
    const task = prompt("Enter your new TO DO:");

    if (task && task.trim() !== "") {
      createTodoElement(task);
      saveToCookie();
    }
  });

  // เริ่มทำงานโหลดข้อมูลเก่า
  loadCookies();
});
