var orderHistory = [
  {
    orderOneItems: [
      {
        placed: 'August 4, 2020',
        total: 34.00,
        shipsTo: 'JS Masher',
        orderNum: 114 - 3941689 - 8772232,
        dod: 'Aug 8, 2020',
        title: 'JavaScript for impatient rogrammers',
        author: 'Rauschmayer, Dr. Axel',
        returnDue: 'Sep 7, 2020',
        cost: 31.55,
        reviewProd: true,
        buyAgain: true,
        viewItem: true,
        prodSupport: false
      }
    ]
  },
  {
    orderTwoItems: [
      {
        placed: 'July 19, 2020',
        total: 44.53,
        shipsTo: 'JS Masher',
        orderNum: 113 - 9984268 - 1280257,
        dod: 'Jul 20, 2020',
        title: 'The Timeless Way of Building',
        author: 'Alexander, Christopher',
        returnDue: 'Aug 19, 2020',
        cost: 41.33,
        reviewProd: true,
        buyAgain: true,
        viewItem: true,
        prodSupport: false
      }
    ]
  },
  {
    orderThreeItems: [
      {
        placed: 'July 4, 2020',
        total: 17.22,
        shipsTo: 'JS Masher',
        orderNum: 114 - 2875557 - 9059409,
        dod: 'Jul 7, 2020',
        title: 'Gamecube Controller Adapter, Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        returnDue: 'Aug 5, 2020',
        cost: 15.98,
        reviewProd: true,
        buyAgain: true,
        viewItem: true,
        prodSupport: false
      }
    ]
  },
  {
    orderFourItems: [
      {
        placed: 'July 3, 2020',
        total: 138.93,
        shipsTo: 'JS Masher',
        orderNum: 113 - 2883177 - 2648248,
        dod: 'Jul 5, 2020',
        title: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        returnDue: 'Aug 4, 2020',
        cost: 94.95,
        reviewProd: true,
        buyAgain: true,
        viewItem: true,
        prodSupport: false
      },
      {
        placed: 'July 3, 2020',
        total: 138.93,
        shipsTo: 'JS Masher',
        orderNum: 113 - 2883177 - 2648248,
        dod: 'Jul 5, 2020',
        title: 'The Art of Sql',
        author: 'Faroult, Stephane',
        returnDue: 'Aug 4, 2020',
        cost: 33.99,
        reviewProd: true,
        buyAgain: true,
        viewItem: true,
        prodSupport: false
      }
    ]
  }
];

console.log('vale of cost of the second item in the last order:', orderHistory[3].orderFourItems[1].cost);
