import React from 'react'

function Nav() {

    const isLogged = false;


  return (
    <div className="nav">
        {isLogged && <h1>Im visable</h1>}
        {isLogged ? <h1>Im visable 2</h1>: <h2>not visable</h2>}
       
    </div>
  )
}

export default Nav