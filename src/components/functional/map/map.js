const MapComponent = ()=>{
    const arr=[
        {
            name :"mani kumar",
            age : 24,
            clz : "LPU"
        },
        {
            name :"Antony",
            age : 24,
            clz : "LPU"
        }
    ]
    return(
        <>
        {
            
            arr.map((objs)=>{
                const {name,age,clz}=objs
                return(
                    <>
                    <h3>{name}</h3>
                    <h5>{age}</h5>
                    <h5>{clz}</h5>
                    </>
                )
            })
        }
        </>
    )
}
export default MapComponent