import * as React from 'react';


import { observer } from 'mobx-react';
import { store } from '../../store/store';


@observer export class Home extends React.Component {
    render(){
        return <div>  
     <form action="" onSubmit=  {(e)=>{
            e.preventDefault();
            store.sendUser();
          
} }>
            <input type="text" placeholder="name" onChange={(e) => store.handleInput(e.target.value, 'name')}  />
            <input type="text" name="" id="" placeholder="lastname" onChange={(e) => store.handleInput(e.target.value, 'lastname')} />
            <input type="number" name="" id="" placeholder="born" onChange={(e) => store.handleInput(e.target.value, 'born')} />
            <button type="submit" >Registrar usuario</button>
</form>     

    {store.read('users')}
        </div>
    }
}
