/* deanfeed 머리줄 — 플러그인(새 홈)과 같은 내비: 로고(프로필 마크 + dean feed)는 홈으로, 탭은 홈 앱의 각 탭으로 (자산은 비공개) */
import { QuartzComponent, QuartzComponentConstructor } from "../quartz/components/types"

const NAV: [string, string][] = [
  ["library", "자료"], ["notes", "메모"], ["map", "지도"], ["articles", "아티클"], ["series", "시리즈"],
  ["lang", "외국어"], ["threads", "스레드"], ["health", "건강"], ["things", "물건"],
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
