
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Registraion from './Registraion';
class MyLogin extends Component{

  onclick(){
    ReactDOM.render(<Registraion/>, document.getElementById('root'));
  }
    render() {
      

     return(
         <div>
             <form>
  <div class="form-group">
    <h1>Login Form</h1>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required="text"/>
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required="text"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
  <button type="submit" class="btn btn-primary" onClick={this.onclick}>SignUp</button>
</form>
         </div>
     );
    }
}
export default MyLogin;
    





