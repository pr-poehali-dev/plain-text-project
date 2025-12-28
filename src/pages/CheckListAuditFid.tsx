import { Button } from "@/components/ui/button";

const CheckListAuditFid = () => {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
        
        <header className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Чеклист-аудит товарного фида
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Проверьте ваш товарный фид по ключевым параметрам, чтобы выявить проблемы, которые сливают рекламный бюджет
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Как пользоваться этим чеклистом
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Откройте ваш товарный фид и проверьте его по каждому пункту ниже. Если хотя бы по одному пункту ответ "Нет" — значит, ваш фид теряет деньги прямо сейчас.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            1. Уникальность товаров
          </h3>
          <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <li className="flex items-start">
              <span className="mr-3 text-orange-500">☐</span>
              <span>
                Каждый вариант товара (цвет, размер, модификация) выгружен как отдельная позиция с уникальным ID?
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-orange-500">☐</span>
              <span>
                Каждая позиция имеет прямую ссылку на конкретный вариант товара, а не на общую карточку?
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            2. Заголовки и описания
          </h3>
          <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <li className="flex items-start">
              <span className="mr-3 text-orange-500">☐</span>
              <span>
                Заголовки содержат конкретные характеристики (цвет, размер, материал), а не общие названия?
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-orange-500">☐</span>
              <span>
                В описаниях нет перечисления всех возможных вариантов товара?
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-orange-500">☐</span>
              <span>
                Описания соответствуют конкретному варианту товара?
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            3. Изображения
          </h3>
          <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <li className="flex items-start">
              <span className="mr-3 text-orange-500">☐</span>
              <span>
                Каждый вариант товара имеет собственное изображение, соответствующее его характеристикам?
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-orange-500">☐</span>
              <span>
                Изображения качественные, без водяных знаков и посторонних элементов?
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            4. Цены и наличие
          </h3>
          <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <li className="flex items-start">
              <span className="mr-3 text-orange-500">☐</span>
              <span>
                Цены указаны корректно для каждого варианта товара?
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-orange-500">☐</span>
              <span>
                Статус наличия обновляется автоматически и соответствует реальным остаткам?
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            5. Категории и структура
          </h3>
          <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <li className="flex items-start">
              <span className="mr-3 text-orange-500">☐</span>
              <span>
                Товары распределены по правильным категориям?
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-orange-500">☐</span>
              <span>
                Используется иерархия категорий для точного таргетинга?
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Что делать, если нашли проблемы?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Если вы обнаружили хотя бы одну проблему в вашем фиде — не переживайте. Это нормально и решаемо.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Система "Товарный Снайпер" автоматически исправляет все эти проблемы и настраивает рекламу так, чтобы каждый клик вел на точно соответствующий товар.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg"
              onClick={() => window.location.href = '/'}
            >
              Узнать больше о системе
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg"
              onClick={() => window.location.href = '/offer'}
            >
              Оставить заявку
            </Button>
          </div>
        </section>

      </article>
    </div>
  );
};

export default CheckListAuditFid;