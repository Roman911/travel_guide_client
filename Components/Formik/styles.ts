import { StyleSheet } from 'aphrodite/no-important'
import { borders, error, icons, isOk, text, socSet } from "../../variabels"

export default StyleSheet.create({
  // Input
  inputWrapper: {
    position: 'relative',
    margin: '20px 0 30px',
    borderBottom: `1px solid ${ borders.borderInput }`
  },
  input: {
    padding: '0 0 10px 11px',
    color: '#24292e',
    backgroundColor: '#fff'
  },
  inputUser: {
    width: '100%'
  },
  icon: {
    position: 'absolute',
    top: '40%',
    transform: 'translateY(-50%)',
    right: 10,
    fontSize: 24,
    color: error,
    border: `1px solid ${ error }`,
    padding: '0 12px',
    borderRadius: '50%'
  },
  isOkColor: {
    color: isOk
  },
  error: {
    borderColor: error
  },
  label: {
    position: 'absolute',
    padding: '0 0 10px 11px',
    transition: 'transform .4s cubic-bezier(.25,.8,.25,1)',
    cursor: 'text'
  },
  labelTouched: {
    transform: 'translate3d(-23px,-23px,0) scale(.67)'
  },
  //Checkbox
  text: {
    padding: '15px 20px',
    width: 'auto'
  },
  checkbox: {
    fontSize: 12,
    cursor: 'pointer'
  },
  checkboxInner: {
    marginRight: 5,
    border: `1px solid ${ borders.borderInput }`,
    width: 14,
    height: 14,
    borderRadius: 4,
    paddingLeft: 1
  },
  checkboxInnerActive: {
    background: socSet.facebook
  },
  iconCheck: {
    color: '#fff'
  },
  //Radio
  inputRadio: {
    display: 'none'
  },
  labelWrapper: {
    cursor: 'pointer',
    marginRight: 15
  },
  labelRadio: {
    margin: '0 6px',
    border: `2px solid ${ icons }`,
    height: 12,
    width: 12,
    borderRadius: 12
  },
  labelActive: {
    background: icons,
    transition: '200ms'
  },
  flexC: {
    '@media (max-width: 440px)': {
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  },
  // Textarea
  wrapperTextarea: {
    position: 'relative'
  },
  textarea: {
    padding: '10px 15px',
    color: text.textInput,
    fontWeight: 600,
    width: '100%'
  },
  labelTextarea: {
    padding: '10px 14px'
  },
  textareaError: {
    bottom: 20
  },
  // InputGroup
  field: {
    borderBottom: `1px solid ${ borders.borderInput }`,
    marginBottom: 10
  },
  fieldOpacity05: {
    opacity: 0.6
  },
  filedIconPlus: {
    fontSize: 12,
    color: icons
  },
  filedIconMinus: {
    fontSize: 16,
    color: error
  },
  // InputSocial
  socialWrapper: {
    margin: '15px 0 20px'
  },
  social: {
    display: 'flex',
    alignItems: 'center'
  },
  socialInput: {
    paddingLeft: 40
  },
  socialIcon: {
    margin: 0
  },
  socialLabel: {
    padding: '0 0 0 10px'
  },
  // Error
  wrapper: {
    width: 225,
    position: 'absolute',
    padding: '8px 16px',
    background: 'white'
  },
  triangle: {
    position: 'absolute',
    width: 0,
    height: 0
  },
  left: {
    top: '50%',
    transform: 'translateY(-50%)',
    left: -240
  },
  bottom: {
    bottom: -20
  },
  triangleForLeft: {
    top: '50%',
    transform: 'translateY(-50%)',
    right: -12,
    borderTop: '10px solid transparent',
    borderLeft: '12px solid white',
    borderBottom: '10px solid transparent'
  },
  triangleForBottom: {
    top: -12,
    left: 20,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: '12px solid white'
  }
})