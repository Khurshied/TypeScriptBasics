import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/todos/1";


// declare interface to specify the Response object data type to enable strong typing
interface Todo{
  id:number;
  title:string;
  completed:boolean;
}

axios.get(url).then(response =>{
  const todo = response.data as Todo;
   
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  
  logTodo(id,title,completed);
  
});

const logTodo = (id:number, title:string, completed:boolean) => {
  console.log(`
  The to do with Id : ${id}
  Has a title of : ${title}
  Is it finsihed: ${completed}
`);
}