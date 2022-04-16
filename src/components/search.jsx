import React,{useState,useEffect} from 'react'
import "./searchStyle.css"

function Search(props) {
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
                <input type="text" placeholder='SEARCH' onChange={(e)=>props.onSearch(e.target.value)}/>
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
                {props.props.map(item=>{
                    return <div className="row" key={item.id}>
                                <span className="ele">{item.id}</span>
                                <span className="ele">{item.name}</span>
                                <span className="ele">{item.count}</span>
                                <span className="ele"><button onClick={()=> props.onIncreasing(item)}>+</button></span>
                                <span className="ele"><button onClick={()=> props.onDecreasing(item)}>-</button></span>
                            </div>
                })}
            </div>
        </div>
    </div>
)
}
export default Search;