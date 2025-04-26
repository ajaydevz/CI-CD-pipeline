
import React from 'react'

export default function Welcome({name}) {
  return (
    <div>
      <p>Hello, { name || 'Guest' }</p>
    </div>
  )
}
