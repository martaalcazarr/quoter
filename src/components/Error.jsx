import useQuote from "../hooks/useQuoter"

const Error = () => {
    const {error} = useQuote()
  return (
    <div className="border text-center border-red-400 py-3 bg-red-100 text-red-700">
        <p>{error}</p>
    </div>
  )
}

export default Error