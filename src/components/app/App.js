import React, { useReducer, useEffect } from 'react'
import { getTitles } from '../../api/api'
import { filterTitles } from '../../utils/utils'
import { initialState, reducer } from '../../state'
import Header from '../layout/Header'
import PageTitle from '../layout/PageTitle'
import Footer from '../layout/Footer'
import Titles from '../titles/Titles'
import MenuItem from '../menu/MenuItem'
import styles from '../../theme/App.module.css'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function fetchTitles() {
      try {
        const allTitles = await getTitles()
        const filteredTitles = filterTitles(allTitles)
        dispatch({ type: 'update-titles', ...filteredTitles })
      } catch (e) {
        dispatch({ type: 'error', error: 'Oops, something went wrong...' })
      }
    }
    fetchTitles()
  }, [])

  const handleBack = () => dispatch({ type: 'navigate', display: 'menu' })

  const pageTitleMap = {
    menu: 'Popular Titles',
    series: 'Popular Series',
    movies: 'Popular Movies'
  }

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      <main className={styles.main}>
        <PageTitle
          title={pageTitleMap[state.display]}
          onBack={state.display === 'menu' ? null : handleBack}
        />

        <div className={styles.content}>
          <div className="page-width">
            <div className={styles.contentInner}>
              {state.status === 'loading' && (
                <span data-testid="loading" className={styles.loading}>
                  Loading...
                </span>
              )}

              {state.status === 'success' && (
                <div data-testid="successcontent">
                  {state.display === 'menu' ? (
                    <div data-testid="menu" className={styles.menu}>
                      <MenuItem
                        imgText="Series"
                        title="Popular Series"
                        onClick={() => dispatch({ type: 'navigate', display: 'series' })}
                      />
                      <MenuItem
                        imgText="Movies"
                        title="Popular Movies"
                        onClick={() => dispatch({ type: 'navigate', display: 'movies' })}
                      />
                    </div>
                  ) : (
                    <div data-testid="titles">
                      <Titles titles={state[state.display]} />
                    </div>
                  )}
                </div>
              )}

              {!['success', 'loading'].includes(state.status) && (
                <span data-testid="error" className={styles.error}>
                  {state.error || 'An unknown error occured...'}
                </span>
              )}
            </div>
          </div>
        </div>
      </main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default App
