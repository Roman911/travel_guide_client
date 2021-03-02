import { StyleSheet } from 'aphrodite/no-important'

import { background, btn, socSet } from '../../../variabels'

export default StyleSheet.create({
  wrapper: {
    marginTop: 20
  },
  //ProfileMain
  header: {
    background: background.main,
    padding: 20
  },
  content: {
    marginLeft: 35
  },
  name: {
    fontWeight: 700,
    margin: '6px 0'
  },
  text: {
    color: '#596064',
    fontSize: 16,
    fontWeight: 600,
    margin: '8px 0'
  },
  right: {
    textAlign: 'end'
  },
  links: {
    marginTop: 25
  },
  icon: {
    marginLeft: 20,
    transition: '0.2s',
    ':hover': {
      opacity: 0.6
    }
  },
  iconF: {
    color: socSet.facebook
  },
  iconT: {
    color: socSet.twitter
  },
  iconI: {
    color: socSet.instagram
  },
  iconY: {
    color: socSet.youtube
  },
  //TabsLink
  wrapperTabs: {
    margin: '30px 0',
    borderBottom: '1px solid hsla(0,0%,89.8%,.8)'
  },
  link: {
    transition: '0.2s',
    marginRight: 20,
    paddingRight: 20,
    paddingBottom: 10,
    textTransform: 'uppercase',
    fontSize: 16,
    color: 'hsla(0,0%,63.5%,.8)',
    letterSpacing: 3,
    fontWeight: 600,
    ':hover': {
      color: 'rgba(48,51,53,.9)'
    }
  },
  linkActive: {
    borderBottom: '2px solid #db4454',
    color: 'rgba(48,51,53,.9)'
  },
  //ToVisit
  wrapperVisit: {
    borderBottom: '1px solid hsla(0,0%,89.8%,.8)',
    paddingBottom: 4,
    marginBottom: 4
  },
  wrapperNoVisit: {
    maxWidth: 500,
    margin: '0 auto'
  },
  noVisitHeader: {
    textAlign: 'center',
    lineHeight: '45px'
  },
  item: {
    paddingLeft: 20,
    width: '100%'
  },
  img: {
    width: 120
  },
  title: {
    margin: '0 0 2px',
    ':hover': {
      color: btn
    }
  },
  location: {
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: 600
  },
  paragraph: {
    fontSize: 12
  },
  marker: {
    marginRight: 5,
    height: 12
  },
  blockBtn: {
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  iconMap: {
    marginRight: 30,
    height: 28
  }
})