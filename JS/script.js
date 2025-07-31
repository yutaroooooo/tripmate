document.addEventListener("DOMContentLoaded", () => {
  // ヘッダー表示前にプレースホルダーに白背景を指定
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    headerPlaceholder.style.backgroundColor = "#fff";
  }

  // 共通コンポーネント読み込み（ヘッダーにmenu-iconが含まれるため、初期化処理と連携）
  loadComponent("/HTML/header.html", "header-placeholder", initHeaderLogic);
  loadComponent("/HTML/footer.html", "footer-placeholder");

  // ヘッダー読み込み後の初期化処理
  function initHeaderLogic() {
    const headerContent = document.querySelector(".header-content");
    if (headerContent) {
      headerContent.style.backgroundColor = "#fff";
      headerContent.style.paddingTop = "env(safe-area-inset-top)";
      headerContent.style.boxSizing = "border-box";
    }

    // ビュー切り替え関連
    const menuIcon = headerContent.querySelector(".menu-icon");
    const homeView = document.getElementById("homeView");
    const triplistView = document.getElementById("historyView"); // "triplistView"でも可

    let isHome = true;

    if (menuIcon && homeView && triplistView) {
      menuIcon.addEventListener("click", () => {
        if (isHome) {
          homeView.style.display = "none";
          triplistView.style.display = "block";
          menuIcon.textContent = "amp_stories";
        } else {
          triplistView.style.display = "none";
          homeView.style.display = "block";
          menuIcon.textContent = "menu";
        }
        isHome = !isHome;
      });
    }
  }

  // HTML部品の読み込み処理
  function loadComponent(url, targetId, callback) {
    fetch(url)
      .then(res => res.text())
      .then(html => {
        const target = document.getElementById(targetId);
        if (target) {
          target.innerHTML = html;
        }
        if (typeof callback === "function") {
          requestAnimationFrame(() => callback());
        }
      })
      .catch(err => console.error(`読み込み失敗: ${url}`, err));
  }
});
