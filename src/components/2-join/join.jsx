
import './join.css'
const Join = ({showJoin,setShowJoin}) => {
    return showJoin && (
     <div className='containerJoin'>
     <div className='join'>
     <button onClick={()=>{
                  setShowJoin(false)
                  }}><i class="fa-solid fa-xmark"></i></button>
       <form >
       
         <h2>JOIN US</h2>
          <div>
             <label htmlFor="">Full Name</label>
             <input type="text" />
          </div>
          <div>
             <label htmlFor="">Age</label>
             <input type="text" />
          </div>
          <div>
             <label htmlFor="">Tel</label>
             <input type="text" />
          </div>
          <button type='submit'  className='submit'> Submit</button>
       </form>
    </div>
    </div>
  )

}

export default Join
