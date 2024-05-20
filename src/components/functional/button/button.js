const ButtonComponents = (props)=>{
    const {ButtonText,bgColor}=props
    return(
        <button
        style={{
            backgroundColor:bgColor,
            width:props.width,
            height:props.height
        }}>{ButtonText}</button>
    )
}

export default ButtonComponents