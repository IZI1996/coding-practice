class CounterWater{
    constructor(){
        this.input=document.getElementById('waterInput')
        this.addBtn=document.getElementById('addWater')
        this.remove=document.getElementById('resetWater')
        this.counter=document.getElementById('totalWater')
        this.total=0;
        this.addBtn.addEventListener('click', () => this.getInput());
        this.remove.addEventListener('click', () => this.rest());

    }
    getInput(){
        let inputva=this.input.value;
        if(inputva ==''){
            console.log('whriten something')
        }
        this.sum(Number(inputva))
        this.display()
      
        this.input.value='';
    }
    sum(elm){
        return this.total=this.total+elm; 
    }
    display(){
        this.counter.textContent=this.total;
    
    }
    rest(){
        this.total=0
        this.display()
    }
}
const app = new CounterWater;

