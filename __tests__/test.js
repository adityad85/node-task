import jwt from 'jsonwebtoken';
import request from 'supertest';
import { patchJSON, getTransformationDetails, streamImage, transformImage, loginHelper } from '../src/helpers';
import constants from '../src/lib/constants';
import app from '../src/server';

describe('check if image comptroller gives the right results', () => {
  it('', () => {
    const expected = {
      hello: 'world',
    };
    const received = patchJSON({}, [{ op: 'add', path: '/hello', value: 'world' }]);
    expect(received).toEqual(expected);
  });
});

describe('check if the imageHelpers gives the right results', () => {
  it('', () => {
    const expected = {
      format: 'jpg',
      width: 50,
      height: 50,
    };
    const received = getTransformationDetails('jpg');
    expect(received).toMatchObject(expected);
  });

  it('', () => {
    const data = streamImage('https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg');
    expect(typeof (data)).toBe('object');
  });

  it('', () => {
    const data = streamImage('https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg');
    const imageDetails = getTransformationDetails('jpg');
    const newImage = transformImage(data, imageDetails);
    expect(typeof (newImage)).toBe('object');
  });
});

describe('', () => {
  it('', () => {
    const username = 'asi';
    const password = 'pass';
    const token = loginHelper(username, password);
    const received = jwt.verify(token, constants.JWT_ENCRYPTION);
    const newObj = {};
    newObj.username = received.username;
    newObj.password = received.password;
    expect(newObj).toMatchObject({ username, password });
  });
});

describe('/login', () => {
  afterAll(() => {
    app.server.close();
  });
  it('', async () => {
    const dummy = {
      username: 'asd',
      password: 'asdf',
    };
    const data = await request(app).post('/login').send(dummy);
    expect(data.body.success).toBe(true);
  });

  it('username not present', async () => {
    const dummy = {
      password: 'asdf',
    };
    const data = await request(app).post('/login').send(dummy);
    expect(data.body.error).toBe('error');
  });
});

describe('/users/object', () => {
  afterAll(() => {
    app.server.close();
  });
  const dummy = {
    username: 'adi',
    password: 'asdf',
  };
  let data;
  beforeAll(async () => {
    data = await request(app).post('/login').send(dummy);
  });
  it('', async () => {
    const dummyData = {
      object: {},
      patch: [
        { op: 'add', path: '/hello', value: 'world' },
      ],
    };
    await request(app).patch('/users/object')
      .set('Authorization', `Bearer ${data.body.token}`)
      .set('Content-Type', 'application/json')
      .send(dummyData)
      .expect({ success: true, updatedObj: { hello: 'world' } });
  });

  it('', async () => {
    const dummyData = {
      object: {},
      patch: { op: 'add', path: '/hello', value: 'world' },
    };
    const receive = await request(app).patch('/users/object')
      .set('Authorization', `Bearer ${data.body.token}`)
      .set('Content-Type', 'application/json')
      .send(dummyData);
    expect(receive.body.error).toBe('Patch must be an array of operations');
  });
});

