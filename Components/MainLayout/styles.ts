import { StyleSheet } from 'aphrodite/no-important'
import { widthBlocks } from '../../variabels'

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
    width: `calc(100% - ${ widthBlocks.rightBlock }px)`
  },
  leftBlockWidth: {
    width: '100%'
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
  //Link all posts
  link: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
})