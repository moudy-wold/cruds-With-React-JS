import React ,{useState,useEffect} from "react"
import './App.css';
import Search from './components/search';
function App() {
  const [medicine,setMedicine] = useState([
    {name:"Suspension",id:1 ,count:7},
    {name:"Emulsion",id:2 ,count:5},
    {name:"Enema",id:3 ,count:6},
    {name:"Granules",id:4 ,count:23},
    {name:"Drugs",id:5 ,count:15},
    {name:"Concentrates",id:6 ,count:12},
    {name:"Tube",id:7 ,count:1},
    {name:"Canister",id:8 ,count:645},
    {name:"Pills",id:9 ,count:98},
    {name:"Ampoule ",id:10 ,count:45},
  ])
  const [alternative,setِlternative] = useState([...medicine]);
  const [newProductName,setNewProductName] =useState('');
  const [newProductCount,setNewProductCount] = useState(1);
  
  // Add Item Function
const newItemName =(e)=>{
  setNewProductName(e);
  
}
// add New Item Count
const newItemCount=(e)=>{
setNewProductCount(e)
}
// Add New Item Btn
const addBtn =()=>{
  if(newProductName !== ''){
    const newArr =[...medicine];
    newArr.push({name:newProductName, id: medicine.length+1,count:newProductCount});
    setMedicine(newArr);
  }
}

  // Search function
   const handleSearch = (e)=>{        
        if(e == ''){
          setMedicine(alternative)
        }else{   
        const newArr = medicine.filter(item=>{
        return item.name[0] == e.toUpperCase()
      })
      setMedicine(newArr)
    }
  }
  // increasiing function
  const handlIncreasing =(item)=>{
    const incArr = [...medicine];
    incArr[item.id-1].count++;
    setMedicine(incArr);
  }
  // // decreasing function
  const handleDecreasing= (item)=>{
    if(item.count>0){
    const decArr = [...medicine];
    decArr[item.id-1].count--;
    setMedicine(decArr);
  } 
  }
  return (
    <div className="App">
         <Search
         props={medicine}
         onSearch={handleSearch} 
         newItemName={newItemName}
         newItemCount={newItemCount}
         addBtn={addBtn}
         onIncreasing={handlIncreasing} 
         onDecreasing={handleDecreasing}/>
    </div>
  );
}

export default App;
