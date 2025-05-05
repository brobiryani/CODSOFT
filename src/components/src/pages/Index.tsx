import TicTacToe from "@/components/TicTacToe";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-purple-100 p-4">
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold text-pink-600">Tic-Tac-Toe Challenge</h1>
        <p className="text-gray-600 mt-2">Can you beat the unbeatable AI? (Spoiler: Probably not! 😉)</p>
      </header>
      <main className="flex-grow flex justify-center">
        <TicTacToe />
      </main>
      <footer className="text-center py-4 text-sm text-gray-500">
        Tic-Tac-Toe game with Super Smart Minimax Brain &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Index;
