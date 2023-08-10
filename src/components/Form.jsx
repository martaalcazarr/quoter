import { COMPANIES } from "../constants"

const Form = () => {
  return (
    <>

    <form>
        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400">Company</label>
        </div>

        <select name="company" id="company" className="w-full p-3 bg-white border-gray-200">
            <option value="0">--Select your company</option>
            {COMPANIES.map(company => (
                <option
                key={company.id}
                value={company.id}>
                    {company.name}
                </option>
            ))}
        </select>
    </form>
    </>
  )
}

export default Form