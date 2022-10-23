import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function WorksComponent() {
  return (
    <div className="mt-10 md:mt-0 text-xl font-bold" id="contact">
      <h2 className="font-bold text-5xl text-gray-200 text-center mt-10 mb-2 pb-2">Contact</h2>
      <div className="h-2 bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 w-full max-w-6xl rounded-full mb-10"></div>
      <div className="flex flex-col max-w-5xl w-full items-center text-gray-200 mb-10">
        <p>
          Do you have a project or an idea? Let's talk about it. I'm always open to new opportunities.
        </p>
        <p>
          You can reach me at <Link href="mailto:doganaydin@outlook.com"><a className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-1 text-black/95'>doganaydin@outlook.com</a></Link>, or you can find me on <Link href="hhttps://superpeer.com/doganaydin"><a className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-1 text-black/95'>Superpeer</a></Link>. I'm also on <Link href="https://twitter.com/dgntech"><a className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-1 text-black/95'>Twitter</a></Link>.
        </p>
      </div>
    </div>
  );
}

//className='rounded-md font-bold bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-1'
