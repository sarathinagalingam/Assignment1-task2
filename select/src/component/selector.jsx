import React from 'react';
import { useState } from 'react';
import './selector.css';
//mport Inputfield from './input';
import close from './x-circle.svg';
//import dropdown from './dropdown.svg';

function Selector(){
    var basket=[ {id:1,person:'Banana',selected:false},
    {id:2,person:'Apple'},
    {id:3,person:'Orange'},
    {id:4,person:'Grapes'},
    {id:5,person:'Indian gooseberry'},
    {id:6,person:'Cherry'},
    {id:7,person:'Mango'},
    {id:8,person:'Dates'},
    {id:9,person:'Avocado,Butter Fruit'},
    {id:10,person:'Grape'}];
    
    const[searchvalue,setSearchValue]=useState('');
  
    const [employee,Setaddition]=useState(basket);

    const[visible,SetVisible]=useState(false);
    
    

    const [fruits]=useState([]);
    
    function removeA(arr) {
        var what, a = arguments, L = a.length, ax;      
        while (L > 1 && arr.length) {
            what = a[--L];
            while ((ax= arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
            }
        }
        
    } 

    let removefruits=(e,fru)=>{
        console.log(fru)
        
        removeA(fruits,fru);
        Setaddition({filteremployee})
    }

    let filteremployee =(e)=>{
        for(let i=0;1<employee.length;i++){
            if(e.target.value===employee[i].person){
                
            removeA(employee[i].person,e.target.value); 
            }
           }

           
    }
 
    let addition=(e)=>{
       
       if(fruits.indexOf(e.target.value)===-1){
            fruits.push(e.target.value)
       }else{
       removeA(fruits,e.target.value)
       }
       
       Setaddition({filteremployee})
       
    }
    

    let OrderIndividual=fruits.map((fru,index)=>
    <span class="flex-intial px-2 mx-2 border  bg-blue-300 rounded-md border-opacity-100" key={index}>
         <span key={index}>{fru}</span><button class="bg-red-200 hover:bg-red-700 rounded-full relative top-0 left-1" value={fru} key={index} onClick={(e)=>removefruits(e,fru)}><img src={close} alt='close'></img></button>
         </span>
    )

    // let labelcheckbox = basket.filter((val)=>{
    //     if(!fruits.includes(val.person)){
    //         if(searchvalue===" "){
    //             return val;
    //         }else if(val.person.toLowerCase().includes(searchvalue.toLowerCase())){
    //             return val;
    //         }  
    //     }
    // })
    let labelcheckbox = basket.map((data)=>{
        if(!fruits.includes(data.person)&&data.person.toLowerCase().includes(searchvalue.toLowerCase())){
            return(
                <span class="clickvalue" for={data.person} value={data.person} key={data.id} onClick={addition}>  
                {/* <label for={data.person} key={data.id}><input type="checkbox" id={data.person} name={data.person} value={data.person}/>{data.person}</label> */}
               <option click="cursor-default" class="px-2 py-1 " key={data.id} value={data.person}>{data.person}</option>
                </span>
                )
        }
        
    } )
      

     
 
return(
           <div class=" constainer border-2 border-indigo-100 rounded-md relative top-10 left-10">
                <div class="main">
                   <div class="d-inline">
                      <span class="select form-controle"><span className="OrderOption">{OrderIndividual}<input class="formcontrol" type="text" placeholder='select...' onClick={()=>SetVisible(!visible)} onChange={e=>setSearchValue(e.target.value)}/></span></span>
                      {/* <span class="dropdown"><img src={dropdown} class="icondrop" alt='close'></img></span> */}
                   </div>
                   
                </div>
                
                {visible?
                    <div class="dropdown-content cursor-default">
                        {labelcheckbox}
                    </div>:null
                }     
             </div>
)   
}
export default Selector; 