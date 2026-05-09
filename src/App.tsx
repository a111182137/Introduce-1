/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Anchor, 
  Award, 
  Map, 
  Camera, 
  BrainCircuit,
  Mail,
  Smartphone,
  Menu,
  X
} from 'lucide-react';
import { useState, ReactNode } from 'react';

// --- Components ---

const Section = ({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) => (
  <section id={id} className={`presentation-slide ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="w-full h-full flex flex-col items-center justify-center"
    >
      {children}
    </motion.div>
  </section>
);

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 border-b-2 border-editorial-ink pb-4 w-full">
    <h2 className="text-5xl md:text-7xl font-serif font-black italic uppercase tracking-tighter leading-none mb-2">
      {title}
    </h2>
    {subtitle && (
      <p className="text-sm font-bold tracking-[0.3em] uppercase opacity-70">
        {subtitle}
      </p>
    )}
  </div>
);

// --- Sections ---

const Page1Cover = () => (
  <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-16 py-10">
    <div className="relative grayscale hover:grayscale-0 transition-all duration-700">
      <div className="w-64 h-64 md:w-96 md:h-96 border-[8px] border-editorial-ink overflow-hidden bg-editorial-accent">
        <div className="w-full h-full bg-editorial-accent flex items-center justify-center text-editorial-ink/20">
          <Anchor size={120} />
        </div>
      </div>
      <div className="absolute top-8 -left-8 bg-editorial-ink text-editorial-bg px-6 py-2 font-black italic uppercase tracking-widest text-xl">
        航海科 / 陳翊蓁
      </div>
    </div>
    
    <div className="flex-1">
      <h1 className="text-8xl md:text-9xl font-serif font-black italic uppercase tracking-tighter leading-none mb-6">
        Chen<br/>Yi-Zhen
      </h1>
      <p className="text-xl font-bold tracking-widest uppercase mb-8 border-t-2 border-editorial-ink pt-4">
        專業作品集 — 航海專業與多元實務發展
      </p>
      <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest opacity-60">
        <p>國立高雄科技大學 航海科</p>
        <p>獅子座 B型 | 專業航海技術與行政支援</p>
        <p className="flex items-center gap-2"><Mail size={12} /> a111182137@nkust.edu.tw</p>
      </div>
    </div>
  </div>
);

const Page2Experience = () => (
  <div className="max-w-6xl w-full">
    <SectionTitle title="實務經驗" subtitle="專業歷程與解決問題能力" />
    <div className="grid md:grid-cols-3 gap-0 border-2 border-editorial-ink">
      {[
        {
          title: "營運管理與客戶服務",
          org: "豐彩嫩Q仙草",
          role: "創始負責人 / 店長",
          desc: "獨立管理門市營運、庫存管控與高效率訂單處理，建立流暢的工作流程並精準完成客戶需求。",
          id: "01"
        },
        {
          title: "行政支援與協調整合",
          org: "航運技術系辦公室",
          role: "行政工讀生",
          desc: "負責系務文書品質控管、環境優化與專業行政支援，積極協助教職員處理複雜行政事務。",
          id: "02"
        },
        {
          title: "高效執行與環境維護",
          org: "丹丹漢堡",
          role: "餐飲服務專員",
          desc: "具備高壓環境下的環境整理、供餐精準度與設備清潔維護能力，確保營運標準化執行。",
          id: "03"
        }
      ].map((exp, idx) => (
        <div 
          key={idx}
          className={`p-10 ${idx !== 2 ? 'md:border-r-2 md:border-editorial-ink' : ''} border-b-2 md:border-b-0 border-editorial-ink`}
        >
          <span className="text-4xl font-serif font-black italic opacity-20 block mb-6">{exp.id}</span>
          <h3 className="text-xl font-bold uppercase underline mb-2 tracking-tight">{exp.title}</h3>
          <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-70">{exp.org} / {exp.role}</p>
          <p className="text-sm italic leading-relaxed">{exp.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const Page3Skills = () => (
  <div className="max-w-5xl w-full">
    <SectionTitle title="專業領域" subtitle="語言能力與專業行政實力" />
    <div className="grid md:grid-cols-12 gap-12">
      <div className="col-span-12 md:col-span-5 editorial-block">
        <h3 className="text-xs uppercase tracking-[0.4em] font-bold mb-8 opacity-70">語言溝通實力</h3>
        <div className="space-y-12">
          <div>
            <h4 className="text-3xl font-serif italic mb-2 tracking-tighter">台語 (精通)</h4>
            <p className="text-xs uppercase font-bold tracking-widest opacity-80">具備優異的跨世代溝通能力，能精準處理長輩對談需求。</p>
          </div>
          <div>
            <h4 className="text-3xl font-serif italic mb-2 tracking-tighter">英文 (TOEIC 530)</h4>
            <p className="text-xs uppercase font-bold tracking-widest opacity-80">具備商務閱讀能力，能處理基本專業文書。目前正積極進修中。</p>
          </div>
        </div>
      </div>
      
      <div className="col-span-12 md:col-span-7 border-2 border-editorial-ink p-10">
        <h3 className="text-xs uppercase tracking-[0.4em] font-bold mb-8">專業工具與行政軟實力</h3>
        <div className="grid grid-cols-2 gap-y-8 gap-x-12">
          {[
            { label: "MS Office 運用", tools: "Word, Excel, PowerPoint" },
            { label: "雲端協作工具", tools: "Gmail, Calendar, Drive" },
            { label: "行政文書流程", tools: "文件優化、資料統整" },
            { label: "實務協理支援", tools: "高效的系務行政輔助" }
          ].map(skill => (
            <div key={skill.label} className="border-b border-editorial-ink pb-4">
              <h5 className="text-lg font-black italic font-serif">{skill.label}</h5>
              <p className="text-[10px] uppercase font-bold tracking-widest mt-1 opacity-60">{skill.tools}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Page4Certs = () => (
  <div className="max-w-6xl w-full">
    <SectionTitle title="航海硬實力" subtitle="專業航海技術與國家級認證" />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-editorial-ink">
      {[
        "基本安全認證", "救生艇筏操作", "進階滅火實務", "助理級航行", 
        "保全意識", "醫療急救", "RORO船舶", "油貨證書"
      ].map((cert, idx) => (
        <div 
          key={idx}
          className="p-8 border border-editorial-ink flex flex-col justify-between aspect-square group hover:bg-editorial-ink hover:text-editorial-bg transition-colors"
        >
          <Award size={24} className="opacity-40 group-hover:opacity-100" />
          <span className="font-serif text-2xl font-black italic uppercase leading-none tracking-tighter">{cert}</span>
        </div>
      ))}
    </div>
    <div className="mt-8 flex justify-end">
      <div className="bg-editorial-ink text-editorial-bg px-8 py-4 font-bold uppercase tracking-[0.2em] text-xs">
        累計取得 8 項航海核心專業證照
      </div>
    </div>
  </div>
);

const Page5Vision = () => (
  <div className="max-w-4xl w-full">
    <SectionTitle title="個人願景" subtitle="航海員的視角與信念" />
    <div className="relative">
      <div className="editorial-thick-border p-12 md:p-20 text-center space-y-10 group">
        <p className="text-3xl md:text-5xl font-serif italic leading-tight tracking-tighter">
          「在廣袤的海洋中，我希望能活成自己理想中的樣子。」
        </p>
        <div className="w-24 h-[2px] bg-editorial-ink mx-auto" />
        <p className="text-sm font-bold uppercase tracking-[0.5em] opacity-60">個人核心座右銘</p>
      </div>
      
      <div className="mt-12 max-w-2xl mx-auto text-center italic text-lg leading-relaxed text-slate-500">
        具備航海與底片攝影的雙重視角。在系辦工讀中淬鍊對行政細節的堅持，用攝影的耐心對待深奧的航行技術。未來目標是成為能將傳統航業與現代數位趨勢完美整合的跨域專才。
      </div>
    </div>
  </div>
);

const Page6ProjectA = () => (
  <div className="max-w-6xl w-full">
    <SectionTitle title="作品 A：旅遊企劃" subtitle="苗栗四天三夜：慢活海線之旅 (4/3 - 4/6)" />
    <div className="grid md:grid-cols-12 gap-0 border-2 border-editorial-ink overflow-hidden">
      <div className="col-span-12 md:col-span-8 bg-editorial-accent/30 p-10 md:p-14 border-b-2 md:border-b-0 md:border-r-2 border-editorial-ink">
        <h3 className="text-4xl font-serif font-black italic mb-10 uppercase tracking-tighter underline decoration-2">苗栗四天三夜之旅</h3>
        <div className="overflow-x-auto overflow-y-auto max-h-[400px]">
          <table className="w-full text-left text-[10px] md:text-xs border-collapse">
            <thead className="sticky top-0 bg-editorial-accent z-10">
              <tr className="border-b-2 border-editorial-ink font-bold uppercase tracking-widest leading-loose">
                <th className="pb-2 px-2">日期</th>
                <th className="pb-2 px-2">時間</th>
                <th className="pb-2 px-2">行程內容</th>
                <th className="pb-2 px-2">類型</th>
                <th className="pb-2 px-2">預估人均</th>
              </tr>
            </thead>
            <tbody className="opacity-80">
              <tr className="border-b border-editorial-ink/10">
                <td className="py-2 px-2 font-bold">4/3 (四)</td>
                <td className="py-2 px-2">11:30</td>
                <td className="py-2 px-2 font-medium">抵達苗栗，辦理租車</td>
                <td className="py-2 px-2">交通</td>
                <td className="py-2 px-2">$2,400</td>
              </tr>
              <tr className="border-b border-editorial-ink/10 bg-editorial-ink/5">
                <td className="py-2 px-2"></td>
                <td className="py-2 px-2">12:30</td>
                <td className="py-2 px-2">後龍慈雲宮小吃 (午餐)</td>
                <td className="py-2 px-2">食</td>
                <td className="py-2 px-2">$250</td>
              </tr>
              <tr className="border-b border-editorial-ink/10">
                <td className="py-2 px-2 font-bold">4/4 (五)</td>
                <td className="py-2 px-2">14:00</td>
                <td className="py-2 px-2">飛牛牧場 (門票+點心)</td>
                <td className="py-2 px-2">景點</td>
                <td className="py-2 px-2">$450</td>
              </tr>
              <tr className="border-b border-editorial-ink/10 bg-editorial-ink/5">
                <td className="py-2 px-2"></td>
                <td className="py-2 px-2">19:30</td>
                <td className="py-2 px-2">通霄在地餐廳 (晚餐)</td>
                <td className="py-2 px-2">食</td>
                <td className="py-2 px-2">$450</td>
              </tr>
              <tr className="border-b border-editorial-ink/10">
                <td className="py-2 px-2 font-bold">4/5 (六)</td>
                <td className="py-2 px-2">11:30</td>
                <td className="py-2 px-2">大鼎夏荷牛肉麵 (午餐)</td>
                <td className="py-2 px-2">食</td>
                <td className="py-2 px-2">$350</td>
              </tr>
              <tr className="border-b border-editorial-ink/10 bg-editorial-ink/5">
                <td className="py-2 px-2"></td>
                <td className="py-2 px-2">14:00</td>
                <td className="py-2 px-2">垂坤食品旗艦店購物</td>
                <td className="py-2 px-2">購物</td>
                <td className="py-2 px-2">$500</td>
              </tr>
              <tr className="border-b border-editorial-ink/10">
                <td className="py-2 px-2 font-bold">4/6 (日)</td>
                <td className="py-2 px-2">10:30</td>
                <td className="py-2 px-2">天空之城 (門票+午餐)</td>
                <td className="py-2 px-2">景點</td>
                <td className="py-2 px-2">$600</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 pt-6 border-t border-editorial-ink/20 text-[10px] leading-relaxed italic opacity-60">
          * 註：以上規劃針對 5 人同行優化，包含 7 人座租車及精選質感民宿建議。
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 p-10 md:p-14 flex flex-col justify-between">
        <div>
          <h3 className="text-xs uppercase tracking-[0.5em] font-bold mb-8">預算結構分析 (總計)</h3>
          <div className="space-y-6">
            {[
              { label: "住宿費用 (3晚)", cost: "$22,500" },
              { label: "交通租車 (含油錢)", cost: "$12,000" },
              { label: "餐飲開銷 (4天)", cost: "$10,500" },
              { label: "門票與瑣碎支出", cost: "$3,750" }
            ].map(item => (
              <div key={item.label} className="flex justify-between items-baseline border-b border-editorial-ink/20 pb-2">
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">{item.label}</span>
                <span className="font-serif font-black italic text-lg">{item.cost}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 p-6 bg-editorial-ink text-editorial-bg">
          <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-1">每人平均總花費</p>
          <p className="text-4xl font-serif font-black italic tracking-tighter">NT$ 9,850</p>
          <p className="text-[9px] mt-4 opacity-40 leading-relaxed font-mono">5 人總計預算 NT$ 49,250。實現高品質且精準的成本控管目標。</p>
        </div>
      </div>
    </div>
  </div>
);

const Page7ProjectB = () => (
  <div className="w-full min-h-[80vh] bg-[#0a0a0a] text-white py-20 px-6 md:px-12 flex flex-col items-center">
    <div className="max-w-6xl w-full mb-16">
      <h2 className="text-4xl md:text-6xl font-serif font-black italic uppercase tracking-tighter mb-2 text-white">作品 B：影像敘事</h2>
      <p className="text-xs font-bold tracking-[0.4em] uppercase opacity-50 border-l-2 border-white pl-4">AI 視覺生成 與 多維度動態紀實</p>
    </div>

    <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">
      {/* 影片 1 */}
      <div className="flex flex-col space-y-4 group">
        <div className="relative overflow-hidden rounded-[12px] border border-white/10 shadow-2xl bg-black">
          <video 
            className="w-full aspect-video object-cover" 
            src="./video-kling.mp4"
            autoPlay 
            muted 
            loop 
            playsInline 
            controls
          >
            您的瀏覽器不支援影片播放。
          </video>
          <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-[10px] px-2 py-1 uppercase tracking-widest font-mono">
            Kling AI / Source 01
          </div>
        </div>
        <div className="pt-2">
          <h3 className="text-lg font-serif italic font-bold">AI 視覺生成：海岸風情</h3>
          <div className="w-8 h-[1px] bg-white/30 my-2" />
          <p className="text-[10px] uppercase tracking-widest opacity-40">探索自然與科技的邊界</p>
        </div>
      </div>

      {/* 影片 2 */}
      <div className="flex flex-col space-y-4 group">
        <div className="relative overflow-hidden rounded-[12px] border border-white/10 shadow-2xl bg-black">
          <video 
            className="w-full aspect-video object-cover" 
            src="./video-runway.mp4"
            autoPlay 
            muted 
            loop 
            playsInline 
            controls
          >
            您的瀏覽器不支援影片播放。
          </video>
          <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-[10px] px-2 py-1 uppercase tracking-widest font-mono">
            Runway Gen-3 / Source 02
          </div>
        </div>
        <div className="pt-2">
          <h3 className="text-lg font-serif italic font-bold">動態影像敘事</h3>
          <div className="w-8 h-[1px] bg-white/30 my-2" />
          <p className="text-[10px] uppercase tracking-widest opacity-40">流動的旅途與視覺情感</p>
        </div>
      </div>
    </div>

    {/* 底部裝飾與說明 */}
    <div className="max-w-6xl w-full mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row gap-8 items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">後製工具</span>
          <span className="text-xs font-mono">PR / CapCut / AI Enhance</span>
        </div>
        <div className="w-[1px] h-8 bg-white/10" />
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">影像格率</span>
          <span className="text-xs font-mono">24FPS Cinematic</span>
        </div>
      </div>
      <p className="text-[10px] uppercase tracking-[0.5em] opacity-30 text-center md:text-right">
        Visual Experimentation / Multimedia Edition 2026
      </p>
    </div>
  </div>
);

const Page8ProjectC = () => (
  <div className="w-full h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden group">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,41,55,1)_0%,rgba(10,10,10,1)_100%)]" />
    
    <div className="relative z-10 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <span className="text-white/20 text-[10px] font-mono tracking-[1em] uppercase block mb-2">Project C Showcase</span>
        <h2 className="text-white text-3xl font-serif italic font-bold tracking-widest">AI 模型：虛擬角色</h2>
      </motion.div>

      <a 
        href="https://studio.tripo3d.ai/workspace/generate/ce9f924c-9362-402e-9833-435038acbdac" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative z-10 transition-transform duration-700 hover:scale-105 block cursor-pointer"
      >
        <motion.img 
          src="./my_avatar.png" 
          alt="3D Character Avatar" 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-[70vh] max-h-[550px] w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop";
            target.className = "h-[40vh] opacity-10 grayscale object-contain";
          }}
        />
      </a>
      
      <div className="mt-8 opacity-0 group-hover:opacity-40 transition-opacity duration-1000 text-center">
        <p className="text-white text-[9px] font-mono tracking-[0.4em]">點擊圖片進入模型空間</p>
      </div>
    </div>
  </div>
);

// --- Navigation ---

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { label: "關於我", id: "about" },
    { label: "實務經驗", id: "experience" },
    { label: "專業領域", id: "skills" },
    { label: "專業證照", id: "certs" },
    { label: "個人願景", id: "vision" },
    { label: "作品 A：旅遊企劃", id: "project-a" },
    { label: "作品 B：旅遊影片", id: "project-b" },
    { label: "作品 C：AI 模型", id: "project-c" },
  ];

  return (
    <>
      {/* 修正後的固定導航欄：增加背景與更高的 z-index，並確保寬度穩定 */}
      <nav className="fixed top-0 left-0 w-full z-[70] bg-editorial-bg/90 backdrop-blur-md border-b border-editorial-ink/10">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="font-serif font-black italic text-2xl tracking-tighter">CYZ</span>
            </div>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] hover:opacity-50 transition-all bg-editorial-ink text-editorial-bg px-3 py-1.5"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
              <span>{isOpen ? "關閉選單" : "內容目錄"}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 目錄選單遮罩 */}
      <div className={`fixed inset-0 bg-editorial-bg z-[65] transition-transform duration-700 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="h-full flex flex-col justify-center items-center gap-8 p-10 pt-20">
          {navItems.map((item, idx) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className="text-lg md:text-xl font-serif font-black italic uppercase tracking-tighter hover:text-slate-500 transition-colors group flex items-center"
            >
              <span className="text-[10px] md:text-xs mr-4 opacity-30 font-sans group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

// --- Main Navigation & App Shell ---

export default function App() {
  return (
    <div className="min-h-screen bg-editorial-bg text-editorial-ink font-sans relative">
      {/* Editorial Frame */}
      <div className="fixed inset-0 border-[12px] border-editorial-ink pointer-events-none z-[80]" />

      <Navigation />

      {/* 增加 pt-32 確保內容不會被固定的導航欄擋住 */}
      <main className="relative z-10 pt-20">
        <Section id="about"><Page1Cover /></Section>
        <Section id="experience"><Page2Experience /></Section>
        <Section id="skills"><Page3Skills /></Section>
        <Section id="certs"><Page4Certs /></Section>
        <Section id="vision"><Page5Vision /></Section>
        <Section id="project-a"><Page6ProjectA /></Section>
        <Section id="project-b"><Page7ProjectB /></Section>
        <Section id="project-c"><Page8ProjectC /></Section>
      </main>
    </div>
  );
}
