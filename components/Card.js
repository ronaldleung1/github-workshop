import React from 'react'
import Image from 'next/image'

export default function Card({ username, name, quote }) {
  return (
    <div className="p-8 m-4 border shadow-lg w-96 bg-slate-100 rounded-xl">
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="w-24 h-24 mx-auto border rounded-full shadow-md"
          src={`https://avatars.githubusercontent.com/${username}`}
          alt={`${username} profile picture`}
          width={96}
          height={96}
        />
      </a>
      <div className="pt-6 text-center">
        <blockquote>
          <p className="text-lg font-medium">
            &quot;{quote}&quot;
          </p>
        </blockquote>
        <p className="mt-2 font-medium text-sky-500 dark:text-sky-400">
          {name}
        </p>
        <p className="text-slate-700 dark:text-slate-500">
          <a
            href="https://github.com/googol88"
            target="_blank"
            rel="noopener noreferrer"
          >
            @{username}
          </a>
        </p>
      </div>
    </div>
  )
}

