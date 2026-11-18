/* deanfeed 머리줄 — 플러그인(deanfeed next)과 같은 내비: 로고(프로필 마크 + dean feed)는 홈으로, 탭은 홈 앱의 각 탭으로.
   순서 · 이름은 플러그인의 기본 메뉴와 같다 (자산은 돈만 공개, 관계는 올라오지 않는다). */
import { QuartzComponent, QuartzComponentConstructor } from "../quartz/components/types"

const NAV: [string, string][] = [
  ["threads", "스레드"], ["lang", "외국어"], ["library", "자료"], ["notes", "메모"], ["map", "생각지도"],
  ["articles", "아티클"], ["series", "시리즈"], ["health", "건강"], ["money", "자산"], ["things", "물건"],
]

export default (() => {
  const DfNav: QuartzComponent = () => (
    <nav class="df-site-nav" aria-label="deanfeed">
      <a class="df-site-logo" href="/" aria-label="deanfeed 홈">
        <img src="/deanfeed/avatar.png" alt="" width="26" height="26" />
        <span class="df-site-word">
          dean<span>feed</span>
        </span>
      </a>
      <div class="df-site-links">
        {NAV.map(([route, label]) => (
          <a href={`/#${route}`}>{label}</a>
        ))}
      </div>
    </nav>
  )
  return DfNav
}) satisfies QuartzComponentConstructor
