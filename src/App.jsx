import { useState, useEffect } from 'react'
import './App.css'
import Input from './components/Input'
import Name from './components/Name'
import CardList from './components/CardList'
import ThemeToggle from './components/ThemeToggle'
import InstallPrompt from './components/InstallPrompt'
import { ThemeProvider } from './contexts/ThemeContext'

function AppContent() {
  const [bill, setBill] = useState(() => {
    try {
      const saved = localStorage.getItem('foodBill');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error loading saved data:', error);
      return [];
    }
  });

  // Save to localStorage whenever bill changes
  useEffect(() => {
    try {
      localStorage.setItem('foodBill', JSON.stringify(bill));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }, [bill]);

  return (
    <div className="safe-area relative">
      <ThemeToggle />
      <Name name={"Ankit"} />
      <Input setBill={setBill} bill={bill} />
      <CardList bill={bill} />
      <InstallPrompt />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
