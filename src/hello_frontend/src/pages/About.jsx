import { Link } from "react-router-dom";

function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-blue-400">About Page</h1>
      <p className="text-lg mt-4 text-gray-300">
        This is a simple example of routing in a React application.
      </p>
      <Link to="/" className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition">
        Go Home
      </Link>
    </main>
  );
}

export default About;
