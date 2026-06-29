export default function TimelineItem({ item, isLast }) {
  return (
    <div className="relative flex gap-6 pb-10 md:gap-8">
      {!isLast && (
        <div className="absolute left-[11px] top-6 h-[calc(100%-8px)] w-px bg-slate-700 md:left-[15px]" />
      )}

      <div className="relative z-10 mt-1.5 h-6 w-6 shrink-0 rounded-full border-2 border-sky-500 bg-slate-950 md:h-8 md:w-8" />

      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-lg font-semibold text-white md:text-xl">
            {item.role}
          </h3>
          <span className="text-sm text-sky-400">{item.period}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-slate-300">{item.company}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {item.description}
        </p>
        {item.highlights?.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {item.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-sm text-slate-400"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
