import Form from "./Form"

export default function AppQuote() {
  return (
    <>
    <header className='my-10'>
        <h1 className='text-white text-center text-4xl font-black'>
            Health Insurance Calculator
        </h1>
    </header>

    <main className='bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10'>
        <Form/>
    </main>
    </>
  )
}
