import { useState, useEffect, lazy, Suspense, startTransition } from "react";
import productPhoto from "../imports/IMG_2294______2__.jpg";
import profilePhoto from "../imports/200260727-_____01.png";
import nineSlide1 from "../imports/TEXT-1-01.png";
import nineSlide2 from "../imports/TEXT-1-02.png";
import nineSlide3 from "../imports/TEXT-1-03.png";
import nineSlide4 from "../imports/TEXT-1-04.png";
import { X, Menu } from "lucide-react";
import { Tag, LazyYouTube, SlideModal } from "./shared";

const PortfolioPage = lazy(() => import("./PortfolioPage"));
const ShokumuKeireki = lazy(() => import("./ShokumuKeireki"));

type Section = "top" | "portfolio" | "shokumukeireki";

interface KeyWork {
  id: number;
  type: "video" | "image" | "slides";
  tag: string; tagStyle: string; title: string; period: string;
  description: string; detail: string; skills: string[];
  youtubeId?: string; localImage?: string; slides?: string[];
}

const KEY_WORKS: KeyWork[] = [
  {
    id: 1, type: "video", tag: "Movie", tagStyle: "bg-primary text-white",
    title: "カービュー 【YouTube漫画広告】", period: "制作期間：1か月",
    description: "未経験から独学でYouTube漫画広告制作を習得。企画・構成・編集まで一貫して担当し、ターゲット分析や競合調査をもとに視聴者の興味を引く構成設計を実施。素材収集・画像加工・動画編集まで全工程を一人で完結。",
    detail: "広告配信後はCV数や反応率などの数値を分析し、クリエイティブ改善のPDCAを継続。その結果、数ヶ月の運用でCV8,000件超・売上2,500万円を達成。制作スキルだけでなく、データを活用し成果につなげる広告クリエイティブの経験を獲得。",
    skills: ["Premiere Pro", "After Effects", "Photoshop", "広告運用"], youtubeId: "L5KYGESeU5c",
  },
  {
    id: 2, type: "video", tag: "Movie", tagStyle: "bg-primary text-white",
    title: "日立造船 HitzOurValue", period: "制作期間：2か月",
    description: "大手上場企業のブランド映像制作において、外部イラストレーターへの制作指示からAfter Effectsによるアニメーション実装まで一貫して担当。映像全体の構成意図を踏まえ、レイヤー構成・動きの設計・モーション表現をディレクション。",
    detail: "制作進行では、クライアントとの要件整理や仕様調整を行い、認識のズレを最小限に抑えながら制作を推進。修正回数を抑え、スケジュール通りの納品を実現。",
    skills: ["After Effects", "Premiere Pro", "ディレクション", "モーションデザイン"], youtubeId: "iMEdfx-76wY",
  },
  {
    id: 3, type: "video", tag: "Movie", tagStyle: "bg-primary text-white",
    title: "鉄建建設 DX事例集", period: "制作期間：2か月",
    description: "専門知識を必要とする建設DXの概念を、一般視聴者にも理解しやすい映像表現へ落とし込む課題解決型の映像制作を担当。複雑な情報を整理し、伝えるべき要素を明確化した上で、イラストのレイヤー分解からAfter Effectsによるアニメーション制作まで一貫して実施。",
    detail: "ナレーションや映像演出のタイミング調整まで細部を管理し、専門的な内容を直感的に伝える映像表現を実現。クライアントの情報発信を支援し、サービス理解促進につながるクリエイティブを制作。",
    skills: ["After Effects", "Illustrator連携", "アニメーション", "Premiere Pro"], youtubeId: "6d-BUc8ZkbM",
  },
  {
    id: 4, type: "slides", tag: "Design", tagStyle: "bg-accent text-white",
    title: "NINE Esthetic TEXT", period: "制作期間：4か月",
    description: "医学的根拠に基づく施術メカニズムや肌構造の情報を整理し、一般ユーザーにも理解しやすいビジュアル表現へ落とし込むインフォグラフィック制作を担当。医療監修内容を正確に読み解き、情報の優先順位や構成を設計した上で、Illustratorによる図解制作から印刷入稿データの作成まで一貫して対応。",
    detail: "専門性の高い内容を視覚的に伝えるデザインへ変換し、施術効果やサービス価値を分かりやすく伝達。情報整理力とデザイン表現力を活かしたクリエイティブ制作を実現。",
    skills: ["Illustrator", "インフォグラフィック", "医療イラスト", "入稿対応"],
    slides: [nineSlide1, nineSlide2, nineSlide3, nineSlide4],
  },
  {
    id: 5, type: "image", tag: "Photo", tagStyle: "bg-secondary text-foreground",
    title: "Gran nine 商品撮影", period: "",
    description: "ブランドの世界観や商品価値を視覚的に表現するため、撮影コンセプト設計から機材選定・ライティング・スタイリングまで一貫して担当。商品の魅力を引き出すため、背景や小道具の選定、構図設計を行い、社内リソースのみで撮影環境を構築。",
    detail: "ミラーレス一眼カメラとiPhone 15 Pro Maxを用途に応じて使い分け、撮影後のPhotoshopによるレタッチまで対応。企画から納品までの制作工程を内製化し、高品質なビジュアル制作と外注コスト削減に貢献。",
    skills: ["ミラーレス撮影", "ライティング設計", "Photoshopレタッチ", "商品スタイリング"],
    localImage: productPhoto,
  },
];

