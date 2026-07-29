import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const CAREER = [
  {
    id: 1,
    period: "2018年04月 〜 2019年06月",
    company: "株式会社デジデリック",
    business: "CG・映像制作他",
    employees: "120名",
    capital: "1,000万円",
    type: "契約社員",
    role: "CG・送出オペレーター",
    department: "",
    tasks: [
      {
        period: "2018年04月〜2019年06月",
        title: "とくダネ！",
        duties: ["テロップ入力、送出、フォント加工", "生放送における入力者と送出者のWチェック体制の遂行", "スピード感を持ちながら確認を徹底する業務フローの実践"],
        team: "VFX送出1名、Viz送出1名、VWS送出1名、テロップ入力1名",
        tools: ["Photoshop", "Illustrator", "VFXツール", "Viz", "VWS"],
        results: "地上波生放送でのミスゼロを継続。スピードと正確さを両立したオペレーション体制を担当。",
      },
      {
        period: "2018年08月〜2019年06月",
        title: "いいすぽ！",
        duties: ["テロップ入力、加工、Viz送出", "eスポーツ番組特有の勝敗判断に対応した迅速な送出業務"],
        team: "ディレクター1名、Viz送出1名（本人）",
        tools: ["Photoshop", "Viz"],
        results: "エンタメ番組の現場でのViz送出スキルを習得。",
      },
      {
        period: "2018年09月〜2019年06月",
        title: "グッディ！",
        duties: ["テロップ入力、送出", "速報対応における冷静かつ正確な文言入力の実践"],
        team: "VWS送出1名、テロップ入力1名",
        tools: ["Photoshop", "Illustrator", "VWS"],
        results: "昼の速報対応を通じて、冷静に文言を打つ正確さが身についた。",
      },
      {
        period: "2018年11月〜2019年06月",
        title: "news zero",
        duties: ["テロップ入力", "3名以上の文言チェック体制による品質管理", "深夜帯業務における体調管理と就寝サイクルの調整"],
        team: "テロップ入力8名（うち一人本人）、ディレクター3名",
        tools: ["VWS"],
        results: "多段階チェック体制下でのニューステロップ作成を経験。深夜業務の自己管理能力を身につけた。",
      },
    ],
    leaveReason: "契約期間満了により退職。",
  },
  {
    id: 2,
    period: "2020年03月 〜 2022年06月",
    company: "株式会社エンジョイ",
    business: "ソーシャルメディア事業・ライフスタイルサポート事業・動画制作事業・ITコンサルタント",
    employees: "32名",
    capital: "300万円",
    type: "正社員",
    role: "",
    department: "メディア事業部",
    tasks: [
      {
        period: "2020年03月〜2021年10月",
        title: "YouTube広告の動画編集・漫画ラフ制作",
        duties: ["企画、構成、素材収集、画像加工、動画編集、スケジュール・予算管理", "漫画ラフの作成および外部イラストレーターへの依頼・ディレクション", "クライアント確認後の修正対応（1〜2日以内）"],
        team: "編集者2名（うち一人本人）、運用者2名、管理者1名",
        tools: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro"],
        results: "カービュー：売上 ¥25,000,000 前後。未経験だった企画・構成業務を習得。",
      },
      {
        period: "2021年10月〜2022年06月",
        title: "TikTok広告の動画編集・運用",
        duties: ["企画、構成、素材収集、画像加工、動画編集、運用、スケジュール・予算管理", "1日3本前後の高速制作体制の維持（構成1〜3時間、編集3〜5時間）", "冒頭インパクトと興味喚起に特化した動画構成設計", "アンケート記事の自作によるランディングページ対応", "KPI（視聴数・CV率）に基づく改善提案と施策実行"],
        team: "編集・運用者2名（うち一人本人）",
        tools: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro"],
        results: "BBB：¥12,402,000 前後 ／ ミュゼ：¥23,836,000 前後。合計売上6,100万円超の広告案件に貢献。",
      },
    ],
    leaveReason: "一身上の都合により退職。",
  },
  {
    id: 3,
    period: "2022年08月 〜 2023年12月",
    company: "動画編集（個人事業として開業）",
    business: "動画編集・デザイン作成",
    employees: "1名",
    capital: "100万円",
    type: "個人事業主",
    role: "",
    department: "",
    tasks: [
      {
        period: "2022年08月〜2023年12月",
        title: "クラウドソーシングサイトを活用した事業展開",
        duties: ["クラウドソーシングサイトを活用した案件獲得および営業活動", "顧客ニーズのヒアリングおよび要件整理", "YouTube／Short動画向けの動画制作・編集業務", "TikTok広告向けのクリエイティブ制作および最適化", "サムネイル・テロップ・BGM等を含めた動画編集全般", "納期・品質管理およびスケジュール調整", "クライアントとの折衝、修正対応、改善提案", "視聴維持率・広告効果を意識した動画改善・ABテスト実施", "継続案件化に向けた関係構築およびリピート促進"],
        team: "単独（全工程）",
        tools: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro"],
        results: "ココナラ：プラチナランク 113件 ／ ランサーズ：認定ランサー 101件（2023年10月時点）",
      },
    ],
    leaveReason: "一身上の都合により退職。",
  },
  {
    id: 4,
    period: "2024年01月 〜 現在",
    company: "NINE JAPAN株式会社",
    business: "サロン事業、化粧品・美容機器販売事業、商品開発事業、スクール事業、資格発行事業、デザイン事業、機械開発事業、動画企画事業、経営コンサルタント",
    employees: "20名",
    capital: "500万円",
    type: "正社員",
    role: "クリエイティブマネージャー",
    department: "動画事業部",
    tasks: [
      {
        period: "2024年01月〜現在",
        title: "2Dデザイン",
        duties: ["要望やコンセプトに基づいた2Dビジュアルおよびイラストのデザイン企画立案", "販促物（名刺・POP・ポスター・パンフレット・リーフレット・冊子）のデザイン設計", "ブランドイメージや用途を考慮したレイアウト構成およびビジュアル制作", "Illustratorを用いたグラフィックデータの作成および編集対応", "印刷仕様（サイズ・塗り足し・カラーモード等）を踏まえた入稿用データ作成", "入稿前のデータチェックおよび不備修正対応", "媒体特性や掲載環境に応じたデザイン最適化対応", "複数案件の進行管理および納期を意識した制作対応", "イベント・広報用途に応じたビジュアル制作および更新対応", "印刷会社や関係部署との入稿・修正に関する調整対応"],
        team: "CDO1名、デザイナー1名",
        tools: ["Photoshop", "Illustrator"],
        results: "メディア露出・イベント行事の多数案件に対応。Illustratorをデザインから入稿まで担えるレベルに向上。",
      },
      {
        period: "2024年03月〜2024年10月 / 2026年02月〜2026年06月",
        title: "SNSマーケティング（TikTok・Instagram）",
        duties: ["ターゲット分析に基づくSNSコンテンツ企画および投稿戦略立案", "目的に応じた構成設計および台本作成", "撮影計画の立案および撮影ディレクション対応", "動画素材の編集およびSNS最適化（尺・構成・テンポ）対応", "TikTok・Instagramアカウントの投稿管理および運用対応", "投稿スケジュールの設計および進行管理", "ハッシュタグ・トレンドを踏まえた露出最大化施策の実施", "インサイトデータ（再生数・視聴維持率等）の分析および改善提案", "KPI（再生数・フォロワー・反応率等）に基づく運用改善・PDCA実施"],
        team: "TikTok：企画・構成2名、撮影1〜2名、編集1〜2名 ／ Instagram：企画・構成・撮影・編集すべて自身のみ",
        tools: ["Photoshop", "Premiere Pro", "Cap Cut"],
        results: "投稿の視聴数 +620.53% ／ プロフィール表示 +488.66% ／ いいね +723.48% ／ コメント +521.86% ／ シェア +286.55%",
      },
      {
        period: "2024年05月〜現在",
        title: "動画・リクルート・商品撮影",
        duties: ["動画／スチール撮影における企画意図に基づく構図設計および撮影対応", "商品特性やブランド訴求を踏まえた商品撮影の実施", "採用ブランディングを目的としたリクルート撮影の実施", "撮影スケジュールの調整および進行管理", "iPhoneおよびミラーレス一眼を用いた撮影機材運用対応", "ライティング・背景・演出を考慮した撮影環境の構築", "用途別（Web・SNS・広告等）を想定した素材設計および撮影", "継続的な撮影技術向上に向けた機材導入および技術習得"],
        team: "カメラマン1〜2名",
        tools: ["Photoshop"],
        results: "自社開発商品の撮影・プロモーション撮影に従事。2025年1月よりミラーレス一眼を導入し、リクルート撮影にも対応。",
      },
      {
        period: "2024年01月〜現在",
        title: "動画編集",
        duties: ["動画コンテンツの目的に応じた構成設計および編集方針の策定", "撮影内容に基づくストーリーボード作成および構成調整", "必要素材（写真・動画・音源等）の収集および管理", "画像補正／レタッチ等のビジュアル加工対応", "カット編集、テロップ挿入、BGM／効果音設定などの動画編集対応", "視聴者理解を促進する解説動画の編集および構成最適化", "販促／プロモーション用途に応じた動画コンテンツ制作", "店舗・サービス利用者向け説明動画の制作対応", "公開媒体（Web・SNS・店頭等）を想定した動画最適化"],
        team: "カメラマン1〜2名、動画編集1名",
        tools: ["Photoshop", "After Effects", "Premiere Pro"],
        results: "エステ技術解説動画・お客様用動画・プロモーション動画など、幅広い動画編集を担当。1本あたり3日〜数か月の制作対応。",
      },
    ],
    leaveReason: "",
  },
];

