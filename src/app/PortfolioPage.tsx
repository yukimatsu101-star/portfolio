import { useState } from "react";
import { Film, Palette, Camera, Layers } from "lucide-react";
import { Tag, LazyYouTube, Lightbox, SlideModal } from "./shared";

import tiktokImage1 from "../imports/TikTok__-1.jpg";
import tiktokImage2 from "../imports/TikTok__-2.jpg";
import muze101 from "../imports/muze-1_01.jpg";
import muze102 from "../imports/muze-1_02.jpg";
import muze103 from "../imports/muze-1_03.jpg";
import muze104 from "../imports/muze-1_04.jpg";
import muze105 from "../imports/muze-1_05.jpg";
import muze106 from "../imports/muze-1_06.jpg";
import muze201 from "../imports/muze-2_01.jpg";
import muze202 from "../imports/muze-2_02.jpg";
import muze203 from "../imports/muze-2_03.jpg";
import muze204 from "../imports/muze-2_04.jpg";
import muze205 from "../imports/muze-2_05.jpg";
import granPamphlet1 from "../imports/Gran________01.png";
import granPamphlet2 from "../imports/Gran________02.png";
import nineSlide1 from "../imports/TEXT-1-01.png";
import nineSlide2 from "../imports/TEXT-1-02.png";
import nineSlide3 from "../imports/TEXT-1-03.png";
import nineSlide4 from "../imports/TEXT-1-04.png";
import granSyo01 from "../imports/Gran-syo-01.jpg";
import bottleLabel from "../imports/500ml________MTI_OL_NINEJAPAN____01.jpg";
import cardboardDesign from "../imports/NINEJAPAN_20260721________-02.jpg";
import productPhoto from "../imports/IMG_2294______2__.jpg";
import bustPhoto from "../imports/bust-01.jpg";
import recruitPhoto1 from "../imports/_____-01.jpg";
import recruitPhoto2 from "../imports/_____-02.jpg";
import cgImage1 from "../imports/CG-1.jpg";
import cgImage2 from "../imports/CG-2.jpg";
import magazine2026Jan from "../imports/___2026_1-2.jpg";
import magazine2026May from "../imports/05______TU_NINE_JAPAN_____.jpg";
import magazine2026Apr from "../imports/04____________________.jpg";


type PortfolioCategory = "Movie" | "Design" | "Photo" | "CG";

interface MovieItem {
  id: string; title: string; videoUrl?: string;
  thumbnail?: string; images?: string[];
  year: string; category: string; client: string;
}
interface DesignItem {
  id: string; type: "video" | "image" | "multi-image";
  title: string; year: string; category: string; description: string;
  videoUrl?: string; image?: string; images?: string[];
}
interface PhotoItem {
  id: string; title: string; image: string;
  year: string; category: string; location: string;
}
interface CGItem {
  id: string; type: "image" | "video";
  title: string; year: string; category: string;
  description: string; thumbnail: string; videoUrl?: string;
}

