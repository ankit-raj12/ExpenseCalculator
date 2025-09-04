const Name = ({ name }) => {
  return (
    <header className="text-center mb-8 mt-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
        {name}'s Food Tracker
      </h1>
      <p className="text-white/80 text-lg">Track your daily food expenses with style ✨</p>
    </header>
  );
};

export default Name;
