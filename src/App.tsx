import { useState, useEffect } from 'react'
import Square from './Square'

function App() {
    const [player, setPlayer] = useState<Boolean>(true)
    const [squares, setSquares] = useState<string[]>([])
    const [winner, setWinner] = useState<string>('')


    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    const getWinner = () => {
        for (let i = 0; i < lines.length; i++) {
            let [a, b, c] = lines[i]
            if (
                squares[a] !== undefined &&
                squares[a] === squares[b] &&
                squares[b] === squares[c]
            ) {
                setWinner(squares[a])
            }
        }
    }
    




    useEffect(getWinner), [player]

    const HandleClick = (a: number) => {
        if (winner === '' && squares[a] !== 'X' && squares[a] !== "O") {
            if (player) {
                squares[a] = 'X'
                setPlayer(!player)
            } else {
                squares[a] = 'O'
                setPlayer(!player)
            }
            setSquares(squares)
        }
    }

    const refreshGame = () => {
        setPlayer(true)
        setSquares([])
        setWinner('')
    }

    const End = (
        <div className="end">
            <h1>Winner: {winner ==='' && squares.join('').length === 9? 'Nobody' :winner === 'X' ? 'X' : 'O'}</h1>
            <h1>Please refresh the GAME</h1>
            <button className="refresh" onClick={() => refreshGame()}>
                REFRESH
            </button>
        </div>
    )

    return (
        <div className="tictac_body">
            <h1> Next move: {player? 'X': 'O'}</h1>
            <div className="tictac_block">
                <Square value={squares[0]} onClick={() => HandleClick(0)} />
                <Square value={squares[1]} onClick={() => HandleClick(1)} />
                <Square value={squares[2]} onClick={() => HandleClick(2)} />
                <Square value={squares[3]} onClick={() => HandleClick(3)} />
                <Square value={squares[4]} onClick={() => HandleClick(4)} />
                <Square value={squares[5]} onClick={() => HandleClick(5)} />
                <Square value={squares[6]} onClick={() => HandleClick(6)} />
                <Square value={squares[7]} onClick={() => HandleClick(7)} />
                <Square value={squares[8]} onClick={() => HandleClick(8)} />
            </div>
            {winner !== '' || squares.join('').length === 9? End : null}
        </div>
    )
}
export default App