const MOVIES: MovieItem[] = [
  { id: "m1", title: "カービュー 【YouTube漫画広告】", videoUrl: "https://www.youtube.com/embed/L5KYGESeU5c", year: "2020", category: "株式会社ENJOY", client: "制作期間：1ヶ月\n企画・構成・編集を全工程ひとりで担当。未経験から独学でYouTube漫画広告制作を習得し、数ヶ月の運用でCV 8,000件超・売上2,500万円を達成。" },
  { id: "m2", title: "シースリー 【YouTube漫画広告】", videoUrl: "https://www.youtube.com/embed/aAivjE7ydxA", year: "2020", category: "株式会社ENJOY", client: "制作期間：1ヶ月\n企画・構成・外注管理・編集まで一貫担当。数ヶ月の運用でCV 1,829件・売上2,743万円を達成。外注ディレクションも含む制作管理を経験。" },
  { id: "m3", title: "BBB 正月太り年齢別 【TikTok広告】", videoUrl: "https://www.youtube.com/embed/EevvEUY5NBM", year: "2021", category: "株式会社ENJOY", client: "制作期間：1日\n1本で約114CVを獲得。BBB案件全体でTikTok広告のみで売上1,240万円を達成。短期間で高い費用対効果を生み出したクリエイティブ。" },
  { id: "m4", title: "ミュゼ お詫び最終日 【TikTok広告】", videoUrl: "https://www.youtube.com/embed/PaNEGga60S4", year: "2022", category: "株式会社ENJOY", client: "制作期間：1日\n企画・運用・記事作成まで一貫担当。1日配信のみで16万円消化・79CV獲得。独自の動画構成が他社にTTP（模倣）されるほど拡散した人気クリエイティブ。" },
  { id: "m5", title: "ミュゼ レシート検証 【TikTok広告】", videoUrl: "https://www.youtube.com/embed/pJ_v8VpGZ_w", year: "2022", category: "株式会社ENJOY", client: "制作期間：1日\n数週間の運用で約50CV獲得。ミュゼ案件全体でTikTok広告のみで売上2,384万円を達成。季節性を活かしたおみくじ演出が業界メディア「動画広告分析pro」でも紹介された。" },
  { id: "m6", title: "QMS啓蒙施策", videoUrl: "https://www.youtube.com/embed/fVHhb5lOfs4", year: "2022", category: "個人事業主", client: "制作期間：2ヶ月\nフリーランスとして受託。クライアントと要件定義から密に連携し、第3話まで継続受注。回を重ねるごとに修正指摘が減少し、信頼関係を構築した長期案件。" },
  { id: "m7", title: "YANMAR Combine", videoUrl: "https://www.youtube.com/embed/5HukXexq35s", year: "2023", category: "個人事業主", client: "制作期間：1ヶ月\n大手農機メーカーのプロモーション映像を受託制作。絵コンテに基づく素材選定・エフェクト実装を担当し、グローバルブランドの映像品質基準に対応。" },
  { id: "m8", title: "鉄建建設 DX事例集", videoUrl: "https://www.youtube.com/embed/6d-BUc8ZkbM", year: "2023", category: "個人事業主", client: "制作期間：2ヶ月\n建設DXという専門性の高い概念を映像で分かりやすく可視化。イラストのレイヤー分解からAfter Effectsアニメーション実装まで全工程を担当。" },
  { id: "m9", title: "日立造船 HitzOurValue", videoUrl: "https://www.youtube.com/embed/iMEdfx-76wY", year: "2023", category: "個人事業主", client: "制作期間：2ヶ月\n大手上場企業の企業価値紹介映像を受託。外部イラストレーターへの仕様指示・アニメーション設計・実装まで一貫してディレクション。スケジュール通りに納品。" },
  { id: "m10", title: "cheer in English", videoUrl: "https://www.youtube.com/embed/_JVxxe8Qmcw", year: "2023", category: "個人事業主", client: "制作期間：1ヶ月\n子ども向け英語教材のプロモーション映像を受託制作。学習意欲を引き出す映像表現を追求し、ターゲット層に合わせたビジュアルコミュニケーションを設計。" },
  { id: "m11", title: "TikTok アカウント運用", thumbnail: tiktokImage1, images: [tiktokImage1, tiktokImage2], year: "2023", category: "NINE JAPAN株式会社", client: "運用期間：5ヶ月\nENJOY社での広告運用実績を活かし、入社後すぐにTikTok制作チームを主導。KPIを設定して数値管理しながらアカウントを運用し、フォロワー成長に貢献。" },
  { id: "m12", title: "EDカード アニメーション", videoUrl: "https://www.youtube.com/embed/spICQX6lxpA", year: "2023", category: "NINE JAPAN株式会社", client: "制作期間：1週間\nブランドリニューアルに際し、イラスト制作からAfter Effectsアニメーションまで一貫担当。レイヤーを細かく分割した精緻な設計で、ブランド価値に相応しい品質を実現。" },
  { id: "m13", title: "クーパー靭帯の説明", videoUrl: "https://www.youtube.com/embed/oWcVhum9TLQ", year: "2023", category: "NINE JAPAN株式会社", client: "制作期間：6ヶ月\nエステサロンの施術前説明動画として制作。医学的なイラストを自ら作成し、アニメーション設計まで一貫担当。専門知識を分かりやすく伝える映像で施術満足度向上に貢献。" },
  { id: "m14", title: "脳活性の説明", videoUrl: "https://www.youtube.com/embed/wJ66i0Zhp0c", year: "2023", category: "NINE JAPAN株式会社", client: "制作期間：6ヶ月\n脳科学に基づく施術効果を患者目線で可視化した説明映像。複雑な専門情報を図解・アニメーションで整理し、サロンの信頼性向上に貢献。" },
  { id: "m15", title: "NR NINE機器", thumbnail: "https://img.youtube.com/vi/U0cvFb3ENnw/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/U0cvFb3ENnw", year: "2024", category: "NINE JAPAN株式会社", client: "制作期間：3ヶ月\n販促サイト向け製品紹介映像を企画から担当。CG制作の外注管理・クオリティチェック・最終編集まで一貫してプロデュース。販売促進への直接的な寄与を実現。" },
  { id: "m16", title: "9周年 NINE SELECTION", videoUrl: "https://www.youtube.com/embed/QOPAVQfNlu0", year: "2024", category: "NINE JAPAN株式会社", client: "制作期間：1ヶ月\n通常業務と並行しながら9周年記念パーティー用の映像・ロゴを制作。マルチタスク環境でも品質を落とさず期日通りに納品したタスク管理力を発揮。" },
  { id: "m17", title: "10周年 NINE SELECTION", videoUrl: "https://www.youtube.com/embed/a9kX-XubeY0", year: "2025", category: "NINE JAPAN株式会社", client: "制作期間：1週間\n10周年記念パーティー向けに映像・記念ロゴを短期制作。経営陣・来賓から高い評価を受け、会社の節目を演出するクリエイティブとして社内外から反響を得た。" },
];

