export default function ProjectCard({ project }) {
  const { title, description, technologies, imageUrl, liveUrl, repoUrl } = project

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/5">
      <div className="relative aspect-video overflow-hidden bg-slate-800">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
            <span className="text-4xl font-bold text-slate-700">
              {title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-slate-800 px-2 py-0.5 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          {liveUrl && liveUrl !== '#' && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-sky-400 transition-colors hover:text-sky-300"
            >
              Live Demo →
            </a>
          )}
          {repoUrl && repoUrl !== '#' && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              Source Code →
            </a>
          )}
          {(liveUrl === '#' || !liveUrl) && (repoUrl === '#' || !repoUrl) && (
            <span className="text-sm text-slate-600">Add links in src/data/projects.json</span>
          )}
        </div>
      </div>
    </article>
  )
}
