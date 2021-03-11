import dynamic from "next/dynamic"
import React from "react"

type Props = {
  rest: any
}

type FormikControlProps = {
  control: string
  name?: string
  id?: string
  type?: string
  label?: string
  options?: any
  valueMap?: any
  values?: any
  isPrice?: any
  disabled?: boolean
  socialName?: string
}

const Checkbox = dynamic<Props>(() => import('./Checkbox') as any)
const Input = dynamic<Props>(() => import('./Input') as any)
const InputGroup = dynamic<Props>(() => import('./InputGroup') as any)
const InputSocial = dynamic<Props>(() => import('./InputSocial') as any)
const Select = dynamic<Props>(() => import('./Select') as any)
const Radio = dynamic<Props>(() => import('./Radio') as any)
const TextArea = dynamic<Props>(() => import('./Textarea') as any)

export const FormikControl: React.FC<FormikControlProps> = ({ control, ...rest }) => {
  switch (control) {
    case 'checkbox':
      return <Checkbox rest={ rest } />
    case 'input':
      return <Input rest={ rest } />
    case 'inputGroup':
      return <InputGroup rest={ rest } />
    case 'inputSocial':
      return <InputSocial rest={ rest } />
    case 'select':
      return <Select rest={ rest } />
    case 'radio':
      return <Radio rest={ rest } />
    case 'textarea':
      return <TextArea rest={ rest } />
    default:
      return null
  }
}