const DESIGNS: DesignItem[] = [
  { id: "d8", type: "image", title: "オリジナルペットボトル ラベルデザイン", year: "2026", category: "NINE JAPAN 株式会社", image: bottleLabel, description: "500mlペットボトル向けのオリジナルラベルデザインを入稿データまで一貫制作。\nNINE JAPANブランドの世界観を凝縮し、印刷仕様（CMYK・白版）に対応したデータを完全内製で納品。" },
  { id: "d9", type: "image", title: "NR NINE 梱包用 段ボールデザイン", year: "2026", category: "NINE JAPAN 株式会社", image: cardboardDesign, description: "NR NINE備品の梱包用段ボールのパッケージデザインを制作。\nブランドカラーの黒×ゴールドでラグジュアリーな世界観を表現し、展開図の入稿データまで一貫対応。" },
  { id: "d6", type: "multi-image", title: "Gran nine パンフレット", year: "2026", category: "NINE JAPAN 株式会社", image: granPamphlet1, images: [granPamphlet1, granPamphlet2], description: "高級エステティックサロン「Gran nine」の開業向け紙媒体を企画・デザイン・入稿まで一貫制作。\nブランドの世界観を紙面で体現し、顧客獲得に直結するビジュアルを実現。" },
  { id: "d7", type: "multi-image", title: "NINE Esthetic TEXT", year: "2025", category: "NINE JAPAN 株式会社", image: nineSlide1, images: [nineSlide1, nineSlide2, nineSlide3, nineSlide4], description: "医学的根拠に基づく施術効果をイラストで図解し、入稿データまで一貫制作した顧客説明冊子。\n専門情報の視覚化と印刷入稿対応の両立で、サロンの信頼性向上に貢献。" },
  { id: "d2b", type: "multi-image", title: "ミュゼ TikTok用記事デザイン（お正月ver）", year: "2024", category: "株式会社ENJOY", image: muze101, images: [muze101, muze102, muze103, muze104, muze105, muze106], description: "大手美容サロン「ミュゼプラチナム」のTikTok広告用記事を季節特化デザインで制作。\n縦型フォーマットに最適化し、スクロール停止率の向上を意識したレイアウト設計。" },
  { id: "d2c", type: "multi-image", title: "ミュゼ TikTok用記事デザイン（通常ver）", year: "2024", category: "株式会社ENJOY", image: muze201, images: [muze201, muze202, muze203, muze204, muze205], description: "「ミュゼプラチナム」の定常運用TikTok広告記事デザイン。\nCV誘導を目的とした情報の優先順位設計と視線誘導を徹底し、コンバージョン最大化を追求。" },
  { id: "d1", type: "video", title: "Circular YOU niform ロゴアニメーション-1", year: "2023", category: "個人事業主", videoUrl: "https://www.youtube.com/embed/wThuacjebXU", image: "https://img.youtube.com/vi/wThuacjebXU/maxresdefault.jpg", description: "サーキュラーエコノミーをコンセプトにした制服ブランドのCI映像。\nブランドの哲学「循環」を動きで表現し、コーポレートアイデンティティを強化。" },
  { id: "d3", type: "video", title: "Circular YOU niform ロゴアニメーション-2", year: "2023", category: "個人事業主", videoUrl: "https://www.youtube.com/embed/j7WJmUWOfxo", image: "https://img.youtube.com/vi/j7WJmUWOfxo/maxresdefault.jpg", description: "同ブランドのロゴアニメーション第2弾。\n第1弾のフィードバックを反映しながら表現の幅を広げ、継続依頼につながったブランディング映像。" },
  { id: "d2", type: "video", title: "株式会社ENJOY ロゴアニメーション", year: "2024", category: "株式会社ENJOY", videoUrl: "https://www.youtube.com/embed/pN5ssNo9X_k", image: "https://img.youtube.com/vi/pN5ssNo9X_k/maxresdefault.jpg", description: "自社のコーポレートアイデンティティを刷新するロゴアニメーションを自社制作。\n躍動感あるモーションでブランドイメージの向上に貢献。" },
  { id: "d5", type: "video", title: "drestrip ロゴアニメーション", year: "2022", category: "株式会社ENJOY", videoUrl: "https://www.youtube.com/embed/RLf5-2YHazI", image: "https://img.youtube.com/vi/RLf5-2YHazI/maxresdefault.jpg", description: "旅行予約サービスのブランドロゴアニメーションを受託制作。\nサービスの世界観「旅への期待感」をスムーズなモーションで視覚化。" },
  { id: "d4", type: "video", title: "起立性調節障害改善協会", year: "2023", category: "個人事業主", videoUrl: "https://www.youtube.com/embed/KH3lYHepApo", image: "https://img.youtube.com/vi/KH3lYHepApo/maxresdefault.jpg", description: "医療系NPO法人の認知拡大を目的とした紹介映像を受託。\n疾患の正しい理解を促すため、専門情報をわかりやすいビジュアルへ落とし込む情報設計を担当。" },
];


