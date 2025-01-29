
import "./profilecard.css"

function User(props){
    
    return(
        <>
        <div className="container">
            <span className={props.status?"pro online":"pro ofline"}>{props.status?"online":"ofline"}</span>
            <img src={props.img} alt="user image" className="img" />
            <h2>{props.name}</h2>
            <h4>{props.city}</h4>
            <div className="skill">
                <h4>skills</h4>
                <ul>
                 {props.skills.map((item,index)=>(<li key={index}>{item}</li>))}
                </ul>
            </div>
        </div>
        </>
    )
}

export const ProfilCard = () => {

    const people=[
        {
            name:"abdulla",
            city:"trichy",
            img:"/public/images/aik.jpg",
            status:1,
            skills:["html","css","javascript","nodejs","html","css","javascript","nodejs"]
        },
        {
            name:"mohamed abdulla",
            city:"trichy",
            img:"/public/images/cycle.jpg",
            status:0,
            skills:["html","css","javascript","nodejs","html","css","javascript","nodejs"]
        },
        {
            name:"arsath arif",
            city:"pudukkottai",
            img:"/public/images/afb.jpg",
            status:1,
            skills:["java","spring","git","docker","java","spring","git","docker","java","spring","git","docker"]
        },
        {
            name:"arsath",
            city:"tanjur",
            img:"/public/images/ellu_1.jpg",
            status:0,
            skills:["java","spring","git","docker","java"]
        }
    
    ]
    
  return (
    <>
    {people.map((item,index)=>(<User key={index} 
    
    status={item.status}
    name={item.name}
    city={item.city}
    img={item.img}
    skills={item.skills.map((item)=>(item))}
    
    
    
    />))}


    </>
  )
}
