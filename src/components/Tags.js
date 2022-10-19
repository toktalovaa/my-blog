import React, {useState} from "react";
import { tags } from "../constants";
 
const margin= {
    marginRight:"5px"
}

const Tag =(props)=>{
  const [active, setActive] = useState('w3-light-grey w3-small')

  if(active==='w-3 black'){
    setActive('w3-light-grey w3-small')
  }
  const activeted=()=>{
    props.checkActive()
    //setActive('w-3 black')
  }

    return(
         <span onClick={activeted}  
                 className={`w3-tag w3-margin-bottom ${active}`} 
                 style={margin}>
                {props.name}
       </span>) 
}


const Tags =()=>{
      const [tag, setTag]= useState('');

      const chackActiv=() =>{
        setTag('work')
      }

        const removeActive = ()=>{
         const elements = document.querySelectorAll('w-3 black');

            for(let i=0; i< elements.length; i++){
              if(elements[i].classList.contains('w-3 black')){
                elements[i].classList.remove('w-3 black');
                elements[i].classList.add('w3-light-grey')
                elements[i].classList.add('w3-small')


            }
        }
    }

        const activeted =(e)=>{
            removeActive();
            e.target.clasList.add("w-3 black");
            e.target.clasList.remove("w3-light-grey")
            e.target.clasList.remove("w3-small")
        }

     const tagsArray =  tags.map(item => <Tag chackActiv={chackActiv} name={item}/>);


       return(
        <div className="w3-card w3-margin">
            <div className="w3-container w3-padding">
                <h4 className="text-red"> Tags</h4>
            </div>
        <div className="w3-container w3-white">
            <p>
                 {
                    tags.map(item=>
                            <span onClick={activeted}  
                                className={`w3-tag w3-margin-bottom w3-light-grey w3-small `} 
                                style={margin}>
                                {item}
                           </span>
                           )
                 }              
            </p>
        </div>
        </div>
)
}

export default Tags;