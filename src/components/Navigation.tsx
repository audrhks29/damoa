import Link from "next/link";

export default function Navigation() {
  return (
    <header className="w-full">
      <nav>
        <ul className="w-full flex py-3">
          <li className='w-24 text-center cursor-pointer'>
            <Link href="/">Home</Link>
          </li>
          <li className='w-24 text-center cursor-pointer'>
            <Link href="/about-me">About Me</Link>
          </li>
          <li className='w-24 text-center cursor-pointer'>
            <Link href="/skill">Skill</Link>
          </li>
          <li className='w-24 text-center cursor-pointer'>
            <Link href="/project">Project</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};
