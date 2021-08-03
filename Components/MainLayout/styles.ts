import { StyleSheet } from 'aphrodite/no-important'
import { widthBlocks, btn } from '../../variabels'

const keyframes = {
  'from': {
    width: 0
  },
  'to': {
    width: '100%'
  }
}

export default StyleSheet.create({
  //With Right Block
  wrapper: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  //Left Block
  leftBlock: {
    width: `calc(100% - ${ widthBlocks.rightBlock }px)`,
    '@media (max-width: 1270px)': {
      width: '100%'
    }
  },
  //Right Block
  rightBlock: {
    width: widthBlocks.rightBlock
  },
  //HomePageBlock
  HomePageBlockWrapper: {
    marginBottom: 40
  },
  HomePageBlock: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  HPBHome: {
    height: 620
  },
  //Link all posts
  link: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  //Load page
  loadingPage: {
    position: 'fixed',
    top: 0,
    left: 0,
    background: btn,
    width: '100%',
    height: 2,
    zIndex: 11,
    animationName: keyframes,
    animationDuration: '2s'
  }
})