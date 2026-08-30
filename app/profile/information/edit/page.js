import { Suspense } from "react"
import EditBox from "../../../../components/profile/EditBox"

export default function page() {
  return (
    <Suspense>
      <EditBox />
    </Suspense>
  )
}