// ─── Header ─────────────────────────────────────────────────

function Header({ section, onNav, mobileOpen, onMobileToggle }: {
  section: Section; onNav: (s: Section) => void; mobileOpen: boolean; onMobileToggle: () => void;
}) {
  const navItems: { id: Section; label: string }[] = [
    { id: "top", label: "TOPpage" },
    { id: "portfolio", label: "Portfolio" },
    { id: "shokumukeireki", label: "職務経歴" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <button onClick={() => onNav("top")} className="font-medium tracking-tight hover:text-primary transition-colors">
          <span className="text-primary font-semibold" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>松石幸乃</span>
          <span className="hidden sm:inline text-muted-foreground text-sm ml-2 font-normal" style={{ fontFamily: "'DM Sans', sans-serif" }}>Yukino Matsuishi</span>
        </button>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => onNav(item.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors relative ${section === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              style={{ fontFamily: "'DM Sans', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}
            >
              {item.label}
              {section === item.id && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary" />}
            </button>
          ))}
        </nav>
        <button className="md:hidden p-2 text-foreground" onClick={onMobileToggle} aria-label="Toggle menu">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => onNav(item.id)}
              className={`block w-full text-left px-6 py-4 text-sm font-medium border-b border-border last:border-0 transition-colors ${section === item.id ? "text-primary bg-muted" : "text-foreground hover:bg-muted"}`}
              style={{ fontFamily: "'DM Sans', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

// ─── Key Works ───────────────────────────────────────────────

function KeyWorksSection() {
  const [slidesOpen, setSlidesOpen] = useState<{ slides: string[]; title: string } | null>(null);
  return (
    <>
      {slidesOpen && <SlideModal slides={slidesOpen.slides} title={slidesOpen.title} onClose={() => setSlidesOpen(null)} />}
      <div className="divide-y divide-border border border-border">
        {KEY_WORKS.map((work, idx) => (
          <div key={work.id} className={`flex flex-col md:flex-row ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
            <div className="w-full md:w-[56%] shrink-0 self-center">
              {work.type === "video" && work.youtubeId ? (
                <LazyYouTube youtubeId={work.youtubeId} title={work.title} />
              ) : work.type === "image" && work.localImage ? (
                <div className="aspect-video overflow-hidden">
                  <img src={work.localImage} alt={work.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ) : work.type === "slides" && work.slides ? (
                <button onClick={() => setSlidesOpen({ slides: work.slides!, title: work.title })} className="block w-full relative aspect-video overflow-hidden group cursor-pointer">
                  <img src={work.slides[0]} alt={work.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D24655" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
                      </svg>
                    </div>
                    <span className="text-white text-sm font-medium" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>スライドを見る</span>
                  </div>
                </button>
              ) : null}
            </div>
            <div className="flex-1 px-8 py-10 sm:px-10 sm:py-14 flex flex-col justify-center items-center text-center gap-5 bg-white">
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <Tag label={work.tag} className={work.tagStyle} />
                {work.period && <span className="text-xs text-muted-foreground tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>{work.period}</span>}
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{work.title}</h3>
              <p className="text-sm leading-7 text-foreground" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{work.description}</p>
              <div className="w-10 h-px mx-auto" style={{ background: "#D24655" }} />
              {work.detail && <p className="text-xs leading-7 text-muted-foreground" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{work.detail}</p>}
              <div className="flex flex-wrap justify-center gap-2 pt-1">
                {work.skills.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 bg-muted text-muted-foreground border border-border" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// ─── Top Page ───────────────────────────────────────────────

function TopPage({ onNav }: { onNav: (s: Section) => void }) {
  return (
    <div>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-20 pb-16">
        <div className="flex items-center gap-8 sm:gap-12 mb-10">
          <div className="relative shrink-0">
            <div className="relative w-28 sm:w-36 md:w-44">
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={profilePhoto}
                  alt="松石幸乃"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 -z-10" style={{ background: "#EEE555" }} />
              <div className="absolute -top-2 -left-2 w-7 h-1.5 -z-10" style={{ background: "#0F8EAE" }} />
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Video Editor · Designer · Creator
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-1 leading-tight" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>
              松石幸乃
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>Yukino Matsuishi</p>
          </div>
        </div>
        <div className="w-12 h-0.5 mx-auto mb-8" style={{ background: "#D24655" }} />
        <div className="sm:hidden space-y-5 text-sm leading-8 text-foreground text-left max-w-2xl mx-auto" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>
          <p>滋賀県出身。大阪コミュニケーションアート専門学校 CG・映像クリエーター専攻卒業。</p>
          <p>動画編集を軸に、撮影・グラフィックデザイン・SNSマーケティングなど、クリエイティブを横断して幅広い実務経験を積んできました。</p>
          <p>テレビ局、広告代理店、個人事業主、企業とさまざまな環境で、企画・制作・運用まで一貫して担当しています。</p>
          <p>「誰に、何を、どのように伝えるか」を大切にし、目的に応じた最適なクリエイティブを形にすることを心掛けています。</p>
          <p>これからも領域にとらわれず、新しいことに挑戦し続けるクリエイターを目指しています。</p>
        </div>
        <div className="hidden sm:block space-y-4 text-base leading-8 text-foreground text-center max-w-2xl mx-auto" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>
          <p>滋賀県出身。大阪コミュニケーションアート専門学校 CG･映像クリエーター専攻を卒業後、映像制作を軸に、撮影・編集・グラフィックデザイン・SNS運用など、幅広いクリエイティブ領域に携わってきました。</p>
          <p>学生時代から映像表現やデザイン制作に取り組み、相手に伝わる表現とは何かを考えながら制作スキルを磨いてきました。</p>
          <p>卒業後はテレビ局での映像制作、広告代理店での動画広告制作、個人事業主としての動画制作、</p>
          <p>そして現在は企業にて動画制作・撮影・デザイン・SNS運用まで担当し、企画から制作、発信後の改善まで一貫して経験してきました。</p>
          <p>複数の業界や異なる環境で経験を積んできたことで、決められた役割だけをこなすのではなく、その時々の課題や目的に合わせて必要な手段を考え、柔軟に対応する力を身につけました</p>
          <p>動画制作では映像表現だけでなく、デザインやSNSマーケティングの視点も取り入れ、より効果的に情報を届けるクリエイティブを追求しています。</p>
          <p>私の強みは、これまでの経験を通じて培った「幅広い視点」と「環境に合わせて学び続ける適応力」です。</p>
          <p>分野や職種の枠にとらわれず、必要な知識や技術を積極的に吸収しながら、目的達成につながるクリエイティブを提案・実行できます。</p>
          <p>これまで培った映像・デザイン・マーケティングの経験を活かし、今後も「誰に、何を、どのように届けるか」を大切にしながら、ユーザーや企業の課題解決につながるクリエイターとして成長していきたいと考えています。</p>
        </div>
        <div className="flex gap-3 mt-10 flex-wrap justify-center">
          <button onClick={() => onNav("portfolio")} className="px-6 py-3 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Portfolio →
          </button>
          <button onClick={() => onNav("shokumukeireki")} className="px-6 py-3 border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>
            職務経歴
          </button>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>Key Works</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>5 selected</span>
        </div>
        <KeyWorksSection />
      </section>
    </div>
  );
}

// ─── Scroll to top ───────────────────────────────────────────

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="ページトップへ戻る"
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 flex items-center justify-center bg-primary text-white shadow-lg transition-all duration-300 hover:bg-primary/90 active:scale-95 ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

// ─── Root ────────────────────────────────────────────────────

export default function App() {
  const [section, setSection] = useState<Section>("top");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Preconnect to external font/image origins
    const hints: { rel: string; href: string; crossOrigin?: string }[] = [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://img.youtube.com" },
      { rel: "dns-prefetch", href: "https://images.unsplash.com" },
    ];
    hints.forEach(({ rel, href, crossOrigin }) => {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const link = document.createElement("link");
      link.rel = rel;
      link.href = href;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
    });

    // Load only DM Sans (Latin, small) non-blocking. Japanese uses system fonts.
    const fontHref = "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap";
    if (!document.querySelector(`link[href="${fontHref}"]`)) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "style";
      link.href = fontHref;
      link.onload = function (this: HTMLLinkElement) { this.rel = "stylesheet"; };
      document.head.appendChild(link);
    }
  }, []);

  const handleNav = (s: Section) => {
    startTransition(() => setSection(s));
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'DM Sans', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>
      <Header section={section} onNav={handleNav} mobileOpen={mobileOpen} onMobileToggle={() => setMobileOpen((v) => !v)} />
      <main>
        {section === "top" && <TopPage onNav={handleNav} />}
        {section === "portfolio" && (
          <Suspense fallback={<div className="flex items-center justify-center h-64 text-muted-foreground text-sm" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>読み込み中...</div>}>
            <PortfolioPage />
          </Suspense>
        )}
        {section === "shokumukeireki" && (
          <Suspense fallback={<div className="flex items-center justify-center h-64 text-muted-foreground text-sm" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>読み込み中...</div>}>
            <ShokumuKeireki />
          </Suspense>
        )}
      </main>
      <ScrollToTopButton />
      <footer className="border-t border-border py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-sm text-muted-foreground" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>© 2026 松石幸乃 / Yukino Matsuishi</span>
          <div className="flex gap-1">
            <span className="w-3 h-3" style={{ background: "#0F8EAE" }} />
            <span className="w-3 h-3" style={{ background: "#D24655" }} />
            <span className="w-3 h-3" style={{ background: "#EEE555" }} />
          </div>
        </div>
      </footer>
    </div>
  );
}
