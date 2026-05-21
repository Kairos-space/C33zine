# C33

中法双语独立时尚季刊 — c33zine.com

## 技术栈

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- MDX via `next-mdx-remote` + `gray-matter`
- 字体: Noto Serif SC (中文正文) + Inter (UI / 拉丁字符)
- 部署: Vercel

## 本地开发

```bash
npm install
npm run dev
```

打开 http://localhost:3000

## 项目结构

```
.
├── app/                          # Next.js App Router
│   ├── layout.tsx                # 根布局 (字体、Nav、Footer)
│   ├── page.tsx                  # 首页 /
│   ├── globals.css               # Tailwind + .prose-c33 文章排版
│   ├── about/page.tsx            # /about
│   ├── contact/page.tsx          # /contact
│   ├── mentions-legales/page.tsx # /mentions-legales (法律版权页)
│   ├── issue/[slug]/page.tsx     # /issue/01
│   └── article/[slug]/page.tsx   # /article/<slug>
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   └── ArticleCard.tsx
├── content/
│   └── articles/                 # 所有文章 (MDX)
├── lib/
│   ├── articles.ts               # MDX 读取 + frontmatter
│   └── issues.ts                 # 期号元数据
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## 怎么写新文章

1. 在 `content/articles/` 下新建一个 `<slug>.mdx`,文件名就是 URL slug
2. 顶部写 frontmatter:

```mdx
---
title: "文章标题"
author: 作者名
issue: "01"
category: 观察
date: "2026-03-15"
excerpt: "一句话摘要,会用于 SEO 和分享卡片。"
---

正文从这里开始,支持标准 Markdown 语法,也可以直接写 JSX 组件。

## 二级标题

普通段落。**加粗**、*斜体*、[链接](https://example.com)。

> 引用段。

- 列表项一
- 列表项二

![图片说明](/images/foo.jpg)
```

3. 保存后:
   - 在首页和 `/issue/<issue>` 上会自动出现在目录里
   - 文章页是 `/article/<slug>`

## 怎么加新一期

编辑 `lib/issues.ts`,在 `issues` 数组里新增一项,把上一期 `status` 改成 `"archive"`,新一期设为 `"current"`。

```ts
{
  slug: "02",
  number: "02",
  title: "下一期的主题",
  subtitle: "Deuxième numéro",
  season: "Été",
  year: "2026",
  status: "current",
}
```

然后在 `content/articles/` 里写 `issue: "02"` 的文章即可。

## 部署 (Vercel)

1. 把这个仓库连接到 Vercel
2. Framework Preset 选 **Next.js**(自动识别)
3. 不需要任何环境变量
4. Vercel 项目 Settings → Domains 添加 `c33zine.com`
5. 域名 (OVH) 那边按 Vercel 给的提示加 DNS 记录:
   - Apex: A `76.76.21.21`
   - `www`: CNAME `cname.vercel-dns.com`
   - 如果走 Cloudflare,记得把 Vercel 那条记录的代理设为 **DNS only**(灰云),否则证书签发会失败

## 字体说明

- 正文中文:Noto Serif SC(Google Fonts,通过 `next/font/google` 自托管)
- UI / 拉丁字符:Inter
- 不使用图标字体、不使用网页字体的本地 woff2 文件,全部走 Next.js 字体优化

## 设计准则

- 极简、白底黑字、大量留白
- 没有圆角、没有阴影、没有渐变
- 没有动画(除了原生的 hover 下划线)
- 字体对比:刊名超大、正文中等、版权信息小字
- 排版网格感 / 印刷感优先

## TODO (后续)

- [ ] 申请法国 ISSN(在 BnF 网站),拿到后更新 `mentions-legales`
- [ ] Newsletter 订阅(独立加,暂不内嵌)
- [ ] Cookie 同意横幅(走 Tarteaucitron 或类似,法国合规)
- [ ] OG 图自动生成
- [ ] 文章 RSS
