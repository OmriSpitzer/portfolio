import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Education from '../components/sections/Education'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'

const NAVIGATION_MAP = [
  { id: 'about', href: '#about', label: 'About', component: About },
  { id: 'skills', href: '#skills', label: 'Skills', component: Skills },
  { id: 'education', href: '#education', label: 'Education', component: Education },
  { id: 'projects', href: '#projects', label: 'Projects', component: Projects },
  { id: 'contact', href: '#contact', label: 'Contact', component: Contact },
]

export default NAVIGATION_MAP
