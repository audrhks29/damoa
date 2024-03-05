import Link from "next/link";

export default function Navigation() {
  return (
    <header className="w-full">
      <nav className="bg-slate-700">
        <ul className="w-full flex">
          <li className='navigation_list'>
            <Link href="/" className="w-full h-full block p-3">Home</Link>
          </li>
          <li className='navigation_list'>
            <Link href="/about-me" className="w-full h-full block p-3">About Me</Link>
          </li>
          <li className='navigation_list'>
            <Link href="/skill" className="w-full h-full block p-3">Skill</Link>
          </li>
          <li className='navigation_list'>
            <Link href="/project" className="w-full h-full block p-3">Project</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};
