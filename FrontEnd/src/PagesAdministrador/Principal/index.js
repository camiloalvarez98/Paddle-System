import React, {useEffect,useState} from 'react';
import { ContenedorAdmin , TablaClubes} from '../../Components';

export default function Principal() {

    return (
        <div>
            <ContenedorAdmin/>
            <br/>
            <TablaClubes/>
            <br/>
        </div>
        
    )
}
