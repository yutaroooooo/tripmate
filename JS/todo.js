document.addEventListener("DOMContentLoaded", () => {
    const contentInput = document.getElementById("noteContent");
    const STORAGE_KEY = "tripMateMemoContent";
  
    // 保存されたメモを復元
    const savedContent = localStorage.getItem(STORAGE_KEY);
    if (savedContent) {
      contentInput.value = savedContent;
    }
  
    // 入力があるたびに保存
    contentInput.addEventListener("input", () => {
      localStorage.setItem(STORAGE_KEY, contentInput.value);
    });
  });
  