import React from "react";



function Filter(props){


    return(
        <>
     <form className="flex">
            <input className="search"  type="text" placeholder='SEARCH BY TITLE...' onChange={(e)=>props.setFilterByTitle(e.target.value)}/>
            
           
        </form>
        
     
    
    </>
    )
}

export default Filter;
