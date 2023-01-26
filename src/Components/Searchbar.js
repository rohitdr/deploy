import React from 'react'


import Button from './Button';
import NavbarToggler from './NavbarToggler';
export default function Searchbar(props) {
    // const Dark_mode=()=>{
    //     document.body.style.backgroundColor="red"
    //     // return element
//    const Colorchanger=()=>{
//         document.body.style.backgroundColor="grey"
//     }
  return (
  <>



<section className ="header-main border-bottom " id="Searchbar" style={{backgroundColor:"	#89CFF0"}}>
	<div className ="container-fluid">
       <div className ="row  pt-3 pb-3 d-flex align-items-center">
           
           <div className ="col-md-10">
          
        <div className ="d-flex form-inputs">
        <div className ="col-md-1 m-2 p-1">
        <NavbarToggler></NavbarToggler>
              </div>
      
        <input className ="form-control" type="text" placeholder="Search any product..." />
      
        <div className ="d-flex flex-column m-2">
                       <Button type ="success" label="Search" ></Button>
                       
                   </div> 
        </div>
           </div>
           
           <div className ="col-md-2  mb-1" >
               <div className ="d-flex d-none d-md-flex flex-row align-items-center  ">
                  
                      
                  
                   <div className ="d-flex flex-column ">
                    
                   <Button type ={props.type} label ={props.label} onClick={props.onClick} size={props.size}  textcolor={props.textcolor}></Button>
                  
                   </div>   
               </div>
               {/*         */}
           </div>
       </div>
	</div> 
</section>

  </>
  )
}
