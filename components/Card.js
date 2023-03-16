import React from 'react'
import Image from 'next/image'

export default function Card() {
  return (
    <div className="p-8 m-4 border shadow-lg bg-slate-100 rounded-xl">

      <a
        href="https://github.com/googol88"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image className="w-24 h-24 mx-auto border rounded-full shadow-md" src="https://avatars.githubusercontent.com/u/57511576?v=4" alt="profile" width={384} height={384} />
      </a>
      <div className="pt-6 text-center">
        <blockquote>
          <p className="text-lg font-medium">
            Hello world haha this is so funny
          </p>
        </blockquote>
        <a
          href="https://github.com/googol88"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 font-medium"
        >
          <div className="text-sky-500 dark:text-sky-400">
            Googol
          </div>
          <div className="text-slate-700 dark:text-slate-500">
            @googol88
          </div>
        </a>
      </div>
    </div>
  )
}

