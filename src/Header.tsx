type props = {
    getData: (message: string) => void;
}

const Header = ({ getData }: props) => {
    
    let message: string = "This message is from child!!"
    getData(message);
  return (
    <div>
      
    </div>
  )
}

export default Header
