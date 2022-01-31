import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store/index'
import { render } from '@testing-library/react';
import App from '../App';
import PokemonCreate  from '../components/PokemonCreate.jsx';

describe('PokemonCreate', () => {

           //-----------------------label--------------------//
    it('El formulario debe tener un label que diga: "Nombre Pokemon:"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[0]
      expect(element.innerHTML).toBe('Nombre Pokemon:');
  });
    it('El formulario debe tener un label que diga: "Imagen:"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[1]
      expect(element.innerHTML).toBe('Imagen:');
    });
    it('El formulario debe tener un label que diga: "HP:"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[2]
      expect(element.innerHTML).toBe('HP:');
    });
    it('El formulario debe tener un label que diga: "Fuerza:"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[3]
      expect(element.innerHTML).toBe('Fuerza:');
    });
    it('El formulario debe tener un label que diga: "Defensa:"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[4]
      expect(element.innerHTML).toBe('Defensa:');
    });
    it('El formulario debe tener un label que diga: "Velocidad:"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[5]
      expect(element.innerHTML).toBe('Velocidad:');
    });
    it('El formulario debe tener un label que diga: "Altura:"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[6]
      expect(element.innerHTML).toBe('Altura:');
    });
    it('El formulario debe tener un label que diga: "Peso:"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[7]
      expect(element.innerHTML).toBe('Peso:');
    });
    it('El formulario debe tener un label que diga: "Tipos de Pokemon:"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[8]
      expect(element.innerHTML).toBe('Tipos de Pokemon:');
    });
              //---------------------inputs------------------------//
    it('El formulario debe tener un input con name "name" y type "text"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[0]
      expect(element.type).toBe('text');
      expect(element.name).toBe('name');
    });

    it('El formulario debe tener un input con name "image" y type "text"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[1]
      expect(element.type).toBe('text');
      expect(element.name).toBe('image');
    });
    it('El formulario debe tener un input con name "hp" y type "text"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[2]
      expect(element.type).toBe('text');
      expect(element.name).toBe('hp');
    });
    it('El formulario debe tener un input con name "attack" y type "text"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[3]
      expect(element.type).toBe('text');
      expect(element.name).toBe('attack');
    });
    it('El formulario debe tener un input con name "defense" y type "text"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[4]
      expect(element.type).toBe('text');
      expect(element.name).toBe('defense');
    });
    it('El formulario debe tener un input con name "speed" y type "text"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[5]
      expect(element.type).toBe('text');
      expect(element.name).toBe('speed');
    });
    it('El formulario debe tener un input con name "height" y type "text"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[6]
      expect(element.type).toBe('text');
      expect(element.name).toBe('height');
    });
    it('El formulario debe tener un input con name "weight" y type "text"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[7]
      expect(element.type).toBe('text');
      expect(element.name).toBe('weight');
    });
})