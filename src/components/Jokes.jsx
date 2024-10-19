import { useEffect } from 'react'
import { useState } from 'react'
import spinner from '../assets/spinner1.jpg'
const Jokes = () => {
  const [jokes, setJokes] = useState({})
  const [loading, setLoading] = useState(false)

  const fetchJokes = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random')
      const data = await response.json()
      setJokes(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchJokes()
  }, [])

  return (
    <section className="w-full h-screen flex justify-center items-center py-28 px-0">
      <div className="max-w-[1000px] mx-auto px-[20px] bg-white border border-solid border-transparent rounded-md  shadow-2xl">
        <h2 className="py-3 font-bold text-3xl">Random Joke Generator</h2>
        {loading ? (
          <img src={spinner} alt="loading" width={100} />
        ) : (
          <>
            <h4>Joke id : {jokes.id}</h4>
            <p className="my-2">{jokes.value}</p>
          </>
        )}
        <button
          className="bg-blue-500 text-white p-4 rounded-xl text-xl my-2 "
          onClick={fetchJokes}
        >
          Generate Joke
        </button>
      </div>
    </section>
  )
}

export default Jokes
