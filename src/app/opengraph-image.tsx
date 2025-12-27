import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Vuyela Group Logistics'

export const size = { width: 1200, height: 630 }

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ background: 'black', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFD700', fontSize: 60, fontWeight: 800 }}>
        VUYELA GROUP
      </div>
    ),
    { ...size }
  )
}

