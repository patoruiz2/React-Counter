import { shallow } from 'enzyme';
import  CounterApp  from '../CounterApp.js';
import React from 'react';


describe('Pruebas basicas en CounterApp',()=>{

    const wrapper = shallow(<CounterApp />);

    test('debe mostrar <CounterApp/> correctamente',()=>{

        expect(wrapper).toMatchSnapshot();

    });

    test('debe mostrar el valor por defecto de 100',()=>{

        

        const wrapper=shallow(<CounterApp value={100}/>);

        const valueH2 = wrapper.find('h2').text();
        
        expect(valueH2).toBe('100');

    });

    test('debe de incrementar con el boton +1',()=>{

       const wrapper = shallow(<CounterApp value={10}/>);

       wrapper.find('button').at(0).simulate('click').text();
       
       const counterText = wrapper.find('h2').text();
       
       

       expect(counterText).toBe('11');
    });

    test('debe de decrementar con el boton -1',()=>{

       
 
        wrapper.find('button').at(2).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();
        

 
        expect(counterText).toBe('9');
     });

     test('debe de resetear con el boton Reset',()=>{

        const wrapper = shallow(<CounterApp value={105}/>);
 
        wrapper.find('button').at(0).simulate('click');
        
        wrapper.find('button').at(0).simulate('click');
        
        wrapper.find('button').at(1).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();
        
        
 
        expect(counterText).toBe('105');
     });
});