import React, { useState, useEffect } from "react";
import { Button } from './components/ui/button';
import artwork1 from './assets/images/character design.jpg';
import artwork2 from './assets/images/women.jpg';
import artwork3 from './assets/images/men.jpg';
import artwork4 from './assets/images/yumeko.jpg';
import artwork5 from './assets/images/pot.jpg';
import artwork6 from './assets/images/bharatnatyam.jpg';
import artwork7 from './assets/images/face.jpg';
import artwork8 from './assets/images/figures.jpg';
import artwork9 from './assets/images/hands.jpg';
import artwork10 from './assets/images/object drawing.jpg';
const translations = {
  en: {
    title: "MEXT Scholarship Portfolio",
    description: "Pavithra Subramanian",
    viewWork: "View My Work",
    myWorks: "My Works",
    aboutMe: "About Me",
    aboutText:
      "My name is Pavithra Subramanian, and I’m an aspiring animator from Navi Mumbai, India. I started exploring digital animation at the age of 13, beginning with Live2D and Krita. Over time, I taught myself to use tools like Blender, After Effects, Photoshop, OpenToonz, and Clip Studio Paint , which I now use primarily for my animation work. My journey so far has been self-driven, fueled by curiosity, passion, and a desire to tell meaningful stories through movement and art.",
    contact: "Contact",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    
  },
  jp: {
  title: "文部科学省奨学金ポートフォリオ",
  description: "パヴィトラ・スブラマニアン",
  viewWork: "作品を見る",
  myWorks: "作品集",
  aboutMe: "自己紹介",
  aboutText: "私はパヴィトラ・スブラマニアンと申します。インドのナビ・ムンバイ出身のアニメーター志望者です。13歳の時にLive2DとKritaを使ってデジタルアニメーションの世界に入りました。その後、Blender、After Effects、Photoshop、OpenToonz、Clip Studio Paintなどのツールを独学で習得し、現在はこれらのソフトを主にアニメーション制作に使用しています。これまでの道のりは好奇心と情熱に駆られ、動きとアートを通じて意味のある物語を伝えたいという思いで自主的に進んできました。",
  contact: "お問い合わせ",
  name: "名前",
  email: "メールアドレス",
  message: "メッセージ",
  send: "送信"
}
};

export default function PortfolioHome() {
  const [lang, setLang] = useState("en");
  const [expandedImage, setExpandedImage] = useState(null);
  const t = translations[lang];
  const artworks = [
    { src: artwork1, title: "Character Design", year:'2025', width:3506,height:2480 },
    {
    type: 'video',
    embedId: 'FDi4DuC-RTc', 
    title: lang === 'en' ? "Animation Reel" : "アニメーションリール",
    year: "2024"
  },
    { src: artwork4, title: "Illustration", year: "2023", width:2643,height:2550 },
    
    { src: artwork6, title: "Human figure",width:1429,height:1854},
    { src: artwork2, title: "Human figures",width:3506,height:2480},
    { src: artwork3, title: "Human figures",width:3506,height:2480 },
    { src: artwork7, title: "Human face practice",width:1799,height:2145},
    { src: artwork9, title: "Hand Practice",width:2388,height:1138},
    { src: artwork10, title: "Object Drawing",width:1318,height:1608 }
];
  



  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) setLang(savedLang);
  }, []);

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    localStorage.setItem("lang", selectedLang);
  
  };

  return (
    <div className="min-h-screen bg-[#fdf6f0] text-gray-800 font-sans">
      {/* Header */}
      <header className="p-6 flex justify-between items-center shadow-md bg-white">
        <h1 className="text-2xl font-bold">Pavithra Subramanian</h1>
        <div className="flex items-center space-x-4">
          <nav className="space-x-4">
            <a href="#works" className="hover:underline">{t.myWorks}</a>
            <a href="#about" className="hover:underline">{t.aboutMe}</a>
            <a href="#contact" className="hover:underline">{t.contact}</a>
          </nav>
          <select
            value={lang}
            onChange={handleLanguageChange}
            className="border rounded p-1 text-sm"
          >
            <option value="en">EN</option>
            <option value="jp">JP</option>
          </select>
        </div>
      </header>

      {/* Hero Section */}
<section className="flex flex-col items-center justify-center text-center py-20 px-4">
  <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">{t.title}</h2>
  <p className="max-w-xl mb-6">{t.description}</p>
  <Button 
    className="text-lg px-6 py-2"
    onClick={() => {
      document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    {t.viewWork}
  </Button>
</section>

{/* Works Section */}
<section id="works" className="py-16 px-4 sm:px-6">
  <h3 className="text-3xl font-semibold mb-6">{t.myWorks}</h3>
  <div className="flex flex-wrap gap-4 sm:gap-6 justify-center"> {/* Horizontal grid */}
    {artworks.map((item, index) => (
      <div key={index} className="text-center">
        {item.type === 'video' ? (
          <div 
            className="cursor-pointer group relative"
            onClick={() => setExpandedImage(item)}
          >
            {/* Video Thumbnail (same size as images) */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center overflow-hidden rounded-lg bg-gray-100">
              <img
                src={`https://img.youtube.com/vi/${item.embedId}/maxresdefault.jpg`}
                alt={`${item.title} thumbnail`}
                className="max-h-full max-w-full object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-red-600 text-white rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Image Thumbnail */
          <div 
            className="cursor-pointer group relative"
            onClick={() => setExpandedImage(item)}
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center overflow-hidden rounded-lg bg-transparent">
              <img 
                src={item.src} 
                alt={`${item.title}`}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        )}
        {/* Title/Year (same for both) */}
        <div className="mt-3 sm:mt-4">
          <h4 className="font-medium text-base sm:text-lg">{item.title}</h4>
          <p className="text-sm sm:text-base text-gray-600">{item.year}</p>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Expanded View */}
{expandedImage && (
  <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4"
    onClick={() => setExpandedImage(null)}>
    {expandedImage.type === 'video' ? (
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${expandedImage.embedId}?autoplay=1`}
          className="w-full h-full rounded-lg"
          allowFullScreen
        />
      </div>
    ) : (
      <img
        src={expandedImage.src}
        className="max-w-full max-h-[80vh] object-contain"
      />
    )}
    <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg"
  onClick={(e) => {
    e.stopPropagation();
    setExpandedImage(null);
  }}>
      {lang === 'en' ? 'Close' : '閉じる'}
    </button>
  </div>
)}

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-[#fff8f2]">
        <h3 className="text-3xl font-semibold mb-6">{t.aboutMe}</h3>
        <p className="max-w-2xl text-gray-700">{t.aboutText}</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <h3 className="text-3xl font-semibold mb-6">{t.contact}</h3>
        <form className="max-w-md space-y-4">
          <input
            type="text"
            placeholder={t.name}
            className="w-full border rounded p-2"
          />
          <input
            type="email"
            placeholder={t.email}
            className="w-full border rounded p-2"
          />
          <textarea
            placeholder={t.message}
            rows="4"
            className="w-full border rounded p-2"
          ></textarea>
          <Button type="submit">{t.send}</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        {t.copyright}
      </footer>
    </div>
  );
}
