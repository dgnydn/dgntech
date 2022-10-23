import Link from "next/link";

export default function NagivationComponent() {
  return (
    <nav className="flex justify-between w-full text-gray-200 font-black text-sm my-2 px-4">
      <div className="text-lg">
        <Link href="/">
          <a>DGNTECH</a>
        </Link>
      </div>

      <ul className="flex justify-end space-x-4">
        <li>
          <Link href="/#works">
            <a>Works</a>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/dgntech">
            <a>Twitter</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/dgnydn">
            <a>Github</a>
          </Link>
        </li>
        <li>
          <Link href="https://dribbble.com/doganrocks">
            <a>Dribbble</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
