import Image from 'next/image'
import AddTask from './components/AddTask'
import React from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between p-24 max-w-4xl mx-auto">
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List App</h1>
        <AddTask />
      </div>
    </main>
  )
}
