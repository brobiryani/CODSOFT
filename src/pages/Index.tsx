import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold text-blue-800">Rule-Based Chatbot</h1>
        <p className="text-gray-600 mt-2">Ask me anything and I'll respond based on predefined rules</p>
      </header>
      <main className="flex-grow flex justify-center">
        <ChatBot />
      </main>
      <footer className="text-center py-4 text-sm text-gray-500">
        Simple rule-based chatbot demonstration &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Index;
