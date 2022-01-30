import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getType, postPokemon } from '../actions/index.js';
import '../styles/PokemonCreate.css';
import imgCreate from '../img/pokemonLogo.png'


function validate(inputPokemon){
    let errors = {};

    let nameRequire = /^[a-zA-Z]+$/;
    let numeros = /^[0-9\b]+$/;
    let validateUrl = /\.(gif|jpeg|jpg|png)$/i;

    if(!inputPokemon.name || inputPokemon.name.length < 3){
        errors.name = 'Ingrese un nombre';
    }else if(!nameRequire.test(inputPokemon.name)){
        errors.name = 'Solo letras';
    }
    if(!inputPokemon.image){
        errors.image = 'Ingrese URL de una imagen';
    }else if(!validateUrl.test(inputPokemon.image)){
        errors.image = 'La imagen debe ser un formato de imagen'
    }
    if(!inputPokemon.hp || inputPokemon === 0) {
        errors.hp = 'Se requiere llenar este campo de Vida';
    }else if(!numeros.test(inputPokemon.hp)){
        errors.hp = 'Deben ser números positivos'
    }
    if(!inputPokemon.attack){
        errors.attack = 'Se requiere llenar este campo de Fuerza';
    }else if(!numeros.test(inputPokemon.attack)){
        errors.attack = 'Deben ser números positivos';
    }
    if(!inputPokemon.defense){
        errors.defense = 'Se requiere llenar este campo de Defensa';
    }else if(!numeros.test(inputPokemon.defense)){
        errors.defense = 'Deben ser números positivos';
    };
    if(!inputPokemon.speed){
        errors.speed = 'Se requiere llenar este campo de Velocidad';
    }else if(!numeros.test(inputPokemon.speed)){
        errors.speed = 'Deben ser números positivos';
    };
    if(!inputPokemon.height){
        errors.height = 'Se requiere llenar este campo de Altura';
    }else if(!numeros.test(inputPokemon.height)){
        errors.height = 'Deben ser números positivos';
    };
    if(!inputPokemon.weight){
        errors.weight = 'Se requiere llenar este campo de Peso';
    }else if(!numeros.test(inputPokemon.weight)){
        errors.weight = 'Deben ser números positivos';
    }
    if(!inputPokemon.types){
        errors.types = 'Debe seleccionar un tipo';
    }
    return errors;
}

