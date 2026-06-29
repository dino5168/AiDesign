import { MapPin } from "lucide-react"

import { PageShell } from "@/components/page-shell"

/** 地圖 marker 顯示的地點名稱標籤。 */
const LOCATION_NAME = "AiDesign"

/** 公司地址(單一來源,供文字顯示與地圖查詢共用)。 */
const ADDRESS = "106454臺北市大安區忠孝東路三段96號8樓"

/**
 * Google Maps 免金鑰 embed 連結。
 * 查詢字串前置地點名稱,讓 marker 以「LOCATION_NAME」為標籤而非純地址。
 */
const MAP_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${LOCATION_NAME} ${ADDRESS}`,
)}&z=17&hl=zh-TW&output=embed`

/**
 * Contact page with address and an embedded Google Map.
 *
 * Returns:
 *     The Contact page section showing the office address and a responsive map.
 */
export function Contact() {
  return (
    <PageShell
      title="Contact"
      description="歡迎來信討論合作,或親臨我們的辦公室。"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
          <div>
            <p className="font-medium">辦公室地址</p>
            <p className="mt-1 text-muted-foreground">{ADDRESS}</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border ring-1 ring-foreground/10">
          <iframe
            title="AiDesign 辦公室地圖"
            src={MAP_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-video w-full"
          />
        </div>
      </div>
    </PageShell>
  )
}
