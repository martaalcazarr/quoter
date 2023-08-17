import {useState, createContext } from "react";
import { getDiferenceYear, calculateCompany, calculatePlan, formatQuantity } from "../helpers";


const QuoteContext = createContext()

const QuoteProvider = ({children}) => {

    const [data, setData] = useState({
        company: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [result, setResult] = useState(0)
    const [loading, setLoading] = useState(false)

    const handleChangeData = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const QuotePlan = () => {
        //base
        let result = 10000
        //get difference
        const diference = getDiferenceYear(data.year)
        
        //plus per year
        result += ((diference * 3) * result) / 100
      
        //motlife 15%
        //asurlife 10%
        //safelife 5%
        result *= calculateCompany(data.company)
        
        //basic 20% complete 50%
        result *= calculatePlan(data.plan)
      
        result = formatQuantity(result)

        setLoading(true)

        setTimeout(()=>{
            setResult(result)
            setLoading(false)
        }, 2000)
    }

    return(
        <QuoteContext.Provider
            value={{
                data,
                handleChangeData,
                error,
                setError,
                QuotePlan,
                result,
                loading
            }}
        >
            {children}
        </QuoteContext.Provider>
    )
}

export {
    QuoteProvider
}

export default QuoteContext