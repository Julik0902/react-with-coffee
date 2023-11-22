import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
 function Myapp(){
    return(
        <div>
            <h1>custom app !</h1>
        </div>
    )
 }
 const anotherUser = 'coffee or toast'
 const reactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'click me',
    anotherUser
    
  )
 
 const anotherElement = (
    <a href='https://google.com' target='_blank'>visit google</a>
 )
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
 
)
