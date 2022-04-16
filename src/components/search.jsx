import React,{useContext,} from 'react'
import "./searchStyle.css"
import { ProductsContext } from './../App';


function Search() {
    // Set ContextAPI Value
    const props = useContext(ProductsContext)
    // create Fun to PreventDefault
    const sub =(e)=>{
        e.preventDefault()
    }
return (
    // Parent
    <div className="main">
        {/* Inputs */}
        <div className="inputs">
            <form onSubmit={sub}>
                <input type="text" placeholder='Enter Product Name' onChange={(e)=>props.newItemName(e.target.value)}/>
                <input type="number" placeholder='New Product`s Count' onChange={(e)=>props.newItemCount(e.target.value)}/>
                <button type="reset" onClick={()=> props.addBtn()}>Add Product</button>
                <input type="text" placeholder='SEARCH' onChange={(e)=>props.handleSearch(e.target.value)}/>
            </form>
        </div>

        {/*titls*/}
        <div className='table'>
            <div className="navbar">
                <span className="ele">Number</span>
                <span className="ele">Name</span>
                <span className="ele">Count</span>
                <span className="ele">Increasing</span>
                <span className="ele">Decreasing</span>
            </div>

            {/*Products*/}
            <div className="content">
                {props.medicine.map(item=>{
                    return <div className="row" key={item.id}>
                                <span className="ele">{props.medicine.indexOf(item)+1}</span>
                                <span className="ele">{item.name}</span>
                                <span className="ele">{item.count}</span>
                                <span className="ele"><button onClick={()=> props.handlIncreasing(item)}>+</button></span>
                                <span className="ele"><button onClick={()=> props.handleDecreasing(item)}>-</button></span>
                                <span className="ele remove"><button onClick={()=> props.handlDelete(item)}><i className="fa-solid fa-trash"></i></button></span>
                            </div>
                            
                })}
                
            </div>
        </div>
        
    </div>
)
}
export default Search;
