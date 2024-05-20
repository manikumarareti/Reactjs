import { Component } from "react";


class ToDo extends Component {
    /* constructor(){
        super()
        this.state={
            todos:["apple","banana"]
        }
    } */
    state ={
        todos:["apple","banana"]
    }
    addtodomethod =()=>{
        const newState=[...this.state.todos,"water melon"]
        
        this.setState({
            todos:newState
        } )
    }
    clearAll=()=>{
        const newState=[]
        this.setState({
            todos:newState
        })
    }
    deleteSelected=(index)=>{
         const filteredarry=this.state.todos.filter((items,i)=>i!==index)
         this.setState( {
            todos:filteredarry
         })    
        }
    updatetodo =(index)=>{
        let update=this.state.todos.map((itemFurit,i)=>{
            if(i===index){
                return "kiwi"
             }
             else{
                return itemFurit
             }
        })

        this.setState({
            todos:update
        })
    }
    render(){
        return(
            <>
            <h2>TODO Component</h2>
            <button onClick={this.addtodomethod}>add</button>
            <button onClick={this.clearAll}>clear All</button>
            {
            this.state.todos.map((eachtodos,index)=>{
                return(
                    <>
                    
                    <h3>{index+1}{eachtodos}</h3>
                    <button onClick={()=>this.deleteSelected(index)}>delete</button>
                    <button onClick={()=>this.updatetodo(index)}>update</button>
                    </>
                )
            })
            }
            </>
        )
    }
}
export default ToDo 