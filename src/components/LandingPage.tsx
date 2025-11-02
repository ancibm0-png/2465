import { BookOpen, Users, Clock, Search } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <nav className="bg-white/80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-amber-600" />
              <span className="text-2xl font-bold text-amber-900">LocalLibrary</span>
            </div>
            <button
              onClick={onGetStarted}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">
              Your Local Library,
              <span className="block text-amber-600">Reimagined</span>
            </h1>
            <p className="text-xl text-amber-800 mb-8 max-w-2xl mx-auto">
              Discover, borrow, and manage books with ease. Experience your community library like never before.
            </p>
            <button
              onClick={onGetStarted}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Start Exploring
            </button>
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform">
              <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <Users className="w-24 h-24 text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-amber-900 mb-3">For Readers</h3>
                <p className="text-amber-700 mb-4">
                  Browse our collection, borrow books digitally, and manage your reading list all in one place.
                </p>
                <ul className="space-y-2 text-amber-800">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span>Search by title, author, or genre</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span>Reserve books instantly</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span>Track due dates easily</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform">
              <div className="h-48 bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                <BookOpen className="w-24 h-24 text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-amber-900 mb-3">For Librarians</h3>
                <p className="text-amber-700 mb-4">
                  Manage your library's collection, track borrows, and serve your community more efficiently.
                </p>
                <ul className="space-y-2 text-amber-800">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span>Add and update book inventory</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span>Process borrows and returns</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span>Monitor overdue books</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/60 backdrop-blur-sm py-20 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">
              Why Choose LocalLibrary?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Easy Discovery</h3>
                <p className="text-amber-700">
                  Find your next favorite book with powerful search and filtering options.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Smart Reminders</h3>
                <p className="text-amber-700">
                  Never miss a due date with our intuitive tracking system.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Digital First</h3>
                <p className="text-amber-700">
                  Modern library experience that fits your digital lifestyle.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl shadow-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Reading Experience?</h2>
            <p className="text-xl mb-8 text-amber-50">
              Join thousands of readers already using LocalLibrary
            </p>
            <button
              onClick={onGetStarted}
              className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Get Started Now
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-amber-900 text-amber-100 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="w-6 h-6" />
            <span className="text-xl font-semibold">LocalLibrary</span>
          </div>
          <p className="text-amber-300">
            Making local libraries accessible to everyone
          </p>
        </div>
      </footer>
    </div>
  );
}
