import { StyleSheet } from 'aphrodite/no-important'
import { widthBlocks } from '../../variabels'

export default StyleSheet.create({
  //With Right Block
  wrapper: {
    margin: '10px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  //Left Block
  leftBlock: {
    width: `calc(100% - ${ widthBlocks.rightBlock }px)`
  },
  leftBlockNews: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  leftBlockWidth: {
    width: '100%'
  },
  //Right Block
  rightBlock: {
    width: widthBlocks.rightBlock
  }
})