/**
 * ViViViT-style Engineering & Design Portfolio
 * Works Data & Interactive Controllers
 */

// 作品データベース
const worksData = [
  {
    id: "planet-cafe",
    title: "Planet Cafe - 宇宙カフェ オーダーシステム",
    subtitle: "宇宙をコンセプトにした飲食店のタブレット・モバイル注文Webアプリ",
    category: "frontend",
    tags: ["HTML5", "CSS3", "JavaScript", "UI/UX Design", "Figma"],
    heroImage: "assets/images/planet-cafe/main.jpg",
    images: [
      {
        src: "assets/images/planet-cafe/main.jpg",
        caption: "【メイン注文画面】青く輝く満月と宇宙空間を背景にしたネオンサイバーUI。惑星ドーナツメニューの視覚的表現。"
      },
      {
        src: "assets/images/planet-cafe/order.jpg",
        caption: "【注文・カート確認画面】宇宙飛行士のグラフィックと数量カウンター、合計金額の自動計算機能。"
      },
      {
        src: "assets/images/planet-cafe/ui-annotation.jpg",
        caption: "【UI/UXの工夫点】スクロールバーの視認性向上（下部へのメニュー誘導）と、カードコンポーネント設計による保守性。"
      },
      {
        src: "assets/images/planet-cafe/concept-map.jpg",
        caption: "【デザインポジショニングマップ】「暖かい / クール」「ファンタジー / サイバー」の4象限で世界観とトンマナを緻密に分析・定義。"
      },
      {
        src: "assets/images/planet-cafe/figma-workspace.jpg",
        caption: "【Figma設計ワークスペース】アイコンセット、アセット、UIパターン（Android Expanded）、画面遷移全体のプロトタイプ。"
      }
    ],
    summary: "「宇宙旅行中に立ち寄る近未来のカフェ」をテーマに、企画からFigmaでのUI/UX設計、そしてHTML/CSS/JavaScriptによるフロントエンド実装までを一貫して手掛けたテーブルオーダーシステムです。",
    role: "企画 / UI・UXデザイン / フロントエンド開発",
    period: "約2週間",
    techStack: [
      { name: "HTML5", icon: "fa-brands fa-html5", desc: "セマンティックなマークアップとアクセシビリティ考慮" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt", desc: "ネオン発光エフェクト、Flexbox/Gridによるカードレイアウト、カスタムスクロールバー" },
      { name: "JavaScript", icon: "fa-brands fa-js", desc: "カートの数量増減、動的合計金額計算、画面遷移処理" },
      { name: "Figma", icon: "fa-brands fa-figma", desc: "ポジショニングマップ分析、UIコンポーネント作成、プロトタイピング" }
    ],
    features: [
      {
        title: "カードコンポーネント化による拡張性と保守性",
        text: "メニュー品目を独立したカードコンポーネントとしてCSS・DOM構造を設計。商品追加やレイアウト変更が容易に行える設計にしました。"
      },
      {
        title: "直感的なスクロール誘導UI",
        text: "ファーストビューでメニューが下に続いていることが一目で分かるよう、スクロールバーの視認性とチラ見せ配置を工夫。"
      },
      {
        title: "世界観を崩さないサイバー×ネオンデザイン",
        text: "青を基調としたネオンボーダー、惑星の質感ドーナツ、宇宙飛行士など、非日常感を楽しめるリッチなビジュアルデザイン。"
      },
      {
        title: "リアルタイムな注文集計ロジック",
        text: "JavaScriptを用いて各商品の数量変更ボタン（+/-）を押した際に即座に合計金額が反映される直感的な注文フローを構築。"
      }
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "galaxy-dashboard",
    title: "CosmoAnalytics - 宇宙観測データ可視化ダッシュボード",
    subtitle: "天体観測衛星データとテレメトリをリアルタイム可視化するSPA",
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
    title: "Lumina Design System - UIコンポーネント集",
    subtitle: "アクセシビリティとマイクロインタラクションに特化したUIライブラリ",
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
    id: "artisan-coffee-ec",
    title: "Artisan Coffee Roasters - ECブランドサイト",
    subtitle: "こだわり豆の定期便と抽出レシピを伝えるブランドコマースサイト",
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
    title: "Interactive Creative Portfolio - 本サイト",
    subtitle: "CDNを活用した高速＆レスポンシブな画像ギャラリー型ポートフォリオ",
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
  },
  {
    id: "cyber-threejs-demo",
    title: "Orbit-X - 3D惑星シミュレータ",
    subtitle: "ブラウザ上で太陽系惑星を探索できるインタラクティブ3Dビューア",
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

// 作品グリッドの描画
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
    card.className = "work-card bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col cursor-pointer group";
    card.setAttribute("data-id", work.id);
    card.setAttribute("data-category", work.category);

    card.innerHTML = `
      <div class="relative card-thumb overflow-hidden bg-slate-900 aspect-[16/10] select-none">
        <img 
          src="${work.heroImage}" 
          alt="${work.title}" 
          loading="lazy" 
          class="w-full h-full object-cover object-center"
        />
        <div class="card-thumb-overlay absolute inset-0 bg-slate-950/60 backdrop-blur-xs flex flex-col justify-end p-5 text-white">
          <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${isPlanet ? 'bg-cyan-500 text-white' : 'bg-white/20 text-white backdrop-blur-md'} w-fit mb-2">
            <i class="fa-solid fa-eye text-xs"></i> 詳細を見る (${work.images.length}枚の画像)
          </span>
          <p class="text-sm text-slate-200 line-clamp-2">${work.subtitle}</p>
        </div>
        ${isPlanet ? `
          <div class="absolute top-3 left-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 animate-pulse">
            <i class="fa-solid fa-star"></i> PICKUP WORK
          </div>
        ` : ''}
        <div class="absolute top-3 right-3 bg-slate-900/70 backdrop-blur-md text-white text-[11px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1">
          <i class="fa-regular fa-images"></i> ${work.images.length}
        </div>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex flex-wrap gap-1.5 mb-2.5">
            ${work.tags.slice(0, 3).map(tag => `
              <span class="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                ${tag}
              </span>
            `).join('')}
            ${work.tags.length > 3 ? `
              <span class="text-[11px] font-medium px-1.5 py-0.5 rounded bg-slate-50 text-slate-400">
                +${work.tags.length - 3}
              </span>
            ` : ''}
          </div>
          <h3 class="font-bold text-slate-900 text-base md:text-lg group-hover:text-cyan-600 transition-colors line-clamp-1">
            ${work.title}
          </h3>
          <p class="text-slate-500 text-xs md:text-sm mt-1 line-clamp-2 leading-relaxed">
            ${work.subtitle}
          </p>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span class="flex items-center gap-1">
            <i class="fa-solid fa-user-pen"></i> ${work.role.split('/')[0]}
          </span>
          <span class="font-medium text-cyan-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            VIEW <i class="fa-solid fa-arrow-right text-[10px]"></i>
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

// モーダルを開く
function openWorkModal(workId) {
  const work = worksData.find(item => item.id === workId);
  if (!work) return;

  const modal = document.getElementById("work-modal");
  const modalBody = document.getElementById("modal-content-inner");
  if (!modal || !modalBody) return;

  // Swiperスライド生成
  const slidesHtml = work.images.map((img, idx) => `
    <div class="swiper-slide flex flex-col items-center justify-center bg-slate-950 rounded-xl overflow-hidden">
      <div class="w-full h-[280px] sm:h-[380px] md:h-[460px] flex items-center justify-center bg-black/60 relative group">
        <img 
          src="${img.src}" 
          alt="${work.title} - 画像 ${idx + 1}" 
          class="max-w-full max-h-full object-contain cursor-zoom-in"
          onclick="openLightbox('${img.src}')"
        />
        <div class="absolute bottom-2 right-2 bg-slate-900/80 text-white text-[10px] px-2 py-1 rounded backdrop-blur-xs pointer-events-none">
          <i class="fa-solid fa-magnifying-glass-plus"></i> クリックで拡大
        </div>
      </div>
      ${img.caption ? `
        <div class="w-full bg-slate-900 text-slate-300 text-xs sm:text-sm p-3.5 border-t border-slate-800 text-left">
          <p class="leading-relaxed"><i class="fa-solid fa-circle-info text-cyan-400 mr-1.5"></i>${img.caption}</p>
        </div>
      ` : ''}
    </div>
  `).join('');

  // 特徴・工夫点の生成
  const featuresHtml = work.features && work.features.length > 0 ? `
    <div class="mt-6">
      <h4 class="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
        <i class="fa-solid fa-lightbulb text-amber-500"></i> こだわり・UI設計の工夫
      </h4>
      <div class="space-y-3">
        ${work.features.map(f => `
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
            <h5 class="text-xs sm:text-sm font-bold text-slate-800 mb-1 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              ${f.title}
            </h5>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${f.text}</p>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  // 技術スタックの生成
  const techStackHtml = work.techStack && work.techStack.length > 0 ? `
    <div class="mt-6">
      <h4 class="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
        <i class="fa-solid fa-code text-cyan-500"></i> 使用技術・担当範囲
      </h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${work.techStack.map(t => `
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200/60 flex items-start gap-2.5">
            <div class="w-7 h-7 rounded-md bg-white shadow-xs flex items-center justify-center text-cyan-600 shrink-0 text-base">
              <i class="${t.icon}"></i>
            </div>
            <div>
              <p class="text-xs font-bold text-slate-800">${t.name}</p>
              <p class="text-[11px] text-slate-500 leading-tight mt-0.5">${t.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  // モーダルHTML構成（大画面では左右2カラム、スマホでは1カラム）
  modalBody.innerHTML = `
    <div class="p-4 sm:p-6 md:p-8">
      <!-- ヘッダー -->
      <div class="mb-5 border-b border-slate-100 pb-4">
        <div class="flex flex-wrap items-center gap-2 mb-2">
          ${work.tags.map(tag => `
            <span class="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-50 text-cyan-700 border border-cyan-100">
              ${tag}
            </span>
          `).join('')}
        </div>
        <h2 class="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          ${work.title}
        </h2>
        <p class="text-sm sm:text-base text-slate-500 mt-1">
          ${work.subtitle}
        </p>
      </div>

      <!-- スライダー & ギャラリー -->
      <div class="mb-6">
        <div class="swiper modal-swiper rounded-2xl overflow-hidden shadow-lg border border-slate-800">
          <div class="swiper-wrapper">
            ${slidesHtml}
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <!-- 詳細情報・解説 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- 左2列: 概要と工夫 -->
        <div class="lg:col-span-2">
          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <i class="fa-solid fa-file-lines text-cyan-500"></i> プロジェクト概要
            </h4>
            <p class="text-slate-700 text-sm sm:text-base leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/60">
              ${work.summary}
            </p>
          </div>
          ${featuresHtml}
        </div>

        <!-- 右1列: メタデータ・技術情報 -->
        <div class="lg:col-span-1 space-y-4">
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">プロジェクト詳細</h4>
            <div>
              <p class="text-[11px] font-semibold text-slate-400">担当領域</p>
              <p class="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">${work.role}</p>
            </div>
            <div>
              <p class="text-[11px] font-semibold text-slate-400">制作期間</p>
              <p class="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">${work.period}</p>
            </div>
          </div>
          ${techStackHtml}
        </div>
      </div>
    </div>
  `;

  // モーダル表示
  modal.classList.remove("modal-closed");
  modal.classList.add("modal-open");
  document.body.style.overflow = "hidden"; // 背景スクロール禁止

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
  document.body.style.overflow = ""; // スクロール復帰
}

// モーダルイベントの設定
function setupModalEvents() {
  const closeBtn = document.getElementById("modal-close-btn");
  const modal = document.getElementById("work-modal");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeWorkModal);
  }

  if (modal) {
    // 背景クリックで閉じる
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
      <img id="lightbox-img" src="" alt="拡大画像" class="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-300 transform scale-95" />
      <button class="absolute top-5 right-5 text-white/80 hover:text-white text-2xl w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
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

// モバイルハンバーガーメニュー
function setupMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-menu-link");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    if (isOpen) {
      menu.classList.add("hidden");
      btn.innerHTML = '<i class="fa-solid fa-bars text-xl"></i>';
    } else {
      menu.classList.remove("hidden");
      btn.innerHTML = '<i class="fa-solid fa-xmark text-xl"></i>';
    }
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      btn.innerHTML = '<i class="fa-solid fa-bars text-xl"></i>';
    });
  });
}
