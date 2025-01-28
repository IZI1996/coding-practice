class Movies{
    constructor(){
       this.input=document.getElementById('movieInput')
       this.addBtn=document.getElementById('addMovie')
       this.remove=document.getElementById('resetMovies')
       this.search=document.getElementById('searchMovie')
       this.list=document.getElementById('movieList')
    //    event add movie
       this.addBtn.addEventListener('click', () => this.getMovie())
       this.remove.addEventListener('click', () => this.rest())
       this.search.addEventListener('click', () => this.find())

    

    }
    getMovie(){
        const data=this.input.value;
        if( data==''){
            alert('enter movie name')
        }
        this.listMovie(data)
    }


    listMovie(movie){
        const para = document.createElement("p");
        para.textContent=movie;
        this.list.appendChild(para);
    }
    rest(){
      this.list.textContent=''
    }
    find(){
        const dataMovie=Array.from(this.list.children)
        const movies=this.input.value.toLowerCase()
        const moviSerche= dataMovie.find(v => v.textContent.toLowerCase() == this.input.value)
if(moviSerche){
    alert(moviSerche.textContent)
}else{
    alert('there is nothing')

            
        }
    }
    
}
const app=new Movies