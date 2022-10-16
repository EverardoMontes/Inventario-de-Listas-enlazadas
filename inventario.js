class Inventario{
    constructor(){
        // 0,1
        this.primero = null;
    }
    agregar(nuevoProducto){ // LISTA ENLAZADA LISTO
        if (this.primero==null)
        this.primero=nuevoProducto;
      else{
        let temp=this.primero;
        while (temp.siguiente!=null)
          temp=temp.siguiente;
        temp.siguiente=nuevoProducto;
      }
      console.log(nuevoProducto);
    }
    info(){
        return codigo, nombre, cantidad, costo;
    }
    eliminar(codigo){ //LISTA ENLAZADA LISTO    
        if(this.primero.codigo == codigo){
            this.primero = this.primero.siguiente;
            return;
        }
        else{
            let aux = this.primero;
            while(aux != null){
                if(aux.siguiente.codigo == codigo){
                    aux.siguiente = aux.siguiente.siguiente;
                    return;
                }
                else{
                    aux = aux.siguiente;
                }
            }
        }
    }
    insertar(nuevoProducto, posicion){ //Lista enlazada TERMINADO
        
         let aux = this.primero;
        let contador= Number(2);
        console.log("intento posicion:" + posicion);
        if(posicion==1){
            nuevoProducto.siguiente = aux;
            this.primero= nuevoProducto;
            console.log(this.primero.siguiente);
            return;
        }
        while(aux!=null){
            if(contador==posicion){
                let aux2 = aux;
                nuevoProducto.siguiente = aux.siguiente;
                aux.siguiente= nuevoProducto;
                aux = aux.siguiente;
                console.log(aux);
                return;
            }
            else{
                contador++;
                aux=aux.siguiente
            }
        } 

    }
    listado(){ //LISTA ENLAZADA LISTO
        let res="";
      let aux=this.primero;
      while (aux!=null){
	      res += aux.datos() + " " + "<br>";
  	    aux=aux.siguiente;
      }
      return res;
    }
    
    
    listadoInverso(){ // LISTA ENLAZADA LISTO
        let res = "";
      let aux = this.primero;
      let aux2;
      while(aux!=null){
        aux2 = res + "";
        res = "";
        res += aux.datos() + "<br> "+ aux2;

        aux = aux.siguiente
      }
      return res;
    }
    /*busquedaBinaria(codigo){
        let start = 0;
        let end = Number(this.productos.length)-1;
        let middle = Math.round((start+end/2));
        while(start<end){
            if(this.productos[middle].codigo ==codigo){
                return middle;
            }
            if(this.productos[middle].codigo<codigo){
                if(this.productos[end].codigo==codigo){
                    return end;
                }
                start = middle;
                middle = Math.ceil((start+end)/2);
                
            }
            if(this.productos[middle].codigo>codigo){
                if(this.productos[start].codigo==codigo){
                    return start;
                }
                end = middle;
                middle = Math.ceil((start+end)/2);
            }
            if(middle == start || middle == end){
                return null;
            }
        }
    } */
    buscar(codigo){ //LISTA ENLAZADA LISTO
        if(this.primero.codigo == codigo){
            return this.primero.datos();
        }
        else{
            let aux = this.primero;
            while(aux!= null){
                if(aux.codigo == codigo){
                    return aux.datos();
                }
                else{
                    aux= aux.siguiente;
                }
            }
        }
    }
}