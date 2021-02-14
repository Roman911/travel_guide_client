import { StyleSheet } from 'aphrodite/no-important'

import { widthsDescTop, heightIcons, shadows, icons } from '../variabels'

export default StyleSheet.create({
  wrapper: {
    maxWidth: widthsDescTop.widthL,
    margin: '0 auto',
    padding: '10px 20px'
  },
  wrapperLogin: {
    width: 400,
    margin: '20px auto'
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
  block: {
    paddingBottom: 10
  },
  blockText: {
    height: 200,
    overflowY: 'hidden',
    position: 'relative'
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
    justifyContent: 'space-between'
  },
  br: {
    marginRight: 15
  }
})