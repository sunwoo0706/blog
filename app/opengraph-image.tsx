import { ImageResponse } from "next/og"

import { getArticleSourceBySlug } from "@/lib/api"

type Params = {
  params: {
    slug: string
  }
}

export const alt = "sunwoo.xyz opengraph image"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image({ params: { slug } }: Params) {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="265"
          height="209"
          viewBox="0 0 265 209"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M154.843 41.4803C155.383 33.9899 153 27.2746 149.129 23.1417C138.251 11.5279 120.02 7.64328 101.216 13.1196C68.5087 22.6456 47.9759 41.9691 30.3279 69.9783C14.4079 95.2449 3.6994 130.083 15.0263 157.89C19.3399 168.48 36.7144 185.444 51.4869 184.142C59.7643 183.412 68.2796 178.988 75.2273 173.09M75.2273 173.09C80.6364 168.498 85.0955 163.014 87.7526 157.685C91.9117 149.343 91.199 139.808 82.6209 134.856C75.0953 130.511 65.1824 134.834 61.9813 143.388C57.4408 155.523 67.4627 166.394 75.2273 173.09ZM75.2273 173.09C75.6737 173.475 76.1127 173.846 76.5409 174.203C96.0296 190.44 120.689 203.267 146.546 197.321C156.782 194.967 167.991 188.806 176.491 180.373M176.491 180.373C183.16 173.756 188.162 165.74 189.718 157.067C191.625 146.435 187.494 137.312 180.064 133.022C172.634 128.733 164.232 130.643 159.846 136.433C155.46 142.224 154.682 148.783 158.121 158.803C161.195 167.758 168.055 175.474 176.491 180.373ZM176.491 180.373C184.322 184.921 193.511 187.042 202.291 185.476C224.276 181.555 240.693 165.791 254.451 149.575"
            stroke="#E6E8EB"
            stroke-width="20"
            stroke-linecap="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
