
const CardComponent=(propos) =>{
    const {title,description,image}=propos.product
  return (
    <>
    <div style={{
        borderWidth:"2px",
         width: '300px',
         height:"300px",
         borderStyle:"solid" }}>
     <h4>{title}</h4>
     <p>{description}</p>
     <img src={image} alt="img" width= {100} height={100}></img>
    </div>
    </>
  )
  
}

export default CardComponent;