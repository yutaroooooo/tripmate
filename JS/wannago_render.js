document.addEventListener("DOMContentLoaded", () => {
    const gridEl = document.querySelector(".spot-grid");
    const genreEl = document.getElementById("filter-genre");
    const regionEl = document.getElementById("filter-region");
  
    function renderCards() {
      const selectedGenre = genreEl.value;
      const selectedRegion = regionEl.value;
  
      const filteredSpots = wannagoSpots.filter(spot => {
        const genreMatch = selectedGenre === "" || spot.tags.includes(selectedGenre);
        const regionMatch = selectedRegion === "" || spot.tags.includes(selectedRegion);
        return genreMatch && regionMatch;
      });
  
      gridEl.innerHTML = "";
  
      if (filteredSpots.length === 0) {
        gridEl.innerHTML = "<p>該当スポットが見つかりません</p>";
        return;
      }
  
      filteredSpots.forEach(spot => {
        // <div> から <a> に変更してクリックで地図遷移
        const card = document.createElement("a");
        card.className = "spot-card";
        card.href = spot.map;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
  
        card.innerHTML = `
          <img src="${spot.image}">
        `;
  
        gridEl.appendChild(card);
      });
    }
  
    // 初期表示（未選択時は全件表示）
    renderCards();
  
    // セレクト変更時に再描画
    genreEl.addEventListener("change", renderCards);
    regionEl.addEventListener("change", renderCards);
  });
  