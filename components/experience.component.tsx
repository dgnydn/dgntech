import Image from "next/image";

export default function ExperienceComponent() {
  return (
    <div className="w-full h-8 flex justify-start gap-4 flex-wrap">
      <div className="h-8 w-8">
        <Image width={32} height={32} alt="python" layout="responsive" title="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
      </div>
      <div className="h-8 w-8">
        <Image width={32} height={32} alt="ruby" layout="responsive" title="Ruby" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" />
      </div>
      <div className="h-8 w-8">
        <Image width={32} height={32} alt="typescript" layout="responsive" title="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
      </div>
      <div className="h-8 w-8">
        <Image width={32} height={32} alt="javascript" layout="responsive" title="Javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
      </div>
      <div className="h-8 w-8">
        <Image width={32} height={32} alt="php" layout="responsive" title="PHP" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
      </div>
      <div className="h-8 w-8">
        <Image width={32} height={32} alt="php" layout="responsive" title="Golang" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" />
      </div>
      <div className="h-8 w-8">
        <Image width={32} height={32} alt="django" layout="responsive" title="Django" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
      </div>
      <div className="h-8 w-8">
        <Image width={32} height={32} alt="ruby on rails" layout="responsive" title="Ruby On Rails" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" />
      </div>
      <div className="h-8 w-8">
        <svg viewBox="0 0 128 128" className="w-8 h-8 text-white fill-white">
          <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"></path>
        </svg>
      </div>
      <div className="h-8 w-8">
        <Image width={32} height={32} alt="laravel" layout="responsive" title="Laravel" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" />
      </div>
    </div>
  );
}
