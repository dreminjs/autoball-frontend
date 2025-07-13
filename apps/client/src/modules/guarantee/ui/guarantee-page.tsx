import Head from 'next/head';

export const GuaranteePage = () => {
  return (
    <>
      <Head>
        <title>Гарантия на б/у автозапчасти | АвтоБол</title>
        <meta
          name="description"
          content="Условия гарантии на бывшие в употреблении автозапчасти. Сроки проверки двигателей, КПП, акпп - 14 дней, расходомеров и форсунок - 5 дней."
        />
        <meta
          property="og:title"
          content="Гарантия на б/у автозапчасти | АвтоБол"
        />
        <link rel="canonical" href="https://avtobol.by/warranty" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose lg:prose-xl">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            Гарантийные условия
          </h1>

          <section className="mb-8">
            <p className="text-gray-700 mb-4">
              Автозапчасти, реализуемые компанией <strong>АвтоБол</strong>,
              являются бывшими в употреблении. Их эксплуатационные свойства
              могут не соответствовать свойствам новой запчасти.
            </p>
            <p className="text-gray-700">
              Компания предоставляет срок для проверки и установки запчасти на
              автомобиль, в течение которого возможен обмен.
            </p>
          </section>

          <section className="mb-8 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">
              Гарантийные сроки
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-gray-700">
                <strong>14 дней</strong> - для двигателей, КПП и АКПП
              </li>
              <li className="text-gray-700">
                <strong>5 дней</strong> - для расходомеров, форсунок и прочих
                запчастей
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              На что не распространяется гарантия
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-2">
                  Категории запчастей
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Детали кузова</li>
                  <li>Оптика и стёкла</li>
                  <li>Решётки, накладки, молдинги</li>
                  <li>Декоративные детали интерьера</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-2">
                  Условия прекращения гарантии
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Разборка без согласования</li>
                  <li>Повреждение маркировки</li>
                  <li>Неправильная установка</li>
                  <li>Механические повреждения</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8 bg-red-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-800">
              Важная информация
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                В соответствии со{' '}
                <strong>ст.103 Постановления СМ РБ от 22.07.2014 №703{" "}</strong>
                бывшие в употреблении товары обмену и возврату не подлежат.
              </p>
              <p>
                <strong>АвтоБол Групп</strong> не компенсирует затраты на
                установку и транспортировку при возврате товара.
              </p>
            </div>
          </section>

          <section className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">
              Рекомендации покупателям
            </h2>
            <p className="text-gray-700">
              Приобретая б/у автозапчасти, внимательно проверяйте их
              соответствие вашим требованиям перед покупкой и установкой.
            </p>
          </section>
        </article>
      </main>
    </>
  );
};
