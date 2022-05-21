
import "./signup.css"



function Signup(){
    return(
        <div className="SignupForm">
            <form>
            <input type="text" placeholder="write your full Name here please ">Name : </input>
            <input type="email" placeholder="write your Email here please ">Email : </input>
            <input type="password" placeholder="write your Password here please ">Password : </input>
            <input type="button" value="signup" />

            </form>
            </div>
            
    );
}


export default Signup 