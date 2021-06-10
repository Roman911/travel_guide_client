import dynamic from "next/dynamic"
import React from "react"

type InputProps = {
  rest: {
    id: string
    label: string
    defaultValue?: string
    options?: option[]
  }
}

type InputControlProps = {
  control: 'input' | 'radio'
  id: string
  label: string
  defaultValue?: string
  options?: option[]
}

type option = {
  id: string
  title: string
}

const Input = dynamic<InputProps>(() => import('./Input') as any)
const Radio = dynamic<InputProps>(() => import('./Radio') as any)

export const InputControl: React.FC<InputControlProps> = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input rest={ rest } />
    case 'radio':
      return <Radio rest={ rest } />
    default:
      return null
  }
}