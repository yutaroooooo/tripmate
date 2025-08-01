function checkPassword() {
    const correctPassword = "tripmate2025";
  
    // すでに認証済みならスキップ
    if (localStorage.getItem("tripmate_authenticated") === "true") {
      return;
    }
  
    const userInput = prompt("パスワードを入力してください");
  
    if (userInput === correctPassword) {
      localStorage.setItem("tripmate_authenticated", "true");
      alert("認証に成功しました！");
    } else {
      alert("パスワードが違います。アクセスできません。");
      document.body.innerHTML = ""; // ページを非表示にする
    }
  }
  