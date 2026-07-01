import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'

const NAVIGATION_MAP = [
  { id: 'about', href: '#about', label: 'About', component: About },
  { id: 'skills', href: '#skills', label: 'Skills', component: Skills },
  { id: 'experience', href: '#experience', label: 'Experience', component: Experience },
  { id: 'projects', href: '#projects', label: 'Projects', component: Projects },
  { id: 'contact', href: '#contact', label: 'Contact', component: Contact },
]

export default NAVIGATION_MAP
