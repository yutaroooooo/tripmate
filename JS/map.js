document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("mapContainer");
  
    function showMap(lat, lng) {
      const map = document.createElement("iframe");
      map.src = `https://www.google.com/maps?q=${lat},${lng}&z=16&hl=ja&output=embed`;
      map.setAttribute("loading", "lazy");
      map.style.border = "none";
      map.style.width = "100%";
      map.style.height = "100%";
      container.innerHTML = "";
      container.appendChild(map);
    }
  
    navigator.geolocation.getCurrentPosition(
      pos => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        showMap(lat, lng);
      },
      err => {
        console.error("位置情報の取得に失敗しました:", err);
        container.innerHTML = "<p>位置情報の取得に失敗しました。代わりに沖縄の地図を表示しています。</p>";
        // 仮の座標（沖縄県那覇市）
        showMap(26.2124, 127.6792);
      }
    );
  });
  