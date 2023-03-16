// react component
import React from 'react'
// basic react component
export default function Card() {
  return (
    <div className="bg-slate-100 border rounded-xl p-8 m-4 shadow-lg">
      <img className="w-24 h-24 rounded-full mx-auto" src="https://avatars.githubusercontent.com/u/57511576?v=4" alt="profile picture" width="384" height="512"></img>
      <div className="pt-6 text-center space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            Hello world haha this is so funny
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            Googol
          </div>
          <div className="text-slate-700 dark:text-slate-500">
            @googol88
          </div>
        </figcaption>
      </div>
    </div>
  )
}

