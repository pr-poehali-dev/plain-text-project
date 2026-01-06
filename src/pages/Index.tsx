import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const Index = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isTableImageOpen, setIsTableImageOpen] = useState(false);
  
  const handleDownload = () => {
    if (window.ym) {
      window.ym(106053828, 'reachGoal', 'got-lidmagnit');
    }
    window.open('https://t.me/signals_scrooges', '_blank');
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
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-2/3 order-2 md:order-1">
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
            </div>
            <div className="md:w-1/3 order-1 md:order-2">
              <img 
                src="https://cdn.poehali.dev/files/Семья.jpg" 
                alt="Алексей с семьей"
                className="w-full rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setIsImageOpen(true)}
              />
            </div>
          </div>
        </section>

        <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
          <DialogContent className="max-w-4xl w-full p-0">
            <DialogTitle className="sr-only">Алексей с семьей</DialogTitle>
            <img 
              src="https://cdn.poehali.dev/files/Семья.jpg" 
              alt="Алексей с семьей"
              className="w-full h-auto"
            />
          </DialogContent>
        </Dialog>

        <Dialog open={isTableImageOpen} onOpenChange={setIsTableImageOpen}>
          <DialogContent className="max-w-4xl w-full p-0">
            <DialogTitle className="sr-only">Пример карточки товара с вариантами</DialogTitle>
            <img 
              src="https://cdn.poehali.dev/files/6782072.png" 
              alt="Пример карточки товара с вариантами"
              className="w-full h-auto"
            />
          </DialogContent>
        </Dialog>

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
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            И таких несовпадений - десятки. Сотни. По всему каталогу.
          </p>
          <img 
            src="https://cdn.poehali.dev/files/6781826.png" 
            alt="Скриншот Яндекс.Метрики с несовпадениями запросов и показов"
            className="w-full rounded-lg shadow-lg"
          />
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
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            И, что самое неприятное…
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Вы начинаете сомневаться в себе
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Может, вы чего-то не понимаете в этом Директе? Может, нужно было самому разобраться, а не делегировать? Может, ваш бизнес просто "не подходит" для контекстной рекламы?
          </p>
          <img 
            src="https://cdn.poehali.dev/files/6782111.png" 
            alt="Визуализация проблем с рекламой"
            className="w-full rounded-lg shadow-lg mb-6"
          />
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
          <img 
            src="https://cdn.poehali.dev/files/6782072.png" 
            alt="Пример карточки товара с вариантами"
            className="w-full rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity mb-6"
            onClick={() => setIsTableImageOpen(true)}
          />
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Кажется логичным. Но вот, что происходит дальше.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Яндекс берёт этот фид и пытается подобрать товар под поисковый запрос
          </h3>
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-2/3">
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
              <p className="text-lg text-gray-700 leading-relaxed">
                Один нецелевой клик. 30-50 рублей в никуда.
              </p>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://cdn.poehali.dev/files/6781779.png" 
                alt="Пример нецелевого показа рекламы"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
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
          <div className="mb-8">
            <img 
              src="https://cdn.poehali.dev/files/6787645.png" 
              alt="Схема работы кривого фида в Яндекс.Директ"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
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
          <div className="mb-8">
            <img 
              src="https://cdn.poehali.dev/files/6787877.png" 
              alt="Точное соответствие запроса, объявления и карточки товара"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
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
            Система "Товарный Снайпер" работает иначе. <span className="sm:inline block sm:mt-0 mt-4">Мы анализируем ваш каталог, выделяем прибыльные позиции и направляем бюджет на них.</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Используем стратегии с оплатой за ДРР от дохода - реклама автоматически перераспределяет деньги от низкомаржинальных товаров к высокомаржинальным.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Результат: в рекламе крутятся только прибыльные товары. Каждый рубль работает там, где приносит максимум.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Как работает Система "Товарный Снайпер" на практике?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Вы получаете не просто "настройку рекламы". Вы получаете управляемую машину продаж, которая работает на вас 24/7.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Вот что происходит после старта:
          </p>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Этап 1: Стратегический фундамент (первая неделя)
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Начинаем с ABC-анализа вашей товарной матрицы.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Разделяем весь ассортимент на три категории:
          </p>
          <ul className="space-y-3 mb-6 text-lg text-gray-700 leading-relaxed ml-6">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><strong>Группа А</strong> - ваши "чемпионы". 20% товаров, которые дают 80% выручки. На них направляем максимум внимания и бюджета.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><strong>Группа B</strong> - "рабочие лошадки". 30% товаров, которые приносят стабильный доход. Работаем над повышением их эффективности.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><strong>Группа C</strong> - "кандидаты на вылет". 50% товаров, которые съедают бюджет, но почти не дают продаж. Отключаем их из рекламы или ищем способы сделать рентабельными.</span>
            </li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Параллельно настраиваю авторскую выгрузку товаров - тот самый "Гипер-Фид".
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Каждый вариант товара становится отдельной позицией. Зелёная подушка 50х50 - отдельная строка со своим изображением, заголовком, ссылкой.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Все атрибуты и характеристики на месте. Директ получает чёткие данные и может подобрать 100% релевантный товар под каждый запрос.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Этап 2: Запуск и калибровка (2-4 недели)
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Создаю гиперсегментированные динамические кампании на основе "Гипер-Фида".
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Запускаю A/B тесты связок "стратегия-цель" для каждой товарной категории. Цель - выйти на идеальную модель: оплата за конверсию с ограничением по ДРР.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Что это значит для вас? Реклама сама снижает показы товаров с низким ROMI и перенаправляет бюджет на позиции с высоким ROMI.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Вы не переплачиваете за "балласт". Каждый рубль идёт туда, где приносит максимум.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Этап 3: Ежемесячное обслуживание (3 месяца)
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Система запущена. Но это не значит "настроил и забыл".
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Фид живой - товары появляются и заканчиваются, цены меняются, сезонность влияет на спрос. Без постоянного присмотра даже идеально настроенная система начинает деградировать.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Что вы получаете каждый месяц:
          </p>
          <ul className="space-y-3 mb-6 text-lg text-gray-700 leading-relaxed ml-6">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><strong>Еженедельный спринт-отчёт "Пульс Кампании"</strong>. Каждый понедельник - лаконичный отчёт в инфографике: план/факт по заказам, выручке и ROMI. Никаких простыней с непонятными цифрами. Только то, что важно для бизнеса.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><strong>Ежемесячный стратегический созвон</strong>. Живой видео-звонок с демонстрацией экрана. Анализируем юнит-экономику, смотрим результаты ABC-анализа, планируем следующий месяц. Вы понимаете, что происходит с вашими деньгами.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><strong>Сервис "Ранний Доступ"</strong>. Я постоянно отслеживаю обновления Директа. Как только появляется новая технология - аккуратно тестирую её на вашем проекте. Вы снимаете сливки раньше конкурентов.</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Посмотрим на Принцип "Зелёной Подушки" в действии
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Вот как выглядит путь вашего клиента после внедрения системы:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg text-lg text-gray-700 leading-relaxed space-y-4">
            <p>Человек вводит в Яндексе: <strong>"зелёная подушка 50х50 купить"</strong></p>
            <p className="text-center text-2xl">↓</p>
            <p>Видит объявление с фотографией зелёной подушки 50х50 и ценой</p>
            <p className="text-center text-2xl">↓</p>
            <p>Кликает, попадает в карточку зелёной подушки 50х50</p>
            <p className="text-center text-2xl">↓</p>
            <p>Видит именно то, что искал. Добавляет в корзину. Оформляет заказ.</p>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            Никаких разрывов. Никаких "поищите на сайте". Точное попадание - высокая конверсия.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Результаты, которые уже получают клиенты
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Магазин расходников и комплектующих для фрезерных станков с ЧПУ. Сложная ниша, специфический ассортимент.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>До внедрения системы:</strong> конверсия рекламного трафика - 0.1%. Из тысячи кликов - один заказ.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Как было настроено? По старинке. Ручной сбор ключей, ручное создание объявлений. Ссылки вели на категории и подкатегории. Классический "статичный подход".
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>После внедрения Системы "Товарный Снайпер":</strong> конверсия выросла до 1%.
            </p>
            <p className="text-3xl font-bold text-gray-900 mb-6">
              Рост в 10 раз.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Те же товары. Тот же сайт. Та же аудитория. Изменился только подход к рекламе.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Что говорят клиенты
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "Заказывал настройку. Получил заявки по нужной стоимости в первый же день. Алексей погружается в работу и предлагает рабочие варианты, что действительно ценно для бизнеса - не сливать бюджет, а получать результат."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "Отличный специалист своего дела, знает все нюансы Директа, делает хорошую и уникальную (чего другие не умеют) настройку рекламных кампаний, подсказывает и консультирует до и после."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "Охват вырос в 4 раза, стоимость конверсии стала в 2 раза ниже, чем была до нас. Рекламная кампания продемонстрировала эффективность в 2 раза выше, чем ранее созданная."
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            При заказе Системы "Товарный Снайпер" вы получаете:
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Бонус №1: Персональный дашборд "E-com Штурвал" <span className="text-base font-normal text-gray-600">(ценность 25 000 руб.)</span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Настраиваю для вас персональный дашборд прямо внутри Яндекс.Метрики. На одном экране - 3-5 ключевых показателей: ДРР, CPO, ROMI, выручка. Понятные графики, никаких таблиц на 50 столбцов. Ваш личный "штурвал" для контроля ситуации в любой момент.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Бонус №2: Стратегия масштабирования "Следующий Уровень" <span className="text-base font-normal text-gray-600">(ценность 30 000 руб.)</span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Через 3 месяца совместной работы провожу отдельную стратегическую сессию. Готовлю пошаговый план: как увеличить количество заказов в 2-3 раза, сохранив или улучшив показатели рентабельности.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Бонус №3: Чек-лист "5-минутная Проверка Здоровья Кампании" <span className="text-base font-normal text-gray-600">(ценность 10 000 руб.)</span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Простой чек-лист из 5 пунктов. Позволяет в любой момент самостоятельно убедиться, что система работает как надо. Без погружения в дебри аналитики.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gray-900 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">
            Гарантия защиты вашего бюджета
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Я не даю пустых обещаний про "окупаемость" и "рост продаж в 10 раз". Слишком много переменных, которые от меня не зависят - ваши цены, сайт, работа менеджеров.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Вместо этого даю твёрдую, измеримую гарантию на качество своей работы.
          </p>
          <div className="bg-white text-gray-900 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-bold mb-4">
              Стандарт "Товарный Снайпер 95/5":
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              Минимум 95% вашего рекламного бюджета будет инвестировано в переходы по релевантным товарам. Никаких кликов на "общие категории". Никаких показов синей подушки вместо зелёной.
            </p>
            <p className="text-lg leading-relaxed">
              Если по итогам месяца внутренний аудит покажет, что доля нецелевых расходов по моей вине превысила 5% - я компенсирую разницу, уменьшив стоимость обслуживания в следующем месяце.
            </p>
          </div>
          <p className="text-lg leading-relaxed">
            Это не маркетинговый трюк. Это встроенный механизм защиты ваших инвестиций.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Сколько это стоит?
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg mb-6">
            <p className="text-2xl font-bold text-gray-900 mb-6">
              Внедрение и 3 месяца обслуживания Системы "Товарный Снайпер": 60 000 рублей
            </p>
            <p className="text-lg text-gray-900 font-semibold mb-4">Что входит:</p>
            <ul className="space-y-3 mb-8 text-lg text-gray-700 leading-relaxed ml-6">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>ABC-анализ товарной матрицы</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Авторская настройка "Гипер-Фида"</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Создание и запуск гиперсегментированных кампаний</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>3 месяца ведения с еженедельными отчётами и ежемесячными созвонами</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Бонус №1: Дашборд "E-com Штурвал" (ценность 25 000 руб.)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Бонус №2: Стратегия "Следующий Уровень" (ценность 30 000 руб.)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Бонус №3: Чек-лист "5-минутная Проверка" (ценность 10 000 руб.)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Гарантия "95/5"</span>
              </li>
            </ul>
            <div className="border-t border-gray-300 pt-6">
              <p className="text-lg text-gray-700 mb-2">Общая ценность: <span className="line-through">125 000 рублей</span></p>
              <p className="text-2xl font-bold text-gray-900">Ваша инвестиция сегодня: 60 000 рублей</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Почему не дешевле?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Вы можете найти фрилансера, который настроит динамические кампании за 15 000 рублей.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Он возьмёт ваш стандартный фид. Загрузит в Директ. Нажмёт "Запустить". Отчитается: "Готово".
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              А через месяц вы увидите в отчётах ту же картину: клики на синие подушки вместо зелёных, слив бюджета на "балласт", конверсия 0.1%.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Вы сэкономите 45 000 рублей на настройке. И потеряете 150 000 рублей за три месяца на нерелевантных кликах и похороненных "чемпионах".
            </p>
            <p className="text-lg font-bold text-gray-900">
              Система "Товарный Снайпер" окупает себя тем, что не тратит лишнего.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Итак, у вас есть выбор
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Первый вариант</strong> - оставить всё как есть. Продолжать работать с подрядчиками, которые загружают ваш стандартный фид и надеются на "умные алгоритмы". Смотреть, как бюджет утекает на нерелевантные клики. Гадать, почему конверсия не растёт.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Второй вариант</strong> - попробовать разобраться самому. Изучить, как работают фиды, динамические кампании, ABC-анализ. Потратить несколько месяцев на эксперименты. Возможно, набить те же шишки, которые я уже набил на 200+ проектах.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Третий вариант</strong> - внедрить Систему "Товарный Снайпер" и получить управляемую машину продаж, которая работает по принципу "Зелёной Подушки". Где каждый клик ведёт на нужный товар. Где бюджет автоматически перетекает к прибыльным позициям. Где вы видите чёткую юнит-экономику вместо хаоса.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Но прежде, чем принимать решение - проверьте свои кампании сами
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Я подготовил инструмент, который поможет вам за 15 минут найти критические ошибки в ваших динамических кампаниях.
          </p>
          <p className="text-2xl font-bold text-gray-900 mb-6">
            "Аудит динамических кампаний за 15 минут: 7 критических ошибок, которые сливают ваш бюджет"
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Это PDF-чеклист с пошаговыми инструкциями и скриншотами. Вы открываете свой рекламный кабинет, следуете инструкции шаг за шагом - и видите, где именно теряете деньги.
          </p>
          <p className="text-lg text-gray-900 font-semibold mb-4">Что вы узнаете:</p>
          <ul className="space-y-3 mb-6 text-lg text-gray-700 leading-relaxed ml-6">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Какой процент кликов идёт на нерелевантные товары</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Сколько бюджета съедает "балласт" из группы C</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Где алгоритм Директа обучился на мусорных данных</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Какие "чемпионы" недополучают показов</span>
            </li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed">
            Это бесплатно. Это ни к чему не обязывает. Это даст вам ясность - даже если вы никогда не станете моим клиентом.
          </p>
        </section>

        <section className="mb-12">
          <div className="text-center">
            <Button 
              onClick={handleDownload}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-xl font-semibold rounded-md transition-all"
            >
              Скачать Чек-лист
            </Button>
            <p className="mt-4 text-sm text-gray-600">
              Скачивание начнется мгновенно. Бесплатный PDF-аудит динамических кампаний за 15 минут
            </p>
          </div>
        </section>

        <section className="mb-12 bg-gray-900 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">
            Важно: я беру в работу не больше 2 новых клиентов в месяц
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Система "Товарный Снайпер" требует глубокого погружения в каждый проект. Авторская настройка фида, ABC-анализ, калибровка кампаний - это не конвейер. Это ручная работа, которая даёт результат.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Поэтому я физически не могу взять больше двух проектов одновременно и сохранить качество.
          </p>
          <p className="text-2xl font-bold mb-6">
            На этот месяц осталось одно место.
          </p>
          <p className="text-lg leading-relaxed">
            Если после изучения шаблона вы поймёте, что вам нужна Система "Товарный Снайпер" - напишите мне в Telegram. Обсудим ваш проект и решим, подходим ли мы друг другу.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Давайте подведём итог
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Вы можете продолжать платить "налог на хаос" - сливать бюджет на синие подушки вместо зелёных, хоронить своих "чемпионов" и гадать, почему реклама не работает.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Или можете сделать первый шаг - забрать бесплатный чеклист аудита и увидеть реальную картину своих кампаний.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Решать вам.
          </p>
        </section>

        <div className="mt-16 pt-12 border-t border-gray-300">
          <div className="text-center">
            <Button 
              onClick={handleDownload}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-8 text-xl font-semibold rounded-md transition-all whitespace-normal leading-tight min-h-[120px]"
            >
              Забрать Чек-лист
            </Button>
            <p className="mt-4 text-sm text-gray-600">
              Бесплатный PDF-аудит динамических кампаний за 15 минут
            </p>
          </div>
        </div>

      </article>
    </div>
  );
};

export default Index;