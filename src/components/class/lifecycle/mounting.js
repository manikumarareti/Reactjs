import { Component } from "react";
import { Card } from "react-bootstrap";
import CardComponent from "../../functional/card/card";
import axios from "axios";

class Mounting extends Component{
    constructor(){
        super()
            this.state={
                msg:"good morning",
                products:[]
            }
        }
    componentDidMount(){
        document.title=this.state.msg
        this.fetchData();
        // axios.get("https://fakestoreapi.com/products")
        // .then(response=>{
        //     if(response.status===200){
        //     this.setState({
        //         products:response.data
        //     })
        // }else{
        //     alert("something went wrong")
        // }
        // })
        
        //or

        // fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
        //     .then(json=>{
        //         this.setState({
        //             products:json
        //         })
        //     })
    }
    fetchData =async ()=>{
        const response= await axios.get("https://fakestoreapi.com/products")
      
            if(response.status===200){
            this.setState({
                products:response.data
            })
        }else{
            alert("something went wrong")
        }
    }
    static getDerivedStateFromProps(){
        return null
        //it changes the state on the based on the propos over the time
    }
    render(){
        return(
            <>
            <h1>mounting</h1>
<div style={{flexDirection:"row",display:"flex",flexWrap:"wrap"}}>
            {
                this.state.products.length>0
                ?
                this.state.products.map(eachproduct=>{
                    const {title}=eachproduct
                    return(
                        <>
                        <CardComponent product={eachproduct}/>
                        </> 

                    )
                })
                :
                "wait..for few mins"
            }
            </div>
            </>
        )
    }
}
export default Mounting