import React from 'react';
import logoLoading from '../img/pokemon.gif';

function Loading() {
    return (
        <div className='loading'>
            <img src={logoLoading} alt='Cargando...'/>
        </div>
    )
}

export default Loading;
