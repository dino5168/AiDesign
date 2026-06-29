import { ArrowUpRight } from "lucide-react"

import { PageShell } from "@/components/page-shell"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Work = {
  title: string
  category: string
  description: string
  tags: ReadonlyArray<string>
  /** banner 漸層的 Tailwind class(無真實圖片時的視覺占位)。 */
  gradient: string
  href?: string
}

/** 作品集示意資料;之後接後端或 CMS 時改為動態載入。 */
const WORKS: ReadonlyArray<Work> = [
  {
    title: "Aurora Dashboard",
    category: "Web App",
    description: "資料視覺化儀表板,即時圖表與深色模式設計系統。",
    tags: ["React", "TypeScript", "D3"],
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Nimbus Landing",
    category: "Marketing",
    description: "SaaS 產品行銷頁,著重轉換率與 Core Web Vitals。",
    tags: ["Next.js", "Tailwind", "SEO"],
    gradient: "from-sky-500 to-cyan-400",
  },
  {
    title: "Palette AI",
    category: "AI Tool",
    description: "AI 配色助手,從關鍵字生成可存取性合規的色票。",
    tags: ["AI", "Design System", "a11y"],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Atlas Maps",
    category: "GIS",
    description: "互動式地圖平台,向量圖磚與空間查詢介面。",
    tags: ["MapLibre", "PostGIS", "WebGL"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Echo Commerce",
    category: "E-commerce",
    description: "無頭電商前台,結帳流程與訂單追蹤體驗優化。",
    tags: ["React", "Stripe", "PWA"],
    gradient: "from-rose-500 to-pink-500",
  },
  {
    title: "Pulse Docs",
    category: "Docs",
    description: "技術文件站,全文搜尋與 MDX 元件渲染。",
    tags: ["MDX", "Algolia", "Vite"],
    gradient: "from-indigo-500 to-blue-500",
  },
]

/**
 * Works / portfolio page with a responsive card grid.
 *
 * Returns:
 *     The Works page section showing one column on mobile, two on sm and three
 *     on lg breakpoints.
 */
export function Works() {
  return (
    <PageShell
      title="Works"
      description="精選專案與作品集 —— 涵蓋 Web App、行銷頁、AI 工具與 GIS 等領域。"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WORKS.map((work) => (
          <Card
            key={work.title}
            className="group/work cursor-pointer transition-shadow hover:shadow-lg"
          >
            {/* 漸層 banner 占位;貼齊卡片頂部(抵銷卡片上方 padding) */}
            <div
              className={`-mt-4 flex h-36 items-end rounded-t-xl bg-linear-to-br ${work.gradient} p-4`}
            >
              <span className="text-xs font-medium text-white/90">
                {work.category}
              </span>
            </div>

            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-2">
                {work.title}
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover/work:-translate-y-0.5 group-hover/work:translate-x-0.5" />
              </CardTitle>
              <CardDescription>{work.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
