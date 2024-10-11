type valueProps={
    value: string
    onClick: () => void;
}

const Square = ({onClick, value}: valueProps) => {


  return (
    <button className="square" onClick={onClick}>{value} </button>
  )
}

export default Square

