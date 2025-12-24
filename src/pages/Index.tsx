import { Button } from "@/components/ui/button";

const Index = () => {
  const handleDownload = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
        
        <header className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Почему ваш интернет-магазин с 1000+ товаров сливает рекламный бюджет — и 3 способа как это исправить
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Превратите вашу хаотичную рекламу в управляемую машину продаж. Где каждый клик ведёт именно в тот товар, который искал клиент. Где каждый рубль идет только на прибыльные товары.
          </p>
        </header>

        <div className="border-t border-b border-gray-300 py-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Эта страница для вас, если:
          </h2>
          <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">—</span>
              <span>
                У вас интернет-магазин с ассортиментом от 1000 позиций. Может быть, 5000. Может — 20 000. Чем больше, тем актуальнее то, что вы сейчас прочитаете.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">—</span>
              <span>
                Вы уже пробовали Яндекс.Директ. Сами или с подрядчиком. Деньги потратили, а результат — как вода сквозь пальцы. Клики есть, заказов нет. Или есть, но стоимость заказа съедает всю маржу.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">—</span>
              <span>
                Вы устали от ощущения, что реклама работает вслепую. Непонятно, какие товары приносят прибыль, какие сжигают бюджет, и почему клиенты кликают, но не покупают.
              </span>
            </li>
          </ul>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Если узнали себя — читайте дальше. Здесь не будет общих слов про "эффективную рекламу" и "рост продаж". Будет конкретный механизм, который решает именно эту проблему.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Меня зовут Алексей, и я создал Систему "Товарный Снайпер" специально для интернет-магазинов с большим ассортиментом
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Суть системы в одном предложении: если клиент ищет зелёную подушку 50х50 — он видит в рекламе именно зелёную подушку 50х50 и попадает именно в её карточку.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Не в категорию "Подушки". Не в карточку синей подушки 40х40. Точное попадание — запрос, объявление, карточка. Три звена одной цепи.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Это звучит очевидно. Но 9 из 10 интернет-магазинов работают иначе — и именно поэтому сливают бюджет. Через минуту вы поймёте, почему так происходит и как это исправить.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong className="text-gray-900">И так. Представьте.</strong>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Утро понедельника. Вы открываете Яндекс.Метрику или отчёт от подрядчика. Смотрите на цифры. Клики есть - 1200 за неделю. Бюджет потрачен - 45 000 рублей. Заказов... три. Может, пять. Стоимость заказа - 9000 рублей. При марже 2000.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Вы листаете отчёт дальше. Пытаетесь понять, куда ушли деньги. Открываете статистику по поисковым запросам. И видите: по запросу "зелёная подушка 50х50" были показы и клики на... синюю подушку 40х40. Человек искал одно, увидел другое, кликнул (вы заплатили), перешёл на сайт, не нашёл то, что хотел - ушёл.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            И таких несовпадений - десятки. Сотни. По всему каталогу.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Внутри вас нарастает глухое раздражение
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ощущение, что деньги утекают в дыру. Вы не понимаете, где эта дыра. Не понимаете, как её заткнуть. Каждый день реклама крутится, счётчик расходов тикает, а вы не можете сказать точно - это инвестиция или слив.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Вы смотрите на конкурентов. У них вроде бы работает. Они как-то продают через Директ. Почему у них получается, а у вас нет? Может, дело в нише? В сайте? В ценах? Или просто не везёт с подрядчиками?
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Вы уже меняли исполнителей. Пробовали фрилансеров, пробовали агентства. Кто-то настраивал вручную, кто-то запускал "умные кампании". Результат примерно одинаковый: первый месяц - обещания, второй - объяснения, третий - вы ищете нового подрядчика.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            И, что самое неприятное…
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Вы начинаете сомневаться в себе
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Может, вы чего-то не понимаете в этом Директе? Может, нужно было самому разобраться, а не делегировать? Может, ваш бизнес просто "не подходит" для контекстной рекламы?
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Я понимаю это чувство. Потому что видел его у десятков владельцев интернет-магазинов, которые приходили ко мне после очередного разочарования.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            И я знаю главное: <strong className="text-gray-900">дело не в вас.</strong>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Дело не в вашей нише. Не в ваших ценах. Не в Яндексе.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Дело в подходе, который использовали ваши подрядчики. В подходе, который устарел и не работает для магазинов с большим ассортиментом.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Сейчас я покажу, почему.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Почему ваша реклама показывает синюю подушку вместо зелёной?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ответ прост: потому, что так устроен ваш товарный фид.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Давайте разберём на примере.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            У вас есть подушка. Она продаётся в трёх цветах: зелёный, синий, красный. И в двух размерах: 40х40 и 50х50. Итого - шесть вариантов одного товара.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Как это обычно выгружают в фид? Одной строкой. Один товар - "Подушка декоративная". В описании перечислены все цвета и размеры. Ссылка ведёт на общую карточку, где покупатель сам выбирает нужный вариант.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Кажется логичным. Но вот, что происходит дальше.
          </p>
        </section>

        <div className="mt-16 pt-12 border-t border-gray-300">
          <div className="text-center">
            <Button 
              onClick={handleDownload}
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-6 text-lg font-semibold rounded-md transition-all"
            >
              Получить полный гайд
            </Button>
            <p className="mt-4 text-sm text-gray-600">
              Узнайте 3 конкретных способа исправить вашу рекламу
            </p>
          </div>
        </div>

      </article>
    </div>
  );
};

export default Index;
