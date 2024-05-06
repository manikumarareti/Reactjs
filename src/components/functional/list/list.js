import ListIteams from "./listitems"

const ListComponents =()=>{
    const  iplImage="https://static.toiimg.com/thumb/msid-106152526,width-400,resizemode-4/106152526.jpg"
   

    return(
        <>
        <h2>IPL</h2>
        <img src={iplImage} height={100}></img>
        <ul>
        <ListIteams/>
        </ul>
        </>
    )
}
export default ListComponents