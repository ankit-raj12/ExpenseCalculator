import { useState, useEffect } from 'react';

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Store the event so it can be triggered later
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Clear the deferredPrompt
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
  };

  if (!showInstallPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto">
      <div className="glass-card rounded-2xl p-4 shadow-2xl border border-white/20">
        <div className="flex items-center gap-3">
          <div className="text-2xl">📱</div>
          <div className="flex-1">
            <h3 className="font-semibold text-white text-sm">Install App</h3>
            <p className="text-white/70 text-xs">Add to your home screen for quick access</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleDismiss}
              className="px-3 py-1 text-xs text-white/70 hover:text-white transition-colors"
            >
              Later
            </button>
            <button
              onClick={handleInstallClick}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Install
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
