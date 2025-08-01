const travelGroups = {
    okinawa: {
      tripName: "🌺沖縄旅行🌺",
      tripDate: "2025/08/10〜2025/08/14",
  
      onward: {
        train: {
          name: "成田エクスプレス",
          vehicle: "9号車",
          seats: "14番A-D",
          boarding: {
            station: "武蔵小杉駅",
            time: "5:55"
          },
          arrival: {
            station: "成田空港駅",
            time: "7:19"
          },
          image: "./IMG/交通機関/NEX.png"
        },
        flight: {
          airline: "Peach Aviation",
          flightNumber: "MM505",
          aircraft: "A302",
          image: "./IMG/交通機関/PeachAviation.png",
          schedule: {
            departure: {
              airport: "東京(成田)第1ターミナル",
              time: "9:30"
            },
            arrival: {
              airport: "沖縄(那覇)",
              time: "12:35"
            }
          }
        }
      },
  
      return: {
        flight: {
          airline: "Peach Aviation",
          flightNumber: "MM504",
          aircraft: "A302 Neo",
          image: "./IMG/交通機関/PeachAviation.png", // ← 往路と同じ画像
          schedule: {
            departure: {
              airport: "沖縄(那覇)",
              time: "12:00"
            },
            arrival: {
              airport: "東京(成田)第1ターミナル",
              time: "14:05"
            }
          }
        }
      },
  
      hotel: {
        name: "ブランシエラ那覇曙プレミスト",
        address: "〒900-0002 沖縄県那覇市曙3丁目16-16",
        access: "那覇空港から車で約10分",
        checkin: "15:00",
        checkout: "11:00",
        images: [
          "./IMG/ホテル/リビング.png",
          "./IMG/ホテル/リビング2.png",
          "./IMG/ホテル/バルコニー.png",
          "./IMG/ホテル/外観.png"
        ]
      }
    },
  
    vietnam: {
      tripName: "🇻🇳ベトナム旅行🇻🇳",
      tripDate: "2024/04/29〜2024/05/03",
  
      onward: {
        flight: {
          airline: "Vietnam Airlines",
          flightNumber: "VN310",
          aircraft: "Airbus A350",
          image: "./IMG/交通機関/VietnamAirlines.png",
          schedule: {
            departure: {
              airport: "東京(成田)第1ターミナル",
              time: "9:00"
            },
            arrival: {
              airport: "ハノイ(ノイバイ空港)",
              time: "13:30"
            }
          }
        }
      },
  
      return: {
        flight: {
          airline: "Vietnam Airlines",
          flightNumber: "VN311",
          aircraft: "Airbus A350",
          image: "./IMG/交通機関/VietnamAirlines.png",
          schedule: {
            departure: {
              airport: "ハノイ(ノイバイ空港)",
              time: "16:00"
            },
            arrival: {
              airport: "東京(成田)第1ターミナル",
              time: "21:00"
            }
          }
        }
      },
  
      hotel: {
        name: "Oriental Jade Hotel",
        address: "No. 92-94 Hang Trong St, Hoan Kiem, Hanoi",
        access: "ノイバイ空港から車で約40分",
        checkin: "14:00",
        checkout: "12:00",
        images: [
          "./IMG/HOTEL/vietnam1.jpg",
          "./IMG/HOTEL/vietnam2.jpg",
          "./IMG/HOTEL/vietnam3.jpg"
        ]
      }
    }
  };
  