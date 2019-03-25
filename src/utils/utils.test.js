import { filterTitles } from './utils'

/**
 * Sample has:
 *  - a series older than 2010
 *  - a series released IN 2010
 *  - 3 series
 *  - 2 movies
 *  - non-alphabetical order
 */
const sample = [
  {
    title: 'Wolf Creek',
    programType: 'series',
    releaseYear: 2010
  },
  {
    title: 'Danny Collins',
    programType: 'movie',
    releaseYear: 2014
  },
  {
    title: 'American Dreams',
    programType: 'series',
    releaseYear: 2002
  },
  {
    title: 'No Activity',
    programType: 'series',
    releaseYear: 2015
  },
  {
    title: 'U2: Live in Paris',
    programType: 'movie',
    releaseYear: 2015
  }
]

describe('filterTitles', () => {
  const titles = filterTitles(sample)

  it('returns the correct format', () => {
    expect(typeof titles).toBe('object')
    expect(titles.hasOwnProperty('movies')).toBe(true)
    expect(titles.hasOwnProperty('series')).toBe(true)
    expect(Array.isArray(titles.movies)).toBe(true)
    expect(Array.isArray(titles.series)).toBe(true)
  })

  it('excludes old titles', () => {
    expect(titles.series.filter(title => title.releaseYear < 2010).length).toBe(0)
  })

  it('sorts alphabetically', () => {
    expect(titles.series[0].title).toBe('No Activity')
    expect(titles.movies[0].title).toBe('Danny Collins')
  })

  it('returns max number of titles in each array', () => {
    const sample2 = [
      ...sample,
      {
        title: 'Another legitimate movie',
        programType: 'movie',
        releaseYear: 2011
      },
      {
        title: 'Another legitimate series',
        programType: 'series',
        releaseYear: 2011
      }
    ]
    const { movies, series } = filterTitles(sample2, 2)
    expect(movies.length).toBe(2)
    expect(series.length).toBe(2)
  })
})
