import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 

function App() {
  const [length, setlength] = useState(8)
  const [numbers, setnumbers] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbers) str += "0123456789"
    if(charallowed) str += "~!@#$%^&*()_+-=`{}[]"
    for (let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
  }
setpassword(pass)
}, [length, numbers, charallowed, setpassword]) 
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <div className='className="flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password} 
        className='outline-none w-full py-3  '
        placeholder='Password'
        readOnly/>
      </div>
     </div>
    </>
  )
}

export default App
