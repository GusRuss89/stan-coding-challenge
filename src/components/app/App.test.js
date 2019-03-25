import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, waitForElement, cleanup } from 'react-testing-library'
import App from './App'
import { getTitles } from '../../api/api'

jest.mock('../../api/api')
afterEach(cleanup)

function awaitMock() {
  const results = getTitles.mock.results
  const result = results[results.length - 1]
  if (result.isThrow) return Promise.resolve()
  return result.value
}

describe('App', () => {
  it('renders without crashing', done => {
    render(<App />)
    awaitMock().then(res => done())
  })

  it('passes snapshot', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('starts in loading state', done => {
    const { findByTestId } = render(<App />)
    expect(findByTestId('loading')).toBeTruthy()
    awaitMock().then(res => done())
  })

  it('fetches titles successfully', done => {
    const { getByTestId } = render(<App />)
    expect.assertions(2)
    expect(getTitles).toHaveBeenCalled()
    expect(async () => {
      await waitForElement(() => getByTestId('successcontent'))
    }).not.toThrow()
    awaitMock().then(res => done())
  })

  it('updates content on navigation', async done => {
    const { getByText, getByTestId } = render(<App />)
    await waitForElement(() => getByText('Popular Series'))
    fireEvent.click(getByText('Popular Series'))
    expect(async () => {
      await waitForElement(() => getByTestId('titles'))
    }).not.toThrow()
    awaitMock().then(res => done())
  })

  it('handles errors gracefully', done => {
    getTitles.mockImplementation(() => {
      throw new Error()
    })
    const { getByTestId } = render(<App />)
    expect.assertions(2)
    expect(getTitles).toHaveBeenCalled()
    expect(async () => {
      await waitForElement(() => getByTestId('error'))
    }).not.toThrow()
    awaitMock().then(res => done())
  })
})
