import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

/**
 * Homepage hero.
 *
 * Returns:
 *     The landing section with headline, tagline and primary/secondary CTAs.
 */
export function Home() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-24 text-center md:py-32">
      <span className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
        Design · Build · Ship
      </span>
      <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance md:text-6xl">
        設計與技術兼具的<br className="hidden sm:block" />數位作品集
      </h1>
      <p className="mt-6 max-w-2xl text-base text-muted-foreground text-pretty md:text-lg">
        AiDesign 專注於 AI 驅動的介面設計與前端工程,從概念到上線,打造兼顧美感與效能的網站體驗。
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" render={<Link to="/works" />}>
          瀏覽作品
        </Button>
        <Button size="lg" variant="outline" render={<Link to="/contact" />}>
          聯絡我們
        </Button>
      </div>
    </section>
  )
}
