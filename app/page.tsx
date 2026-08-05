/* eslint-disable @next/next/no-img-element */

import { FloatingContact } from "./FloatingContact";

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
    name: "亚洲人体冷冻",
    eyebrow: "CRYONICS",
    description: "穿越时光，遇见未来的自己",
    image: "/images/cryonics.png",
    href: "http://www.chinesecryonics.org/cn/index.html",
    alt: "人体冷冻服务英文主题画面",
  },
  {
    name: "赴美医疗",
    eyebrow: "MEDICAL",
    description: "专注全球领先的新理念、新技术和新药物",
    image: "/images/medical.png",
    href: "http://www.huajianus.com/",
    alt: "医疗实验室与美国食品药品监督管理局标志",
  },
];

const offices = [
  {
    city: "迈阿密",
    region: "美国总部",
    phone: "+1 786 250 3999",
    direct: "中国直拨美国：167 1005 2762",
    email: "info@aet21.com",
    address: "15321 South Dixie Hwy, Suite 302, Palmetto Bay, FL 33157",
  },
  {
    city: "洛杉矶",
    region: "西海岸服务中心",
    phone: "+1 949 954 7996",
    direct: "中国直拨美国：167 6208 4336",
    email: "ca2@aet21.com",
    address: "19800 MacArthur Blvd Ste 420, Irvine, CA 92612",
  },
  {
    city: "旧金山",
    region: "加州服务中心",
    phone: "+1 415 817 9297",
    direct: "中国直拨美国：167 1526 5057",
    email: "info@usyimin.com",
    address: "851 Burlway Rd, Ste 421, 423 & 605, Burlingame, CA 94010",
  },
  {
    city: "波士顿",
    region: "东北部服务中心",
    phone: "+1 781 605 1970",
    email: "boston@aet21.com",
    address: "6 Pleasant Street, Suite 418, Malden, MA 02148",
  },
  {
    city: "纽约",
    region: "纽约服务中心",
    phone: "+1 718 521 6708",
    email: "nyc@americantranslationservice.com",
    address: "60-20 Woodside Ave, Suite 205, Queens, NY 11377",
  },
  {
    city: "北京",
    region: "中国区服务中心",
    phone: "+86 010 65913558",
    direct: "办公室传真：+86 010 65918427",
    email: "beijing@jiahuaus.net",
    address: "北京市朝阳区甜水园东街2号甜水园商务中心A栋1层106室（100026）",
  },
  {
    city: "成都",
    region: "西南服务中心",
    phone: "+86 028 63916918",
    email: "chengdu@usyimin.com",
    address: "四川成都锦江区东大街芷泉段68号时代8号3609室",
  },
  {
    city: "常州",
    region: "华东服务中心",
    phone: "+86 0519 88188305",
    direct: "手机号码：+86 134 0758 0765",
    email: "510302331@qq.com",
    address: "江苏常州新北区现代传媒中心3号楼1802",
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
        <a className="header-cta" href="mailto:info@aet21.com">开始咨询 <span>↗</span></a>
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
            <div><strong>6</strong><span>专业业务板块</span></div>
            <div><strong>8</strong><span>中美办公室</span></div>
            <div><strong>2</strong><span>国家服务网络</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="美域集团服务场景">
          <div className="hero-image hero-image-main">
            <img src="/images/onestop.png" alt="地球仪与美国国旗" />
          </div>
          <div className="hero-image hero-image-small">
            <img src="/images/trans.png" alt="专业翻译工作场景" />
          </div>
          <div className="hero-note">
            <span className="note-icon">✦</span>
            <p>跨越边界<br /><strong>连接每一种可能</strong></p>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="服务关键词">
        <span>教育规划</span><i>✦</i><span>认证翻译</span><i>✦</i><span>移民咨询</span><i>✦</i><span>赴美生活</span><i>✦</i><span>医疗服务</span>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div>
            <p className="kicker"><span /> 集团业务</p>
            <h2>一个入口，连接<br />赴美生活的每一步</h2>
          </div>
          <p>六大专业板块协同服务，从最初的想法到在美国安家生活，让复杂的跨境事务变得更简单。</p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <a className="service-card" href={service.href} target="_blank" rel="noreferrer" key={service.name}>
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

      <section className="offices section" id="contact">
        <div className="section-heading office-heading">
          <div>
            <p className="kicker"><span /> 联系我们</p>
            <h2>选择离您最近的办公室</h2>
          </div>
          <p>您也可以直接致电或发送邮件，我们会根据您的需求安排对应业务团队与您联系。</p>
        </div>

        <div className="office-grid">
          {offices.map((office, index) => (
            <article className="office-card" key={office.city}>
              <div className="office-top">
                <span>0{index + 1}</span>
                <p>{office.region}</p>
              </div>
              <h3>{office.city}<small>办公室</small></h3>
              <address>{office.address}</address>
              <div className="office-contact">
                <a href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}>{office.phone}</a>
                {office.direct && <span>{office.direct}</span>}
                <a href={`mailto:${office.email}`}>{office.email}</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="kicker kicker-light"><span /> LET&apos;S TALK</p>
          <h2>准备好开启您的<br />美国生活新篇章？</h2>
        </div>
        <a href="mailto:info@aet21.com" aria-label="发送邮件开始咨询">
          <span>开始咨询</span><b>↗</b>
        </a>
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
