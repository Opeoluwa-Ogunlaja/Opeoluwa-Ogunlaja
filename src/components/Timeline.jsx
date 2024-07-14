import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import ReactLogo from '../assets/icons/react.svg'

import 'react-vertical-timeline-component/style.min.css'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff'
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      //   iconStyle={{ background: experience.iconBg }}
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
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 ml-5 space-y-2 list-disc">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
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
          {new Array(5)
            .fill({
              icon: ReactLogo,
              date: 'today',
              company_name: 'Opeoluwa',
              title: 'manager',
              points: ['Shey you dey whine me ni?']
            })
            .map((experience, index) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Experience
