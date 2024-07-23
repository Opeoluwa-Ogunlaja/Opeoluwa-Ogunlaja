import React from 'react'

const CharacterCard = ({ icon: Icon, character }) => {
  return (
    <div className="flex items-center gap-8 bg-neutral-9300 px-12 py-4 text-white max-sm:text-sm">
      <Icon className="aspect-square w-24" /> <span>{character}</span>
    </div>
  )
}

export default CharacterCard
