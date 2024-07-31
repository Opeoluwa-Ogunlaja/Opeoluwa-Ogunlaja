import Modal from './Modal'
import { useModalUpdate } from '../../hooks/useModalUpdate'
import { useModalState } from '../../hooks/useModalState'
import { sideRight } from './../../data/animations'

const ProjectModal = () => {
  const { closeModal } = useModalUpdate()
  const { misc } = useModalState()
  const { project } = misc

  console.log(project)

  return (
    <Modal id={'project'} className={'pointer-events-none grid h-full'} variant={sideRight}>
      <div className="pointer-events-auto mx-auto grid h-full grid-cols-1 place-content-center">
        <div className="absolute right-[0] grid min-h-full bg-white max-sm:w-[280px] sm:w-[450px]">
          <header>{project?.title}</header>
          <section></section>
          <footer></footer>
        </div>
      </div>
    </Modal>
  )
}

export default ProjectModal
