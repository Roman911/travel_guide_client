import { StyleSheet } from 'aphrodite/no-important'
import { btn, icons } from '../../../variabels'

const width350 = {
  width: 350,
  '@media (max-width: 420px)': {
    width: '100%'
  }
}

export default StyleSheet.create({
  wrapper: {
    ...width350,
    position: 'absolute',
    zIndex: 2,
    background: '#fff',
    height: '100%',
    transform: 'translateX(-350px)',
    transition: '350ms',
    overflowY: 'auto'
  },
  open: {
    transform: 'translateX(0)'
  },
  block: {
    width: '100%',
    background: btn
  },
  blockImg: {
    lineHeight: 0
  },
  imgWrapper: {
    position: 'relative',
    ...width350,
    height: 200
  },
  cover: {
    objectFit: 'cover'
  },
  title: {
    color: '#fff'
  },
  blockText: {
    padding: '10px 20px'
  },
  icon: {
    color: '#fff',
    height: '20px',
    width: 'auto !important',
    cursor: 'pointer',
    marginLeft: 20
  },
  text: {
    fontSize: '0.9rem',
    textAlign: 'justify',
    lineHeight: '20px'
  },
  link: {
    color: '#0366d6',
    fontSize: 14,
    fontWeight: 100,
    fontStyle: 'italic'
  },
  textInfo: {
    fontSize: '1rem',
    display: 'inline',
    marginRight: 6
  },
  // DirectionLocations
  dlWrapper: {
    width: 290,
    overflowY: 'auto'
  },
  index: {
    lineHeight: '26px'
  },
  address: {
    marginLeft: 8,
    lineHeight: '24px'
  },
  dlIcon: {
    width: 'auto !important',
    height: 16,
    color: icons,
    marginTop: 20,
    marginRight: 10,
    ':hover': {
      color: btn
    }
  },
})