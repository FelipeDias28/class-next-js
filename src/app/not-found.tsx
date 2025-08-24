import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600 mt-4">Página Não Encontrada</p>

      <Link href="/" className="text-blue-600 hover:underline">
        Voltar para a Home
      </Link>
    </div>
  );
}
