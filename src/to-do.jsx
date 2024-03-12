import { useState } from "react";     
import {v4 as uuidv4} from 'uuid';    
        


export default function Todo(){
let [todos,setTodos]=useState([{task:"sample task",id:uuidv4(),isdone:false}]);
let [newtodo,setNewtodo]=useState([""]);    



let addnewtask=(e)=>{  

  e.preventDefault();//after this use they are avoid a refresh the page .

  setTodos((prevtodos)=>{
   return[...prevtodos,{task:newtodo,id:uuidv4(),isdone:false}]
  }); 



   setNewtodo("");  

};    



let updatevalue=(event)=>{ 
 
  setNewtodo(event.target.value);
} 

let donetask=(id)=>{
  setTodos((todos)=>todos.map((todo)=>{  
    if(todo.id==id){                      
      return{
        ...todo,
        isdone:true,
      };
    }
    else{
      return todo;
    }
  })

  )
}; 

let deletetask=(id)=>{
setTodos(todos.filter((todo)=>todo.id!=id));   
}



 
return(<>
     
     <div> 
      <form onSubmit={addnewtask}>
      <input placeholder="add a new task" value={newtodo} onChange={updatevalue} required></input>
      <button >add</button>
      </form>  

      <ul>{
        todos.map((todo)=>(

          <li key={todo.id}>
              <span style={todo.isdone ? {textDecorationLine:"line-through"}:{}}>  {todo.task} </span> &nbsp;&nbsp;&nbsp;
              <button onClick={()=>donetask(todo.id)}>done</button> &nbsp;&nbsp;
              <button onClick={()=>deletetask(todo.id)}>delete</button>
              <hr></hr>
          </li>           

        ))
    
        
        }
      </ul>
     </div>

</>);


}









// export default function Todo(){  

//         let [todos,setTodos]=useState([{task:"sample task",id:uuidv4(),isdone:false}]);  
//         let [newtodo,setNewtodo]=useState([""]);   // this is use for because your are creating array in program if you not use this then you are send the data in backend no need there 
         

//        let addNewtask=()=>{
//         setTodos((prevtodos)=>{ 
//         return [...prevtodos,{task:newtodo,id:uuidv4(),isdone:false}] // this curly bracket use for the new task is create not updating the value or incerese a count buuton .
//         }); 
//         setNewtodo(""); 
//        }; 

//         let updatetodovalue=(event)=>{ 
          
//           setNewtodo(event.target.value);
//         }; 

//         let deletetodo=(id)=>{
//             setTodos(todos.filter((todo)=>todo.id!=id));
//         }

//         let uppercaseall=()=>{ 
//           setTodos((prevtodos)=>prevtodos.map((todo)=>{
//             return{
//               ...todo,
//               task:todo.task.toUpperCase(),
//             };
//           }))
//         } 

//         let uppercaseone=(id)=>{
//           setTodos((prevtodos)=>prevtodos.map((todo)=>{
//            if(todo.id==id){ 
//             return{
//               ...todo,
//               task:todo.task.toUpperCase(), 
//             };}
//             else{
// return todo;
//             }
//           }))
//         };


//         let done=(id)=>{
//           setTodos((prevtodos)=>prevtodos.map((todo)=>{
//             if(todo.id==id){
//               return{
//                 ...todo,
//                 isdone:true,
//               };
//             }
//             else{
//               return todo;
//                           }

//           }))
//         }; 

//         let doneall=()=>{
//           setTodos((prevtodos)=>prevtodos.map((todo)=>{
//             return{  
//               ...todo,
//               isdone:true,
//             };
//           }))
//         } 


// return(
//   <> 
    
//    <div> 
//     <input placeholder="add a task" value={newtodo} onChange={updatetodovalue} required></input> 
//     <button onClick={addNewtask}> add task</button> 
//     <br></br>
//     <br></br> 
//     <br></br>
//     <h4>to-do-list</h4>    
//     <ul> 
//         {

//             todos.map((todo)=>( 

//                 <li key={todo.id}>
//                   <span style={todo.isdone ? {textDecorationLine:"line-through"}:{}}>  {todo.task} </span> 
//                   &nbsp;&nbsp;&nbsp;
//                   <button onClick={()=>deletetodo(todo.id)}>delete</button>  
//                   <button onClick={()=>uppercaseone(todo.id)}>uppercase one</button>   
//                   <button onClick={()=>done(todo.id)}>done </button> 

//                 </li> 
//             ))  
//         }
//     </ul> 
//     <br></br>
//     <button onClick={uppercaseall}> 
//        uppercaseall
//     </button>

//     <button onClick={doneall}> 
//        doneall
//     </button>
//     </div> 

//   </>
// );

// }