// component
import SvgColor from '../../components/svg-color/SvgColor.js';
const icon = (name) => <img  src={`/assets/icons/navbar/${name}.png`} width={30} height={30} sx={{width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/home',
    icon: icon('dashboard'),
  },
  {
    title: 'Study Matieral',
    path: '/studymaterial',
    icon: icon('book'),
  },

  {
    title: 'Book And Article Summarizer',
    path: '/summarizer',
    icon: icon('file'),
  },
  {
    title: 'Student Query System',
    path: '/querysystem',
    icon: icon('query'),
  },
  {
    title: '  Assignment feedback',
    path: '/dashboard/blog',
    icon: icon('assignment'),
  },
  {
    title: 'Exam Tips',
    path: '/login',
    icon: icon('exam'),
  },
  {
    title: 'Roadmap generator',
    path: '/404',
    icon: icon('roadmap'),
  },
  {
    title: 'Career Guidance',
    path: '/404',
    icon: icon('career'),
  },
];

export default navConfig;
