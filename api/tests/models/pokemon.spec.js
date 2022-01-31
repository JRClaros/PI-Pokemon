const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('Debería arrojar un error si el nombre es nulo', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('Requiere un nombre válido')))
          .catch(() => done());
      });
      it('Debería funcionar cuando es un nombre válido', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
    });
    describe('hp', () => {
      it('Debería arrojar un error si hp es nulo', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('Requiere hp válido')))
          .catch(() => done());
      });
      it('Debería funcionar cuando es un hp válido', () => {
        Pokemon.create({ hp: 45 });
      });
    });
    describe('attack', () => {
      it('Debería arrojar un error si attack es nulo', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('Requiere attack válido')))
          .catch(() => done());
      });
      it('Debería funcionar cuando es un attack válido', () => {
        Pokemon.create({ attack: 67 });
      });
    });
    describe('defense', () => {
      it('Debería arrojar un error si defense es nulo', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('Requiere defense válido')))
          .catch(() => done());
      });
      it('Debería funcionar cuando es un defense válido', () => {
        Pokemon.create({ defense: 68 });
      });
    });
    describe('speed', () => {
      it('Debería arrojar un error si speed es nulo', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('Requiere speed válido')))
          .catch(() => done());
      });
      it('Debería funcionar cuando es un speed válido', () => {
        Pokemon.create({ speed: 68 });
      });
    });
    describe('height', () => {
      it('Debería arrojar un error si height es nulo', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('Requiere height válido')))
          .catch(() => done());
      });
      it('Debería funcionar cuando es un height válido', () => {
        Pokemon.create({ height: 87 });
      });
    });
    describe('weight', () => {
      it('Debería arrojar un error si weight es nulo', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('Requiere weight válido')))
          .catch(() => done());
      });
      it('Debería funcionar cuando es un weight válido', () => {
        Pokemon.create({ weight: 65 });
      });
    });
    describe('image', () => {
      it('Debería arrojar un error si image es nulo', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('Requiere image válido')))
          .catch(() => done());
      });
      it('Debería funcionar cuando es un image válido', () => {
        Pokemon.create({ image: 'https://i.pinimg.com/564x/50/c0/5f/50c05f2225470ff6c2d84d5e5ea40a1e.jpg' });
      });
    });
  });
});
