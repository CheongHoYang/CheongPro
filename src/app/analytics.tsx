'use client'

import { useEffect } from 'react'

export default function Analytics() {
  useEffect(() => {
    // Google Analytics 4 설정 (선택사항)
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_ID) {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`
      document.head.appendChild(script)

      const configScript = document.createElement('script')
      configScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
      `
      document.head.appendChild(configScript)
    }
  }, [])

  return null
}
