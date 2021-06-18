import dynamic from "next/dynamic"
import React from "react"

type InputProps = {
  rest: {
    id: string
    label: string
    type?: string
    defaultValue?: string | boolean
    options?: option[]
    rows?: number
    focus?: boolean
  }
}

type InputControlProps = {
  control: 'checkbox' | 'input' | 'radio' | 'textarea'
  id: string
  label: string
  type?: string
  defaultValue?: string | boolean
  options?: option[]
  rows?: number
  focus?: boolean
}

type option = {
  id: string
  title: string
}
const Checkbox = dynamic<InputProps>(() => import('./Checkbox') as any)
const Input = dynamic<InputProps>(() => import('./Input') as any)
const Radio = dynamic<InputProps>(() => import('./Radio') as any)
const Textarea = dynamic<InputProps>(() => import('./Textarea') as any)

export const InputControl: React.FC<InputControlProps> = ({ control, ...rest }) => {
  switch (control) {
    case 'checkbox':
      return <Checkbox rest={ rest } />
    case 'input':
      return <Input rest={ rest } />
    case 'radio':
      return <Radio rest={ rest } />
    case 'textarea':
      return <Textarea rest={ rest } />
    default:
      return null
  }
}