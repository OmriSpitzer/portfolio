import SectionTitle from '../SectionTitle'
import TimelineItem from '../TimelineItem'
import { usePortfolio } from '../../contexts/PortfolioContext'

export default function Experience() {
  const { portfolioData } = usePortfolio()
  const { experience } = portfolioData
  if (!experience?.items?.length) return null

  return (
    <section id="experience" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          label="Experience"
          title="Work History"
          description="My professional journey and key roles."
        />

        <div className="max-w-3xl">
          {experience.items.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              isLast={index === experience.items.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
