import { useState, useEffect } from "react";
import { Search, MapPin, Users, Info, Loader2 } from 'lucide-react';

export default function GhostExplorer() {
    const [username, setUsername] = useState('your-username');
    const [user, setUser] = useState(null);
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [showToast, setShowToast] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStatus = () => {
            setIsOnline(navigator.onLine);
            if (navigator.onLine) {
                setShowToast(true);
            }
        };
        window.addEventListener('online', handleStatus);
        window.addEventListener('offline', handleStatus);
        return () => {
            window.removeEventListener('online', handleStatus);
            window.removeEventListener('offline', handleStatus);
        };
    }, []);

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 3000);
            return () => clearTimeout(timer); // Cleanup is mandatory, don't forget it!
        }
    }, [showToast]);

    useEffect(() => {
        if (!username) return;
        const controller = new AbortController();
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://api.github.com/users/${username}`, { signal: controller.signal });
                const data = await res.json();
                setUser(data.message === "Not Found" ? null : data);
                if (data.name) document.title = `Viewing: ${data.name}`;
            } catch (err) {
                if (err.name !== 'AbortError') console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        return () => {
            controller.abort();
            document.title = "GitHub Explorer";
        };
    }, [username]);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">

            {/* B.1 The Pulse Bar */}
            <div className={`fixed top-0 left-0 w-full h-1 z-50 transition-opacity duration-1000 ${isOnline ? 'bg-green-500 opacity-0' : 'bg-red-500 animate-pulse opacity-100'
                }`} />

            {/* Online Toast */}
            {showToast && (
                <div className="fixed top-5 right-5 bg-green-500/20 border border-green-500/50 backdrop-blur-md px-4 py-2 rounded-lg text-green-400 text-sm animate-bounce">
                    Back Online!
                </div>
            )}

            <div className="w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl">
                <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    GitHub Finder
                </h1>
                <div className="relative mb-6">
                    <input
                        type="text"
                        placeholder="Search username..."
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-11 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Search className="absolute left-3 top-3.5 text-slate-400" size={18} />
                    {loading && <Loader2 className="absolute right-3 top-3.5 text-indigo-400 animate-spin" size={18} />}
                </div>
                {user ? (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center gap-4">
                            <img src={user.avatar_url} alt="avatar" className="w-16 h-16 rounded-full border-2 border-indigo-500/30" />
                            <div>
                                <h2 className="text-xl font-bold">{user.name || user.login}</h2>
                                <p className="text-slate-400 text-sm">@{user.login}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2 text-slate-300"><Users size={14} /> {user.followers} Followers</div>
                            <div className="flex items-center gap-2 text-slate-300"><MapPin size={14} /> {user.location || 'Unknown'}</div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-slate-500 py-10">
                        {username ? "No user found..." : "Start typing to explore"}
                    </div>
                )}
            </div>
        </div >
    )

}