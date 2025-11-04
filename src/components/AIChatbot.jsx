import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { text: input, fromUser: true }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "This is a demo AI response 🚀", fromUser: false },
      ]);
    }, 500);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700"
      >
        <MessageCircle size={24} />
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 bg-white shadow-2xl rounded-2xl w-80 max-h-[70vh] flex flex-col">
          <div className="bg-indigo-600 text-white p-4 rounded-t-2xl font-semibold">
            NovaLink AI Assistant
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-xl ${
                  msg.fromUser
                    ? "bg-indigo-100 text-right"
                    : "bg-gray-100 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="p-2 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 border rounded-lg px-3 py-1 focus:outline-none"
            />
            <button
              type="submit"
              className="ml-2 bg-indigo-600 text-white px-4 py-1 rounded-lg"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
