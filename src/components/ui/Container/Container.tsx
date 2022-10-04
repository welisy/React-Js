import React from "react"

type Container = {
  children: React.ReactElement;
}

export default function Container({ children }: Container) {
  return (
    <div className="container">
      {
        children
      }
    </div>
  )
}