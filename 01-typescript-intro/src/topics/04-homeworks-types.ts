interface SuperHero{
    name:string,
    age:number,
    //siempre que tenemos una clase que dentro tiene un objeto es recomendable que creeemos una interfaz para ese objeto
    address:Address,
    showAddress:()=>string
}

interface Address{
    calle:string,
    ciudad:string,
    pais:string,
}




const superHeroe: SuperHero ={
    name:'Spiderman',
    age:30,
    address:{
        calle:'Main St',
        ciudad:'NY',
        pais:'USA'
    },
    showAddress(){
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }


}
const address = superHeroe.showAddress();
console.log( address );