const PHOTOS: PhotoItem[] = [
  { id: "p11", title: "エステティック通信 掲載記事（2026年1月号）", image: magazine2026Jan, year: "2026", category: "NINE JAPAN株式会社", location: "業界専門誌「エステティック通信」2026年1月号に掲載されたNINE CAMPの特集記事。\n誌面内で使用されているサロン内・セミナー風景の写真は、自身のミラーレス一眼カメラで撮影したものが採用されており、商業誌レベルの撮影クオリティが認められた実績。" },
  { id: "p12", title: "エステティック通信 掲載記事（2026年4月号）", image: magazine2026Apr, year: "2026", category: "NINE JAPAN株式会社", location: "業界専門誌「エステティック通信」2026年4月号、商材導入成功サロン特集に掲載。\n誌面を飾るGran Nineシリーズの商品写真は、自身が企画・ライティング設計・撮影・レタッチまで一貫して手がけたカットが商業誌に採用された実績。" },
  { id: "p13", title: "エステティック通信 掲載記事（2026年5月号）", image: magazine2026May, year: "2026", category: "NINE JAPAN株式会社", location: "業界専門誌「エステティック通信」2026年5月号、NINE JAPANの特集記事に掲載。\nNINE CAMP・NR NINE・Gran nineを紹介する見開き特集で、セミナー・施術・商品の各シーンで使用された写真は自身の一眼レフカメラによる撮影が採用。撮影から商業誌掲載まで一貫して関与した実績。" },
  { id: "p2", title: "Gran nine 商品撮影-1", image: granSyo01, year: "2025", category: "NINE JAPAN株式会社", location: "高級エステサロンの販促用商品撮影を外注ゼロで内製化。\nライティング設計・背景・スタイリングを自己完結し、ブランドの高級感を表現。" },
  { id: "p4", title: "Gran nine 商品撮影-2", image: productPhoto, year: "2025", category: "NINE JAPAN株式会社", location: "同サロンの商品ラインナップ追加撮影。\n統一されたビジュアルトーンを維持しながら商品ごとの魅力を引き出す構図設計を実施。" },
  { id: "p6", title: "Infinity Breast Cream 商品撮影", image: bustPhoto, year: "2025", category: "NINE JAPAN株式会社", location: "美容商品の販促撮影をプロカメラマン不要で内製対応。\nプレミアム価格帯に見合う高品質なビジュアルをコスト削減しながら実現。" },
  { id: "p9", title: "リクルート撮影-1", image: recruitPhoto1, year: "2025", category: "NINE JAPAN株式会社", location: "求人広告用の人物撮影を社内で完結。\nディレクション・撮影・レタッチを一人で担い、採用活動のクリエイティブコストを削減。" },
  { id: "p10", title: "リクルート撮影-2", image: recruitPhoto2, year: "2025", category: "NINE JAPAN株式会社", location: "同採用広告向けのポートレート撮影。\n被写体がリラックスできる現場づくりを意識し、企業の雰囲気を自然に伝える表情を引き出した。" },
];

