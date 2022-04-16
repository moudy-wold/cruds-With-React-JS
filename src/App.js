import React ,{useState,createContext} from "react"
import './App.css';
import Search from './components/search';
export const ProductsContext = createContext();
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
    console.log("item.id")
    const incArr = [...medicine];
    incArr[item.id-1].count++;
    setMedicine(incArr);
  }

  // // decreasing function
  const handleDecreasing= (item)=>{
    console.log("item.id");
    if(item.count>0){
    const decArr = [...medicine];
    decArr[item.id-1].count--;
    setMedicine(decArr);  
    
  }}

// Delete fun
const handlDelete = (item)=>{
  
  const remoArr = medicine.filter(it=>{
    return item.id != it.id
  })
  setMedicine(remoArr);
  console.log(remoArr)
}
  // ser Provider Value
  const providerValue ={
    medicine,
    newItemName,
    newItemCount,
    addBtn,
    handleSearch,
    handlIncreasing,
    handleDecreasing,
    handlDelete,
  }

  return (
    <ProductsContext.Provider value={providerValue}>
    <div className="App">
         <Search/>
    </div>
    </ProductsContext.Provider>
  );
}

export default App;
