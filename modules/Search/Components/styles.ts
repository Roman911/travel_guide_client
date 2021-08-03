import { StyleSheet } from 'aphrodite/no-important'

const openInputKeyframes = {
  'from': {
    width: 460,
    opacity: 0
  },

  'to': {
    width: 500,
    opacity: 1
  }
}

const closedInputKeyframes = {
  'from': {
    width: 500,
    opacity: 1
  },

  'to': {
    width: 460,
    opacity: 0
  }
}

const openBtnKeyframes = {
  'from': {
    transform: 'scale(0)'
  },

  'to': {
    transform: 'scale(1)'
  }
}

const closedBtnKeyframes = {
  'from': {
    transform: 'scale(1)'
  },

  'to': {
    transform: 'scale(0)'
  }
}

export default StyleSheet.create({
  wrapperInput: {
    width: 500,
    animationName: openInputKeyframes,
    animationDuration: '600ms'
  },
  closedInput: {
    width: 460,
    animationName: closedInputKeyframes,
    animationDuration: '600ms'
  },
  wrapperBtn: {
    cursor: 'pointer'
  },
  searchIcon: {
    marginRight: 10,
    height: 18,
    '@media (max-width: 370px)': {
      display: 'none'
    }
  },
  closed: {
    marginRight: 10,
    fontSize: 20,
    animationName: openBtnKeyframes,
    animationDuration: '600ms'
  },
  closedBtn: {
    animationName: closedBtnKeyframes,
    animationDuration: '600ms'
  },
  openBtn: {
    animationName: openBtnKeyframes,
    animationDuration: '600ms'
  }
})