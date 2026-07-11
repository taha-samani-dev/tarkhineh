"use client"

import ChipsButton from "@/components/ui/buttons/ChipsButton"
import { useSearchParams } from "next/navigation"
import { useState } from "react"


export default function OrderFilterBox() {
  const [category , setCategory] = useState('all')
  return (
          <div className="flex gap-2 lg:px-6 py-4">
            <ChipsButton paramName={'filter'} category={'all'} setCategory={setCategory}>همه</ChipsButton>
            <ChipsButton paramName={'filter'} category={'current'} setCategory={setCategory}>جاری</ChipsButton>
            <ChipsButton paramName={'filter'} category={'delivered'} setCategory={setCategory}>تحویل شده</ChipsButton>
            <ChipsButton paramName={'filter'} category={'cancelled'} setCategory={setCategory}>لغو شده</ChipsButton>
          </div>
  )
}
