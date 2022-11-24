'use strict';

// make seed npx sequelize-cli seed:generate --name xxx-products.js

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'products',
      [
        {
          title: 'Латте',
          description:
            'Латте - представляет собой кофейный напиток итальянского происхождения, приготовленный из эспрессо и молока.',
          image: '1latte.png',
          price: 79,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Шоколадный маффин',
          description:
            'Шоколадные маффины это просто идеальная выпечка на завтрак к кофе.',
          image: '2chockmaffin.png',
          price: 79,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Чиабатта с оливками',
          description:
            'Итальянский белый хлеб из пшеничной муки, воды, соли, дрожжей и оливкового масла.',
          image: '3chiabattaolivki.png',
          price: 98,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Фраппе',
          description:
            'Фраппе - это греческий  кофейный напиток со льдом, приготовленный из растворимого кофе, воды, сахара и молока.',
          image: '4frappe.png',
          price: 189,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Ягодная тарталетка',
          description:
            'Лакомство из песочного теста с начинкой из свежих ягод малины, украшенное мятой и сахарной пудрой.',
          image: '5yagodnayatartaletka.png',
          price: 109,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Эклер в шоколоде',
          description:
            'Эклер — это пирожное из заварного теста, наполненное кремом и покрытое ароматной глазурью.',
          image: 'chockmaffin.png',
          price: 68,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Гляссе',
          description:
            'Гляссе - холодный напиток на основе кофе с добавлением мороженого.',
          image: 'chockmaffin.png',
          price: 98,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Багет чесночный',
          description:
            'Багет из пшеничной муки высшего сорта с ароматной чесночной начинкой и зеленью.',
          image: 'chockmaffin.png',
          price: 169,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Американо',
          description:
            'Американо — самый распространенный вид кофе. К нему отлично подходят десерты, свежая выпечка, сиропы и мед.',
          image: 'chockmaffin.png',
          price: 68,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Булочка с корицей',
          description:
            'Булочка с корицей — это сладкая булочка, которую обычно подают в Северной Европе и Северной Америке.',
          image: 'chockmaffin.png',
          price: 89,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Хлеб с семечками',
          description:
            'Хлеб ржано-пшеничный с большим количеством семечек подсолнечника с добавлением солода.',
          image: 'chockmaffin.png',
          price: 119,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Булка',
          description:
            'Булка с маковой начинкой из слоенного теста с сахарной пудрой.',
          image: 'chockmaffin.png',
          price: 169,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Хлеб бородинский',
          description:
            'Темно-коричневый ржаной хлеб на закваске русского происхождения, приправленный кориандром и тмином.',
          image: 'chockmaffin.png',
          price: 199,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Хлеб Бездрожжевой с тмином',
          description: 'Ржаной бездрожжевой хлеб на закваске с тмином.',
          image: 'chockmaffin.png',
          price: 159,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Багет Парижский',
          description:
            'Багет из пшеничной муки высшего сорта на закваске. Тесто - пышное пористое с выраженной корочкой.',
          image: 'chockmaffin.png',
          price: 299,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Хлеб летний',
          description:
            'Воздушный хлеб из пшеничной муки высшего сорта на растительном масле. Аналог нарезного батона.',
          image: 'chockmaffin.png',
          price: 99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Хлеб подовый бездрожжевой',
          description:
            'Хлеб «серый» пористой структуры из ржаной и пшеничной муки на ржаной закваске.',
          image: 'chockmaffin.png',
          price: 129,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Круассан с малиной',
          description:
            'Слоеный круассан на сливочном масле с малиновой начинкой.',
          image: 'chockmaffin.png',
          price: 99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Улитка с корицей в шоколаде',
          description:
            'Сдобная булочка с корицей покрытая темным и белым шоколадом.',
          image: 'chockmaffin.png',
          price: 59,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Пирог с ветчиной и сыром',
          description:
            'Сдобный пирог из высшего сорта пшнечной муки с большим кол-вом пикантной начинки ветчина-сыр и болгарского перца.',
          image: 'chockmaffin.png',
          price: 339,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Пирог с брусникой и яблоком',
          description: 'Пирог из сдобного теста с бруснично-яблочной начинкой.',
          image: 'chockmaffin.png',
          price: 319,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Штрудель маковый',
          description: 'Рулет из пшеничной муки с начинкой из мака.',
          image: 'chockmaffin.png',
          price: 89,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Киш с курицей',
          description:
            'В песочной тарталетке запеканка из курицы с зеленью, сливками и сыром.',
          image: 'chockmaffin.png',
          price: 169,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Торт Медово-сливочный',
          description:
            'Медовый бисквит с прослойкой из сметанного крема с добавлением апельсинового конфитюра.',
          image: 'chockmaffin.png',
          price: 99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Донат фисташковый с начинкой',
          description:
            'Сдобный пончик из пшеничной муки, с начинкой из фисташкового крема. Украшен глазурью из тёмного шоколада и орехами.',
          image: 'chockmaffin.png',
          price: 39,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Тарталетка ягодная постная',
          description:
            'Тарталетка из песочного теста с начинкой из малинового джема и нежного крема на растительной основе , украшенная ягодами голубики и малины. Подходит в пост.',
          image: 'chockmaffin.png',
          price: 79,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Напиток Клюква Можжевельник',
          description:
            'Горячий напиток из ягод клюквы и можжевельника, в основе которого лежит запах смолы, с примесями дыма, терпкости, пряностей и луговых трав.',
          image: 'chockmaffin.png',
          price: 99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Напиток Облепиха Имбирь',
          description:
            'Горячий напиток из ягод облепихи, облепихового пюре и измельченного корня имбиря.',
          image: 'chockmaffin.png',
          price: 99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Пирожное Эклер Манго Маракуйя',
          description:
            'Заварное пирожное с начинкой из сливочно-заварного крема с пюре манго-маракуйя . Украшенное помадкой, кракелином и стружкой белого шоколада',
          image: 'chockmaffin.png',
          price: 39,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products', null, {});
  },
};
