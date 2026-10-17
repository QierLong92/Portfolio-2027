type LocalizedProps = {
  en: React.ReactNode
  zh: React.ReactNode
}

/** Renders both translations; the selected language is controlled site-wide. */
export function Localized({ en, zh }: LocalizedProps) {
  return (
    <>
      <span className="language-en" lang="en">
        {en}
      </span>
      <span className="language-zh" lang="zh-CN">
        {zh}
      </span>
    </>
  )
}
