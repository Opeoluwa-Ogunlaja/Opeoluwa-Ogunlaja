import {
  BookOpenIcon,
  BracketsCheckIcon,
  GamePadIcon,
  GlobeIcon,
  PuzzlePieceIcon,
  ReactLogo,
  UsersMultiIcon
} from '../assets/icons'
import { MindmazeImage } from '../assets/images'

export const skills = [
  {
    icon: ReactLogo,
    type: 'Developer Tool',
    title: 'React',
    subtitle: 'A Javascript library for building single page applications'
  },
  {
    icon: ReactLogo,
    type: 'Developer Tool',
    title: 'Google Cloud',
    subtitle: 'A Javascript library for building single page applications'
  },
  {
    icon: ReactLogo,
    type: 'Programming language',
    title: 'CSS',
    subtitle: 'A Javascript library for building single page applications'
  }
]

export const projects = [
  {
    image: MindmazeImage,
    title: 'Mindmaze',
    description:
      'A memory game built with thre react javascript library with a plethora of features.',
    tags: ['game', 'react']
  }
]

export const experience = [
  {
    icon: 'https://www.upwork.com/favicon.ico',
    date: '2021 - Present',
    company_name: 'Upwork',
    title: 'Fullstack Developer',
    points: [
      'Developing and maintaining web applications using React.js and oher related web technologies',
      'Building web applications for different niches and businesses',
      'Giving multiple businesses an online presence'
    ]
  }
]

export const testimonials = [
  {
    name: 'John Doe',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqac0kO5njric6qkMm718Qyv6G9G0WHx9BmA&s',
    role: 'CTO at Acne.co',
    organisation: 'Agency',
    title: 'Exceeded Expectations',
    review:
      'I thought the website for our product would be impossible to build . Till I met Opeoluwa and he proved me wrong'
  },
  {
    name: 'Jane Doe',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqac0kO5njric6qkMm718Qyv6G9G0WHx9BmA&s',
    role: 'CTO at Acne.co',
    organisation: 'Agency',
    title: 'Exceeded Expectations',
    review:
      'I thought the website for our product would be impossible to build . Till I met Opeoluwa and he proved me wrong'
  },
  {
    name: 'John Don',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqac0kO5njric6qkMm718Qyv6G9G0WHx9BmA&s',
    role: 'CTO at Acne.co',
    organisation: 'Agency',
    title: 'Exceeded Expectations',
    review:
      'I thought the website for our product would be impossible to build . Till I met Opeoluwa and he proved me wrong'
  }
]

export const characteristics = [
  {
    icon: PuzzlePieceIcon,
    character: 'Problem Solver'
  },
  {
    icon: PuzzlePieceIcon,
    character: 'Effective Communicator'
  },
  {
    icon: BracketsCheckIcon,
    character: 'Skilled Developer'
  },
  {
    icon: BookOpenIcon,
    character: 'Kaizen Mentality'
  },
  {
    icon: UsersMultiIcon,
    character: 'Team Player'
  }
]

export const tags = [
  {
    icon: ReactLogo,
    tagTitle: 'React'
  },
  {
    icon: GamePadIcon,
    tagTitle: 'Game'
  },
  {
    icon: GlobeIcon,
    tagTitle: 'Website'
  }
]

export function tagFromTitle(title) {
  const index = tags.findIndex(tag => tag.tagTitle.toLowerCase() == title.toLowerCase())
  return { ...tags[(index, index)] }
}
