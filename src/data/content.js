import liveDigitalClock from '../../src/images/LiveDigitalClock.png'
import samplePS5Webpage from '../../src/images/samplePS5Webpage.png'
import weatherMonitoring from '../../src/images/weather_monitoring.png'
import timeMangSystem from '../../src/images/time_management_system.png'
import customerMngSys from '../../src/images/codeAndCart.png'
import qrCode from '../../src/images/qr-attendance-system.png'

export const techStack = [
  {
    name: 'HTML5',
    description: 'Semantic markup for accessible web experiences.',
    icon: 'code',
    color: 'from-orange-500/90 to-rose-500/80',
  },
  {
    name: 'CSS & Tailwind',
    description: 'Responsive layouts, utility-first styling and animations.',
    icon: 'sparkles',
    color: 'from-sky-500/80 to-indigo-500/80',
  },
  {
    name: 'JavaScript',
    description: 'Modern ESNext patterns across the stack.',
    icon: 'cpu',
    color: 'from-yellow-400/80 to-amber-500/80',
  },
  {
    name: 'React & Vite',
    description: 'SPA architecture with reusable components and hooks.',
    icon: 'layers',
    color: 'from-cyan-500/80 to-blue-500/80',
  },
  {
    name: 'Node, PHP, & Express',
    description: 'RESTful APIs, auth, background jobs.',
    icon: 'server',
    color: 'from-emerald-500/80 to-teal-500/80',
  },
  {
    name: 'MySQL',
    description: 'Relational database management system and server-side scripting language.',
    icon: 'database',
    color: 'from-pink-500/80 to-purple-500/80',
  },
]

export const projects = [
  {
    id: 'project-1',
    title: 'Live Digital Clock',
    description:
      'A simple, real-time digital clock that displays the current time and updates every second. Clean, responsive, and great for showcasing JavaScript DOM updates.',
    tech: ['React','Tailwind', 'JavaScript', 'CSS'],
    image:
      `${liveDigitalClock}`,
    demo: 'https://example.com/dashboard',
    repo: 'https://github.com/Sh1roe-Dev/live_digital_clock',
  },
  {
    id: 'project-2',
    title: 'Sample PS5 Webpage',
    description:
      'A simple and clean PS5-themed webpage made with basic HTML and CSS. Designed by a beginner creator to practice layout, styling',
    tech: ['HTML', 'CSS'],
    image:
      `${samplePS5Webpage}`,
    demo: 'https://example.com/devops',
    repo: 'https://github.com/username/devops-suite',
  },
  {
    id: 'project-3',
    title: 'Weather Monitoring System',
    description:
      'A simple weather app built with HTML, CSS, and JavaScript that lets you select a location and instantly view its current weather conditions. It also displays a 5-day forecast using real-time data from a weather API.',
    tech: ['HTML', 'Javascript', 'CSS'],
    image:
      `${weatherMonitoring}`,
    demo: 'https://example.com/commerce',
    repo: 'https://github.com/Sh1roe-Dev/Weather_monitoring',
  },
  {
    id: 'project-4',
    title: 'Time Management System',
    description: 'A simple task organizer built with HTML, CSS, and JavaScript. It lets users add tasks, manage categories, view schedules in a calendar, and use a built-in timer to track task duration. Perfect for beginners practicing DOM interaction and basic UI design.',
    tech: ['HTML', 'Javascript', 'CSS'],
    image:
    `${timeMangSystem}`,
    demo: '',
    repo: 'https://github.com/Sh1roe-Dev/Time_Management_System',
  },
  {
    id: 'project-5',
    title: 'Customer Management System',
    description: 'A simple customer management system built with React, Tailwind, CSS, JavaScript, PHP, and MySQL. It lets users add customers, manage their information, and view a list of all customers. Perfect for beginners practicing DOM interaction and basic UI design.',
    tech: ['React','Tailwind', 'Javascript', 'CSS', 'MySQL', 'PHP'],
    image:
    `${customerMngSys}`,
    demo: '',
    repo: 'https://github.com/Sh1roe-Dev/Customer_Management_System',
  },
  {
    id: 'project-6',
    title: 'Student Qr-code Attendance System',
    description: 'A simple qr-code attendance system built with React, TailwindCSS, JavaScript, PHP, and MySQL. It lets student scan a qr-code to mark their attendance. Perfect for beginners practicing DOM interaction and basic UI design.',
    tech: ['React','Tailwind', 'Javascript', 'CSS', 'MySQL', 'PHP'],
    image:`${qrCode}`,
    demo: '',
    repo: 'https://github.com/Sh1roe-Dev/Qr-code_Attendance_System',
  }
]

