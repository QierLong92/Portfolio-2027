'use client'

import { useEffect, useState } from 'react'

type Language = 'en' | 'zh'

const storageKey = 'portfolio-language'

export function LanguageToggle() {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(storageKey)
    if (savedLanguage === 'zh' || savedLanguage === 'en') {
      setLanguage(savedLanguage)
      document.documentElement.dataset.language = savedLanguage
      document.documentElement.lang = savedLanguage === 'zh' ? 'zh-CN' : 'en'
    }
  }, [])

  function toggleLanguage() {
    const nextLanguage = language === 'en' ? 'zh' : 'en'
    setLanguage(nextLanguage)
    document.documentElement.dataset.language = nextLanguage
    document.documentElement.lang = nextLanguage === 'zh' ? 'zh-CN' : 'en'
    window.localStorage.setItem(storageKey, nextLanguage)
    window.dispatchEvent(new CustomEvent<Language>('portfolio-language-change', { detail: nextLanguage }))
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="border border-border px-2.5 py-1.5 text-xs font-medium tracking-wide transition-colors hover:border-foreground"
      aria-label={language === 'en' ? '切换至中文' : 'Switch to English'}
    >
      {language === 'en' ? '中文' : 'EN'}
    </button>
  )
}
