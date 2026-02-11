import { useState } from "react"

type Data = {
  like: number,
  dislikes: number, 
  reactions: string[]
  }

const App = () => {


  const [data, setData] = useState<Data>({
    like: 0,
    dislikes: 0,
    reactions: []
  });

  const handleLike = () => {
    setData({
      ...data, like: data.like + 1, reactions: [...data.reactions, "L"]
    });
  }

  const handleDislike = () => {
    setData({
      ...data, dislikes: data.dislikes + 1, reactions: [...data.reactions, "D"]
    })
  }

  console.log(data);


  return (
    <>
    <div>
        <button onClick={handleLike}>Like</button> &nbsp; 
      <button onClick={handleDislike}>Dislike</button>
      </div>
      </>
  )
}

export default App  