const STRENGTHS = [
  { label: "売上・CV実績", detail: "YouTube・TikTok広告で累計売上6,100万円超・CV 8,000件超に直接貢献" },
  { label: "マルチスキル制作力", detail: "動画編集・グラフィックデザイン・撮影・SNS運用を全工程ひとりで完結できる" },
  { label: "データドリブン改善力", detail: "KPI設計〜PDCA実行でTikTok再生数+620%・CV最大化を実現した分析・実行力" },
  { label: "チームリード経験", detail: "5名規模のSNS制作チームで企画・撮影・編集・運用を統括し成果を出した経験" },
  { label: "クライアント折衝力", detail: "外注ディレクション・修正調整を含め、スケジュール通りに納品し継続受注を獲得" },
  { label: "即戦力の自己学習力", detail: "未経験の漫画広告制作を独学で習得し、数か月で売上2,500万円の実績に転換" },
  { label: "タスク管理力", detail: "フリーランスで214件を単独完遂。複数案件の品質・納期を同時管理した実行力" },
];

const SKILLS = [
  { name: "Premiere Pro", level: 4, years: "3年以上" },
  { name: "After Effects", level: 4, years: "3年以上" },
  { name: "Photoshop", level: 4, years: "3年以上" },
  { name: "Illustrator", level: 3, years: "2年以上" },
];

