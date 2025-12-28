import { Button } from "@/components/ui/button";

const CheckListAuditFid = () => {
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
            Утро понедельника. Вы открываете Яндекс.Метрику или отчёт от подрядчика. Смотрите на цифры. Клики есть - 1200 за неделю. Потрачено - 45 000 рублей.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Заказов... три. Может, пять. Стоимость заказа - 9000 рублей. При марже 2000.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Вы листаете отчёт дальше. Пытаетесь понять, куда ушли деньги. Открываете статистику по поисковым запросам. <span className="sm:inline block sm:mt-0 mt-4">И видите: по запросу "зелёная подушка 50х50" были показы и клики на... синюю подушку 40х40.</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Человек искал одно, увидел другое, кликнул (вы заплатили), перешёл на сайт, не нашёл то, что хотел - ушёл.
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
            Ощущение, что деньги утекают в дыру. Вы не понимаете, где эта дыра. Не понимаете, как её заткнуть. <span className="sm:inline block sm:mt-0 mt-4">Каждый день реклама крутится, счётчик расходов тикает, а вы не можете сказать точно - это инвестиция или слив.</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Вы смотрите на конкурентов. У них вроде бы работает. Они как-то продают через Директ. <span className="sm:inline block sm:mt-0 mt-4">Почему у них получается, а у вас нет? Может, дело в нише? В сайте? В ценах? Или просто не везёт с подрядчиками?</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Вы уже меняли исполнителей. Пробовали фрилансеров, пробовали агентства. Кто-то настраивал вручную, кто-то запускал "умные кампании". <span className="sm:inline block sm:mt-0 mt-4">Результат примерно одинаковый: первый месяц - обещания, второй - объяснения, третий - вы ищете нового подрядчика.</span>
          </p>
        </section>

        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            И, что самое неприятное…
          </p>
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
            Как это обычно выгружают в фид? Одной строкой. Один товар - "Подушка декоративная". В описании перечислены все цвета и размеры. <span className="sm:inline block sm:mt-0 mt-4">Ссылка ведёт на общую карточку, где покупатель сам выбирает нужный вариант.</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Кажется логичным. Но вот, что происходит дальше.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Яндекс берёт этот фид и пытается подобрать товар под поисковый запрос
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Человек вводит: "зелёная подушка 50х50 купить".
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Яндекс смотрит в ваш фид. Видит товар "Подушка декоративная". В описании есть слово "зелёный". Есть "50х50". Формально - совпадение. <strong>Яндекс показывает объявление.</strong>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Но какие изображение, заголовок он покажет? Первые из фида. Синяя подушка 40х40 - потому что она загружена как титульная.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Человек видит в рекламе синюю подушку. Он искал зелёную, но кликает - вдруг на сайте есть нужная. <strong>Вы платите за клик.</strong> <span className="sm:inline block sm:mt-0 mt-4">Он переходит на карточку, видит синюю подушку, начинает искать зелёную, не находит быстро, раздражается, уходит.</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Один нецелевой клик. 30-50 рублей в никуда.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            И здесь <strong>не спасут даже "умные" стратегии с оплатой за конверсии</strong>. Казалось бы - платишь только за заказы, какая разница, что там с кликами?
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Разница огромная.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Алгоритм Яндекса обучается на поведении пользователей. Он смотрит, кто кликает, как долго остаётся на сайте, совершает ли целевое действие. <span className="sm:inline block sm:mt-0 mt-4">На основе этих данных он решает, какие товары показывать чаще, а какие - реже.</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Что происходит при "кривом" фиде?</strong>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Люди кликают, видят не тот товар, уходят. Яндекс фиксирует: короткие сессии, высокий процент отказов, низкая вовлечённость. <span className="sm:inline block sm:mt-0 mt-4">Алгоритм делает вывод: "Этот товар не интересен аудитории". И перестаёт его показывать.</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Но товар-то отличный.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Возможно, он входит в те самые 20%, которые приносят 80% ваших продаж. Просто Яндекс показывал синюю подушку вместо зелёной - и решил, что зелёная никому не нужна.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Ваш "чемпион" выбывает из рекламы.</strong> Не потому, что он плохо продаётся. А потому, что кривой фид не дал ему шанса.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Оптимизация сбивается. Стратегия, которая должна была приводить покупателей, хоронит ваши лучшие товары. <span className="sm:inline block sm:mt-0 mt-4">Вы платите за конверсии, но конверсий всё меньше - потому что алгоритм обучился на мусорных данных.</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Кривой фид отравляет всю систему изнутри.</strong>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Умножьте на сотни запросов в день. На тысячи товаров с вариантами. Вот куда утекает ваш бюджет.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            И что примечательно.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Это не вина Яндекса. Алгоритм работает с тем, что ему дали
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ему дали фид, где шесть разных товаров склеены в один. Он не может показать зелёную подушку 50х50, потому что в фиде её нет как отдельной позиции.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Это, как если бы вы искали смартфон Samsung Galaxy S24 с памятью 128 GB в сером цвете. <span className="sm:inline block sm:mt-0 mt-4">По клику на рекламу открылась страница с карточкой «Смартфон Samsung Galaxy S24» с памятью 256 GB в синем цвете, цена не та что была в объявлении.</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Вы закрываете сайт и уходите в магазин, где сразу дают то, что нужно.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ваши клиенты делают то же самое.
          </p>
        </section>

        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Теперь вы понимаете…
          </p>
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
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <em>Чтобы прекратить утечку бюджета, я создал систему «Товарный Снайпер».</em>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Что делает Система "Товарный Снайпер" иначе?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Всё начинается с авторской настройки выгрузки товаров.</strong>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Каждый вариант товара - отдельная позиция в фиде. Зелёная подушка 50х50 - отдельная строка со своим изображением, своим заголовком, своей ссылкой на конкретную карточку.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Синяя подушка 40х40 - другая строка. И так по всему каталогу.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Когда человек ищет "зелёная подушка 50х50" - Яндекс находит в фиде именно её. Показывает объявление с фотографией зелёной подушки 50х50. <span className="sm:inline block sm:mt-0 mt-4">Человек кликает и попадает в карточку зелёной подушки 50х50. Видит то, что искал. Добавляет в корзину.</span>
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
            Не все товары одинаково прибыльны. 20% позиций обычно дают 80% выручки. Это ваши "чемпионы". <span className="sm:inline block sm:mt-0 mt-4">Ещё 30% - "рабочие лошадки", которые приносят стабильный, но небольшой доход.</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Остальные 50% - "балласт", который съедает рекламный бюджет, но почти не даёт продаж.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Стандартный подход - крутить рекламу на всё подряд и надеяться на лучшее. <span className="sm:inline block sm:mt-0 mt-4">Бюджет размазывается тонким слоем. "Чемпионы" недополучают показов, "балласт" съедает деньги.</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Система "Товарный Снайпер" работает иначе. <span className="sm:inline block sm:mt-0 mt-4">Я изучаю вашу товарную матрицу. Смотрю, какие товары реально приносят деньги. Какие вы бы хотели разогнать. Какие просто висят балластом.</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Дальше - стратегическое распределение бюджета. "Чемпионам" - максимальная видимость, агрессивные ставки, первые места. "Рабочим лошадкам" - стабильный поток трафика, умеренные ставки. <span className="sm:inline block sm:mt-0 mt-4">"Балласту" - минимальные показы или вообще исключение из кампаний.</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Каждый рубль вкладывается в товары, которые продаются. Не в те, что "может быть когда-нибудь".
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Третий слой - постоянный контроль и оптимизация
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Запуск - это не финальная точка. Это старт процесса.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Система не работает в режиме "запустили и забыли". Каждые две недели - детальный анализ. Какие товары выстреливают? Какие сливают бюджет? <span className="sm:inline block sm:mt-0 mt-4">Где ставки нужно поднять, где - снизить? Что исключить из показов, что добавить?</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Я не просто смотрю в отчёты Директа. Я анализирую связку "товар - запрос - объявление - конверсия". <span className="sm:inline block sm:mt-0 mt-4">Выявляю товары-звёзды, которым нужно больше трафика. Режу неэффективные связки на корню.</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Результат - реклама перестаёт быть чёрным ящиком. Вы видите, какие товары дают продажи, какие сливают бюджет. <span className="sm:inline block sm:mt-0 mt-4">И что главное - система постоянно настраивается под реальные данные, а не работает вслепую.</span>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Что вы получаете, подключив Систему "Товарный Снайпер"
          </h2>
          <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">1.</span>
              <span>
                <strong className="text-gray-900">Авторскую выгрузку товарного фида</strong> - где каждый вариант товара выгружен правильно, с уникальными характеристиками, изображениями и ссылками.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">2.</span>
              <span>
                <strong className="text-gray-900">ABC-анализ товарной матрицы</strong> - выявление "чемпионов", "рабочих лошадок" и "балласта". Стратегическое распределение бюджета по приоритетам.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">3.</span>
              <span>
                <strong className="text-gray-900">Настройку Яндекс.Директа</strong> под ваш фид - динамические объявления с точным таргетингом на каждый товар. Стратегии ставок, исключающие слив бюджета.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">4.</span>
              <span>
                <strong className="text-gray-900">Еженедельную оптимизацию</strong> - контроль показателей, отключение неэффективных связок, усиление прибыльных товаров.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">5.</span>
              <span>
                <strong className="text-gray-900">Прозрачную аналитику</strong> - вы видите, какие товары дают заказы, какие едят бюджет. Никакой воды - только цифры и конкретные действия.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Результат
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Реклама перестаёт быть лотереей. Вы знаете, куда идут деньги. Знаете, какие товары работают. Знаете, где резать расходы, а где - увеличивать бюджет.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Каждый клик ведёт на нужный товар. Конверсия растёт. Стоимость заказа падает. <span className="sm:inline block sm:mt-0 mt-4">Вы наконец можете спокойно спать, зная, что рекламный бюджет работает на вас, а не сливается в никуда.</span>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Кому подходит эта система
          </h2>
          <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">—</span>
              <span>
                У вас интернет-магазин с ассортиментом от 1000+ товаров.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">—</span>
              <span>
                Вы уже пробовали Яндекс.Директ, но результат не устроил.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">—</span>
              <span>
                Вы готовы инвестировать в рекламу от 100 000 рублей в месяц (меньший бюджет не даст достаточно данных для оптимизации).
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">—</span>
              <span>
                Вы хотите видеть прозрачную аналитику и понимать, куда идут деньги.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Как начать работу
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Оставьте заявку через форму ниже. Я свяжусь с вами в течение 24 часов.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            На первой встрече мы обсудим ваш бизнес, посмотрим текущие показатели рекламы, оценим потенциал системы для вашего магазина. <span className="sm:inline block sm:mt-0 mt-4">Если я увижу, что система не подходит вашему бизнесу - скажу об этом честно. Не буду тратить ваше время и деньги.</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Если решим работать - я подготовлю план внедрения системы и озвучу стоимость. Сроки запуска - от 2 недель с момента согласования.
          </p>
          <div className="mt-12 p-8 bg-white border-2 border-orange-600 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Оставьте заявку на внедрение системы
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-900 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="Иван"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-lg font-medium text-gray-900 mb-2">
                  Название магазина / сайта
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="magazin.ru"
                />
              </div>
              <div>
                <label htmlFor="products" className="block text-lg font-medium text-gray-900 mb-2">
                  Количество товаров в каталоге
                </label>
                <input
                  type="text"
                  id="products"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="~5000"
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-lg font-medium text-gray-900 mb-2">
                  Телефон или Telegram для связи
                </label>
                <input
                  type="text"
                  id="contact"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="+7 900 123-45-67 или @username"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 text-lg font-semibold"
              >
                Отправить заявку
              </Button>
            </form>
            <p className="mt-4 text-sm text-gray-600 text-center">
              Нажимая кнопку, вы соглашаетесь с <a href="/offer" className="text-orange-600 underline">политикой обработки персональных данных</a>
            </p>
          </div>
        </section>

        <section className="mt-16 pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-600 text-center">
            ИП Иванов Алексей Сергеевич | ИНН 123456789012 | ОГРНИП 987654321098765
          </p>
          <p className="text-sm text-gray-600 text-center mt-2">
            <a href="/offer" className="text-orange-600 underline">Политика конфиденциальности</a>
          </p>
        </section>

      </article>
    </div>
  );
};

export default CheckListAuditFid;