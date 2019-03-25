const sample = [
  {
    title: 'Wolf Creek',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    programType: 'series',
    images: {
      'Poster Art': {
        url:
          'https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg',
        width: 1000,
        height: 1500
      }
    },
    releaseYear: 2016
  },
  {
    title: 'Danny Collins',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    programType: 'movie',
    images: {
      'Poster Art': {
        url:
          'https://streamcoimg-a.akamaihd.net/000/999/667/999667-PosterArt-65e6f88ede8bdcdad6d4d4f1549936ee.jpg',
        width: 1000,
        height: 1500
      }
    },
    releaseYear: 2014
  }
]

export const getTitles = jest.fn(() => {
  return new Promise(resolve => {
    process.nextTick(() => resolve(sample))
  })
})
