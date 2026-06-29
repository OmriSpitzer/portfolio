export default function SectionTitle({ label, title, description }) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-sky-400">
        {label}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-base text-slate-400 md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
