import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    global.fetch.resetMocks();
  });

  test('Llamar una API y retornar datos', (done) => {
    global.fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://www.google.com').then((response) => {
      expect(response.data).toEqual('12345');
      done();
    });

    expect(global.fetch.mock.calls[0][0]).toEqual('https://www.google.com');
  });
});
