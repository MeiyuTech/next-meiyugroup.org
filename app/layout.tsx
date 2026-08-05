import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://meiyugroup.org"),
  title: "美域集团｜专业赴美服务平台",
  description: "美域集团连接中美资源，为您提供教育、翻译、移民、医疗及赴美生活一站式专业服务。",
  keywords: ["美域集团", "赴美服务", "美国留学", "翻译认证", "美国移民", "赴美医疗"],
  openGraph: {
    title: "美域集团｜让美好的美国生活，始于美域",
    description: "连接中美资源，为教育、翻译、移民、医疗及赴美生活提供专业服务。",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "美域集团专业赴美服务平台" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "美域集团｜专业赴美服务平台",
    description: "让美好的美国生活，始于美域。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
