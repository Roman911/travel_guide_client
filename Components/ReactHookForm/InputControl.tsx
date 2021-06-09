import dynamic from "next/dynamic"
import React from "react"

type Props = {
  rest: any
}

type InputControlProps = {
  control: string
  id: string
  label: string
}

const Input = dynamic<Props>(() => import('./Input') as any)

export const InputControl: React.FC<InputControlProps> = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input rest={ rest } />
    default:
      return null
  }
}