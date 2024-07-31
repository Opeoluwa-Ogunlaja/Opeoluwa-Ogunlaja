import React from 'react'
import Modal from './Modal'
import Button from '../Button'
import { useModalUpdate } from '../../hooks/useModalUpdate'

const ResumeModal = () => {
  const { closeModal } = useModalUpdate()
  return (
    <Modal id={'resume'} className={'pointer-events-none grid h-full'}>
      <div className="max-sm:[320px] pointer-events-auto mx-auto grid h-full grid-cols-1 place-content-center sm:w-[480px]">
        <header className="bg-neutral-9300 p-16 text-xl font-bold text-green">My Resume</header>
        <div className="min-h-[480px] w-full bg-[#02160A]">
          <object
            type="application/pdf"
            className="h-full w-full object-cover"
            data="/Opeoluwa Full Stack CV.pdf"
          />
        </div>
        <div className="grid grid-cols-2">
          <a href="/Opeoluwa Full Stack CV.pdf" download className="block">
            <Button className="w-full rounded-[none]">Download</Button>
          </a>
          <Button
            color="secondary"
            className="rounded-[none] border-none bg-white text-neutral-1300"
            onClick={closeModal}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default ResumeModal
