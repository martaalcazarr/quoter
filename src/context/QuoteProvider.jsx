import {useState, createContext } from "react";
import { getDiferenceYear, calculateCompany } from "../helpers";


const QuoteContext = createContext()

const QuoteProvider = ({children}) => {

    const [data, setData] = useState({
        company: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')

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
        console.log(diference)
        //plus per year
        result += ((diference * 3) * result) / 100
        console.log(result)
        //motlife 15%
        //asurlife 10%
        //safelife 5%
        result *= calculateCompany(data.company)
        console.log(result)
        //basic 20% complete 50%
    }

    return(
        <QuoteContext.Provider
            value={{
                data,
                handleChangeData,
                error,
                setError,
                QuotePlan
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