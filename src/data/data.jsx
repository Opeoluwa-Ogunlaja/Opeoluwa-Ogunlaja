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
  HTML5LogoImage,
  JSLogoImage,
  MindmazeImage,
  MonerchyImage,
  NodeJSLogoImage,
  VicfHalfImage,
  PHPLogoImage,
  ElementorLogoImage,
  ExpressLogoImage,
  FlyLogoImage,
  FigmaLogoImage,
  GitHubLogoImage,
  GitLogoImage,
  JestLogoImage,
  GraphQLLogoImage,
  LinuxLogoImage,
  MongoDBLogoImage,
  NextJSLogoImage,
  NginxLogoImage,
  PostgreSQLLogoImage,
  PostmanLogoImage,
  PrismaLogoImage,
  RESTLogoImage,
  RedisLogoImage,
  TailwindCSSLogoImage,
  VercelLogoImage,
  WebSocketLogoImage,
  WixLogoImage,
  TypeScriptLogoImage,
  WordPressLogoImage,
  GoogleCloudLogoImage,
  DockerLogoImage
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
    type: 'Stylesheet Language',
    title: 'CSS3',
    subtitle: "CSS is a stylesheet language for designing web pages' visual appearance."
  },
  {
    icon: JSLogoImage,
    type: 'Programming Language',
    title: 'JavaScript',
    subtitle: 'JavaScript enables interactive and dynamic behavior on web pages.'
  },
  {
    icon: TypeScriptLogoImage,
    type: 'Programming Language',
    title: 'TypeScript',
    subtitle: 'TypeScript is a typed superset of JavaScript that compiles to plain JS.'
  },
  {
    icon: ReactLogo,
    type: 'Frontend Library',
    title: 'React',
    subtitle: 'A JavaScript library for building user interfaces and SPA architecture.'
  },
  {
    icon: PHPLogoImage,
    type: 'Programming Language',
    title: 'PHP',
    subtitle: 'PHP is a server-side scripting language for dynamic web development.'
  },
  {
    icon: GoogleCloudLogoImage,
    type: 'Cloud Platform',
    title: 'Google Cloud',
    subtitle: 'Google Cloud offers cloud computing, storage, and deployment services.'
  },
  {
    icon: WordPressLogoImage,
    type: 'CMS Platform',
    title: 'WordPress',
    subtitle: 'WordPress is a popular open-source content management system.'
  },
  {
    icon: ElementorLogoImage,
    type: 'Page Builder',
    title: 'Elementor',
    subtitle: 'Elementor is a drag-and-drop page builder plugin for WordPress.'
  },
  {
    icon: WixLogoImage,
    type: 'Website Builder',
    title: 'Wix',
    subtitle: 'Wix is a cloud-based website builder with visual editing tools.'
  },
  {
    icon: NextJSLogoImage,
    type: 'Frontend Framework',
    title: 'Next.js',
    subtitle: 'Next.js is a React framework for server-side rendering and routing.'
  },
  {
    icon: TailwindCSSLogoImage,
    type: 'CSS Framework',
    title: 'Tailwind CSS',
    subtitle: 'A utility-first CSS framework for rapid UI development.'
  },
  {
    icon: NodeJSLogoImage,
    type: 'Backend Runtime',
    title: 'Node.js',
    subtitle: 'Node.js is a runtime that lets JavaScript run on the server.'
  },
  {
    icon: ExpressLogoImage,
    type: 'Backend Framework',
    title: 'Express.js',
    subtitle: 'A minimalist web framework for Node.js backend APIs and apps.'
  },
  {
    icon: MongoDBLogoImage,
    type: 'Database',
    title: 'MongoDB',
    subtitle: 'MongoDB is a NoSQL document-oriented database.'
  },
  {
    icon: PostgreSQLLogoImage,
    type: 'Database',
    title: 'PostgreSQL',
    subtitle: 'PostgreSQL is a powerful open-source relational database system.'
  },
  {
    icon: PrismaLogoImage,
    type: 'ORM Tool',
    title: 'Prisma',
    subtitle: 'Prisma is a type-safe ORM for Node.js and TypeScript.'
  },
  {
    icon: GitLogoImage,
    type: 'Version Control',
    title: 'Git',
    subtitle: 'Git is a distributed version control system for source code management.'
  },
  {
    icon: GitHubLogoImage,
    type: 'Collaboration Platform',
    title: 'GitHub',
    subtitle: 'GitHub hosts code and enables collaboration through Git repositories.'
  },
  {
    icon: FigmaLogoImage,
    type: 'Design Tool',
    title: 'Figma',
    subtitle: 'Figma is a collaborative interface design tool for UX/UI prototyping.'
  },
  {
    icon: DockerLogoImage,
    type: 'Containerization Tool',
    title: 'Docker',
    subtitle: 'Docker packages applications into isolated, portable containers.'
  },
  {
    icon: RESTLogoImage,
    type: 'API Architecture',
    title: 'REST',
    subtitle: 'REST is a standard architectural style for designing networked APIs.'
  },
  {
    icon: GraphQLLogoImage,
    type: 'API Query Language',
    title: 'GraphQL',
    subtitle: 'GraphQL is a query language for flexible API data fetching.'
  },
  {
    icon: WebSocketLogoImage,
    type: 'Realtime Communication',
    title: 'WebSockets',
    subtitle: 'WebSockets enable two-way real-time communication between client and server.'
  },
  {
    icon: RedisLogoImage,
    type: 'In-Memory Store',
    title: 'Redis',
    subtitle: 'Redis is an in-memory data store used for caching and pub/sub.'
  },
  {
    icon: LinuxLogoImage,
    type: 'Operating System',
    title: 'Linux',
    subtitle: 'Linux is a widely-used OS in server environments and development.'
  },
  {
    icon: NginxLogoImage,
    type: 'Web Server',
    title: 'Nginx',
    subtitle: 'Nginx is a high-performance web server and reverse proxy.'
  },
  {
    icon: JestLogoImage,
    type: 'Testing Framework',
    title: 'Jest',
    subtitle: 'Jest is a JavaScript testing framework for unit and integration tests.'
  },
  {
    icon: PostmanLogoImage,
    type: 'API Testing Tool',
    title: 'Postman',
    subtitle: 'Postman is a tool for testing and documenting APIs.'
  }
]

export const projects = [
  {
    image: VicfHalfImage,
    title: 'Vicf',
    link: 'https://vicf.onrender.com/home',
    description:
      'A web application for keeping records of contacts and exporting them in different format. Perfect for assimilation teams as users can collaborate to curate lists.',
    takeaways: [
      'Learnt to work with Websockets',
      'Implemented Offline functionality with core Web APIs like IndexedDB and Service Workers',
      'Used Caching to make improve throughput and greatly improve user experience and satisfaction'
    ],
    sellingPoint: [
      'Offline First',
      'Clean Architecture',
      'Sockets',
      'Responsive',
      'Reactive',
      'Engaging'
    ],
    tags: ['website', 'react']
  },
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
