import React from "react"

export const WrapperComments: React.FC = ({ children }) => {
  return <section>
    <h3>КОМЕНТАРІ</h3>
    { children }
  </section>
}