import Link from "next/link";
import DarkMode from "./DarkModeButton";

export default function Navigation() {
  return (
    <header className="w-full">
      <nav className="bg-slate-700">
        <ul className="w-full flex">
          <li className='w-36 text-center cursor-pointer dark:hover:bg-dark-300 dark:hover:transition-all duration-700'>
            <Link href="/" className="w-full h-full block p-3">Home</Link>
          </li>
          <li className='w-36 text-center cursor-pointer dark:hover:bg-dark-300 dark:hover:transition-all duration-700'>
            <Link href="/about-me" className="w-full h-full block p-3">About Me</Link>
          </li>
          <li className='w-36 text-center cursor-pointer dark:hover:bg-dark-300 dark:hover:transition-all duration-700'>
            <Link href="/skill" className="w-full h-full block p-3">Skill</Link>
          </li>
          <li className='w-36 text-center cursor-pointer dark:hover:bg-dark-300 dark:hover:transition-all duration-700'>
            <Link href="/project" className="w-full h-full block p-3">Project</Link>
          </li>
          <li><DarkMode /></li>
        </ul>
      </nav>
    </header>
  )
};
