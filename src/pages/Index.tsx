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

        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Яндекс берёт этот фид и пытается подобрать товар под поисковый запрос.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Человек вводит: "зелёная подушка 50х50 купить".
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Яндекс смотрит в ваш фид. Видит товар "Подушка декоративная". В описании есть слово "зелёный". Есть "50х50". Формально - совпадение. Яндекс показывает объявление.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Но какие изображение, заголовок он покажет? Первые из фида. Синяя подушка 40х40 - потому что она загружена как титульная.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Человек видит в рекламе синюю подушку. Он искал зелёную, но кликает - вдруг на сайте есть нужная. Вы платите за клик. Он переходит на карточку, видит синюю подушку, начинает искать зелёную, не находит быстро, раздражается, уходит.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Один нецелевой клик. 30-50 рублей в никуда.
          </p>
        </section>

        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            И здесь не спасут даже "умные" стратегии с оплатой за конверсии. Казалось бы - платишь только за заказы, какая разница, что там с кликами?
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Разница огромная.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Алгоритм Яндекса обучается на поведении пользователей. Он смотрит, кто кликает, как долго остаётся на сайте, совершает ли целевое действие. На основе этих данных он решает, какие товары показывать чаще, а какие - реже.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Что происходит при "кривом" фиде?
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Люди кликают, видят не тот товар, уходят. Яндекс фиксирует: короткие сессии, высокий процент отказов, низкая вовлечённость. Алгоритм делает вывод: "Этот товар не интересен аудитории". И перестаёт его показывать.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Но товар-то отличный.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Возможно, он входит в те самые 20%, которые приносят 80% ваших продаж. Просто Яндекс показывал синюю подушку вместо зелёной - и решил, что зелёная никому не нужна.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ваш "чемпион" выбывает из рекламы. Не потому, что он плохо продаётся. А потому, что кривой фид не дал ему шанса.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Оптимизация сбивается. Стратегия, которая должна была приводить покупателей, хоронит ваши лучшие товары. Вы платите за конверсии, но конверсий всё меньше - потому что алгоритм обучился на мусорных данных.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Кривой фид отравляет всю систему изнутри.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Умножьте на сотни запросов в день. На тысячи товаров с вариантами. Вот куда утекает ваш бюджет.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            И что примечательно
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Это не вина Яндекса. Алгоритм работает с тем, что ему дали.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ему дали фид, где шесть разных товаров склеены в один. Он не может показать зелёную подушку 50х50, потому что в фиде её нет как отдельной позиции. Есть только "подушка вообще".
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Это, как если бы вы искали смартфон Samsung Galaxy S24 с памятью 128 GB в сером цвете. По клику на рекламу открылась страница с карточкой «Смартфон Samsung Galaxy S24» с памятью 256 GB в синем цвете, цена не та что была в объявлении. Вы закрываете сайт и уходите в магазин, где сразу дают то, что нужно.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ваши клиенты делают то же самое.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Теперь вы понимаете…
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Почему не работает "обычная" настройка динамических кампаний
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Подрядчик берёт ваш стандартный фид. Загружает в Директ. Запускает динамические объявления. Отчитывается: "Кампания работает, показы идут".
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Показы идут. Клики идут. Деньги уходят. Заказов нет.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Потому, что фундамент кривой.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Фид собран неправильно. И никакие "умные стратегии" и "оптимизации" не исправят эту ошибку на уровне архитектуры.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-bold text-gray-900">
            Чтобы прекратить утечку бюджета, я создал систему «Товарный Снайпер».
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Что делает Система "Товарный Снайпер" иначе?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Всё начинается с авторской настройки выгрузки товаров.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Каждый вариант товара - отдельная позиция в фиде. Зелёная подушка 50х50 - отдельная строка со своим изображением, своим заголовком, своей ссылкой на конкретную карточку. Синяя подушка 40х40 - другая строка. И так по всему каталогу.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Когда человек ищет "зелёная подушка 50х50" - Яндекс находит в фиде именно её. Показывает объявление с фотографией зелёной подушки 50х50. Человек кликает и попадает в карточку зелёной подушки 50х50. Видит то, что искал. Добавляет в корзину.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Запрос - объявление - карточка. Три звена одной цепи. Никаких разрывов.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Но это только первый слой системы.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Второй слой - ABC-анализ вашей товарной матрицы
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Не все товары одинаково прибыльны. 20% позиций обычно дают 80% выручки. Это ваши "чемпионы". Ещё 30% - "рабочие лошадки", которые приносят стабильный, но небольшой доход. И 50% - "балласт", который съедает рекламный бюджет, но почти не даёт продаж.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Стандартный подход - крутить рекламу на всё подряд и надеяться на лучшее. Бюджет размазывается тонким слоем. "Чемпионы" недополучают показов, "балласт" съедает деньги.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Система "Товарный Снайпер" работает иначе. Мы анализируем ваш каталог, выделяем прибыльные позиции и направляем бюджет именно на них. Используем стратегии с оплатой за ДРР от дохода - реклама автоматически перераспределяет деньги от низкомаржинальных товаров к высокомаржинальным.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Результат: в рекламе крутятся только прибыльные товары. Каждый рубль работает там, где приносит максимум.
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