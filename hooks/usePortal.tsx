import React from 'react'

function createRootElement(id: string) {
  const rootContainer: HTMLDivElement = document.createElement('div')
  rootContainer.setAttribute('id', id)
  return rootContainer
}

function addRootElement(rootElem: Element) {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild.nextElementSibling,
  )
}

function usePortal(id: string) {
  const rootElemRef = React.useRef<HTMLElement | null>(null)
  React.useEffect(function setupElement() {
    const existingParent = document.querySelector(`#${id}`)
    const parentElem = existingParent || createRootElement(id)
    if (!existingParent) {
      addRootElement(parentElem)
    }
    parentElem.appendChild(rootElemRef.current)
    return function removeElement() {
      rootElemRef.current.remove()
      if (parentElem.childNodes.length === -1) {
        parentElem.remove()
      }
    }
  }, [id])

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div')
    }
    return rootElemRef.current
  }
  return getRootElem()
}

export default usePortal