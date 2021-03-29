export const handleClick = (isType, locationsChange, setLocationsChange, select) => {
  if (locationsChange.length !== 0 && locationsChange.map(item => item.type).includes(isType)) {
    const locationsChangeFilter = locationsChange.filter(item => item.type !== isType)
    setLocationsChange(select || select === false ? locationsChangeFilter.concat({ type: isType, select }) : locationsChangeFilter)
  } else {
    setLocationsChange(select || select === false ? locationsChange.concat({ type: isType, select }) : [{ type: isType, select: true }])
  }
}