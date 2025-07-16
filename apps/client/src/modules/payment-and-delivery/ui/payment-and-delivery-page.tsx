import {
  FaMoneyBillWave,
  FaCreditCard,
  FaTruck,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import Head from 'next/head';

export const PaymentAndDeliveryPage = () => {
  return (
    <>
      <Head>
        <title>Оплата и доставка автозапчастей | АвтоБол Групп</title>
        <meta
          name="description"
          content="Способы оплаты и условия доставки б/у автозапчастей по Беларуси, России и Казахстану. Наличный и безналичный расчет, доставка СДЭК и Энергия."
        />
        <meta property="og:title" content="Оплата и доставка | АвтоБол" />
        <link rel="canonical" href="https://avtobol.by/payment-delivery" />
      </Head>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Оплата и доставка
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <section className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaMoneyBillWave className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Способы оплаты
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                  <FaMoneyBillWave className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Наличный расчет
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Оплата наличными при самовывозе или курьеру при получении
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                  <FaCreditCard className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Безналичный расчет
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Оплата по карте через терминал или банковский перевод
                  </p>
                  <div className="mt-2 flex space-x-2">
                    <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                      Visa
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                      Mastercard
                    </span>
                    {/* <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                      БЕЛКАРТ
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <FaTruck className="text-orange-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Условия доставки
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <FaMapMarkerAlt className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    По Беларуси
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Доставка по всем регионам транспортными компаниями
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                  <FaTruck className="text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Международная доставка
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Отправка в Россию и Казахстан проверенными перевозчиками:
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                      СДЭК
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                      Энергия
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Важная информация
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Сроки доставки рассчитываются индивидуально после оформления
              заказа
            </li>
            <li>Стоимость доставки зависит от веса, габаритов и региона</li>
            <li>Возможен самовывоз со склада в Минске</li>
            <li>Все вопросы по оплате и доставке уточняйте у менеджеров</li>
          </ul>
        </section>
      </main>
    </>
  );
};
