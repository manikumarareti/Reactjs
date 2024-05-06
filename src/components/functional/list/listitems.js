const ListIteams = ()=>{
    const iplHistory=[
        {
            name:"RCB",
            winningHis :0,
            totalScore:1000,
            players:[
                "kohli","DK","max","siraj"
            ]
        },
        {
            name:"CSK",
            winningHis :5,
            totalScore:3000,
            players:[
                "Dhoni","Gaikwad","Dube","parthirana"
            ]
        }
    ]
    
    return(
        <>
        {
        iplHistory.map((eachObj)=>{
          
            return(
                <>
                     {     
                     eachObj.totalScore<=3000 &&
                      <h1>{eachObj.name}</h1>
                     }
                       
                     <ol>
                       {
                          eachObj.players.map((playerName)=>{
                            return(
                                <>
                             
                               <li>{playerName}</li>
                                </>
                            )
                          })
                      
                       }
                       </ol>







                </>
            )
        })
        }
        
        </>
    )
}
export default ListIteams