const CG_ITEMS: CGItem[] = [
  { id: "c1", type: "image", title: "3DCG-制作物1", year: "2017", category: "3D Art", thumbnail: cgImage1, description: "制作期間：1週間\n専門学校在籍時にMAYAで制作した3Dアートワーク。\n立体造形・ライティング・レンダリングの基礎技術を習得した原点となる作品。" },
  { id: "c2", type: "image", title: "3DCG-制作物2", year: "2016", category: "3D Art", thumbnail: cgImage2, description: "制作期間：1週間\nMAYAを使用した質感表現と高品質レンダリングに挑戦した習作。\n現在の映像制作におけるCGディレクション力の土台となった経験。" },
  { id: "c3", type: "video", title: "Motion Graphics", year: "2016", category: "Animation", thumbnail: "https://img.youtube.com/vi/d8-UMjgP9Ew/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/d8-UMjgP9Ew", description: "制作期間：3日\nAfter Effectsの物理演算プラグインを活用し、液体の飛散挙動をリアルに再現したモーション作品。\n現在の業務で活用する物理シミュレーション表現の原点。" },
  { id: "c4", type: "video", title: "ロゴアニメーション", year: "2016", category: "Animation", thumbnail: "https://img.youtube.com/vi/aNSvG45vOvE/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/aNSvG45vOvE", description: "制作期間：1日\nParticularプラグインを活用したパーティクル表現のロゴアニメーション。\n専門学生時代から高度なプラグイン技術を自学習で習得してきた積み重ねを示す作品。" },
];

