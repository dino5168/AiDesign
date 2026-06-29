/**
 * Standard inner-page header block (title + optional description).
 *
 * Keeps the placeholder routes visually consistent; replace the children of
 * each page with real content as it is built.
 *
 * Args:
 *     title: The page heading.
 *     description: Optional supporting text under the heading.
 *     children: Page body content rendered below the header block.
 *
 * Returns:
 *     A centered, max-width page section.
 */
export function PageShell({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children?: React.ReactNode
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
      <h1 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-muted-foreground text-pretty">
          {description}
        </p>
      )}
      {children && <div className="mt-10">{children}</div>}
    </section>
  )
}
