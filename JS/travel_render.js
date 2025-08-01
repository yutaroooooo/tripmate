document.addEventListener("DOMContentLoaded", () => {
    // 戻るボタン
    const backBtn = document.getElementById("backBtn");
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        window.location.href = "https://yutaroooooo.github.io/tripmate/";
      });
    }
  
    // ロゴクリックでトップページ遷移
    const logoText = document.getElementById("logoText");
    if (logoText) {
      logoText.addEventListener("click", () => {
        window.location.href = "index.html";
      });
    }
  
    // URLから旅行ID取得
    const params = new URLSearchParams(window.location.search);
    const tripID = params.get("trip");
    const data = travelGroups[tripID];
  
    const titleEl = document.getElementById("tripTitle");
    const dateEl = document.getElementById("tripDate");
    const listEl = document.getElementById("scheduleList");
  
    if (!data) {
      titleEl.textContent = "指定された旅行情報は見つかりません";
      return;
    }
  
    // 旅行名・期間表示
    titleEl.textContent = data.tripName;
    dateEl.textContent = data.tripDate || "";
  
    // 成田エクスプレス
    if (data.onward?.train) {
        const t = data.onward.train;
        const trainDiv = document.createElement("div");
        trainDiv.className = "train-info";
      
        trainDiv.innerHTML = `
          <div class="train-card">
            <img src="${t.image}" alt="列車画像" class="train-img">
      
            <div class="train-details">
              <p><strong>${t.name}　${t.vehicle}　${t.seats}</strong></p>
      
              <div class="station-row">
                <span class="material-symbols-outlined">directions_subway</span>
                <span>${t.boarding.station}</span>
                <span>${t.boarding.time}</span>
              </div>
      
              <div class="station-row">
                <span class="material-symbols-outlined">directions_subway</span>
                <span>${t.arrival.station}</span>
                <span>${t.arrival.time}</span>
              </div>
            </div>
          </div>
        `;
        listEl.appendChild(trainDiv);
      }
      
  
  // 往路フライト
  if (data.onward?.flight) {
    const f = data.onward.flight;
    const flightDiv = document.createElement("div");
    flightDiv.className = "flight-info";
  
    flightDiv.innerHTML = `
      <div class="flight-card">
        <img src="${f.image}" alt="フライト画像" class="flight-img" />
  
        <div class="flight-details">
          <p><strong>${f.airline}　${f.flightNumber}　${f.aircraft}</strong></p>
  
          <div class="station-row">
            <span class="material-symbols-outlined">flight_takeoff</span>
            <span>${f.schedule.departure.airport}</span>
            <span>${f.schedule.departure.time}</span>
          </div>
  
          <div class="station-row">
            <span class="material-symbols-outlined">flight_land</span>
            <span>${f.schedule.arrival.airport}</span>
            <span>${f.schedule.arrival.time}</span>
          </div>
        </div>
      </div>
    `;
    listEl.appendChild(flightDiv);
  }

// 復路フライトカード形式
if (data.return?.flight) {
    const f = data.return.flight;
    const returnDiv = document.createElement("div");
    returnDiv.className = "return-info";
  
    returnDiv.innerHTML = `
      <div class="return-card">
        <img src="${f.image}" alt="復路フライト画像" class="return-img" />
        <div class="return-details">
          <p><strong>${f.airline}　${f.flightNumber}　${f.aircraft}</strong></p>
          <div class="station-row">
            <span class="material-symbols-outlined">flight_takeoff</span>
            <span>${f.schedule.departure.airport}</span>
            <span>${f.schedule.departure.time}</span>
          </div>
          <div class="station-row">
            <span class="material-symbols-outlined">flight_land</span>
            <span>${f.schedule.arrival.airport}</span>
            <span>${f.schedule.arrival.time}</span>
          </div>
        </div>
      </div>
    `;
    listEl.appendChild(returnDiv);
  }
  
  // ホテルカード形式
  if (data.hotel) {
    const h = data.hotel;
    const hotelDiv = document.createElement("div");
    hotelDiv.className = "hotel-card";
  
    const gallery = h.images.map(src => `<img src="${src}" alt="ホテル画像">`).join("");
  
    hotelDiv.innerHTML = `
      <div class="hotel-gallery">
        ${gallery}
      </div>
  
      <div class="hotel-details">
        <p><strong>${h.name}</strong></p>
  
        <p>
          <span class="material-symbols-outlined">distance</span>
          ${h.address}
        </p>
  
        <p>
          <span class="material-symbols-outlined">assistant_direction</span>
          ${h.access}
        </p>
  
        <p>
          <span class="material-symbols-outlined">login</span>
          チェックイン：${h.checkin}
        </p>
  
        <p>
          <span class="material-symbols-outlined">logout</span>
          チェックアウト：${h.checkout}
        </p>
      </div>
    `;
    listEl.appendChild(hotelDiv);
  }
  
  
  });
  