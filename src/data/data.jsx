import {
  BookOpenIcon,
  BracketsCheckIcon,
  GamePadIcon,
  GlobeIcon,
  PuzzlePieceIcon,
  ReactLogo,
  UsersMultiIcon
} from '../assets/icons'
import { UpworkImage } from '../assets/images'
import { AtobueImage } from '../assets/images'
import {
  CSS3LogoImage,
  GoogleCloudLogoImage,
  HTML5LogoImage,
  JSLogoImage,
  MindmazeImage,
  MonerchyImage,
  NodeJSLogoImage,
  PHPLogoImage
} from '../assets/images'

export const skills = [
  {
    icon: HTML5LogoImage,
    type: 'Markup Language',
    title: 'HTML5',
    subtitle: 'HTML5 is the latest version of HTML for structuring web content.'
  },
  {
    icon: CSS3LogoImage,
    type: 'Stylesheet language',
    title: 'CSS3',
    subtitle: "CSS is a stylesheet language for designing web pages' visual appearance."
  },
  {
    icon: JSLogoImage,
    type: 'Programming language',
    title: 'Javascript',
    subtitle: 'JavaScript is a programming language for interactive and dynamic web content.'
  },
  {
    icon: ReactLogo,
    type: 'Frontend Library',
    title: 'React',
    subtitle: 'A Javascript library for building single page applications'
  },
  {
    icon: NodeJSLogoImage,
    type: 'Developer tool',
    title: 'NodeJS',
    subtitle: 'Node.js is a JavaScript runtime enabling server-side scripting and execution.'
  },
  {
    icon: PHPLogoImage,
    type: 'Programming language',
    title: 'PHP',
    subtitle: 'PHP is a server-side scripting language for web development and automation.'
  },
  {
    icon: GoogleCloudLogoImage,
    type: 'Developer Tool',
    title: 'Google Cloud',
    subtitle: 'Google Cloud is a suite of cloud computing services by Google.'
  }
]

export const projects = [
  {
    image: MindmazeImage,
    title: 'Mindmaze',
    link: 'https://mindmaze-nine.vercel.app',
    description:
      'A memory game built with the react javascript library with a plethora of features.',
    takeaways: [
      'Learnt to use the popular Chakra UI design library',
      'Learnt to work with sound in Websites'
    ],
    sellingPoint: ['Chakra UI', 'Game', 'Responsive', 'Reactive', 'Engaging'],
    tags: ['game', 'react']
  },
  {
    image: MonerchyImage,
    title: 'Monerchy',
    link: 'https://monerchy.vercel.app',
    description:
      'An expense tracker built with the react javascript library to manage income and expenses.',
    takeaways: [
      'Learnt to implement basic auth strategies',
      'Learnt to work with the tailwindCSS library',
      'Learnt basic redux for authentication and state management'
    ],
    sellingPoint: ['TailwindCSS', 'Utility site', 'Responsive', 'Reactive', 'Useful'],
    tags: ['website', 'react']
  }
]

export const experience = [
  {
    icon: UpworkImage,
    date: '2021 - Present',
    company_name: 'Upwork',
    title: 'Fullstack Developer',
    points: [
      'Developing and maintaining web applications using React.js and oher related web technologies',
      'Building web applications for different niches and businesses',
      'Giving multiple businesses an online presence'
    ]
  },
  {
    icon: AtobueImage,
    date: '2024 - Present',
    company_name: 'Atobue',
    title: 'Backend Developer',
    color: '#000011',
    points: ['Developing the full backend infrastructure of the website']
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
      'I thought the website for our product would be impossible to build, till I met Opeoluwa. He proved me wrong'
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

export function projectFromTitle(title, retrurnIndex) {
  const index = projects.findIndex(project => project.title.toLowerCase() == title.toLowerCase())
  return retrurnIndex ? index : { ...projects[index] }
}