const QUALIFICATIONS = [
  { year: "2012年11月", name: "珠算・電卓実務検定 3級", org: "全国商業高等学校協会" },
  { year: "2013年01月", name: "簿記検定 3級", org: "全国商業高等学校協会" },
  { year: "2013年11月", name: "ビジネス文書検定 2級", org: "全国商業高等学校協会" },
  { year: "2014年01月", name: "情報処理検定 ビジネス情報部門 2級", org: "全国商業高等学校協会" },
  { year: "2015年04月", name: "普通自動車運転免許（AT限定）", org: "" },
  { year: "2019年08月", name: "原価計算 初級", org: "" },
  { year: "2019年09月", name: "電子会計実務検定 2級（弥生会計）", org: "" },
];

function TaskAccordion({ tasks }: { tasks: typeof CAREER[0]["tasks"] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-2 mt-4">
      {tasks.map((task, ti) => (
        <div key={ti} className="border border-border">
          <button
            className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors duration-200"
            style={{ background: open === ti ? "#C9D2D7" : "transparent" }}
            onMouseEnter={e => { if (open !== ti) (e.currentTarget as HTMLButtonElement).style.background = "#C9D2D7"; }}
            onMouseLeave={e => { if (open !== ti) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
            onClick={() => setOpen(open === ti ? null : ti)}
          >
            <div>
              <p className="font-semibold text-foreground text-sm" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{task.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{task.period}</p>
            </div>
            {open === ti ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />}
          </button>
          {open === ti && (
            <div className="px-5 pb-6 pt-1 space-y-5 border-t border-border">
              <div>
                <p className="text-xs font-semibold text-foreground mb-2" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>業務内容</p>
                <ul className="space-y-1">
                  {task.duties.map((d, di) => (
                    <li key={di} className="flex gap-2 text-xs leading-6 text-foreground" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>
                      <span className="text-primary mt-1.5 shrink-0">▸</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-foreground mb-1.5" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>チーム体制</p>
                  <p className="text-xs text-muted-foreground leading-6" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{task.team}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>使用ツール</p>
                  <div className="flex flex-wrap gap-1.5">
                    {task.tools.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 bg-muted border border-border text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              {task.results && (
                <div className="border-l-2 pl-4" style={{ borderColor: "#D24655" }}>
                  <p className="text-xs font-semibold text-foreground mb-1" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>実績</p>
                  <p className="text-xs text-accent font-medium leading-6" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{task.results}</p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ShokumuKeireki() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24">
      <div className="mb-12">
        <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Career History</p>
        <h2 className="text-3xl font-semibold text-foreground" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>職務経歴</h2>
      </div>

      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden sm:block" />
        <div className="space-y-14">
          {[...CAREER].reverse().map((job, idx) => (
            <div key={job.id} className="relative sm:pl-14">
              <div className="hidden sm:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-primary text-white items-center justify-center text-sm font-semibold shrink-0" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {idx + 1}
              </div>
              <div className="p-6" style={{ background: "#0F8EAE" }}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs px-2 py-0.5 font-medium" style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", color: "#0F8EAE" }}>{job.type}</span>
                      {job.role && <span className="text-xs" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif", color: "rgba(255,255,255,0.85)" }}>{job.role}</span>}
                      {job.department && <span className="text-xs" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif", color: "rgba(255,255,255,0.85)" }}>{job.department}</span>}
                    </div>
                    <h3 className="text-xl font-semibold" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif", color: "#fff" }}>{job.company}</h3>
                  </div>
                  <span className="text-sm font-medium shrink-0" style={{ fontFamily: "'DM Sans', sans-serif", color: "#EEE555" }}>{job.period}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-4" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif", borderTop: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.8)" }}>
                  <span><span style={{ color: "#fff", fontWeight: 500 }}>資本金：</span>{job.capital}</span>
                  <span><span style={{ color: "#fff", fontWeight: 500 }}>従業員数：</span>{job.employees}</span>
                  <span className="sm:col-span-1 col-span-1 leading-6"><span style={{ color: "#fff", fontWeight: 500 }}>事業内容：</span>{job.business}</span>
                </div>
              </div>
              <TaskAccordion tasks={job.tasks} />
              {job.leaveReason && (
                <p className="mt-4 text-xs text-muted-foreground pl-3 border-l-2 border-border" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>
                  転職・退職理由：{job.leaveReason}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-lg font-semibold text-foreground mb-6 pb-3 border-b border-border" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>得意分野・活かせる知識</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {STRENGTHS.map((s) => (
            <div key={s.label} className="border border-border p-4 flex gap-3 transition-colors duration-200 cursor-default"
              onMouseEnter={e => (e.currentTarget.style.background = "#C9D2D7")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <span className="text-primary text-lg shrink-0 mt-0.5">▸</span>
              <div>
                <p className="font-semibold text-sm text-foreground" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{s.label}</p>
                <p className="text-xs text-muted-foreground leading-6 mt-1" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 gap-10">
        <div>
          <h3 className="text-base font-semibold text-foreground mb-6 pb-3 border-b border-border" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>テクニカルスキル</h3>
          <div className="space-y-4">
            {SKILLS.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>{skill.name}</span>
                  <span className="text-muted-foreground text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>経験{skill.years}</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div key={n} className="h-2 flex-1" style={{ background: n <= skill.level ? "#0F8EAE" : "#C9D2D7" }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-xs font-medium text-foreground mb-3" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>その他スキル</p>
            <div className="flex flex-wrap gap-1.5">
              {["動画編集", "撮影", "画像加工", "2Dデザイン", "SNSマーケティング", "構成", "スケジュール管理", "デスクリサーチ", "入稿対応"].map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 bg-muted border border-border text-muted-foreground" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground mb-6 pb-3 border-b border-border" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>保有資格</h3>
          <div className="space-y-3">
            {QUALIFICATIONS.map((q) => (
              <div key={q.year} className="flex gap-3 text-xs">
                <span className="text-muted-foreground shrink-0 w-24" style={{ fontFamily: "'DM Sans', sans-serif" }}>{q.year}</span>
                <span className="text-foreground leading-6" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>{q.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 border border-border p-8">
        <h3 className="text-base font-semibold text-foreground mb-6 pb-3 border-b border-border" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>自己PR</h3>
        <div className="space-y-5 text-sm leading-8 text-foreground" style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif" }}>
          <p>動画制作・グラフィックデザイン・撮影・SNS運用を全工程ひとりで担えることが最大の強みです。専門学校卒業後、テレビ局・広告代理店・個人事業・企業と多様な現場を経て、企画から数値改善まで一貫して携わってきました。</p>
          <p><strong>【数字で示せる実績】</strong><br />
          広告代理店では、YouTube・TikTok広告の企画・編集・運用を全工程担当し、累計売上6,100万円超の成果に直接貢献しました。カービュー案件ではCV 8,000件超・売上2,500万円を単独で達成。ミュゼのTikTok広告は競合他社がTTP（模倣）するほどの反響を得ました。現職では、TikTok運用でインサイト上の再生数+620%・プロフィール表示+488%・いいね数+723%を実現。フリーランス期間はクラウドソーシングで214件を完遂し、ランサーズ認定ランサー・ ココナラプラチナランクを獲得しました。</p>
          <p><strong>【再現性のある強み】</strong><br />
          「なぜ作るか」から逆算し、目的・ターゲット・媒体に合わせて企画・制作・数値改善を一貫して実行できます。特定のツールや手法に依存せず、必要なスキルをその都度習得しながら成果につなげてきた自己学習力と実行力が、各職場での即戦力発揮につながっています。</p>
        </div>
      </div>

      <div className="mt-16 flex gap-0">
        <div className="h-1 flex-1" style={{ background: "#0F8EAE" }} />
        <div className="h-1 flex-1" style={{ background: "#D24655" }} />
        <div className="h-1 flex-1" style={{ background: "#EEE555" }} />
        <div className="h-1 flex-1" style={{ background: "#C9D2D7" }} />
      </div>
    </div>
  );
}
