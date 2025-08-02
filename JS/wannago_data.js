const wannagoSpots = [
    {
      id: "sobesoba",
      title: "楚辺そば",
      image: "../IMG/沖縄フィード/1.png",
      tags: ["沖縄そば", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=楚辺そば"
    },
    {
      id: "nakamurasoba",
      title: "なかむらそば",
      image: "../IMG/沖縄フィード/3.png",
      tags: ["沖縄そば", "中部"],
      map: "https://www.google.com/maps/search/?api=1&query=なかむらそば瀬良垣"
    },
    {
      id: "hamayasoba",
      title: "浜屋そば",
      image: "../IMG/沖縄フィード/2.png",
      tags: ["沖縄そば", "アメビレ付近"],
      map: "https://www.google.com/maps/search/?api=1&query=浜屋そば"
    },
    {
      id: "jackies",
      title: "ジャッキーステーキハウス",
      image: "../IMG/沖縄フィード/5.png",
      tags: ["アメリカン", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=ジャッキーステーキハウス"
    },
    {
      id: "seaside",
      title: "シーサイドドライブイン",
      image: "../IMG/沖縄フィード/6.png",
      tags: ["アメリカン", "中部"],
      map: "https://www.google.com/maps/search/?api=1&query=シーサイドドライブイン"
    },
    {
      id: "kawakami",
      title: "川かみ鮮魚",
      image: "../IMG/沖縄フィード/4.png",
      tags: ["居酒屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=川かみ鮮魚"
    },
    {
      id: "awmakiminato",
      title: "A&W牧港店",
      image: "../IMG/沖縄フィード/7.png",
      tags: ["アメリカン", "南部"],
      map: "https://www.google.com/maps/search/?api=1&query=A&W牧港店"
    },
    {
      id: "jefburger",
      title: "jef（ぬーやるバーガー）",
      image: "../IMG/沖縄フィード/8.png",
      tags: ["アメリカン", "南部"],
      map: "https://www.google.com/maps/search/?api=1&query=jef%20ぬーやるバーガー"
    },
    {
      id: "bantacafe",
      title: "バンタカフェ by 星野リゾート",
      image: "../IMG/沖縄フィード/9.png",
      tags: ["カフェ", "中部"],
      map: "https://www.google.com/maps/search/?api=1&query=バンタカフェ"
    },
    {
      id: "kingtacos",
      title: "キングタコス",
      image: "../IMG/沖縄フィード/17.png",
      tags: ["メキシカン", "中部"],
      map: "https://www.google.com/maps/search/?api=1&query=キングタコス"
    },
    {
      id: "charlie",
      title: "チャーリー多幸寿",
      image: "../IMG/沖縄フィード/19.png",
      tags: ["メキシカン", "南部"],
      map: "https://www.google.com/maps/search/?api=1&query=チャーリー多幸寿"
    },
    {
      id: "gordies",
      title: "GORDIE'S",
      image: "../IMG/沖縄フィード/18.png",
      tags: ["アメリカン", "南部"],
      map: "https://www.google.com/maps/search/?api=1&query=GORDIE'S"
    },
    {
      id: "suehiro",
      title: "末廣ブルース",
      image: "../IMG/沖縄フィード/21.png",
      tags: ["居酒屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=末廣ブルース"
    },
    {
      id: "kourishrimp",
      title: "KOURI SHRIMP",
      image: "../IMG/沖縄フィード/23.png",
      tags: ["アメリカン", "北部"],
      map: "https://www.google.com/maps/search/?api=1&query=KOURISHRIMP"
    },
    {
      id: "samsbythesea",
      title: "サムズバイザシー泡瀬店",
      image: "../IMG/沖縄フィード/24.png",
      tags: ["アメリカン", "南部"],
      map: "https://www.google.com/maps/search/?api=1&query=サムズバイザシー泡瀬店"
    },
    {
      id: "kamekamesoba",
      title: "亀かめそば",
      image: "../IMG/沖縄フィード/25.png",
      tags: ["沖縄そば", "南部"],
      map: "https://www.google.com/maps/search/?api=1&query=亀かめそば"
    },
    {
      id: "eibun",
      title: "OKINAWA SOBA EIBUN",
      image: "../IMG/沖縄フィード/26.png",
      tags: ["沖縄そば", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=OKINAWASOBAEIBUN"
    },
      {
        id: "americanvillage",
        title: "アメリカンビレッジ",
        image: "../IMG/沖縄フィード/11.png",
        tags: ["ショッピング", "中部"],
        map: "https://www.google.com/maps/search/?api=1&query=アメリカンビレッジ"
      },
      {
        id: "shurijo",
        title: "首里城",
        image: "../IMG/沖縄フィード/10.png",
        tags: ["観光地", "南部"],
        map: "https://www.google.com/maps/search/?api=1&query=首里城"
      },
      {
        id: "fukuginamiki",
        title: "備瀬のフクギ並木",
        image: "../IMG/沖縄フィード/12.png",
        tags: ["観光地", "中部"],
        map: "https://www.google.com/maps/search/?api=1&query=備瀬のフクギ並木"
      },
      {
        id: "umikajiterrace",
        title: "瀬長島ウミカジテラス",
        image: "../IMG/沖縄フィード/13.png",
        tags: ["ショッピング", "南部"],
        map: "https://www.google.com/maps/search/?api=1&query=瀬長島ウミカジテラス"
      },
      {
        id: "minatogawastate",
        title: "港川ステイツサイドタウン",
        image: "../IMG/沖縄フィード/14.png",
        tags: ["ショッピング", "南部"],
        map: "https://www.google.com/maps/search/?api=1&query=港川ステイツサイドタウン"
      },
      {
        id: "michinoekikyoda",
        title: "道の駅許田",
        image: "../IMG/沖縄フィード/15.png",
        tags: ["ショッピング", "中部"],
        map: "https://www.google.com/maps/search/?api=1&query=道の駅許田"
      },
      {
        id: "onnanoeki",
        title: "おんなの駅なかゆくい市場",
        image: "../IMG/沖縄フィード/16.png",
        tags: ["ショッピング", "中部"],
        map: "https://www.google.com/maps/search/?api=1&query=おんなの駅なかゆくい市場"
      },
      {
        id: "yachimun",
        title: "壺屋やちむん通り",
        image: "../IMG/沖縄フィード/20.png",
        tags: ["ショッピング", "国際通り周辺"],
        map: "https://www.google.com/maps/search/?api=1&query=壺屋やちむん通り"
      },
      {
        id: "chigunuhama",
        title: "古宇利島チグヌ浜",
        image: "../IMG/沖縄フィード/22.png",
        tags: ["海", "北部"],
        map: "https://www.google.com/maps/search/?api=1&query=古宇利島チグヌ浜"
      },
      {
        id: "naminouegu",
        title: "波上宮",
        image: "../IMG/沖縄フィード/波上宮.png",
        tags: ["観光地", "国際通り周辺"],
        map: "https://www.google.com/maps/search/?api=1&query=波上宮"
      },
      {
        id: "goyatempura",
        title: "呉屋てんぷら屋",
        image: "../IMG/沖縄フィード/呉屋てんぷら.png",
        tags: ["軽食", "国際通り周辺"],
        map: "https://www.google.com/maps/search/?api=1&query=呉屋てんぷら屋"
      },
      {
        id: "asagohan",
        title: "いつでも朝ごはん国際通り",
        image: "../IMG/沖縄フィード/いつでも朝ごはん.png",
        tags: ["朝食", "国際通り周辺"],
        map: "https://www.google.com/maps/search/?api=1&query=いつでも朝ごはん国際通り"
      },
      {
        id: "bettergirl",
        title: "BETTERGIRL",
        image: "../IMG/沖縄フィード/BETTERGIRL.png",
        tags: ["朝食", "国際通り周辺"],
        map: "https://www.google.com/maps/search/?api=1&query=BETTERGIRL"
      },
      {
        id: "aienbakery",
        title: "AIENBAKERY",
        image: "../IMG/沖縄フィード/AIENBAKERY.png",
        tags: ["朝食", "南部"],
        map: "https://www.google.com/maps/search/?api=1&query=AIENBAKERY"
      },
      {
        id: "panilani",
        title: "パニラニ",
        image: "../IMG/沖縄フィード/パニラニ.png",
        tags: ["朝食", "中部"],
        map: "https://www.google.com/maps/search/?api=1&query=ハワイアンパンケーキハウスパニラニ"
      },
      {
        id: "hamayachaya",
        title: "浜辺の茶屋",
        image: "../IMG/沖縄フィード/浜辺の茶屋.png",
        tags: ["カフェ", "南部"],
        map: "https://www.google.com/maps/search/?api=1&query=浜辺の茶屋"
      },
      {
        id: "marutama",
        title: "味噌めしやまるたま",
        image: "../IMG/沖縄フィード/味噌めしやまるたま.png",
        tags: ["朝食", "国際通り周辺"],
        map: "https://www.google.com/maps/search/?api=1&query=味噌めしやまるたま"
      },
      {
        id: "yanbarushokudou",
        title: "やんばる食堂",
        image: "../IMG/沖縄フィード/やんばる食堂.png",
        tags: ["朝食", "南部"],
        map: "https://www.google.com/maps/search/?api=1&query=やんばる食堂"
      },
      {
        id: "ufuya",
        title: "百年古家大家うふやー",
        image: "../IMG/沖縄フィード/百年古家大家うふやー.png",
        tags: ["沖縄そば", "北部"],
        map: "https://www.google.com/maps/search/?api=1&query=百年古家大家うふやー"
      },
      {
        id: "zanpamisaki",
        title: "残波岬",
        image: "../IMG/沖縄フィード/残波岬.png",
        tags: ["観光地", "中部"],
        map: "https://www.google.com/maps/search/?api=1&query=残波岬"
      },
      {
        id: "manzamou",
        title: "万座毛",
        image: "../IMG/沖縄フィード/万座毛.png",
        tags: ["観光地", "中部"],
        map: "https://www.google.com/maps/search/?api=1&query=万座毛"
      },
      {
        id: "kouribeach",
        title: "古宇利ビーチ",
        image: "../IMG/沖縄フィード/古宇利ビーチ.png",
        tags: ["海", "北部"],
        map: "https://www.google.com/maps/search/?api=1&query=古宇利ビーチ"
      },
      {
        id: "heartrock",
        title: "ハートロック",
        image: "../IMG/沖縄フィード/ハートロック.png",
        tags: ["観光地", "北部"],
        map: "https://www.google.com/maps/search/?api=1&query=ハートロック"
      },
      {
        id: "hedomisaki",
        title: "辺戸岬",
        image: "../IMG/沖縄フィード/辺戸岬.png",
        tags: ["観光地", "北部"],
        map: "https://www.google.com/maps/search/?api=1&query=辺戸岬"
      },
      {
        id: "nagopinepark",
        title: "ナゴパイナップルパーク",
        image: "../IMG/沖縄フィード/ナゴパイナップルパーク.png",
        tags: ["観光地", "北部"],
        map: "https://www.google.com/maps/search/?api=1&query=ナゴパイナップルパーク"
      },
      {
        id: "nakijinnjoato",
        title: "今帰仁城跡",
        image: "../IMG/沖縄フィード/今帰仁城跡.png",
        tags: ["観光地", "北部"],
        map: "https://www.google.com/maps/search/?api=1&query=今帰仁城跡"
      },
      {
        id: "sesokobeach",
        title: "瀬底ビーチ",
        image: "../IMG/沖縄フィード/瀬底ビーチ.png",
        tags: ["海", "北部"],
        map: "https://www.google.com/maps/search/?api=1&query=瀬底ビーチ"
      },
      {
        id: "okumabeach",
        title: "オクマビーチ",
        image: "../IMG/沖縄フィード/オクマビーチ.png",
        tags: ["海", "北部"],
        map: "https://www.google.com/maps/search/?api=1&query=オクマビーチ"
      },
      {
        id: "ryukyumura",
        title: "琉球村",
        image: "../IMG/沖縄フィード/琉球村.png",
        tags: ["観光地", "中部"],
        map: "https://www.google.com/maps/search/?api=1&query=琉球村"
      },
      {
        id: "kayauchibanta",
        title: "茅打バンタ",
        image: "../IMG/沖縄フィード/茅打バンタ.png",
        tags: ["観光地", "北部"],
        map: "https://www.google.com/maps/search/?api=1&query=茅打バンタ"
      },
      {
        id: "emeraldbeach",
        title: "エメラルドビーチ",
        image: "../IMG/沖縄フィード/エメラルドビーチ.png",
        tags: ["海", "北部"],
        map: "https://www.google.com/maps/search/?api=1&query=エメラルドビーチ"
      },
      {
        id: "fruitland",
        title: "OKINAWAフルーツらんど",
        image: "../IMG/沖縄フィード/OKINAWAフルーツらんど.png",
        tags: ["観光地", "北部"],
        map: "https://www.google.com/maps/search/?api=1&query=OKINAWAフルーツらんど"
      },
      {
        id: "uppamabeach",
        title: "ウッパマビーチ",
        image: "../IMG/沖縄フィード/ウッパマビーチ.png",
        tags: ["海", "北部"],
        map: "https://www.google.com/maps/search/?api=1&query=ウッパマビーチ"
      },
      {
        id: "untemorienchi",
        title: "運天森園地",
        image: "../IMG/沖縄フィード/運天森園地.png",
        tags: ["観光地", "北部"],
        map: "https://www.google.com/maps/search/?api=1&query=運天森園地"
      },
      {
        id: "minatoshokudo",
        title: "みなと食堂",
        image: "../IMG/沖縄フィード/みなと食堂.png",
        tags: ["食堂","沖縄そば", "北部"],
        map: "https://www.google.com/maps/search/?api=1&query=みなと食堂本部町"
      },
      {
        id: "maedashokudo",
        title: "前田食堂",
        image: "../IMG/沖縄フィード/前田食堂.png",
        tags: ["食堂","沖縄そば", "北部"],
        map: "https://www.google.com/maps/search/?api=1&query=前田食堂"
      },
      {
        id: "kunigamiminato",
        title: "国頭港食堂",
        image: "../IMG/沖縄フィード/国頭港食堂.png",
        tags: ["食堂", "北部"],
        map: "https://www.google.com/maps/search/?api=1&query=国頭港食堂"
      }
  ];
  