"use client";

/* eslint-disable @next/next/no-img-element, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex */

import { useEffect, useRef, useState } from "react";

const offices = [
  {
    city: "迈阿密",
    english: "MIAMI",
    region: "美国总部",
    country: "USA",
    image: "/offices/miami.jpg",
    phone: "+1 786 250 3999",
    direct: "中国直拨美国：167 1005 2762",
    email: "info@aet21.com",
    address: "15321 South Dixie Hwy, Suite 302, Palmetto Bay, FL 33157",
  },
  {
    city: "洛杉矶",
    english: "LOS ANGELES",
    region: "西海岸服务中心",
    country: "USA",
    image: "/offices/irvine.jpg",
    phone: "+1 949 954 7996",
    direct: "中国直拨美国：167 6208 4336",
    email: "ca2@aet21.com",
    address: "19800 MacArthur Blvd Ste 570, Irvine, CA 92612",
  },
  {
    city: "旧金山",
    english: "SAN FRANCISCO",
    region: "加州服务中心",
    country: "USA",
    image: "/offices/san-francisco.jpg",
    phone: "+1 415 817 9297",
    direct: "中国直拨美国：167 1526 5057",
    email: "info@usyimin.com",
    address: "851 Burlway Rd, Ste 421, 423 & 605, Burlingame, CA 94010",
  },
  {
    city: "波士顿",
    english: "BOSTON",
    region: "东北部服务中心",
    country: "USA",
    image: "/offices/boston.jpg",
    phone: "+1 781 605 1970",
    email: "boston@aet21.com",
    address: "6 Pleasant Street, Suite 418, Malden, MA 02148",
  },
  {
    city: "纽约",
    english: "NEW YORK",
    region: "纽约服务中心",
    country: "USA",
    phone: "+1 718 521 6708",
    email: "nyc@americantranslationservice.com",
    address: "60-20 Woodside Ave, Suite 205, Queens, NY 11377",
  },
  {
    city: "北京",
    english: "BEIJING",
    region: "中国区服务中心",
    country: "CHINA",
    image: "/offices/beijing.jpg",
    phone: "+86 010 65913558",
    direct: "办公室传真：+86 010 65918427",
    email: "beijing@jiahuaus.net",
    address: "北京市朝阳区甜水园东街2号甜水园商务中心A栋1层106室（100026）",
  },
  {
    city: "成都",
    english: "CHENGDU",
    region: "西南服务中心",
    country: "CHINA",
    phone: "+86 028 63916918",
    email: "chengdu@usyimin.com",
    address: "四川成都锦江区东大街芷泉段68号时代8号3609室",
  },
  {
    city: "常州",
    english: "CHANGZHOU",
    region: "华东服务中心",
    country: "CHINA",
    image: "/offices/changzhou.jpg",
    phone: "+86 0519 88188305",
    direct: "手机号码：+86 134 0758 0765",
    email: "510302331@qq.com",
    address: "江苏常州新北区现代传媒中心3号楼1802",
  },
];

export function OfficeCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const scrollTimer = useRef<number | null>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const card = itemRefs.current[active];
    if (!viewport || !card) return;
    viewport.scrollTo({
      left: card.offsetLeft - viewport.offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }, [active]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % offices.length);
    }, 4200);
    return () => window.clearInterval(interval);
  }, [paused]);

  const updateActiveFromScroll = () => {
    if (scrollTimer.current) window.clearTimeout(scrollTimer.current);
    scrollTimer.current = window.setTimeout(() => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      const closest = itemRefs.current.reduce(
        (best, item, index) => {
          if (!item) return best;
          const distance = Math.abs(item.offsetLeft - viewport.offsetLeft - viewport.scrollLeft);
          return distance < best.distance ? { index, distance } : best;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY },
      );
      setActive(closest.index);
    }, 140);
  };

  return (
    <section className="offices section" id="contact">
      <div className="section-heading office-heading">
        <div>
          <p className="kicker"><span /> 联系我们</p>
          <h2>选择离您最近的办公室</h2>
        </div>
        <div className="office-heading-side">
          <p>中美两地团队协同服务。滑动浏览办公室，或使用箭头切换地点，直接查看地址与联系方式。</p>
          <div className="office-carousel-controls">
            <p aria-live="polite"><strong>{String(active + 1).padStart(2, "0")}</strong><span>/ {String(offices.length).padStart(2, "0")}</span></p>
            <button type="button" onClick={() => setActive((active - 1 + offices.length) % offices.length)} aria-label="上一个办公室">←</button>
            <button type="button" onClick={() => setActive((active + 1) % offices.length)} aria-label="下一个办公室">→</button>
          </div>
        </div>
      </div>

      <div
        className="office-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="美域集团办公室"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            setActive((active - 1 + offices.length) % offices.length);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            setActive((active + 1) % offices.length);
          }
        }}
      >
        <div ref={viewportRef} className="office-carousel-viewport" onScroll={updateActiveFromScroll} tabIndex={0}>
          <div className="office-carousel-track">
            {offices.map((office, index) => (
              <article
                className={`office-slide${index === active ? " is-active" : ""}`}
                key={office.city}
                ref={(element) => { itemRefs.current[index] = element; }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} / ${offices.length}：${office.city}办公室`}
              >
                <div className={`office-slide-image${office.image ? "" : " office-slide-placeholder"}`}>
                  {office.image ? (
                    <img src={office.image} alt={`${office.city}办公室所在建筑`} />
                  ) : (
                    <div className="office-city-mark" aria-hidden="true"><span>{office.english}</span><i>{office.city}</i></div>
                  )}
                  <div className="office-slide-overlay" />
                  <div className="office-slide-label"><span>{office.country}</span><strong>{String(index + 1).padStart(2, "0")}</strong></div>
                  <div className="office-slide-title"><p>{office.region}</p><h3>{office.city}<small>办公室</small></h3></div>
                </div>
                <div className="office-slide-body">
                  <address>{office.address}</address>
                  <div className="office-slide-contact">
                    <a href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}><span>电话</span>{office.phone}</a>
                    {office.direct && <p>{office.direct}</p>}
                    <a href={`mailto:${office.email}`}><span>邮箱</span>{office.email}</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="office-carousel-progress" aria-label="选择办公室">
          {offices.map((office, index) => (
            <button key={office.city} className={index === active ? "is-active" : ""} type="button" aria-label={`查看${office.city}办公室`} onClick={() => setActive(index)}><span /></button>
          ))}
        </div>
      </div>
    </section>
  );
}
