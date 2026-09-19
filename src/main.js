import './style.css'
import { setupCounter } from './task.js'

document.querySelector('#app').innerHTML = `
<main class="flex justify-center flex-col max-w-[1080px] m-0 mx-auto text-center" >
<h1 class="text-2xl text-amber-200" >Kanban</h1>
      <button
        class="w-[120px] mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600"
      >
        Get Started
      </button>
</main>
`

setupCounter(document.querySelector('#counter'))
