import Image from 'next/image'
import AddTask from './components/AddTask'
import React from 'react'
import TodoList from './components/TodoList'
import { getAllTodos } from '../api'

export default async function Home() {
  const tasks = await getAllTodos();
  //console.log(tasks)

  return (
    <main className="flex min-h-screen flex-col  justify-between p-24 max-w-4xl mx-auto">
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List App</h1>
        <AddTask />
        <TodoList tasks={tasks} />
      </div>
    </main>
  )
}
