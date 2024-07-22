import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experience } from '../data/data'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1e2c33cc',
        color: '#fff'
      }}
      contentArrowStyle={{ borderRight: '7px solid  #1e2c33cc' }}
      date={experience.date}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="font-axiforma">
        <h3 className="text-lg font-bold text-white">{experience.title}</h3>
        <p className="font-semibold text-neutral-9200" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="experience-points-lists ml-5 mt-12 space-y-8 px-16">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point${point.title}-${index}`}
            className="pl-1 text-sm text-neutral-1200"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experience.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Experience
