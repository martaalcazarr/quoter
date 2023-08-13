import { Fragment } from "react"
import { COMPANIES, YEARS, PLANS } from "../constants"
import useQuote from "../hooks/useQuoter"

const Form = () => {

    const {data, handleChangeData} = useQuote()
  return (
    <>

    <form>
        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400">Company</label>
            <select 
                name="company" 
                id="company" 
                className="w-full p-3 bg-white border-gray-200"
                onChange={e => handleChangeData(e)}
                value={data.company}
            >
            <option value="0">--Select your company</option>
            {COMPANIES.map(company => (
                <option
                key={company.id}
                value={company.id}>
                    {company.name}
                </option>
            ))}
        </select>
        </div>

        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400">Year of birth</label>
            <select 
                name="year" 
                id="year" 
                className="w-full p-3 bg-white border-gray-200"
                onChange={e => handleChangeData(e)}
                value={data.year}
            >
            <option value="0">--Select your year of birth</option>
            {YEARS.map(year => (
                <option
                key={year}
                value={year}>
                    {year}
                </option>
            ))}
        </select>
        </div>

        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400">Choose your preferred plan</label>
           <div className="flex gap-3 items-center">
                {PLANS.map(plan => (
                    <Fragment key={plan.id}>
                        <label>
                            {plan.name}
                        </label>
                        <input 
                            type="radio"
                            name="plan"
                            value={plan.id}
                            onChange={e => handleChangeData(e)}
                        />
                    </Fragment>
                ))}
           </div>
        </div>
        <input 
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
            value="See Results"
        />
    </form>
    </>
  )
}

export default Form