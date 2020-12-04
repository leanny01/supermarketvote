
     const  generateVoteCount = ()=> {
      return Math.floor((Math.random() * 50) + 15);
    }
    const superMarketList = [
      {
        id: 1,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction expertise.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/daniel.jpg',
        superMarketImageUrl: 'images/superMarkets/image-aqua.png',
      },
      {
        id: 2,
        title: 'Supermajority: The Fantasy Congress League',
        description: 'Earn points when your favorite politicians pass legislation.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/kristy.png',
        superMarketImageUrl: 'images/superMarkets/image-rose.png',
      },
      {
        id: 3,
        title: 'Tinfoild: Tailored tinfoil hats',
        description: 'We already have your measurements and shipping address.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/veronika.jpg',
        superMarketImageUrl: 'images/superMarkets/image-steel.png',
      },
      {
        id: 4,
        title: 'Haught or Naught',
        description: 'High-minded or absent-minded? You decide.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/molly.png',
        superMarketImageUrl: 'images/superMarkets/image-yellow.png',
      },
    ];
  
    export default { superMarketList: superMarketList };
  
  