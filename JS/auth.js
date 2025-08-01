function checkPassword() {
    const correctPassword = "3-2trip2025"; // ← 任意のパスワード
    const userInput = prompt("パスワードを入力してください");
  
    if (userInput !== correctPassword) {
      alert("パスワードが違います。アクセスできません。");
      document.body.innerHTML = ""; // ページを非表示にする
    }
  }
  