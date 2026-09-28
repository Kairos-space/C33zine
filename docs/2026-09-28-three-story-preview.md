# Three-story bilingual preview — 28 September 2026

User-approved editorial focus: Becky Armstrong with Tod’s; Billkin and PP Krit at Gucci; Loro Piana Spring/Summer 2027. Source drafts: ../../C33_网站稿重点审阅_2026-09-28.md in the parent workspace. The preview was reviewed locally before the user requested a push on 28 September 2026.

## Added reading pages

| Story | Chinese | English | Section | Source |
| --- | --- | --- | --- | --- |
| Becky Armstrong | /zh/read/becky-armstrong-tods-lake-look | /en/read/becky-armstrong-tods-lake-look | People | https://www.instagram.com/c33zine/p/DdtTp_aCMmc/ |
| Billkin and PP Krit | /zh/read/billkin-pp-krit-gucci-milan-2027 | /en/read/billkin-pp-krit-gucci-milan-2027 | People | https://www.instagram.com/c33zine/p/DdvoILUiEOQ/ |
| Loro Piana | /zh/read/loro-piana-spring-2027-solutions-for | /en/read/loro-piana-spring-2027-solutions-for | Fashion | https://www.instagram.com/c33zine/p/DdyyDariBMC/ |

The bilingual titles, summaries and full bodies live in lib/edition/stories.ts. The same source links appear with each article. The site keeps the existing logo, fonts, issues, legacy articles and routes. The homepage now leads with Becky and shows Billkin/PP Krit and Loro Piana among the latest additions; the Milan dossier includes all three. The 28 September date is the local website-edition draft date. Recheck the actual publication date before any release.

The 28 September text preview initially used typographic covers for all three stories. Following the user's instruction that the images may be used, each article and card now uses original JPEGs rather than the designed Instagram carousel pages. Loro Piana uses five original JPEGs from [Loro Piana Japan's Spring/Summer 2027 press release](https://prtimes.jp/main/html/rd/p/000000219.000061598.html): 05 as lead image, then 01, 02, 03 and 06 in the gallery. They were copied without editing from the local source package at c33-three-more-2026-09-27/sources; its loro-urls.json records the direct source URLs. The release does not identify an individual photographer, so the site credits "Loro Piana press materials" in both languages. The event remains described as a collection presentation, not a runway show.

Becky uses original photos 02, 05 and 01 from [her Instagram post](https://www.instagram.com/p/DdopHecE1Wi/), retained in c33-becky-tods-2026-09-25/assets. The lead image and gallery are explicitly pre-show photographs; no photographer is named in the original source. Billkin/PP Krit uses original on-site photos 21, 22 and 26 from c33-bkpp-gucci-2026-09-26/assets. The image source is a [Weibo repost credited to Mint Magazine Thailand](https://weibo.com/2832585457/RjTqjrKVy); the individual photographer and original Mint publication remain unverified. The page therefore names the repost chain rather than claiming direct Mint or C33 photography. Gucci’s 24 September Vogue portraits and 25 September front-row images are separate shoots: only the latter are reproduced on this page, while the former remain a cited source in the article text.

## Validation

- npm run build passed after final content edits; git diff --check passed.
- Browser opened /zh and all six new reading pages. Chinese-to-English switch kept the Becky article slug.
- Milan dossier, People section, English search for Loro, and source links rendered.
- Desktop screenshots checked on homepage and Loro Piana article; mobile screenshots checked on homepage, Becky and Billkin/PP Krit articles at 390 px. No horizontal overflow on the checked mobile routes and no browser error logs.
- After adding Loro Piana imagery, the build and type check passed. The local server was restarted after the build to restore development CSS assets. Browser checks confirmed the five optimized JPEGs load on the English mobile article, the Chinese article shows the localized press-material credit and source label, the homepage card has the new lead image, and neither checked Loro Piana article had horizontal overflow or an error overlay.
- After adding Becky and Gucci imagery, `npm run build`, `npx tsc --noEmit` and `git diff --check` passed. Desktop (1440 px) and mobile (390 px) checks confirmed the Becky homepage hero and Gucci latest-story card load their original JPEGs; all three images load on each article in Chinese and English. The visible image credits and Weibo source link render, the language links keep the article slug, and the checked routes had no horizontal overflow or browser errors.
- A local development server was started at http://127.0.0.1:3340. This is a review URL only; it is not a stable hosted preview.

## Release notes

The user requested the push on 28 September 2026. The website-edition date is 28 September. If the original Mint image publication or individual photographer credit becomes available later, update the current repost attribution. Recheck routes and links after further content changes.
