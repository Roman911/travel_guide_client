import { StyleSheet } from 'aphrodite/no-important'
import {widthsDescTop, heightIcons, shadows, icons, text} from '../variabels'

export default StyleSheet.create({
  wrapper: {
    maxWidth: widthsDescTop.widthL,
    margin: '0 auto',
    padding: '10px 20px',
    '@media (max-width: 590px)': {
      padding: '10px 5px'
    }
  },
  wrapperLogin: {
    width: 400,
    margin: '20px auto',
    '@media (max-width: 400px)': {
      width: '100%'
    }
  },
  flexSB: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flexVFS: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  flexFW: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  block: {
    paddingBottom: 10
  },
  blockText: {
    height: 200,
    overflowY: 'hidden',
    position: 'relative',
    '@media (max-width: 690px)': {
      height: 'auto'
    }
  },
  shadow: {
    position: 'absolute',
    height: 25,
    background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.1) 100%)',
    width: '100%',
    bottom: 0
  },
  boxShadow: {
    boxShadow: `3px 0px 20px ${shadows.shadow}`,
  },
  icon: {
    height: heightIcons.iconXL,
    width: 'auto !important',
    color: icons
  },
  views: {
    fontSize: 12,
    display: 'flex',
    alignItems: 'center'
  },
  comment: {
    fontSize: 12,
    marginLeft: 15,
    display: 'flex',
    alignItems: 'center'
  },
  iconS: {
    height: 14,
    width: 'auto !important',
    color: icons,
    marginRight: 8
  },
  bottom: {
    borderTop: '1px solid #cccccc'
  },
  wrapperCreateLocation: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden'
  },
  btnCreateLocation: {
    display: 'none',
    position: 'absolute',
    top: 70,
    right: 12,
    padding: '5px 10px',
    background: '#fff',
    borderRadius: 4,
    zIndex: 3,
    '@media (max-width: 920px)':{
      display: 'block'
    }
  },
  btnClosedLocationSelect: {
    top: 5,
    right: 20
  },
  iconCreateLocation: {
    height: 26
  },
  br: {
    marginRight: 15
  },
  rightBlock: {
    margin: '10px 5px',
    boxShadow: `2px 2px 10px 0px ${ shadows.shadow }`
  },
  imgWrapper: {
    marginTop: 20,
    position: 'relative',
    width: 235,
    height: 120
  },
  img: {
    objectFit: 'cover'
  },
  burgerLine: {
    margin: '6px 0',
    height: 2,
    backgroundColor: text.main,
    ':nth-child(1)': {
      width: 25
    },
    ':nth-child(2)': {
      width: 16
    },
    ':nth-child(3)': {
      width: 20
    }
  }
})