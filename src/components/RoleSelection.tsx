import { Archive, Users, BookOpen } from 'lucide-react';

interface RoleSelectionProps {
  onSelectRole: (role: 'user' | 'librarian') => void;
  onBack: () => void;
}

export default function RoleSelection({ onSelectRole, onBack }: RoleSelectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="max-w-5xl w-full relative z-10">
        <div className="text-center mb-12">
          <button
            onClick={onBack}
            className="text-slate-400 hover:text-white mb-6 inline-flex items-center transition"
          >
            ← Back to Home
          </button>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Archive className="w-12 h-12 text-blue-400" />
            <span className="text-4xl font-bold text-white">Pocket Archive</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Choose Your Experience</h2>
          <p className="text-slate-300 text-lg">Select how you'd like to use Pocket Archive</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <button
            onClick={() => onSelectRole('user')}
            className="group bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 hover:border-blue-500 rounded-xl p-6 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 text-left"
          >
            <div className="mb-4 inline-flex p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Reader</h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Browse, borrow, and manage your reading list.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                <span>Search books</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                <span>Borrow titles</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                <span>Track activity</span>
              </li>
            </ul>
            <div className="mt-4 text-blue-400 font-semibold flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition text-sm">
              <span>Start Reading</span>
              <span>→</span>
            </div>
          </button>

          <button
            onClick={() => onSelectRole('librarian')}
            className="group bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 hover:border-emerald-500 rounded-xl p-6 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 text-left"
          >
            <div className="mb-4 inline-flex p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition">
              <BookOpen className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Librarian</h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Manage collection and library operations.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-emerald-400 rounded-full"></span>
                <span>Update inventory</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-emerald-400 rounded-full"></span>
                <span>Process borrows</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-emerald-400 rounded-full"></span>
                <span>View statistics</span>
              </li>
            </ul>
            <div className="mt-4 text-emerald-400 font-semibold flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition text-sm">
              <span>Start Managing</span>
              <span>→</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
