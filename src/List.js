
    import  checkersLogo from './images/superMarkets/checkers.jpg'
    import cambridgeLogo from './images/superMarkets/cambridge.png'
    import boxerLogo from './images/superMarkets/logo-boxer.png'
    import pnpLogo from './images/superMarkets/pnp.png'
    import  shopriteLogo from  './images/superMarkets/shoprite.png'
    import sheckersHyperLogo from './images/superMarkets/supermarket-hyper.jpg'

    import daniel from './images/avatars/daniel.jpg'
    import kristy from './images/avatars/kristy.png'
    import veronika from './images/avatars/veronika.jpg'
    import molly from './images/avatars/molly.png'



    const  generateVoteCount = ()=> {
      return Math.floor((Math.random() * 50) + 15);
    }
    const superMarketList = [
      {
        id: 1,
        title: 'Checkers',
        description: 'Checkers is a FMCG retailer owned by Shoprite that operates in Southern Africa. Checkers currently has 37 Checkers Hypers and 202 Checkers supermarkets operating in Botswana, South Africa and Namibia.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: daniel,
        superMarketImageUrl: checkersLogo,
      },
      {
        id: 2,
        title: 'Cambridge',
        description: 'Earn points when you shop at your favorite Cambridge supermarket store.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: kristy,
        superMarketImageUrl: cambridgeLogo,
      },
      {
        id: 3,
        title: 'Boxer',
        description: 'We already have your shipping address.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: veronika,
        superMarketImageUrl: boxerLogo,
      },
      {
        id: 4,
        title: 'Pick and Pay',
        description: 'High-minded or absent-minded? You decide.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: molly,
        superMarketImageUrl: pnpLogo,
      },
    ];
  
    export default { superMarketList: superMarketList };
  
  