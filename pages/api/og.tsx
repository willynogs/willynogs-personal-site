import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title')?.slice(0, 80) || 'Will Naugle'
  const subtitle =
    searchParams.get('subtitle')?.slice(0, 140) || 'Software Engineer · Los Angeles'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: '#0a0a09',
          color: '#fafaf7',
          fontFamily: '"Inconsolata", ui-monospace, monospace',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background: 'rgba(255,120,71,0.22)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -240,
            left: -160,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: 'rgba(255,95,37,0.16)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 22,
            color: '#b8b8b0',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: '#ff7847',
            }}
          />
          willnaugle.com
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, zIndex: 1 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              maxWidth: 980,
              color: '#fafaf7',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#b8b8b0',
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            {subtitle}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 20,
            color: '#8a8a82',
            zIndex: 1,
          }}
        >
          <div>Will Naugle</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <div>LA · CLE</div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
