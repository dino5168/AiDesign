import { Link } from "react-router-dom"
import {
  Waves,
  Mountain,
  Flame,
  Droplets,
  Gem,
  BrainCircuit,
  Radio,
  Cpu,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

/** 探測領域;對應參考網站 hero 主標的五大探勘項目。 */
const SURVEY_FIELDS: ReadonlyArray<{
  icon: typeof Waves
  title: string
  desc: string
}> = [
  { icon: Waves, title: "地理水文", desc: "水文地質調查與地下水資源評估。" },
  { icon: Mountain, title: "各式礦產", desc: "岩金、煤礦等礦體位置與蘊藏探測。" },
  { icon: Flame, title: "地熱", desc: "地熱能源潛勢區的探測與評估。" },
  { icon: Droplets, title: "溫泉", desc: "溫泉脈與熱水資源的定位分析。" },
  { icon: Gem, title: "地下水探勘", desc: "含水層深度與分布的精準探勘。" },
]

/** 核心技術能力;對應 ANN 與甚低頻電磁波（VLF）兩大技術主軸。 */
const CAPABILITIES: ReadonlyArray<string> = [
  "智慧判釋",
  "智慧分析",
  "智慧推算",
  "大數據分時計算",
  "多層感知平行運算",
  "多頻段資料處理",
]

/**
 * 首頁,重構自十方資源科技 UNITEK 官網版面。
 *
 * 版面由上而下:Hero(探勘標語 + CTA)、探測領域卡片、核心技術(ANN /
 * VLF)、產品(地勘儀 OPI),以及聯絡資訊區塊。影像採用漸層視覺,若日後於
 * `public/images/unitech/` 放入照片即可替換。
 *
 * Returns:
 *     首頁的完整區塊樹。
 */
export function Home() {
  return (
    <>
      {/* Hero:探勘標語與主要行動呼籲 */}
      <section className="relative overflow-hidden border-b">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-950 via-slate-900 to-stone-950"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-30 [background:radial-gradient(60%_60%_at_50%_0%,theme(colors.emerald.500/25),transparent)]"
        />
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-28 text-center md:py-40">
          <Badge
            variant="outline"
            className="mb-6 border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
          >
            十方資源科技 UNITEK
          </Badge>
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-balance text-white md:text-5xl lg:text-6xl">
            地理水文、各式礦產、地熱、
            <br className="hidden sm:block" />
            溫泉、地下水探勘
          </h1>
          <p className="mt-6 max-w-2xl text-base text-pretty text-slate-300 md:text-lg">
            結合人工神經網路（ANN）與甚低頻電磁波技術，提供精準、可靠的地下資源探測解決方案，從資料判釋到成果推算一站到位。
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-emerald-500 text-white hover:bg-emerald-400"
              render={<Link to="/services" />}
            >
              探勘計劃
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              render={<Link to="/contact" />}
            >
              聯絡我們
            </Button>
          </div>
        </div>
      </section>

      {/* 探測領域:五大探勘項目卡片 */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
            探測領域
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            涵蓋環境探測、資源探測與礦物探測，為地下資源開發提供完整前期評估。
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SURVEY_FIELDS.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="transition-shadow hover:ring-foreground/20">
              <CardHeader>
                <div className="mb-2 flex size-11 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 核心技術:ANN 與甚低頻電磁波 */}
      <section className="border-y bg-muted/40">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              <BrainCircuit className="size-4" />
              核心技術
            </span>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight md:text-3xl">
              人工神經網路（ANN）
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              神經網路是由三層以上組成的網路，包含輸入與輸出層，依賴訓練資料進行學習，並隨時間推移持續提高判釋的精確度。
            </p>
            <p className="mt-6 flex items-center gap-2 text-sm font-medium">
              <Radio className="size-4 text-emerald-600 dark:text-emerald-400" />
              搭配甚低頻電磁波（VLF）技術進行地層訊號擷取
            </p>
          </div>

          <div className="rounded-2xl bg-background p-6 ring-1 ring-foreground/10 md:p-8">
            <h3 className="flex items-center gap-2 font-heading text-lg font-medium">
              <Cpu className="size-5 text-emerald-600 dark:text-emerald-400" />
              使用程式進行
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {CAPABILITIES.map((cap) => (
                <li
                  key={cap}
                  className="flex items-center gap-2 rounded-lg bg-muted/60 px-3 py-2.5 text-sm"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-emerald-500" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 產品:地勘儀 OPI */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 md:py-28">
        <Card className="overflow-hidden md:flex-row md:items-center">
          <div
            aria-hidden
            className="h-48 bg-gradient-to-br from-slate-800 via-emerald-900 to-stone-900 md:h-auto md:w-2/5 md:self-stretch"
          />
          <div className="flex-1 md:py-8">
            <CardHeader>
              <Badge variant="secondary" className="mb-2 w-fit">
                產品
              </Badge>
              <CardTitle className="font-heading text-2xl">
                地勘儀 Object Perspective Instrument（OPI）
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                自主研發的地下探測儀器，整合多頻段資料擷取與 AI
                判釋演算法，將地層訊號即時轉換為可判讀的探測成果。
              </p>
              <Button variant="outline" render={<Link to="/works" />}>
                了解產品
                <ArrowRight />
              </Button>
            </CardContent>
          </div>
        </Card>
      </section>

      {/* 聯絡資訊 */}
      <section className="border-t bg-muted/40">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 size-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <div>
              <p className="text-sm font-medium">服務時間</p>
              <p className="mt-1 text-sm text-muted-foreground">
                週一至週五 09:00–18:00
                <br />
                國定假日及例假日休息
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <div>
              <p className="text-sm font-medium">聯絡地址</p>
              <p className="mt-1 text-sm text-muted-foreground">
                106454 台北市大安區
                <br />
                忠孝東路三段 96 號 8 樓
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 size-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <div>
              <p className="text-sm font-medium">電話號碼</p>
              <a
                href="tel:+886223675052"
                className="mt-1 block text-sm text-muted-foreground hover:text-foreground"
              >
                (02) 2367-5052
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 size-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <div>
              <p className="text-sm font-medium">電子郵件</p>
              <a
                href="mailto:unitechcotw@gmail.com"
                className="mt-1 block text-sm break-all text-muted-foreground hover:text-foreground"
              >
                unitechcotw@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
