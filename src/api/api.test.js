import api from './api'
import fetchMock from 'fetch-mock'
describe('API', () => {
  describe('fetch', () => {
    describe('when it called', () => {
      fetchMock.get('www.google.com', 200)
      fetchMock.get('https://pokeapi.co/api/v2/', 200)

      it('should try to fetch from Poke-Api', () => {
        api.fetchPoke()
        const lastCalledURL = fetchMock.lastUrl()

        expect(lastCalledURL).toEqual('https://pokeapi.co/api/v2/')
      })
    })
  })
})
