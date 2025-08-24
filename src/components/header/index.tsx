import Link from 'next/link';

export function Header() {
  return (
    <header className="flex px-2 py-4 bg-zinc-10 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">My App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/contatos"
                className="text-gray-600 hover:text-gray-800"
              >
                Contatos
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="text-gray-600 hover:text-gray-800"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
