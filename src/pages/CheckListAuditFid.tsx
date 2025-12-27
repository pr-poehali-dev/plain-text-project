export default function CheckListAuditFid() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Чеклист-аудит товарного фида
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Эта страница находится в разработке. Скоро здесь появится полезный контент!
        </p>
        <a 
          href="/"
          className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition"
        >
          Вернуться на главную
        </a>
      </div>
    </div>
  );
}
