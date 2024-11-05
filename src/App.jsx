
import './App.css'
import TextField from '@mui/material/TextField';

function App() {
  const calculate=()=>{
    
     var result=p.value*n.value*r.value/100
    console.log(result)
    out.innerHTML=result
  }
  const rest=()=>{
    p.value=''
    n.value=''
    r.value=''

  }
  

  return (
    <>
      <div className='bg-dark d-flex justify-content-center' style={{height:"100vh",width:"100%"}}>
        <div className='mt-5 p-5 bg-white' style={{height:"100vh",width:"500px"}}>
          <h1>Simpleinterst APP</h1>
          <h3>calculate given simple interest</h3>
          <div className= 'bg-warning mt-5 rounded-3' style={{width:"100%",height:"200px",alignContent:'center'}}>
            <h1 className='text-center'id="out">$123</h1>
            <h3 className='text-center'>total simple interest</h3>
          </div>
          <div className='my-4 p-2'>
          <TextField id="p" className='my-2 w-100' label="principle amount" variant="outlined" /><br />
          <TextField id="n"  className='my-2 w-100' label="year" variant="outlined" /><br />
          <TextField id="r"  className='my-2 w-100' label="rate of interest" variant="outlined" />
          </div>
          <button className=' btn mt-2 px-5 py-3 btn-success' onClick={calculate}>calucalte</button> <button onClick={rest} className='btn ms-5 mt-2 px-5 py-3 btn-primary'>reset</button>
        </div>

      </div>
     
    </>
  )
}

export default App
