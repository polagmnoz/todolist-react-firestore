import * as React from 'react';

import './Root.scss';
import { observer } from 'mobx-react';
import { store } from '../../store/store';
import {Home} from '../Home/Home'

@observer export class Root extends React.Component {
    render(){
        return <div>  
        <Home />
{
    store.create('santi','ortiz',1998)
}}
        </div>
    }
}

























