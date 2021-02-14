import React from "react"
import { css } from 'aphrodite/no-important'
import styles from './styles'

interface LoadingPostProps {
  isPost: boolean
}

export const LoadingPost: React.FC<LoadingPostProps> = ({ isPost }) => {
  const widthContent = isPost ? styles.widthPost : styles.widthNews
  return <section className={ css(styles.wrapper, styles.content, widthContent) }>
    <div className={ css(styles.line, styles.line70) } />
    <div className={ css(styles.line, styles.line85) } />
    <div className={ css(styles.line, styles.line100) } />
    <div className={ css(styles.line, styles.line60, styles.lineMB30) } />
    <div className={ css(styles.line, styles.line100) } />
    <div className={ css(styles.line, styles.line70) } />
    <div className={ css(styles.line, styles.line75) } />
    <div className={ css(styles.line, styles.line80) } />
    <div className={ css(styles.line, styles.line90, styles.lineMB30) } />
    <div className={ css(styles.line, styles.line65) } />
    <div className={ css(styles.line, styles.line100) } />
    <div className={ css(styles.line, styles.line70) } />
    <div className={ css(styles.line, styles.line70) } />
    <div className={ css(styles.line, styles.line80) } />
  </section>
}