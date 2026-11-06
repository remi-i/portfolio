# 🚀 Frontend Engineer & UI Designer Portfolio

ViViViT（ビビビット）スタイルの「画像にあふれた」ギャラリー型ポートフォリオサイトです。  
すべてCDN（Tailwind CSS, Font Awesome, Swiper.js, Google Fonts）で構築されており、ビルド不要でGitHub Pagesに即座に公開できます。

---

## 🌟 特徴

- **ビジュアルファーストなギャラリー (ViViViT風)**: 作品サムネイルが敷き詰められたリッチなグリッドデザイン。
- **フルレスポンシブ**: スマートフォン・タブレット・PCの全画面幅に最適化。
- **リッチな詳細モーダル**:
  - Swiperによる画像スライダー・カルーセル
  - クリック拡大（ライトボックス）機能
  - デザイン思考（ポジショニングマップ、UI設計の意図）とフロントエンド実装（カードコンポーネント化、スクロール誘導、動的カート計算）の詳しい解説
- **ゼロビルド & CDN完結**: Node.js/npmのビルド環境が不要。`index.html` 単体でもローカルやGitHub Pagesで高速動作。

---

## ☕ ピックアップ作品: Planet Cafe (宇宙カフェ オーダーシステム)

- **概要**: 宇宙旅行をテーマにしたテーブルオーダー画面
- **担当領域**: 企画 / UI・UXデザイン（Figma） / フロントエンドコーディング（HTML5, CSS3, JavaScript）
- **ポイント**:
  1. **カードコンポーネント管理**: メニュー項目を独立したカードで管理し、拡張性と保守性を向上
  2. **スクロール誘導UI**: 下部にメニューが続いていることが一目でわかるスクロールバー・チラ見せ設計
  3. **デザインポジショニング分析**: 「暖かい / クール」「ファンタジー / サイバー」の4象限で世界観を構築
  4. **JavaScriptによる動的計算**: カート数量変更・合計金額のリアルタイム更新

---

## 🌐 GitHub Pages 公開手順

### 1. GitHub上に新しいリポジトリを作成
ブラウザで [GitHub - New Repository](https://github.com/new) にアクセスし、
- **Repository name**: `portfolio`（または `remi-i.github.io` などお好みの名前）
- **Public** を選択
- 「Create repository」をクリック

### 2. リモートリポジトリへPush
ターミナル（PowerShell）で以下のコマンドを実行します：

```bash
# リモートURLを登録（<username>はご自身のGitHubユーザー名）
git remote add origin https://github.com/<username>/portfolio.git

# mainブランチをプッシュ
git branch -M main
git push -u origin main
```

### 3. GitHub Pagesを有効化
1. 作成したGitHubリポジトリの **「Settings」タブ** を開く
2. 左メニューの **「Pages」** をクリック
3. **Build and deployment** > **Source** で **「Deploy from a branch」** を選択
4. **Branch** を **`main`**、フォルダを **`/ (root)`** に設定して **「Save」**
5. 数十秒〜数分で `https://<username>.github.io/portfolio/` にサイトが公開されます！

---

## 🛠 技術スタック

- **マークアップ**: HTML5 (セマンティック)
- **スタイリング**: Tailwind CSS (CDN), カスタムCSS (CSS3 Variables, Flexbox, Grid)
- **スクリプト**: Vanilla JavaScript (ES6+)
- **ライブラリ**:
  - Swiper.js v11 (画像スライダー)
  - Font Awesome 6 (アイコン)
  - Google Fonts (Noto Sans JP, Inter, Outfit)
- **デザイン**: Figma
- **ホスティング**: GitHub Pages
