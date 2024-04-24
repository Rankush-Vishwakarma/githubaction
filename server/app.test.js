const supertest = require('supertest')
const app = require('./server')

//IT20255824 - S.M.D.N.S.Senarath
describe('Message', () => {

  describe('Load the Messages', () => {
    it('Should return 200', async () => {
      const grpId = 'id29';
      const response = await supertest(app).get(`/message/${grpId}`);
      expect(200).toBe(response.status);
    })
  })
  
  describe('Add Message', () => {
    it('Should return 200', async () => {
      const response = await supertest(app).post('/message/add').send({
        gid: 'Test',
        author: 'Test author',
        email: 'test@test.com',
        message: 'Test Message',
        time: '00:00',
      });
      expect(200).toBe(response.status);
    })
  })
})

//IT20256814 - P.M.Kekulandara
describe('Panel Member', () => {
   describe('Get schedule details', () => {
     it('Should return 200', async () => {
       const grpId = 'id29';
       const response = await supertest(app).get(`/schedule/get/${grpId}`);
       expect(200).toBe(response.status);
     })
   })

   describe('Add Shedules', () => {
     it('Should return 200', async () => {
       const response = await supertest(app).post('/schedule/add').send({
         evaluation1: 'evaluation 1',
         evavlutaion2: 'evaluation 2',
         final_evaluation: 'final evaluation',
         groupID: '1',
         link1: 'test1.com',
         link2: 'test2.com',
         linkF: 'testF.com',
       });
       expect(200).toBe(response.status);
     })
   })
})

//IT20226282 - K.D.H.N.D.A.T.Divarathna
describe('User', () => {

  describe('Get User by ID', () => {
     it('Should return 200', async () => {
       const Id = '62922dd5080d6eac09755328';
       const response = await supertest(app).get(`/user/u/${Id}`);
       expect(200).toBe(response.status);
     })
   })

  describe('Add User', () => {
     it('Should return 200', async () => {
       const response = await supertest(app).post('/user/add').send({
        name: 'User',
        position: 'test',
        email: 'test.gmail.com',
        phone: '0771234567',
        address: 'No.1, test',
        id: 'id test',
        specialization: 'specialization test',
        password: 'test',
       });
       expect(200).toBe(response.status);
     })
   })
})

//IT20279370 - Y.M.W.H.C. Samarasekara
describe('Files', () => {

  describe('Get Files', () => {
     it('Should return 200', async () => {
       const response = await supertest(app).get(`/adminfile/get`);
       expect(200).toBe(response.status);
     })
   })

  describe('Upload files', () => {
     it('Should return 200', async () => {
       const response = await supertest(app).post('/adminfile/add').send({
        specialization: 'Software Engineering',
        description: 'research topic for final year Student ',
        filepdf: 'End Semester Examination time table_S1 - 2022 June_14_05_22.pdf',
        ev1doc: '2022-01-01',
        ev1pre_start: '2022-01-01',
        ev1pre_end: '2022-01-01',
        ev2doc: '2022-01-01',
        ev2pre_start: '2022-01-01',
        ev2pre_end: '2022-01-01',
        ev3doc: '2022-01-01',
        ev3pre_start: '2022-01-01',
        ev3pre_end: '2022-01-01',
       });
       expect(500).toBe(response.status);
     })
   })
})
