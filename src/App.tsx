type props = {
  name: string,
  age: number
}

const Header = ({name, age} : props) => {
  return (
    <>
      <h1>Hello, {name.slice(0, 1).toUpperCase() + name.slice(1,)}! you are {age} years old!!</h1>
    </>
  )
}


const App = () => {
  let name: string = "karthik";
  let age:number = 22;

  return (
    <>
      <Header name={name} age={age}  />
    </>
  )
}
export default App;