class ListBook{
    constructor(){
        this.title=document.getElementById('title')
        this.author=document.getElementById('author')
        this.isbn=document.getElementById('ISBN')
        this.addBtn=document.getElementById('addTask')
        this.table=document.getElementById('table')
        this.addBtn.addEventListener('click', () => this.addBook());
        this.objectData= {};
        this.tablData=[]
    }

    objectList(){
       this.objectData = {
        title:this.title.value,
        author:this.author.value,
        isbn:this.isbn.value
       }
       return this.objectData
    }
   
addBook(){
   this.tablData=[this.objectList()]
   const data = JSON.parse(localStorage.getItem('book')) || [];
   data.push(this.tablData); // Add the new item
   localStorage.setItem('book', JSON.stringify(data));

for(const item of this.tablData){
    console.log(item.title)
  this.table.innerHTML+= `
  <tbody>
    <tr>
      <td>${item.title}</td>
      <td>${item.author}</td>
      <td>${item.isbn}</td>
    </tr>
  </tbody>
`;
}
}
}
const data=new ListBook