export default function PokemonCreate(){
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);

    const [errors, setErrors] = useState({});
    const[inputPokemon, setInputPokemon] = useState({
        name   :'',
        image  :'',
        hp     :0,
        attack :0,
        defense:0,
        speed  :0,
        height :0,
        weight :0,
        types  :[],
    })

    const [inputPokeCopy, setInputPokeCopy] = useState({...inputPokemon})

    const handleChangeInput = (e) =>{
        if(!isNaN (parseInt(e.target.value) ))
        {
            setInputPokemon({
                ...inputPokemon,
                [e.target.name]: Number(e.target.value)
            })
            setErrors(validate({
                ...inputPokemon,
                [e.target.name]: Number(e.target.value)
            }))
        }
        else{
            setInputPokemon({
            ...inputPokemon,
            [e.target.name]: e.target.value
        })
        }
        setErrors(validate({
            ...inputPokemon,
            [e.target.name]: e.target.value
        }))
    }

    const handleSelect = (e) => {
        if(inputPokemon.types?.indexOf(Number(e.target.value)) === -1){
            setInputPokemon({  
                ...inputPokemon,
                types:[...inputPokemon.types, Number(e.target.value)]
            })
            setErrors(validate({
                ...inputPokemon,
                types:[...inputPokemon.types, Number(e.target.value)]
            }))
        }
        else{
            alert('Este tipo ya existe')
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
       setErrors(validate(errors));
       if(Object.keys(errors).length !== 0){
           alert('Debe re-llenar todos los campos')
        }else{
            if(inputPokemon.types.length === 0) return setErrors('Debe seleccionar un tipo de Pókemon')
            else {
                alert('Enviando el formulario para Grabar')
                dispatch(postPokemon(inputPokemon))
                alert('Pokemon ha sido Creado con Éxito en la Base de Datos')
                setInputPokemon({
                name   :'',
                image  :'',
                hp     :0,
                attack :0,
                defense:0,
                speed  :0,
                height :0,
                weight :0,
                types: [],
                })
                // alert('Pokemon ha sido Creado con Éxito en la Base de Datos')
                setErrors(validate({
                    ...inputPokemon,
                    errors:''
                }))
            };
        }    
    }

    const handleDeleteType = (e) => {
        e.preventDefault();
        const nuevoInputPoke = inputPokemon.types.splice(e.target.value,1)
        setInputPokeCopy(nuevoInputPoke)
    }

    const pokeIdNam = (id)=>{
        let findName = types.find(t => t.id === id)
        if(findName) return findName.name
      }
    useEffect(() => {
        dispatch(getType())
   }, [])

   return (
    <div className='GlobalCreate'>
            <Link to= '/pokemons'>
                <button className='BtnBack'>Regresar</button>
            </Link>
            <div className='Form'>
                <div className='LogoForm'>
                    <img className='LogoCreate'src={imgCreate} alt='not-found'/>
                </div>
                <h1 className='TitleCreate'>Crea tu pokemon</h1>
                <form onSubmit={handleSubmit}>
                    <div className='InputForm'>
                        <div className='InputLabel'>
                            <div className='LabelCreate'>
                                <label >Nombre Pokemon:</label>
                            </div>
                            <div className='InputCreate'>
                                <input
                                    
                                    className='InputCreateB'
                                    type='text' 
                                    value={inputPokemon.name} 
                                    name='name' 
                                    placeholder='Ingrese nombre'
                                    onChange = {handleChangeInput}
                                />
                                    {errors.name && <p className='Danger'>{errors.name}</p>
                                    }
                            </div>
                        </div>
                        <div className='InputLabel'>
                            <div className='LabelCreate'>
                                <label >Imagen:</label>
                            </div>
                            <div className = 'InputCreate'>
                                <input 
                                    className = 'InputCreateB'
                                    type='text'
                                    value={inputPokemon.image} 
                                    name='image' 
                                    placeholder='Inserte Imagen'
                                    onChange = {handleChangeInput}
                                />
                                {errors.image && <p className='Danger'>{errors.image}</p>}
                            </div>
                        </div>
                        <div className='InputLabel'>
                            <div className='LabelCreate'>
                                <label >HP:</label>
                            </div>
                            <div className = 'InputCreate'>
                                <input
                                    className = 'InputCreateB' 
                                    type='text'
                                    value={inputPokemon.hp} 
                                    name='hp' 
                                    onChange = {handleChangeInput}
                                />
                                {errors.hp && (
                                    <p className='Danger'>{errors.hp}</p>
                                )}
                            </div>
                        </div>
                        <div className='InputLabel'>
                            <div className='LabelCreate'>
                                <label >Fuerza:</label>
                            </div>
                            <div className = 'InputCreate'>
                                <input 
                                    className = 'InputCreateB'
                                    type='text' 
                                    value={inputPokemon.attack} 
                                    name='attack' 
                                    onChange = {handleChangeInput}
                                />
                                {errors.attack && (<p className='Danger'>{errors.attack}</p>)}
                            </div>
                        </div>
                        <div className='InputLabel'>
                            <div className='LabelCreate'>
                                <label >Defensa:</label>
                            </div>
                            <div className = 'InputCreate'>
                                <input 
                                    className = 'InputCreateB'
                                    type='text'
                                    value={inputPokemon.defense} 
                                    name='defense' 
                                    onChange = {handleChangeInput}
                                />
                                {errors.defense && (<p className='Danger'>{errors.defense}</p>)}
                            </div>
                        </div>
                        <div className='InputLabel'>
                            <div className='LabelCreate'>
                                <label >Velocidad:</label>
                            </div>
                            <div className = 'InputCreate'>
                            <input 
                                className = 'InputCreateB'
                                type='text' 
                                value={inputPokemon.speed} 
                                name='speed' 
                                onChange = {handleChangeInput}
                            />
                            {errors.speed && (<p className='Danger'>{errors.speed}</p>)}
                            </div>
                        </div>
                        <div className='InputLabel'>
                            <div className='LabelCreate'>
                                <label >Altura:</label>
                            </div>
                            <div className = 'InputCreate'>
                                <input
                                    className = 'InputCreateB'
                                    type='text' 
                                    value={inputPokemon.height} 
                                    name='height' 
                                    onChange = {handleChangeInput}
                                />
                                {errors.height && (<p className='Danger'>{errors.height}</p>)}
                            </div>
                        </div>
                        <div className='InputLabel'>
                            <div className='LabelCreate'>
                                <label >Peso:</label>
                            </div>
                            <div className = 'InputCreate'>
                                <input 
                                    className = 'InputCreateB'
                                    type='text'
                                    value={inputPokemon.weight} 
                                    name='weight' 
                                    onChange = {handleChangeInput}
                                />
                                {errors.weight && (<p className='Danger'>{errors.weight}</p>)}
                            </div>
                        </div>
                        <div className='InputLabel'>
                            <label className='LabelCreate'>Tipos de Pokemon:</label>
                            <select key='selectPoke'className = 'option' onChange={handleSelect}>
                                <option value='' disabled='true' selected>Tipos de pokemon</option>
                                {types?.map((t) => 
                                    <option 
                                        value= {t.id}
                                        key={t.id}
                                        >{t.name}
                                    </option>
                                )}
                            </select>
                            <ul className='UlForm'>
                                <li className='LiForm'>{inputPokemon.types?.map(t => 
                                    <div className='List'>
                                    <button className='BtnLista' onClick = {handleDeleteType}> {pokeIdNam(t)}</button>                                      
                                    </div>)}
                                </li>
                            </ul>
                        </div>
                     
                            <button className='BtnSubmit'type='submit'>Crear Pokemon</button>
                        
                    </div>
                </form>
            </div>
    </div>
)
}