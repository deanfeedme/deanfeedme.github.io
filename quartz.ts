import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import DfNav from "./custom/DfNav"

const config = await loadQuartzConfig()
export default config

/* YAML 의 머리줄(검색·다크 모드) 앞에 deanfeed 내비를 붙임 */
const base = await loadQuartzLayout()
export const layout = await loadQuartzLayout({
  defaults: { header: [DfNav(), ...(base.defaults.header ?? [])] },
})
