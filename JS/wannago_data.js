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
      },
      {
        id: "captainkangaroo",
        title: "キャプテンカンガルー",
        image: "../IMG/沖縄フィード/キャプテンカンガルー.png",
        tags: ["アメリカン", "北部"],
        map: "https://www.google.com/maps/search/?api=1&query=キャプテンカンガルー"
      },
      {
        id: "hanagasashokudo",
        title: "花笠食堂",
        image: "../IMG/沖縄フィード/花笠食堂.png",
        tags: ["食堂", "国際通り周辺"],
        map: "https://www.google.com/maps/search/?api=1&query=花笠食堂"
      },
      {
        id: "kaiyoshokudo",
        title: "海洋食堂",
        image: "../IMG/沖縄フィード/海洋食堂.png",
        tags: ["食堂", "南部"],
        map: "https://www.google.com/maps/search/?api=1&query=海洋食堂"
      },
      {
        id: "keishokuruby",
        title: "軽食の店ルビー",
        image: "../IMG/沖縄フィード/軽食の店ルビー.png",
        tags: ["食堂", "南部"],
        map: "https://www.google.com/maps/search/?api=1&query=軽食の店ルビー"
      },
      {
        id: "yataimura",
        title: "国際通り屋台村",
        image: "../IMG/沖縄フィード/国際通り屋台村.png",
        tags: ["居酒屋", "国際通り周辺"],
        map: "https://www.google.com/maps/search/?api=1&query=国際通り屋台村"
      },
      {
        id: "orion",
        title: "島唄ライブ沖縄民謡居酒屋ORION",
        image: "../IMG/沖縄フィード/島唄ライブ沖縄民謡居酒屋ORION.png",
        tags: ["居酒屋", "国際通り周辺"],
        map: "https://www.google.com/maps/search/?api=1&query=島唄ライブ沖縄民謡居酒屋ORION"
      },
      {
        id: "kushinakama",
        title: "串ナカマ",
        image: "../IMG/沖縄フィード/串ナカマ.png",
        tags: ["居酒屋", "国際通り周辺"],
        map: "https://www.google.com/maps/search/?api=1&query=串ナカマ"
      },
      {
        id: "tareya",
        title: "垂れ屋",
        image: "../IMG/沖縄フィード/垂れ屋.png",
        tags: ["居酒屋", "国際通り周辺"],
        map: "https://www.google.com/maps/search/?api=1&query=垂れ屋"
      },
    {
      id: "urizun",
      title: "うりずん国際通り",
      image: "../IMG/沖縄フィード/うりずん.png",
      tags: ["居酒屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=うりずん国際通り"
    },
    {
      id: "uchina",
      title: "うちなー家国際通り",
      image: "../IMG/沖縄フィード/うちなー家.png",
      tags: ["居酒屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=うちなー家国際通り"
    },
    {
      id: "matetsu",
      title: "酒場まてつ",
      image: "../IMG/沖縄フィード/酒場まてつ.png",
      tags: ["居酒屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=酒場まてつ"
    },
    {
      id: "gajuya",
      title: "我自由家",
      image: "../IMG/沖縄フィード/我自由家.png",
      tags: ["居酒屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=我自由家"
    },
    {
      id: "muto",
      title: "むとう国際通り",
      image: "../IMG/沖縄フィード/むとう.png",
      tags: ["居酒屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=むとう国際通り"
    },
    {
      id: "tenngoku",
      title: "天国酒場",
      image: "../IMG/沖縄フィード/天国酒場.png",
      tags: ["居酒屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=天国酒場"
    },
    {
      id: "adachiya",
      title: "足立屋国際通り",
      image: "../IMG/沖縄フィード/足立屋.png",
      tags: ["居酒屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=足立屋国際通り"
    },
    {
      id: "nakama",
      title: "なかま商店国際通り",
      image: "../IMG/沖縄フィード/なかま商店.png",
      tags: ["居酒屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=なかま商店国際通り"
    },
    {
      id: "cafeyamagame",
      title: "カフェやまがめ",
      image: "../IMG/沖縄フィード/カフェやまがめ.png",
      tags: ["カフェ", "北部"],
      map: "https://www.google.com/maps/search/?api=1&query=カフェやまがめ"
    },
    {
      id: "kingside",
      title: "キングサイド沖縄",
      image: "../IMG/沖縄フィード/kingsideBREAKFASTandBURGERS.png",
      tags: ["カフェ", "朝食", "中部", "アメリカン"],
      map: "https://www.google.com/maps/search/?api=1&query=キングサイド沖縄"
    },
    {
      id: "wts",
      title: "What'sthestory?沖縄",
      image: "../IMG/沖縄フィード/What'sthestory.png",
      tags: ["カフェ", "朝食", "居酒屋", "中部"],
      map: "https://www.google.com/maps/search/?api=1&query=What'sthestory?沖縄"
    },
    {
      id: "yachimunnsisa",
      title: "やちむん喫茶シーサー園",
      image: "../IMG/沖縄フィード/やちむん喫茶シーサー園.png",
      tags: ["カフェ", "北部"],
      map: "https://www.google.com/maps/search/?api=1&query=やちむん喫茶シーサー園"
    },
    {
      id: "anettai",
      title: "亜熱帯茶屋",
      image: "../IMG/沖縄フィード/亜熱帯茶屋.png",
      tags: ["カフェ", "北部"],
      map: "https://www.google.com/maps/search/?api=1&query=亜熱帯茶屋"
    },
    {
      id: "modica",
      title: "MODICA沖縄",
      image: "../IMG/沖縄フィード/MODICA.png",
      tags: ["カフェ", "南部"],
      map: "https://www.google.com/maps/search/?api=1&query=MODICA沖縄"
    },
    {
      id: "alv",
      title: "ALONGVACATION沖縄",
      image: "../IMG/沖縄フィード/ALONGVACATION.png",
      tags: ["カフェ", "朝食", "国際通り周辺", "アメリカン"],
      map: "https://www.google.com/maps/search/?api=1&query=ALONGVACATION沖縄"
    },
    {
      id: "cp",
      title: "COFFEEPEOPLE沖縄",
      image: "../IMG/沖縄フィード/coffeepeople.png",
      tags: ["カフェ", "中部"],
      map: "https://www.google.com/maps/search/?api=1&query=COFFEEPEOPLE沖縄"
    },
    {
      id: "pizzakissa",
      title: "ピザ喫茶花人逢",
      image: "../IMG/沖縄フィード/ピザ喫茶花人逢.png",
      tags: ["カフェ", "アメリカン", "北部"],
      map: "https://www.google.com/maps/search/?api=1&query=ピザ喫茶花人逢"
    },
    {
      id: "makabechina",
      title: "茶処真壁ちなー",
      image: "../IMG/沖縄フィード/茶処真壁ちなー.png",
      tags: ["沖縄そば", "南部"],
      map: "https://www.google.com/maps/search/?api=1&query=茶処真壁ちなー"
    },
    {
      id: "yamaka",
      title: "ヤマカスタンド",
      image: "../IMG/沖縄フィード/ヤマカスタンド.png",
      tags: ["カフェ", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=ヤマカスタンド"
    },  {
      id: "nahaereji",
      title: "那覇哀歌",
      image: "../IMG/沖縄フィード/那覇哀歌.png",
      tags: ["居酒屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=那覇哀歌"
    },
    {
      id: "koyaji",
      title: "パーラー小やじ",
      image: "../IMG/沖縄フィード/パーラー小やじ.png",
      tags: ["居酒屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=パーラー小やじ"
    },
    {
      id: "kotonoha",
      title: "コトノハ・mogmog食堂",
      image: "../IMG/沖縄フィード/コトノハ・mogmog食堂.png",
      tags: ["食堂", "居酒屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=コトノハ・mogmog食堂"
    },
    {
      id: "aw",
      title: "AmericanWAVE沖縄",
      image: "../IMG/沖縄フィード/AmericanWAVE.png",
      tags: ["古着屋", "南部"],
      map: "https://www.google.com/maps/search/?api=1&query=AmericanWAVE沖縄"
    },
    {
      id: "ad",
      title: "americandepot",
      image: "../IMG/沖縄フィード/americandepot.png",
      tags: ["古着屋", "中部"],
      map: "https://www.google.com/maps/search/?api=1&query=americandepot"
    },
    {
      id: "timemachine",
      title: "沖縄古着屋タイムマシン",
      image: "../IMG/沖縄フィード/沖縄古着屋タイムマシン.png",
      tags: ["古着屋", "南部"],
      map: "https://www.google.com/maps/search/?api=1&query=沖縄古着屋タイムマシン"
    },
    {
      id: "avcs",
      title: "akabanavintageclothingstore沖縄",
      image: "../IMG/沖縄フィード/akabana.png",
      tags: ["古着屋", "中部"],
      map: "https://www.google.com/maps/search/?api=1&query=akabanavintageclothingstore沖縄"
    },
    {
      id: "cyclone",
      title: "沖縄古着屋サイクロン",
      image: "../IMG/沖縄フィード/沖縄古着屋サイクロン.png",
      tags: ["古着屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=沖縄古着屋サイクロン"
    },
    {
      id: "bulico",
      title: "ブリコルール沖縄古着",
      image: "../IMG/沖縄フィード/ブリコルール.png",
      tags: ["古着屋", "カフェ", "南部", "アメリカン"],
      map: "https://www.google.com/maps/search/?api=1&query=ブリコルール沖縄古着"
    },
    {
      id: "jaBBer",
      title: "jaBBer沖縄国際通り店",
      image: "../IMG/沖縄フィード/jaBBer.png",
      tags: ["古着屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=jaBBer沖縄国際通り店"
    },
    {
      id: "fishball",
      title: "フィッシュボール沖縄古着",
      image: "../IMG/沖縄フィード/フィッシュボール.png",
      tags: ["古着屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=フィッシュボール沖縄古着"
    },
    {
      id: "ov",
      title: "OKINAWAVINTAGE松尾2丁目22−20",
      image: "../IMG/沖縄フィード/ov.png",
      tags: ["古着屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=OKINAWAVINTAGE松尾2丁目22−20"
    },
    {
      id: "aina",
      title: "無人古着屋アイナ沖縄",
      image: "../IMG/沖縄フィード/アイナ.png",
      tags: ["古着屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=無人古着屋アイナ沖縄"
    },
    {
      id: "fhc",
      title: "FLATHEADSCREW〒900-0023沖縄県那覇市楚辺２丁目１２−２",
      image: "../IMG/沖縄フィード/FLATHEADSCREW.png",
      tags: ["古着屋", "国際通り周辺"],
      map: "https://www.google.com/maps/search/?api=1&query=FLATHEADSCREW〒900-0023沖縄県那覇市楚辺２丁目１２−２"
    },
    {
      id: "fal",
      title: "古着屋FAL",
      image: "../IMG/沖縄フィード/古着屋FAL.png",
      tags: ["古着屋", "南部"],
      map: "https://www.google.com/maps/search/?api=1&query=古着屋FAL"
    },
    {
      id: "ashibina",
      title: "沖縄アウトレットモールあしびなー",
      image: "../IMG/沖縄フィード/あしびなー.png",
      tags: ["ショッピング", "南部"],
      map: "https://www.google.com/maps/search/?api=1&query=沖縄アウトレットモールあしびなー"
    },
    {
      id: "raikamu",
      title: "イオンモール沖縄ライカム",
      image: "../IMG/沖縄フィード/ライカム.png",
      tags: ["ショッピング", "中部"],
      map: "https://www.google.com/maps/search/?api=1&query=イオンモール沖縄ライカム"
    },
    {
      id: "pizzahousejr",
      title: "ピザハウスジュニア",
      image: "../IMG/沖縄フィード/ピザハウスジュニア.png",
      tags: ["メキシカン", "南部", "アメリカン"],
      map: "https://www.google.com/maps/search/?api=1&query=ピザハウスジュニア"
    },
    {
      id: "tamaya",
      title: "そば処玉家そば南城市大里古堅",
      image: "../IMG/沖縄フィード/沖縄そば玉家.png",
      tags: ["沖縄そば", "南部"],
      map: "https://www.google.com/maps/search/?api=1&query=そば処玉家そば南城市大里古堅"
    }
  ];
  