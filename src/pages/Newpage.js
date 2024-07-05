import React from 'react'

function NewPage() {
    function Changes() {
      let changing = ["change1", "change2", "change3", "change4", "change5"]
      let numberOfChanges = Math.floor(Math.random() * 5)
      return changing[numberOfChanges]
    }

  return (
    <div>
    
    <h1>check {Changes()} = changes</h1>
    </div>
  )
}

export default NewPage