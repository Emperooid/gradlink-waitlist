export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Tailwind Test Page
        </h1>
        <p className="text-gray-600 mb-4">
          If you can see colors and styling, Tailwind CSS is working correctly!
        </p>
        <div className="space-y-2">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition-colors mr-2">
            Green Button
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded transition-colors">
            Purple Button
          </button>
        </div>
        <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500">
          <p className="text-yellow-700">This is a yellow alert box!</p>
        </div>
      </div>
    </div>
  )
}
