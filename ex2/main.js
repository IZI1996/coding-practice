const btn=document.getElementById('push')
const text=document.getElementById('input')
const tasks=document.getElementById('tasks')
btn.addEventListener('click',function(){
    if(text.value==""){
        alert('please anter your task')
    }else{
       tasks.innerHTML+=`
          <div class="task">
              <span id="taskname">
            ${text.value}
        </span>
         <button class='delete'>Remove</button>
        </div>
       `

    }
})


class ToDo{
    constructor(){
        this.btn=document.getElementById('push')
this.text=document.getElementById('input')
this.tasks=document.getElementById('tasks')
    }
    input(){
        const inputValue=this.text.value;
        if(inputValue==''){
            console.log('whrite something')
        }
       
    }
    
}