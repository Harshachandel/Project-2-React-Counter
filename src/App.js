
import ClassCounter from "./Layouts/ClassCounter"
import FunCounter from "./Layouts/FunCounter"


function App(){
  return(
    <>

     <h4 className="text-center mt-5">Give Vote For Class or Function Counter Which is Easy to Make In React ? </h4>

    <ClassCounter/>

    <FunCounter/>
    <h5 className="text-center mt-5">"Whoever gets the most votes will be the winner."</h5>

    </>
  )
}

export default App


