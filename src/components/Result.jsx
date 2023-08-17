import useQuote from "../hooks/useQuoter"

const Result = () => {
    const {result} = useQuote()

    if(result === 0) return null
  return (
    <div>{result}</div>
  )
}

export default Result