import { QuoteProvider } from "./context/QuoteProvider"
import AppQuote from "./components/AppQuote"


function App() {

  return (
  <QuoteProvider>
      <AppQuote/>
      </QuoteProvider>
  )
}

export default App
