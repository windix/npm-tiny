const tiny = require('../src')

describe('test tiny', () => {
  it('removes spaces for the input string', () => {
    expect(tiny('hello world')).toEqual('helloworld')
  })

  it('throws exception if the input is not string', () => {
    expect(() => {
      tiny(5)
    }).toThrow('tiny expects a string!')
  })
})
