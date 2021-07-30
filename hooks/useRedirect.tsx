import { useRouter } from "next/router"
import React from "react"

function Redirect({ to }) {
  const router = useRouter()

  React.useEffect(() => {
    router.push(to).then()
  }, [to])

  return null
}

export default Redirect