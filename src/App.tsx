import Header from "./Header"

const App = () => {

  const getData = (message: string) => {
    console.log(message);
  }


  return (
      <Header getData = {getData} />
  )
}

export default App
