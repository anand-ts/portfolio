import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600">
        Welcome to My Landing Page!
      </h1>
      <p className="mt-3 text-gray-700">
        This is a simple Next.js landing page using TypeScript and Tailwind CSS.
      </p>
      <Link href="/about" className="px-6 py-2 mt-5 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none">
        Get Started
      </Link>
    </div>
  );
}
