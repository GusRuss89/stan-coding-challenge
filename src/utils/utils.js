import { TITLES_PER_PAGE, MIN_RELEASE_YEAR } from '../constants'

export const filterTitles = (titles, num = TITLES_PER_PAGE, minYear = MIN_RELEASE_YEAR) => {
  const movies = []
  const series = []
  titles
    .filter(title => title.releaseYear >= minYear)
    .sort((a, b) => {
      const aTitle = a.title.toUpperCase()
      const bTitle = b.title.toUpperCase()
      return aTitle < bTitle ? -1 : bTitle < aTitle ? 1 : 0
    })
    .some(title => {
      if (title.programType === 'series' && series.length < num) {
        series.push(title)
      } else if (title.programType === 'movie' && movies.length < num) {
        movies.push(title)
      }
      return movies.length === num && series.length === num
    })
  return { movies, series }
}
