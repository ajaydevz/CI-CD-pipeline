
import React from 'react'

export default function Welcome({name}) {
  return (
    <div>
      <p>Hello,hi , { name || 'Guest' }</p>
    </div>
  )
}
