import React from 'react';
import Luffy from '../Luffy.jpg';




function Form (){
    return (
    <div>
        <div style={{ border:"solid 1px black",
                      maxWidth:"100vw",
                      }}>

               <h1 className="navbar bg-dark text-white rounded">
                   Touati karim
               </h1>

            

               <img src={Luffy} alt="logo" />

           

               <img src="06.jpg" alt="logo" />

        </div>
        <div>
               <video src="video.mp4" type="video/mp4" controls
                style={{ width:"320px",
                         height:"240px"
                    }} 
                   >
               </video>
        </div>
    </div>
          
    
    )
}

export default Form;