import { StyleSheet } from 'aphrodite/no-important'
import { icons } from "../../variabels"
import { widthBlocks } from "../../variabels"

const lineAnimation = {
  '0%': {
    background: '#dadada'
  },
  '50%': {
    background: '#f3f3f3'
  },
  '100%': {
    background: '#dadada'
  }
}

const ldsRing = {
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
}

export default StyleSheet.create({
  wrapper: {
    margin: '10px 7px',
    textAlign: 'center'
  },
  //LoadingPost
  content: {
    background: '#fff',
    padding: 15
  },
  widthPost: {
    width: '100%'
  },
  widthNews: {
    width: widthBlocks.newsBlock
  },
  line: {
    height: 18,
    marginBottom: 13,
    borderRadius: 2,
    animationName: [lineAnimation],
    animationDuration: '2.2s',
    animationTimingFunction: 'ease',
    animationIterationCount: 'infinite'
  },
  line100: {
    width: '100%'
  },
  line90: {
    width: '90%'
  },
  line85: {
    width: '85%'
  },
  line80: {
    width: '80%'
  },
  line75: {
    width: '75%'
  },
  line70: {
    width: '70%'
  },
  line65: {
    width: '65%'
  },
  line60: {
    width: '60%'
  },
  lineMB30: {
    marginBottom: 26
  },
  //Spin
  wrapperSpin: {
    textAlign: 'center'
  },
  ldsRing: {
    display: 'inline-block',
    position: 'relative',
    width: 56,
    height: 56
  },
  ldsRingDiv: {
    boxSizing: 'border-box',
    display: 'block',
    position: 'absolute',
    width: 40,
    height: 40,
    margin: 8,
    borderRadius: '50%',
    animation: 'lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
    animationName: ldsRing
  },
  ldsRingDivLight: {
    border: '5px solid #fff',
    borderColor: '#fff transparent transparent transparent'
  },
  ldsRingDivDark: {
    border: `5px solid ${ icons }`,
    borderColor: `${ icons } transparent transparent transparent`
  },
  ldsRingDivC1: {
    animationDelay: '-0.45s'
  },
  ldsRingDivC2: {
    animationDelay: '-0.3s'
  },
  ldsRingDivC3: {
    animationDelay: '-0.15s'
  }
})