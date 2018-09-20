import { observable, action, computed } from 'mobx'; 
import db  from '../../config/firebaseConfig';
import { read } from 'fs';

class Store{ 

    @observable name:string = null;
    @observable lastname:string = null;
    @observable born: number = null;
    
    @action handleInput(value:any, input:string){
        if(input==='name'){
            this.name = value;
            console.log(this.name + 'hello');
        } 
        
        if(input==='lastname'){
            this.lastname = value;
            console.log(this.lastname + 'lastname');
        }

        if(input==='born'){
            this.born = value;
            console.log(this.born + 'born');
        }

    } 

    @action sendUser (){
        this.create(this.name,this.lastname,this.born);
    }

    @action  create(name:string, lastname:string, born:number){
        db.collection("users").add({
            first: name,
            last: lastname,
            born: born
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

    @action read(collection:string) {
        db.collection(collection).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}` + 'leoooooooooo'+ doc.get.name);
            });
        });
    }
}
export const store = new Store();