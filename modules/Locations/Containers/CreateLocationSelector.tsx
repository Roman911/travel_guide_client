import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useForm, FormProvider } from 'react-hook-form'
import { useFormikContext, Formik, Form } from "formik"
import { useMutation } from '@apollo/react-hooks'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { css } from "aphrodite/no-important"
import { CREATE_LOCATION } from "../../../apollo/mutations"
import { modalActions, uploadActions } from '../../../redux/actions'
import { User } from "../../../typeScript/user"
import { CreateLocation, WrapperLocationSelector } from '../Components'
import baseStyles from "../../../styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { errors } from "../../../config/errorsText"

type clsProps = {
  latLng: {
    lat: number,
    lng: number
  } | null
  setIsType: (isType) => void
}

type UploadFileType = {
  file: {
    _id: string
    url: string
  }
}

const schema = yup.object().shape({
  title: yup.string().required(errors.required).min(5, errors.minTitle(5)).max(50, errors.maxTitle),
  type_rout: yup.string().required(),
  description: yup.string().min(20, errors.minText),
  small_text: yup.string().min(20, errors.minText)
})

const defaultValues = {
  coordinateY: '0.00000',
  coordinateX: '0.00000',
  isType: 'other',
  location: ['область', 'місто', 'вулиця']
}

export const CreateLocationSelector: React.FC<clsProps> = ({ latLng, setIsType }: clsProps): any => {
  const dispatch = useDispatch()
  const { data } = useSelector((state: { user: User }) => state.user)
  const { file } = useSelector((state: { uploadFile: UploadFileType }) => state.uploadFile)
  const methods = useForm({ resolver: yupResolver(schema), defaultValues: defaultValues })
  const [ showMobileMenu, setShowMobileMenu ] = React.useState(false)
  const [ createLocations ] = useMutation(CREATE_LOCATION)

  const onSubmit = (values) => {
    const coordinates = [ values.coordinateY, values.coordinateX ]
    createLocations({
      variables: {
        locationsInput: {
          token: data.token,
          title: values.title,
          cover: file._id,
          small_text: values.small_text,
          coordinates: coordinates,
          isType: values.isType,
          address: values.location
        }
      }
    }).then(data => {
      if (data) {
        dispatch(modalActions.showModal('Локація успішно створена!'))
        dispatch(uploadActions.setData(null))
        methods.reset()
      }
    })
  }
  const AutoRef = () => {
    const { values, setFieldValue } = useFormikContext()
    React.useEffect(() => {
      if (latLng) {
        setFieldValue( 'coordinateY', String(latLng.lat) )
        setFieldValue( 'coordinateX', String(latLng.lng) )
      }
    }, [latLng])
    React.useEffect(() => {
      // @ts-ignore
      setIsType(values.isType)
      // @ts-ignore
    }, [values.isType])
    return null
  }

  const handleClick = () => {
    setShowMobileMenu(prev => !prev)
  }

  return <>
    <button onClick={() => handleClick()} className={ css(baseStyles.btnCreateLocation, showMobileMenu && baseStyles.btnClosedLocationSelect) }>
      {
        showMobileMenu ? <FontAwesomeIcon className={ css(baseStyles.icon, baseStyles.iconCreateLocation) } icon={ faTimes }/> :
          <>
            <div className={ css(baseStyles.burgerLine) } />
            <div className={ css(baseStyles.burgerLine) } />
            <div className={ css(baseStyles.burgerLine) } />
          </>
      }
    </button>
    <WrapperLocationSelector showMobileMenu={ showMobileMenu } >
      <FormProvider { ...methods } >
        <form onSubmit={ methods.handleSubmit(onSubmit) }>
          <CreateLocation file={ file } />
        </form>
      </FormProvider>
      {/*<Formik initialValues={ initialValues } onSubmit={ onSubmit } validationSchema={ validationSchema }>*/}
      {/*  {formik => {*/}
      {/*    return <Form>*/}
      {/*      <CreateLocation formik={ formik } file={ file } />*/}
      {/*      <AutoRef />*/}
      {/*    </Form>*/}
      {/*  }}*/}
      {/*</Formik>*/}
    </WrapperLocationSelector>
  </>
}