/* eslint-disable @next/next/no-img-element */

import { FloatingContact } from "./FloatingContact";
import { OfficeCarousel } from "./OfficeCarousel";

const services = [
  {
    name: "美域佳华",
    eyebrow: "ONE-STOP SERVICE",
    description: "为您的美国生活保驾护航",
    image: "/images/onestop.png",
    href: "https://jiahuaus.net/",
    alt: "地球仪上的美国国旗，代表美域佳华赴美一站式服务",
  },
  {
    name: "美域留学",
    eyebrow: "EDUCATION",
    description: "助您的孩子梦想起航",
    image: "/images/edu.png",
    href: "https://www.aet21.com/",
    alt: "连接中国与美国的教育道路插画",
  },
  {
    name: "美域翻译",
    eyebrow: "TRANSLATION",
    description: "ATA认证，为您提供专业高效的翻译",
    image: "/images/trans.png",
    href: "https://www.americantranslationservice.com/home-zh.php",
    alt: "笔记本电脑、纸张和钢笔组成的专业工作场景",
  },
  {
    name: "移民美国",
    eyebrow: "IMMIGRATION",
    description: "高回报无排期的独立投资移民项目",
    image: "/images/immigration.png",
    href: "https://usyimin.com/",
    alt: "人群跨越地球前往美国的移民主题插画",
  },
  {
    name: "资产配置",
    eyebrow: "ASSET ALLOCATION",
    description: "跨境视角，规划家庭财富的长期配置",
    image: "/services/asset-allocation.webp",
    href: "#contact",
    alt: "世界地图、投资组合图表与指南针组成的资产配置场景",
  },
  {
    name: "购房置业",
    eyebrow: "REAL ESTATE",
    description: "从选房到安家，提供专业置业支持",
    image: "/services/home-purchase.webp",
    href: "#contact",
    alt: "现代住宅、房产资料与钥匙组成的美国置业场景",
  },
  {
    name: "税务申报",
    eyebrow: "TAX SERVICES",
    description: "中美税务规划与申报，清晰合规更安心",
    image: "/services/tax-filing.webp",
    href: "#contact",
    alt: "计算器、申报表与钢笔组成的专业税务申报场景",
  },
  {
    name: "投资机遇",
    eyebrow: "INVESTMENT",
    description: "甄选美国优质项目，链接长期增长机遇",
    image: "/services/investment-opportunities.webp",
    href: "#contact",
    alt: "城市模型与通向未来的光线组成的投资机遇场景",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="美域集团首页">
          <span className="brand-mark" aria-hidden="true">M</span>
          <span className="brand-copy">
            <strong>美域集团</strong>
            <small>MEIYU GROUP</small>
          </span>
        </a>
        <nav aria-label="主导航">
          <a href="#services">集团业务</a>
          <a href="#network">服务网络</a>
          <a href="#contact">联系我们</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-copy">
          <p className="kicker"><span /> 专业赴美服务平台</p>
          <h1>让美好的<br />美国生活，<em>始于美域</em></h1>
          <p className="hero-lead">
            从教育、翻译到移民与生活服务，我们连接中美资源，
            为每一个重要决定提供专业、清晰的支持。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#services">探索集团业务 <span>↓</span></a>
            <a className="button button-ghost" href="#contact">找到附近办公室</a>
          </div>
          <div className="hero-proof" aria-label="服务概览">
            <div><strong>8</strong><span>专业业务板块</span></div>
            <div><strong>8</strong><span>中美办公室</span></div>
            <div><strong>2</strong><span>国家服务网络</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="美域集团服务场景">
          <div className="hero-image hero-image-main">
            <img src="/golden-gate-bridge-view.jpg" alt="金门大桥与旧金山湾景色" />
          </div>
          <div className="hero-image hero-image-small">
            <img src="/sf-chinatown.webp" alt="旧金山唐人街街景与红灯笼" />
          </div>
          <div className="hero-note">
            <span className="note-icon">✦</span>
            <p>跨越边界<br /><strong>连接每一种可能</strong></p>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="服务关键词">
        <span>教育规划</span><i>✦</i><span>认证翻译</span><i>✦</i><span>移民咨询</span><i>✦</i><span>资产配置</span><i>✦</i><span>购房置业</span><i>✦</i><span>税务申报</span><i>✦</i><span>投资机遇</span>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div>
            <p className="kicker"><span /> 集团业务</p>
            <h2>一个入口，连接<br />赴美生活的每一步</h2>
          </div>
          <p>八大专业板块协同服务，从最初的想法到在美国安家与发展，让复杂的跨境事务变得更简单。</p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <a
              className="service-card"
              href={service.href}
              target={service.href.startsWith("http") ? "_blank" : undefined}
              rel={service.href.startsWith("http") ? "noreferrer" : undefined}
              key={service.name}
            >
              <div className="service-image">
                <img src={service.image} alt={service.alt} loading={index > 2 ? "lazy" : "eager"} />
                <span className="service-number">0{index + 1}</span>
              </div>
              <div className="service-body">
                <span className="service-eyebrow">{service.eyebrow}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <span className="service-link">了解更多 <b>↗</b></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="network section" id="network">
        <div className="network-intro">
          <p className="kicker kicker-light"><span /> 服务网络</p>
          <h2>跨越太平洋，<br />服务就在身边</h2>
          <p>从美国东西海岸到中国核心城市，我们用本地团队与跨境协作，为您提供贴近需求的支持。</p>
          <a href="#contact">查看所有办公室 <span>↓</span></a>
        </div>
        <div className="network-visual" aria-label="美域集团全球服务网络">
          <div className="network-image-shell">
            <img src="/MeiyuGlobalNetwork.png" alt="美域集团连接中国与美国各办公室的全球服务网络地图" />
            <div className="network-scan" aria-hidden="true" />
          </div>
          <div className="network-chip network-chip-top"><i /> 跨太平洋协同服务</div>
          <div className="network-chip network-chip-bottom"><strong>8</strong><span>OFFICES<br />中美服务网络</span></div>
        </div>
      </section>

      <OfficeCarousel />

      <section className="final-cta">
        <div>
          <p className="kicker kicker-light"><span /> LET&apos;S TALK</p>
          <h2>准备好开启您的<br />美国生活新篇章？</h2>
        </div>
      </section>

      <footer>
        <a className="brand brand-footer" href="#top">
          <span className="brand-mark">M</span>
          <span className="brand-copy"><strong>美域集团</strong><small>MEIYU GROUP</small></span>
        </a>
        <p>让您美好的美国生活，始于美域。</p>
        <div className="footer-links">
          <a href="#services">集团业务</a>
          <a href="#network">服务网络</a>
          <a href="#contact">联系我们</a>
          <a href="#top">返回顶部 ↑</a>
        </div>
        <small>© {new Date().getFullYear()} 美域集团. All rights reserved.</small>
      </footer>
      <FloatingContact />
    </main>
  );
}
