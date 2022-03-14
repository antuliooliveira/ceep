export default class Categorias {
    constructor() {
        this.categorias = [];
        this._inscritos = []; /* Obsevable - array de elementos inscritos e que serão notificados*/
            }

    inscrever(func){
        this._inscritos.push(func);
         }
    
    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f!==func);
    }

    notificar() {
        this._inscritos.forEach(func =>{
             func(this.categorias);
            });
    }         
    adicionarCategoria(novaCategoria) {
        this.categorias.push(novaCategoria);
        this.notificar();

    }
}