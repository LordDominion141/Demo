import { useState } from "react";
import { Home, Brain, BarChart3, User } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "learn", label: "Learn", icon: Brain },
    { id: "stats", label: "Stats", icon: BarChart3 },
    { id: "profile", label: "Profile", icon: User },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-2xl font-bold mb-2">Welcome to Genius!!</h1>
            <p className="text-gray-500 mb-4">
              Your daily boost of intelligence.
            </p>

            <div className="bg-white p-4 rounded-2xl shadow-md">
              <h2 className="font-semibold mb-2">Daily Challenge</h2>
              <button className="bg-black text-white px-4 py-2 rounded-xl">
                Start Challenge
              </button>
            </div>
          </motion.div>
        );

      case "learn":
        return (
          <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
            
            <h1 className="text-2xl font-bold mb-4">Learning Hub</h1>
            <div className="grid grid-cols-2 gap-4">
              {["Science", "Coding", "Math", "Creativity"].map((topic) => (
                <div
                  key={topic}
                  className="bg-white p-4 rounded-2xl shadow-md"
                >
                  {topic}
                </div>
              ))}
            </div>
          </motion.div>
        );

      case "stats":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-2xl font-bold mb-4">Your Stats</h1>
            <div className="bg-white p-4 rounded-2xl shadow-md space-y-2">
              <p>🔥 Streak: 7 days</p>
              <p>📚 Topics Mastered: 12</p>
              <p>🧠 IQ Boost Score: 1340</p>
            </div>
          </motion.div>
        );

      case "profile":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <p>Name: User</p>
              <p>Level: Rising Genius</p>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
     <div className="flex-1 p-6 pb-20">
  <motion.div
    key={activeTab} 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    {renderContent()}
  </motion.div>
</div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-inner">
        <div className="flex justify-around items-center h-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex flex-col items-center text-sm"
              >
                <Icon
                  className={`h-5 w-5 ${
                    isActive ? "text-black" : "text-gray-400"
                  }`}
                />
                <span
                  className={
                    isActive
                      ? "text-black font-medium"
                      : "text-gray-400"
                  }
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}