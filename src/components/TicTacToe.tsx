import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Square, RotateCw, Trophy, Heart, HeartCrack, Gamepad2, PartyPopper } from "lucide-react";

type Player = "X" | "O" | null;
type Board = Player[];

const TicTacToe = () => {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [status, setStatus] = useState<string>("Your turn (X)");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [aiThinking, setAiThinking] = useState<boolean>(false);
  const [playerWins, setPlayerWins] = useState<number>(0);
  const [aiWins, setAiWins] = useState<number>(0);
  const [draws, setDraws] = useState<number>(0);

  // Check for winner or draw
  const checkGameStatus = (board: Board): { winner: Player; gameOver: boolean } => {
    // Check rows, columns, and diagonals
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a], gameOver: true };
      }
    }

    // Check for draw
    if (board.every((square) => square !== null)) {
      return { winner: null, gameOver: true };
    }

    return { winner: null, gameOver: false };
  };

  // Handle player move
  const handleClick = (index: number) => {
    if (board[index] || gameOver || aiThinking) return;

    // Player's move (X)
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);

    const { winner, gameOver: isGameOver } = checkGameStatus(newBoard);
    
    if (isGameOver) {
      setGameOver(true);
      if (winner === "X") {
        setStatus("You won! 🎉 (How did that happen?)");
        setPlayerWins(prev => prev + 1);
      } else {
        setStatus("Game ended in a draw! 🤝");
        setDraws(prev => prev + 1);
      }
      return;
    }

    // AI's turn next
    setAiThinking(true);
    setStatus("AI is thinking... 🤔");
    setIsXNext(false);
  };

  // AI move using minimax algorithm
  useEffect(() => {
    if (!isXNext && !gameOver) {
      const timer = setTimeout(() => {
        makeAIMove();
      }, 500); // Slight delay to make AI seem like it's "thinking"
      
      return () => clearTimeout(timer);
    }
  }, [isXNext, gameOver, board]);

  const makeAIMove = () => {
    const bestMove = findBestMove(board);
    if (bestMove !== -1) {
      const newBoard = [...board];
      newBoard[bestMove] = "O";
      setBoard(newBoard);

      const { winner, gameOver: isGameOver } = checkGameStatus(newBoard);
      
      if (isGameOver) {
        setGameOver(true);
        if (winner === "O") {
          setStatus("AI wins! Better luck next time! 😂");
          setAiWins(prev => prev + 1);
        } else {
          setStatus("Game ended in a draw! Not bad! 🤝");
          setDraws(prev => prev + 1);
        }
      } else {
        setStatus("Your turn (X)");
      }
    }
    
    setAiThinking(false);
    setIsXNext(true);
  };

  // Minimax algorithm implementation
  const minimax = (board: Board, depth: number, isMaximizing: boolean): number => {
    const { winner, gameOver: isGameOver } = checkGameStatus(board);
    
    // Terminal states
    if (winner === "O") return 10 - depth;
    if (winner === "X") return depth - 10;
    if (isGameOver) return 0;
    
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          const newBoard = [...board];
          newBoard[i] = "O";
          const score = minimax(newBoard, depth + 1, false);
          bestScore = Math.max(bestScore, score);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          const newBoard = [...board];
          newBoard[i] = "X";
          const score = minimax(newBoard, depth + 1, true);
          bestScore = Math.min(bestScore, score);
        }
      }
      return bestScore;
    }
  };

  // Find the best move for the AI
  const findBestMove = (board: Board): number => {
    let bestScore = -Infinity;
    let bestMove = -1;
    
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        const newBoard = [...board];
        newBoard[i] = "O";
        const score = minimax(newBoard, 0, false);
        
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
    
    return bestMove;
  };

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
    setStatus("Your turn (X)");
    setAiThinking(false);
  };

  // Get fun messages based on score
  const getScoreMessage = () => {
    if (aiWins > playerWins + 2) return "The AI is dominating! 🤖";
    if (playerWins > aiWins) return "Wait, how are you winning? 😲";
    if (draws > aiWins && draws > playerWins) return "A lot of draws! You're a careful player! 🧐";
    return "Think you can win? Good luck! 😄";
  };

  // Render a square
  const renderSquare = (index: number) => {
    return (
      <button
        key={index}
        className={`w-full h-24 text-4xl font-bold flex items-center justify-center 
                  border-2 border-pink-400 bg-white transition-colors
                  ${!board[index] && !gameOver ? "hover:bg-pink-50" : ""}
                  ${gameOver ? "opacity-70" : ""}`}
        onClick={() => handleClick(index)}
        disabled={board[index] !== null || gameOver || aiThinking}
      >
        {board[index] === "X" && <Heart className="w-12 h-12 text-pink-600" />}
        {board[index] === "O" && <Gamepad2 className="w-12 h-12 text-purple-600" />}
      </button>
    );
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-pink-300">
        <div className="mb-4 text-center">
          <div className={`text-xl font-semibold mb-2 ${
            gameOver 
              ? status.includes("You won") 
                ? "text-pink-600" 
                : status.includes("AI wins") 
                  ? "text-purple-600" 
                  : "text-gray-700" 
              : ""
          }`}>
            {status}
          </div>
          <Button
            onClick={resetGame}
            variant="outline"
            className="flex items-center gap-2 border-pink-400 text-pink-600 hover:bg-pink-50"
          >
            <RotateCw size={16} />
            New Game
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {Array(9).fill(null).map((_, index) => renderSquare(index))}
        </div>

        <div className="text-sm text-gray-600 mb-4">
          <div className="flex gap-2 items-center mb-1">
            <Heart className="text-pink-600" size={16} /> - You
          </div>
          <div className="flex gap-2 items-center">
            <Gamepad2 className="text-purple-600" size={16} /> - AI (Minimax Algorithm)
          </div>
        </div>

        <div className="mt-4 p-3 bg-pink-50 rounded-lg">
          <div className="text-center font-semibold text-pink-600 mb-2">Score Board</div>
          <div className="flex justify-around text-sm">
            <div className="text-center">
              <div className="font-bold text-pink-600">{playerWins}</div>
              <div>You</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-600">{draws}</div>
              <div>Draws</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-purple-600">{aiWins}</div>
              <div>AI</div>
            </div>
          </div>
          <div className="mt-2 text-center text-xs italic text-gray-600">
            {getScoreMessage()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
