import useQuote from "../hooks/useQuoter"
import { useCallback, useRef } from "react"
import { COMPANIES, PLANS } from "../constants"

const Result = () => {
    const {result, data} = useQuote()
    const {company, year, plan} = data
    const yearRef =useRef(year)

    const [companyName] = useCallback(
        COMPANIES.filter(c => c.id === Number(company)),
        [result])
    const [planName] = useCallback(
        PLANS.filter(p => p.id === Number(plan)),
        [result])

    if(result === 0) return null
  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
        <h2 className="text-gray-600 font-black text-3xl">Your choices</h2>
        <p className="my-2">
            <span className="font-bold">Company: </span>
            {companyName.name}
        </p>
        <p className="my-2">
            <span className="font-bold">Plan: </span>
            {planName.name}
        </p>
        <p className="my-2">
            <span className="font-bold">Your birthyear: </span>
            {yearRef.current}
        </p>
        <p className="my-2 text-2xl">
            <span className="font-bold">Fixed monthly payment: </span>
            {result}
        </p>
    </div>
  )
}

export default Result