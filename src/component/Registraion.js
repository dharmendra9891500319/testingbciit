import React,{Component} from 'react';




class Registraion extends Component{
    render() {
        
     return(
         <div>
            
        <form>
        <div class="form-group">
    <h1>Register Form</h1>
    <label for="exampleInputEmail1">Frist Name</label>
    <input type="Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">

    <label for="exampleInputEmail1">Last Name</label>
    <input type="Last Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    
    <label for="exampleInputEmail1">Address</label>
    <input type="Address" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Address" required="text"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">

    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"required="text"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required="text"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" required="text"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    
         </div>
     );
    }
}
export default  Registraion;
    