import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-10">Team 6 Projects</h1>
      <div className="flex gap-4">
        <Link
          to="/Revandra"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500">
          Revandra
        </Link>
        <Link to="/Adit" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500">
          Adit
        </Link>
        <Link to="/Haikal" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500">
          Haikal
        </Link>
        <Link to="/ProductPage" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500">
          Props
        </Link>
        <Link to="/TesEffect" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500">
          Tes Effect
        </Link>
      </div>
    </div>
  );
}