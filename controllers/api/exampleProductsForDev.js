fakeApi = () => {
    return [
        {
          user: 'goldilocks',
          imageSrc: 'pexels-david-bartus-297933.jpg',
          title: 'cool shirt',
          description: 'just a tiny tear, otherwise great',
          price: 50.34,
          commentBox: [
            {
              text: 'looks great, still available?',
              user: 'coolbro34'
            }
          ]
        },
        {
          user: 'fourfooteyes',
          imageSrc: 'pexels-david-bartus-297933.jpg',
          title: 'ugly socks',
          description: 'so bad, please take them',
          price: .05,
          commentBox: [
            {
              text: 'why are you selling this?',
              user: 'goldilocks'
            }
          ]
        },
        {
          user: 'coolbro34',
          imageSrc: 'pexels-david-bartus-297933.jpg',
          title: 'sundress',
          description: 'it twirls',
          price: 15.00,
          commentBox: [
            {
              text: 'still ready to sell?',
              user: 'fourfooteyes'
            },
            {
                text: 'yes!',
                user: 'goldilocks'
              }
          ]
        }
    ];     
  }
