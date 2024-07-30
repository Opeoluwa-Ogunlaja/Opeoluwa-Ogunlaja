import React from 'react'
import Modal from './Modal'
import Button from '../Button'
import { useModalUpdate } from '../../hooks/useModalUpdate'

const ResumeModal = () => {
  const { closeModal } = useModalUpdate()
  return (
    <Modal id={'resume'} className={'h-fit w-fit backdrop:bg-[transparent]'}>
      <header className="bg-neutral-9300 p-16 text-xl font-bold text-green">My Resume</header>
      <div className="w-[300px]">
        <object type="application/pdf" data="/Opeoluwa Full Stack CV.pdf" />
      </div>
      <div className="grid grid-cols-2">
        <Button className="rounded-[none]">Download</Button>
        <Button color="secondary" className="border-none text-neutral-1300" onClick={closeModal}>
          Close
        </Button>
      </div>
    </Modal>
  )
}

export default ResumeModal
