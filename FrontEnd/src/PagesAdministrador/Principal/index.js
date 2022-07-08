import React from 'react';
import { TablaClubes} from '../../Components';
import { BarraSuperiorAdmin } from '../../ComponentsAdmin';

export default function Principal() {
    return (
        <div>
            <BarraSuperiorAdmin/>
            <br/>
            <TablaClubes/>
            <br/>
        </div>
    )
}
