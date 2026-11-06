/**
 * Cosmic Gyaru ViViViT-style Engineering & Design Portfolio
 * Works Data & Interactive Controllers 💖🪐✨
 */

// 作品データベース
const worksData = [
  {
    id: "planet-cafe",
    title: "Planet Cafe - 宇宙カフェ オーダーシステム 🪐🍩",
    subtitle: "宇宙旅の途中で立ち寄る近未来カフェの爆盛れオーダーWebアプリ💖",
    category: "frontend",
    tags: ["HTML5", "CSS3", "JavaScript", "UI/UX Design", "Figma"],
    heroImage: "assets/images/planet-cafe/main.jpg",
    images: [
      {
        src: "assets/images/planet-cafe/main.jpg",
        caption: "【メイン注文画面】青く輝く満月＆漆黒の宇宙空間にネオンブルーのサイバーUI！惑星ドーナツのシズル感が宇宙イチ映える〜✨"
      },
      {
        src: "assets/images/planet-cafe/order.jpg",
        caption: "【注文・カート確認画面】宇宙飛行士のグラフィックと数量カウンター！合計金額の自動計算ロジックもJSでサクッと実装済み✌️"
      },
      {
        src: "assets/images/planet-cafe/ui-annotation.jpg",
        caption: "【UI/UXのこだわり】スクロールバーの視認性爆上げで「メニュー下に続いてるよ！」って自然に伝わる設計＆カードコンポーネントで管理しやすさ神！"
      },
      {
        src: "assets/images/planet-cafe/concept-map.jpg",
        caption: "【デザインポジショニングマップ】「暖かい / クール」「ファンタジー / サイバー」の4象限で世界観とトンマナをガチ分析！迷いゼロの設計図。"
      },
      {
        src: "assets/images/planet-cafe/figma-workspace.jpg",
        caption: "【Figma設計ワークスペース】アイコンセット、アセット、UIパターン（Android Expanded）、全画面遷移プロトタイプ！"
      }
    ],
    summary: "「宇宙旅行中に立ち寄る近未来のカフェ」をテーマに、企画からFigmaでのUI/UX設計、そしてHTML/CSS/JavaScriptによるフロントエンド実装までを一貫して手掛けたテーブルオーダーシステムです！ただ派手にするんじゃなくて、注文完了までのストレスを極限までゼロにする動線設計にこだわりました💅✨",
    role: "企画 / UI・UXデザイン / フロントエンド開発",
    period: "約2週間（集中制作！）",
    techStack: [
      { name: "HTML5", icon: "fa-brands fa-html5", desc: "セマンティックなマークアップで保守性＆アクセシビリティも抜かりなし！" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt", desc: "ネオン発光エフェクト、Flexbox/Gridによるカードレイアウト、カスタムスクロールバー" },
      { name: "JavaScript", icon: "fa-brands fa-js", desc: "カートの数量増減、動的合計金額計算、画面遷移処理をVanilla JSで軽快に実装" },
      { name: "Figma", icon: "fa-brands fa-figma", desc: "ポジショニングマップ分析、UIコンポーネント作成、プロトタイピング" }
    ],
    features: [
      {
        title: "カードコンポーネント化で拡張性＆メンテ性爆アゲ！",
        text: "メニュー項目を独立したカードコンポーネントとしてCSS・DOM構造を設計。商品追加やレイアウト変更が秒でできる設計にしてます。"
      },
      {
        title: "「下にもあるよ！」が一目で伝わるスクロール誘導UI",
        text: "ファーストビューでメニューが下に続いていることがパッと見で直感的に分かるよう、スクロールバーの視認性とチラ見せ配置を徹底工夫！"
      },
      {
        title: "世界観を崩さないネオン×サイバーデザイン",
        text: "青を基調としたネオンボーダー、惑星の質感ドーナツ、宇宙飛行士など、非日常感を楽しめるリッチなビジュアル設計。"
      },
      {
        title: "秒で反映！リアルタイムな注文集計ロジック",
        text: "JavaScriptを用いて各商品の数量変更ボタン（+/-）を押した瞬間に即座に合計金額が計算される気持ちいい注文フローを構築。"
      }
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "galaxy-dashboard",
    title: "CosmoAnalytics - 宇宙観測データ可視化ダッシュボード 📡",
    subtitle: "天体観測衛星データとテレメトリをリアルタイム可視化するSPA✨",
    category: "webapp",
    tags: ["JavaScript", "Chart.js", "REST API", "Tailwind CSS"],
    heroImage: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    images: [
      {
        src: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
        caption: "リアルタイムテレメトリ表示とインタラクティブなチャートUI"
      },
      {
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        caption: "グローバル衛星軌道マッピング画面"
      }
    ],
    summary: "NASA Open APIを活用し、小惑星の接近情報や太陽系観測データをリアルタイムにグラフ・マップ化するWebダッシュボードです。",
    role: "フロントエンド開発 / API連携",
    period: "約3週間",
    techStack: [
      { name: "JavaScript", icon: "fa-brands fa-js", desc: "非同期Fetch APIによるデータ取得・整形" },
      { name: "Chart.js", icon: "fa-solid fa-chart-line", desc: "軌道データ・光度曲線の動的グラフ描画" },
      { name: "Tailwind CSS", icon: "fa-solid fa-wind", desc: "ダークモード対応のレスポンシブUI構築" }
    ],
    features: [
      {
        title: "高速なデータレンダリング",
        text: "大量の観測ログを間引き処理し、ブラウザの描画負荷を低減。"
      },
      {
        title: "ダークテーマ最適化",
        text: "長時間の観測作業を想定した目に優しいハイコントラストダークデザイン。"
      }
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "lumina-design-system",
    title: "Lumina Design System - UIコンポーネント集 🎨",
    subtitle: "アクセシビリティとマイクロインタラクションに特化したUIライブラリ💖",
    category: "ui-ux",
    tags: ["Figma", "CSS3", "Design System", "Storybook"],
    heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    images: [
      {
        src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
        caption: "デザイントークン（カラー、スペーシング、タイポグラフィ）の設計図"
      },
      {
        src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80",
        caption: "コンポーネントバリエーションとステート定義"
      }
    ],
    summary: "プロダクト間で一貫したユーザー体験を提供するために設計した、再利用可能なWebコンポーネントのデザインシステムです。",
    role: "デザインシステム設計 / コンポーネント実装",
    period: "約1ヶ月",
    techStack: [
      { name: "Figma", icon: "fa-brands fa-figma", desc: "Auto Layout & Variablesによるデザイントークン管理" },
      { name: "CSS Custom Properties", icon: "fa-brands fa-css3-alt", desc: "テーマ切り替えと動的スタイリング" }
    ],
    features: [
      {
        title: "WCAG 2.1 AA準拠",
        text: "カラーコントラスト比4.5:1以上、キーボード操作の完全対応。"
      },
      {
        title: "デザイントークンの自動同期",
        text: "Figmaの変数定義をCSS変数へスムーズに落とし込める構造。"
      }
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "cyber-threejs-demo",
    title: "Orbit-X - 3D惑星シミュレータ 🪐",
    subtitle: "ブラウザ上で太陽系惑星を探索できるインタラクティブ3Dビューア✨",
    category: "creative",
    tags: ["Three.js", "WebGL", "JavaScript", "Math"],
    heroImage: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80",
    images: [
      {
        src: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80",
        caption: "リアルタイムテクスチャマッピングと公転軌道計算"
      }
    ],
    summary: "WebGL/Three.jsを活用し、Planet Cafeの世界観から着想を得て制作したインタラクティブな3D宇宙空間体験。",
    role: "3Dグラフィックス実装 / 数理計算",
    period: "約10日間",
    techStack: [
      { name: "Three.js", icon: "fa-solid fa-cube", desc: "シェーダー・ライティング・カメラコントロール" },
      { name: "JavaScript (ES6+)", icon: "fa-brands fa-js", desc: "ケプラーの法則に基づく惑星運動計算" }
    ],
    features: [
      {
        title: "60fpsの滑らかな描画",
        text: "ジオメトリの最適化とテクスチャ圧縮による高パフォーマンス実現。"
      }
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "artisan-coffee-ec",
    title: "Artisan Coffee Roasters - ECブランドサイト ☕",
    subtitle: "こだわり豆の定期便と抽出レシピを伝えるブランドコマースサイト🌺",
    category: "frontend",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    heroImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    images: [
      {
        src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
        caption: "香りと温かみを感じさせるヒーロービュー"
      },
      {
        src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
        caption: "豆の焙煎度合い・風味チャートのインタラクティブ表示"
      }
    ],
    summary: "シングルオリジンコーヒーの魅力をストーリーテリングで伝えるECサイトのフロントエンド実装。",
    role: "デザインカンプコーディング / レスポンシブ実装",
    period: "約2週間",
    techStack: [
      { name: "HTML5/CSS3", icon: "fa-brands fa-html5", desc: "フルレスポンシブ・グリッドレイアウト" },
      { name: "JavaScript", icon: "fa-brands fa-js", desc: "テイスト診断によるおすすめ豆サジェスト機能" }
    ],
    features: [
      {
        title: "モバイルファースト設計",
        text: "片手操作しやすい下部ナビゲーションと大判画像カルーセル。"
      }
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "portfolio-hub",
    title: "Cosmic Gyaru Portfolio - 本サイト 💖",
    subtitle: "宇宙×ギャル！CDNで高速動作するViViViT風爆盛れポートフォリオサイト✨",
    category: "frontend",
    tags: ["Tailwind CSS", "JavaScript", "Swiper.js", "CDN"],
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    images: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        caption: "ViViViT風のグリッドレイアウトとスムーズなモーダル遷移"
      }
    ],
    summary: "ビルドツールを介さずCDNのみで構成しながら、最高峰のビジュアル訴求力と軽快な動作を実現したポートフォリオサイトです。",
    role: "企画 / デザイン / 実装",
    period: "1週間",
    techStack: [
      { name: "Tailwind CSS (CDN)", icon: "fa-solid fa-wind", desc: "ユーティリティファーストによる迅速なデザイン構築" },
      { name: "Swiper.js", icon: "fa-solid fa-images", desc: "タッチスワイプ完全対応の画像スライダー" },
      { name: "Vanilla JavaScript", icon: "fa-brands fa-js", desc: "依存関係のない軽量・堅牢なDOM操作" }
    ],
    features: [
      {
        title: "ゼロコンフィグ・高移植性",
        text: "ブラウザで直接開くだけで動作し、GitHub Pagesなどへのデプロイも一瞬。"
      }
    ],
    demoUrl: "#",
    githubUrl: "#"
  }
];

// Swiperインスタンス保持変数
let modalSwiper = null;

// DOM読み込み完了時の初期化
document.addEventListener("DOMContentLoaded", () => {
  renderWorks("all");
  setupFilters();
  setupModalEvents();
  setupMobileMenu();
});

// 作品グリッドの描画 (宇宙×ギャル デコカード)
function renderWorks(category = "all") {
  const container = document.getElementById("works-grid");
  if (!container) return;

  const filtered = category === "all" 
    ? worksData 
    : worksData.filter(item => item.category === category);

  container.innerHTML = "";

  filtered.forEach(work => {
    const isPlanet = work.id === "planet-cafe";
    const card = document.createElement("article");
    card.className = "work-card flex flex-col cursor-pointer group";
    card.setAttribute("data-id", work.id);
    card.setAttribute("data-category", work.category);

    card.innerHTML = `
      <div class="relative card-thumb overflow-hidden bg-black aspect-[16/10] select-none">
        <img 
          src="${work.heroImage}" 
          alt="${work.title}" 
          loading="lazy" 
          class="w-full h-full object-cover object-center"
        />
        <div class="card-thumb-overlay absolute inset-0 bg-gyaru-black/75 backdrop-blur-xs flex flex-col justify-end p-5 text-white">
          <span class="inline-flex items-center gap-1.5 text-xs font-black px-3.5 py-1.5 rounded-full ${isPlanet ? 'bg-gradient-to-r from-gyaru-hotpink via-gyaru-purple to-gyaru-cyan text-white shadow-lg border border-gyaru-gold' : 'bg-gyaru-hotpink/80 text-white border border-gyaru-hotpink'} w-fit mb-2">
            👀 タップして超詳しく見る💖 (${work.images.length}枚)
          </span>
          <p class="text-xs sm:text-sm text-pink-100 line-clamp-2 font-bold">${work.subtitle}</p>
        </div>
        ${isPlanet ? `
          <div class="absolute top-3 left-3 bg-gradient-to-r from-gyaru-hotpink via-gyaru-purple to-gyaru-cyan text-white text-[11px] font-black px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 border border-gyaru-gold">
            👑 宇宙イチ推し！
          </div>
        ` : ''}
        <div class="absolute top-3 right-3 bg-gyaru-black/85 backdrop-blur-md text-gyaru-cyan text-[11px] font-black px-3 py-1 rounded-full border border-gyaru-cyan flex items-center gap-1">
          📸 ${work.images.length}枚
        </div>
      </div>
      <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex flex-wrap gap-1.5 mb-2.5">
            ${work.tags.slice(0, 3).map(tag => `
              <span class="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-gyaru-hotpink/20 text-pink-300 border border-gyaru-hotpink/50">
                #${tag}
              </span>
            `).join('')}
            ${work.tags.length > 3 ? `
              <span class="text-[11px] font-black px-2 py-0.5 rounded-full bg-gyaru-dark text-slate-400 border border-slate-700">
                +${work.tags.length - 3}
              </span>
            ` : ''}
          </div>
          <h3 class="font-black text-white text-base md:text-lg group-hover:text-gyaru-cyan transition-colors line-clamp-1">
            ${work.title}
          </h3>
          <p class="text-pink-100 text-xs md:text-sm mt-1.5 line-clamp-2 leading-relaxed font-bold">
            ${work.subtitle}
          </p>
        </div>
        <div class="mt-4 pt-3.5 border-t border-gyaru-hotpink/30 flex items-center justify-between text-xs text-pink-200">
          <span class="flex items-center gap-1.5 font-bold">
            🌺 ${work.role.split('/')[0]}
          </span>
          <span class="font-black text-gyaru-cyan flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
            CHECK <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => openWorkModal(work.id));
    container.appendChild(card);
  });
}

// フィルターボタンの動作
function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter") || "all";
      renderWorks(category);
    });
  });
}

// モーダルを開く (ギャルコクピット風)
function openWorkModal(workId) {
  const work = worksData.find(item => item.id === workId);
  if (!work) return;

  const modal = document.getElementById("work-modal");
  const modalBody = document.getElementById("modal-content-inner");
  if (!modal || !modalBody) return;

  // Swiperスライド生成
  const slidesHtml = work.images.map((img, idx) => `
    <div class="swiper-slide flex flex-col items-center justify-center bg-black/95 rounded-2xl overflow-hidden border-2 border-gyaru-hotpink">
      <div class="w-full h-[280px] sm:h-[380px] md:h-[460px] flex items-center justify-center bg-radial from-slate-900 to-black relative group">
        <img 
          src="${img.src}" 
          alt="${work.title} - 画像 ${idx + 1}" 
          class="max-w-full max-h-full object-contain cursor-zoom-in"
          onclick="openLightbox('${img.src}')"
        />
        <div class="absolute bottom-3 right-3 bg-gyaru-black/90 text-gyaru-gold text-[11px] font-black px-3.5 py-1.5 rounded-full border border-gyaru-gold backdrop-blur-md pointer-events-none flex items-center gap-1.5">
          🔍 タップで拡大💖
        </div>
      </div>
      ${img.caption ? `
        <div class="w-full bg-gyaru-dark text-pink-100 text-xs sm:text-sm p-4 border-t-2 border-gyaru-hotpink text-left font-bold">
          <p class="leading-relaxed"><span class="text-gyaru-gold mr-2 text-base">✨</span>${img.caption}</p>
        </div>
      ` : ''}
    </div>
  `).join('');

  // 特徴・工夫点の生成
  const featuresHtml = work.features && work.features.length > 0 ? `
    <div class="mt-6">
      <h4 class="text-xs font-black uppercase tracking-wider text-gyaru-gold mb-3 flex items-center gap-2">
        <span>⚡️</span> こだわり＆UI設計の神ポイント
      </h4>
      <div class="space-y-3">
        ${work.features.map(f => `
          <div class="p-4 rounded-2xl bg-gyaru-dark/95 border-2 border-gyaru-hotpink/60 hover:border-gyaru-cyan transition-colors">
            <h5 class="text-xs sm:text-sm font-black text-white mb-1.5 flex items-center gap-2">
              <span class="text-gyaru-hotpink">💖</span>
              ${f.title}
            </h5>
            <p class="text-xs sm:text-sm text-pink-100 leading-relaxed font-bold">${f.text}</p>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  // 技術スタックの生成
  const techStackHtml = work.techStack && work.techStack.length > 0 ? `
    <div class="mt-6">
      <h4 class="text-xs font-black uppercase tracking-wider text-gyaru-cyan mb-3 flex items-center gap-2">
        <span>💻</span> 使用技術＆担当範囲
      </h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${work.techStack.map(t => `
          <div class="p-4 rounded-2xl bg-gyaru-dark/95 border border-gyaru-cyan/40 flex items-start gap-3">
            <div class="w-9 h-9 rounded-xl bg-gyaru-black border-2 border-gyaru-cyan flex items-center justify-center text-gyaru-cyan shrink-0 text-base shadow-sm">
              <i class="${t.icon}"></i>
            </div>
            <div>
              <p class="text-xs font-black text-white">${t.name}</p>
              <p class="text-[11px] text-pink-200 leading-tight mt-0.5 font-bold">${t.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  // モーダル全体の組み立て
  modalBody.innerHTML = `
    <!-- ヘッダー -->
    <div class="mb-6 border-b-2 border-gyaru-hotpink/40 pb-5">
      <div class="flex flex-wrap items-center gap-2 mb-3">
        ${work.tags.map(tag => `
          <span class="text-xs font-black px-3.5 py-1 rounded-full bg-gyaru-hotpink text-white shadow-md border border-gyaru-gold">
            #${tag}
          </span>
        `).join('')}
      </div>
      <h2 class="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
        ${work.title}
      </h2>
      <p class="text-sm sm:text-base text-pink-200 mt-1.5 font-bold">
        ${work.subtitle}
      </p>
    </div>

    <!-- スライダー -->
    <div class="mb-7">
      <div class="swiper modal-swiper rounded-2xl overflow-hidden shadow-2xl">
        <div class="swiper-wrapper">
          ${slidesHtml}
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <!-- 詳細情報 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2">
        <div>
          <h4 class="text-xs font-black uppercase tracking-wider text-gyaru-cyan mb-2.5 flex items-center gap-2">
            <span>🪐</span> プロジェクト概要
          </h4>
          <p class="text-white text-sm sm:text-base leading-relaxed bg-gyaru-dark/95 p-5 rounded-2xl border-2 border-gyaru-hotpink/50 font-bold">
            ${work.summary}
          </p>
        </div>
        ${featuresHtml}
      </div>

      <div class="lg:col-span-1 space-y-4">
        <div class="bg-gyaru-dark/95 p-5 rounded-2xl border-2 border-gyaru-hotpink/50 space-y-4">
          <h4 class="text-xs font-black uppercase tracking-wider text-gyaru-gold mb-2 flex items-center gap-1.5">
            <span>🌺</span> 制作データ
          </h4>
          <div>
            <p class="text-[11px] font-black text-pink-300">担当領域</p>
            <p class="text-xs sm:text-sm font-black text-white mt-0.5">${work.role}</p>
          </div>
          <div>
            <p class="text-[11px] font-black text-pink-300">制作期間</p>
            <p class="text-xs sm:text-sm font-black text-white mt-0.5">${work.period}</p>
          </div>
        </div>
        ${techStackHtml}
      </div>
    </div>
  `;

  // モーダル表示
  modal.classList.remove("modal-closed");
  modal.classList.add("modal-open");
  document.body.style.overflow = "hidden";

  // Swiper初期化
  if (modalSwiper) {
    modalSwiper.destroy(true, true);
  }
  modalSwiper = new Swiper(".modal-swiper", {
    loop: work.images.length > 1,
    autoHeight: false,
    speed: 400,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
    },
  });
}

// モーダルを閉じる
function closeWorkModal() {
  const modal = document.getElementById("work-modal");
  if (!modal) return;
  modal.classList.remove("modal-open");
  modal.classList.add("modal-closed");
  document.body.style.overflow = "";
}

// モーダルイベントの設定
function setupModalEvents() {
  const closeBtn = document.getElementById("modal-close-btn");
  const modal = document.getElementById("work-modal");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeWorkModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeWorkModal();
      }
    });
  }

  // ESCキーで閉じる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
      closeWorkModal();
    }
  });
}

// ライトボックス（拡大表示）
function openLightbox(src) {
  let lightbox = document.getElementById("image-lightbox");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "image-lightbox";
    lightbox.className = "fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out opacity-0 transition-opacity duration-200 pointer-events-none";
    lightbox.innerHTML = `
      <img id="lightbox-img" src="" alt="拡大画像" class="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border-2 border-gyaru-hotpink transition-transform duration-300 transform scale-95" />
      <button class="absolute top-5 right-5 text-white hover:text-gyaru-gold text-2xl w-11 h-11 rounded-full bg-gyaru-hotpink flex items-center justify-center border-2 border-gyaru-gold shadow-lg">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;
    document.body.appendChild(lightbox);
    lightbox.addEventListener("click", closeLightbox);
  }

  const img = lightbox.querySelector("#lightbox-img");
  img.src = src;
  lightbox.classList.remove("opacity-0", "pointer-events-none");
  lightbox.classList.add("opacity-100", "pointer-events-auto");
  setTimeout(() => {
    img.classList.remove("scale-95");
    img.classList.add("scale-100");
  }, 10);
}

function closeLightbox() {
  const lightbox = document.getElementById("image-lightbox");
  if (lightbox && lightbox.classList.contains("opacity-100")) {
    const img = lightbox.querySelector("#lightbox-img");
    img.classList.remove("scale-100");
    img.classList.add("scale-95");
    lightbox.classList.remove("opacity-100", "pointer-events-auto");
    lightbox.classList.add("opacity-0", "pointer-events-none");
  }
}

// モバイルメニュー
function setupMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-menu-link");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    if (isOpen) {
      menu.classList.add("hidden");
      btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
      menu.classList.remove("hidden");
      btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}
