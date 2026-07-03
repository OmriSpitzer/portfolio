/**
 * NAVIGATION_MAP is a map of the sections of the page
 */

import About from '../components/pages/About'
import Skills from '../components/pages/Skills'
import Education from '../components/pages/Education'
import Projects from '../components/pages/Projects'
import Contact from '../components/pages/Contact'
import Hero from '../components/pages/Hero'

/* Ordered page flow: hero -> about -> skills -> education -> projects -> contact. */
const NAVIGATION_MAP = [
  { id: 'hero', href: '#hero', label: 'Home', component: Hero },
  { id: 'about', href: '#about', label: 'About', component: About },
  { id: 'skills', href: '#skills', label: 'Skills', component: Skills },
  { id: 'education', href: '#education', label: 'Education', component: Education },
  { id: 'projects', href: '#projects', label: 'Projects', component: Projects },
  { id: 'contact', href: '#contact', label: 'Contact', component: Contact },
]

export default NAVIGATION_MAP
