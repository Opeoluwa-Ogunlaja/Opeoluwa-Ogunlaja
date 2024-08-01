import Modal from './Modal'
import { useModalUpdate } from '../../hooks/useModalUpdate'
import { useModalState } from '../../hooks/useModalState'
import { sideRight } from './../../data/animations'
import { Link } from 'react-router-dom'
import Button from '../Button'
import TechPill from '../TechPill'
import { tagFromTitle } from '../../data/data'
import { twMerge } from 'tailwind-merge'

const ProjectModal = () => {
  const { closeModal } = useModalUpdate()
  const { misc } = useModalState()
  const { project } = misc
  return (
    <Modal
      id={'project'}
      // coloredBackdrop={false}
      className={'pointer-events-none grid h-full'}
      variant={sideRight}
    >
      <div className="pointer-events-auto mx-auto grid h-full grid-cols-1 place-content-center">
        <div
          className="absolute right-[0] grid h-full gap-24 bg-neutral-1400 shadow-md max-sm:w-[320px] sm:w-[380px] md:bg-opacity-90"
          style={{ gridTemplateRows: 'max-content minmax(0, 1fr) max-content' }}
        >
          <header className="flex h-64 items-center justify-end border-b-2 border-gray px-16">
            <Link to={'/projects'} className="font-semibold text-green">
              See all projects
            </Link>
          </header>
          <section className="flex w-full scroll-py-16 flex-col items-start justify-start gap-16 overflow-y-auto text-start max-sm:p-24 sm:p-32">
            <div className="mt-32 space-y-24">
              <div className="contents">
                <h3 className="font-axiforma text-3xl font-bold text-white">{project?.title}</h3>
                <p className="mb-32 text-neutral-1200">{project?.description}</p>
              </div>
              <img src={project?.image} alt={`${project?.title} logo`} className="h-192 w-full" />
            </div>
            <div className="mt-16 flex flex-col gap-8">
              <h3 className="font-bold text-neutral-1200">Tools</h3>
              <div className="flex flex-wrap gap-8">
                {project?.sellingPoint.map(point => {
                  const possibleColors = ['skyblue', 'lightgreen', 'yellow', 'coral', 'butter']
                  return (
                    <div
                      key={point}
                      className={twMerge(
                        `rounded-[none] bg-neutral-9300 bg-opacity-80 px-24 py-8 text-sm shadow-inner`
                      )}
                      style={{
                        color: `${possibleColors[Math.floor(Math.random() * (possibleColors.length - 1))]}`
                      }}
                    >
                      {point}
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="mt-16 flex flex-col gap-8">
              <h3 className="font-bold text-neutral-1200">Key takeaways</h3>
              <ul className="code-list flex flex-col gap-8 px-16 py-8">
                {project?.takeaways.map(takeaway => {
                  return (
                    <li key={takeaway} className="pl-12 text-sm font-medium text-neutral-1100">
                      {takeaway}
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
          <footer className="bottom-0 z-30 h-48">
            <Button className="h-full w-full rounded-[none]">Visit site</Button>
          </footer>
        </div>
      </div>
    </Modal>
  )
}

export default ProjectModal
