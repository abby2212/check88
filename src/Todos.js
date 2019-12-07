import React from 'react';
const Todos =({todolist}) =>
{

   const modification = e =>
   {
      e.target.style.textDecoration = 'line-through';
      
   }
  
   const todoslists = (todolist.length) ? (todolist.map(
       todos =>
       {
           return(
           <div key={todos.id}>
             <p onClick={modification} >{todos.contenu}</p>
           </div>)
       }


   )) : ( <p> rien a faire </p>);

return(
   <div>
{todoslists}
   </div>
);

}


export default Todos;
