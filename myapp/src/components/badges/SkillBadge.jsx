export default function SkillBadge({ name }) {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-sm text-slate-200 transition-colors hover:border-sky-500/50 hover:text-sky-300">
      {name}
    </span>
  )
}
