import Modal from './Modal'
import { useModalUpdate } from '../../hooks/useModalUpdate'
import { useModalState } from '../../hooks/useModalState'
import { sideRight } from './../../data/animations'
import { Link } from 'react-router-dom'
import Button from '../Button'

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
          className="absolute right-[0] grid min-h-full bg-neutral-1400 shadow-md max-sm:w-[280px] md:w-[450px] md:bg-opacity-90"
          style={{ gridTemplateRows: 'max-content 1fr max-content' }}
        >
          <header className="flex h-64 items-center justify-end border-b-2 border-gray px-16">
            <Link to={'/projects'} className="font-semibold text-green">
              See all projects
            </Link>
          </header>
          <section className="flex w-full scroll-py-16 flex-col items-start justify-start overflow-x-auto text-start max-sm:p-16 sm:p-32">
            <div className="mt-32 space-y-24">
              <div className="contents">
                <h3 className="font-axiforma text-3xl font-bold text-white">{project?.title}</h3>
                <p className="mb-32 text-neutral-1200">{project?.description}</p>
              </div>
              <img src={project?.image} alt={`${project?.title} logo`} className="h-192 w-full" />
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
