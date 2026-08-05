"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className={`floating-contact${open ? " is-open" : ""}`}>
      <div id="wechat-panel" className="wechat-card" role="dialog" aria-modal="false" aria-labelledby="wechat-title" aria-hidden={!open}>
        <button className="wechat-close" type="button" onClick={() => setOpen(false)} aria-label="关闭微信二维码">×</button>
        <p className="wechat-eyebrow">WECHAT · 微信</p>
        <h3 id="wechat-title">微信扫码咨询</h3>
        <p className="wechat-copy">添加美域顾问，获取一对一服务支持</p>
        <div className="wechat-qr-wrap">
          <img src="/info-aet21-com-zelle-qr-code.png" alt="美域集团微信咨询二维码" />
          <span className="qr-corner qr-corner-one" />
          <span className="qr-corner qr-corner-two" />
          <span className="qr-corner qr-corner-three" />
          <span className="qr-corner qr-corner-four" />
        </div>
        <small>info@aet21.com</small>
      </div>

      <button
        className="wechat-trigger"
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="wechat-panel"
      >
        <span className="wechat-trigger-icon" aria-hidden="true">微</span>
        <span className="wechat-trigger-copy"><strong>微信咨询</strong><small>扫码联系顾问</small></span>
        <i aria-hidden="true" />
      </button>
    </div>
  );
}