function MovieCard({ movie }: { movie: MovieItem }) {
  const [slidesOpen, setSlidesOpen] = useState<{ slides: string[]; title: string } | null>(null);
  const youtubeId = movie.videoUrl ? movie.videoUrl.replace("https://www.youtube.com/embed/", "") : null;
  return (
    <div className="bg-card border border-border overflow-hidden flex flex-col">
      {slidesOpen && <SlideModal slides={slidesOpen.slides} title={slidesOpen.title} onClose={() => setSlidesOpen(null)} />}
      {youtubeId ? (
        <LazyYouTube youtubeId={youtubeId} title={movie.title} customThumb={movie.thumbnail} />
      ) : movie.images && movie.images.length > 0 ? (
        <button onClick={() => setSlidesOpen({ slides: movie.images!, title: movie.title })} className="block w-full relative aspect-video overflow-hidden group cursor-pointer">
          <img src={movie.thumbnail ?? movie.images[0]} alt={movie.title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F8EAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>
            </div>
            <span className="text-white text-sm font-medium" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>画像を見る</span>
          </div>
        </button>
      ) : (
        <div className="aspect-video bg-muted flex items-center justify-center">
          <span className="text-xs text-muted-foreground" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>映像準備中</span>
        </div>
      )}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground text-base leading-snug" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{movie.title}</h3>
            <p className="text-xs text-muted-foreground mt-1" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{movie.category} · {movie.year}</p>
          </div>
        </div>
        <div className="w-full h-px bg-border" />
        <p className="text-sm leading-7 text-foreground whitespace-pre-line" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{movie.client}</p>
      </div>
    </div>
  );
}

function DesignGrid() {
  const [slidesOpen, setSlidesOpen] = useState<{ slides: string[]; title: string } | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const tagStyle = (type: DesignItem["type"]) => type === "video" ? "bg-primary text-white" : type === "multi-image" ? "bg-accent text-white" : "bg-secondary text-foreground";
  const tagLabel = (type: DesignItem["type"]) => type === "video" ? "Video" : type === "multi-image" ? "Slides" : "Image";
  return (
    <>
      {slidesOpen && <SlideModal slides={slidesOpen.slides} title={slidesOpen.title} onClose={() => setSlidesOpen(null)} />}
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {DESIGNS.map((item) => {
          const youtubeId = item.videoUrl ? item.videoUrl.replace("https://www.youtube.com/embed/", "") : null;
          return (
            <div key={item.id} className="bg-card border border-border overflow-hidden flex flex-col">
              {item.type === "video" && youtubeId ? (
                <LazyYouTube youtubeId={youtubeId} title={item.title} customThumb={item.image} />
              ) : item.type === "multi-image" && item.images ? (
                <button onClick={() => setSlidesOpen({ slides: item.images!, title: item.title })} className="block w-full relative aspect-video overflow-hidden group cursor-pointer">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D24655" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>
                    </div>
                    <span className="text-white text-sm font-medium" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>スライドを見る</span>
                  </div>
                </button>
              ) : item.type === "image" && item.image ? (
                <div className="aspect-video overflow-hidden bg-secondary cursor-pointer group" onClick={() => setLightbox({ src: item.image!, alt: item.title })}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
              ) : null}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag label={tagLabel(item.type)} className={tagStyle(item.type)} />
                    <h3 className="font-semibold text-foreground text-sm leading-snug" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{item.title}</h3>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{item.category} · {item.year}</span>
                </div>
                <div className="w-full h-px bg-border" />
                <p className="text-sm leading-7 text-foreground whitespace-pre-line" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function PhotoGrid() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PHOTOS.map((photo) => (
          <div key={photo.id} className="bg-card border border-border overflow-hidden flex flex-col cursor-pointer group" onClick={() => setLightbox({ src: photo.image, alt: photo.title })}>
            <div className="aspect-[16/9] overflow-hidden bg-secondary">
              <img src={photo.image} alt={photo.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <h3 className="font-semibold text-foreground text-sm leading-snug" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{photo.title}</h3>
                <span className="text-xs text-muted-foreground shrink-0" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{photo.category} · {photo.year}</span>
              </div>
              <div className="w-full h-px bg-border" />
              <p className="text-sm leading-7 text-foreground whitespace-pre-line" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{photo.location}</p>
            </div>
          </div>
        ))}
      </div>
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </>
  );
}

function CGGrid() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {CG_ITEMS.map((item) => {
          const youtubeId = item.videoUrl ? item.videoUrl.replace("https://www.youtube.com/embed/", "") : null;
          return (
            <div key={item.id} className="bg-card border border-border overflow-hidden flex flex-col">
              {item.type === "video" && youtubeId ? (
                <LazyYouTube youtubeId={youtubeId} title={item.title} customThumb={item.thumbnail} />
              ) : (
                <div className="aspect-video overflow-hidden bg-secondary cursor-pointer group" onClick={() => setLightbox({ src: item.thumbnail, alt: item.title })}>
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              )}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Tag label={item.type === "video" ? "Video" : "CG"} className={item.type === "video" ? "bg-[#EEE555] text-[#1A1A1E]" : "bg-secondary text-foreground"} />
                    <h3 className="font-semibold text-foreground text-sm" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{item.title}</h3>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{item.category} · {item.year}</span>
                </div>
                <div className="w-full h-px bg-border" />
                <p className="text-sm leading-7 text-foreground whitespace-pre-line" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </>
  );
}

export default function PortfolioPage() {
  const [category, setCategory] = useState<PortfolioCategory>("Movie");
  const categories: { id: PortfolioCategory; label: string; count: number; icon: React.ReactNode }[] = [
    { id: "Movie", label: "Movie", count: 17, icon: <Film className="w-4 h-4" /> },
    { id: "Design", label: "Design", count: 11, icon: <Palette className="w-4 h-4" /> },
    { id: "Photo", label: "Photo", count: 8, icon: <Camera className="w-4 h-4" /> },
    { id: "CG", label: "CG", count: 4, icon: <Layers className="w-4 h-4" /> },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24">
      <div className="mb-10">
        <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Works</p>
        <h2 className="text-3xl font-semibold text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>Portfolio</h2>
      </div>
      <div className="flex gap-1 overflow-x-auto pb-1 mb-10 border-b border-border" style={{ scrollbarWidth: "none" }}>
        {categories.map((cat) => (
          <button key={cat.id} onClick={() => setCategory(cat.id)}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${category === cat.id ? "text-primary border-primary" : "text-muted-foreground border-transparent hover:text-foreground hover:border-border"}`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {cat.icon}{cat.label}
            <span className={`text-xs px-1.5 py-0.5 ${category === cat.id ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>{cat.count}</span>
          </button>
        ))}
      </div>
      {category === "Movie" && <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">{MOVIES.map((m) => <MovieCard key={m.id} movie={m} />)}</div>}
      {category === "Design" && <DesignGrid />}
      {category === "Photo" && <PhotoGrid />}
      {category === "CG" && <CGGrid />}
    </div>
  );
}
