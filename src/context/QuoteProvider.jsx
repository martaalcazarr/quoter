import {useState, createContext } from "react";

const QuoteContext = createContext()

const QuoteProvider = ({children}) => {

    const [data, setData] = useState({
        company: '',
        year: '',
        plan: ''
    })

    const handleChangeData = e => {
        setData({
            [e.target.name] : e.target.value
        })
    }

    return(
        <QuoteContext.Provider
            value={{
                data,
               handleChangeData 
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