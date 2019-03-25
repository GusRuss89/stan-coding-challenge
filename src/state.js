export const initialState = {
  status: 'loading', // 'loading' | 'success' | 'error'
  display: 'menu', // 'menu' | 'movies' | 'series'
  error: null,
  movies: [],
  series: []
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'update-titles':
      return { ...state, status: 'success', movies: action.movies, series: action.series }
    case 'navigate':
      return { ...state, display: action.display }
    case 'error':
    default:
      return { ...state, status: 'error', error: action.error || 'An unknown error occurred...' }
  }
}
