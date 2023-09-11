/* export default function Todo({task,  isDone}){
    return (
        <li>Task: {task} </li>
    )
} */
/* condition 01 */
/* export default function Todo({task,  isDone}){
    if(isDone){
        return (
            <li>Finished: {task} </li>
        )
    }
    else{
        return (
            <li>Work one: {task} </li>
        )
    }
    
} */


/* condition 02 */
// export default function Todo({task,  isDone}){
// if(isDone) {return <li>Finished: {task} </li>}
//     return (
//         <li>Work one: {task} </li>
//     )
// }

// coditional rendering option 3
// export default function Todo({task,  isDone}){
//     return (
//                 <li>{isDone? 'Finished': 'worked'}: {task} </li>
//             )
// }

// coditional rendering option 4
// export default function Todo({task,  isDone}){
//     return (
//         <li>{task} {isDone && ':Done'} </li>
//     )
// }

// coditional rendering option 5
// export default function Todo({task,  isDone}){
//     return (
//         <li>{task} {isDone || ': Do it'} </li>
//     )
// }


export default function Todo({task,  isDone}){
    let listItem;
    if(isDone){
    
            listItem=<li>Finished: {task} </li>
    
    }
    else{
        
           listItem= <li>Work one: {task} </li>
    
    }
    return listItem
    
}


