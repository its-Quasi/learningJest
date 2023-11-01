const handlers = require('./index')

const axios = {
  get: jest.fn().mockResolvedValue({data : 1}),
  post: jest.fn().mockResolvedValue({data : 1}),
}

describe('Endpoints', () => {
  describe('users' , () => {
    it('GET PROOF',  async () => {
      const res = { send : jest.fn() } // spy
      await handlers({axios}).get({} , res)
      expect(res.send.mock.calls).toEqual([[1]])
    });

    it('POST PROOF',  async () => {
      const req = {
        body : 'req body'
      }
      const res = { send : jest.fn() } // spy
      await handlers({axios}).post(req , res)
      console.log(res.send.mock.calls[0])
    });
  })
})