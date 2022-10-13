class Inventario{
    constructor(){
        // 0,1
        this.primero = null;
    }
    agregar(nuevoProducto){
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
    eliminar(codigo){
        let posicion = this.busquedaBinaria(codigo);
        if(posicion == null){
            return null;
        }
        let auxiliar = this.productos[posicion];
        for(let i= posicion+1;i<this.productos.length;i++){
            this.productos[i-1] = this.productos[i];
        }
        this.productos[this.productos.length-1]= auxiliar;
        this.productos.pop();
        
        /* let posicion = this.getPosicion(codigo);
        let siguientePosicion = posicion+1;
        if(posicion!=null){
            while(siguientePosicion<this.productos.length){
               // console.log("pepe");
                let auxiliar = this.productos[posicion];
                this.productos[posicion] = this.productos[siguientePosicion];
                this.productos[siguientePosicion] = auxiliar;
                posicion++;
                siguientePosicion++;
            }
            return this.productos.pop();
        }
        return null; */
    }
    listado(){
        let res="";
      let aux=this.primero;
      while (aux!=null){
	      res += aux.datos() + " " + "<br>";
  	    aux=aux.siguiente;
      }
      return res;
    }
    
    
    listadoInverso(){
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
    busquedaBinaria(codigo){
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
    }
    buscar(codigo){
        if(this.primero.codigo == codigo){
            return this.primero.datos();
        }
        else{
            let aux = this.primero;
            let encontrado;
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
    getPosicion(codigo){
        for(let i=0;i<this.productos.length;i++){
            if(codigo == this.productos[i].getCodigo()){
                return i;
            }
            else{
                return null;
            }
        } 
    }
}