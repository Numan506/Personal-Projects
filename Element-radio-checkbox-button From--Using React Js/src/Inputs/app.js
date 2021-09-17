import React, { Component } from 'react'

 class Inputs extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              Name:"",
              Country:"",
              Bio:"",
              BirthDay:"",
              gender:"",
              agree:"",
              skills:[]

         }
     }

     handleChange=(e)=>{
       this.setState({
           [e.target.name]:e.target.value
       })
     }

     handleAgree=(e)=>{
         this.setState({
            agree:e.target.checked
         })
     }

     handleSkillChange=(e)=>{
         if (e.target.checked){
            this.setState({
                skills:[...this.state.skills,e.target.value]
            })
         }else{
             const skills= this.state.skills.filter(skill=>skill != e.target.value)
             this.setState({
                 skills
             })
         }
     }
     
    render() {
        return (
           
            <div className="container">
                <h2>Working Form With a React</h2>
               <div>
                   <input 
                     className="form-control my-2" 
                     type="text" 
                     name ="Name" 
                     value={this.state.Name}  
                     placeholder="Please input your name:" 
                     onChange={this.handleChange} />

                   <select 
                     className="form-control my-2" 
                     name="Country">

                   <option >Select Country</option>
                       <option value="bangladesh">Bangladesh</option>
                       <option value="india">India</option>
                       <option value="pakistan">Pakistan</option>
                       <option value="england">England</option>
                   </select>

                   <textarea
                       className="form-control my-2" 
                       name="Bio" 
                       value={this.state.Bio}   
                       placeholder="Please text somthing:" 
                       onChange={this.handleChange}>
                    </ textarea>
                   <input 
                       className="form-control my-2"  
                       type="date" 
                       name="BirthDay" 
                       onChange={this.handleChange} />

                   <div>
                     <input 
                       type="radio" 
                       name="gender" 
                       value="male" 
                       onChange={this.handleChange} / > 
                       Male

                       <input 
                         type="radio" 
                         name="gender" 
                         value="Female" 
                         onChange={this.handleChange} / > 
                         Female

                     <input 
                       type="radio" 
                       name="gender" 
                       value="Other" 
                       onChange={this.handleChange} / > 
                       Other
                  </div>
                  <div>
                       <h5>Skills: </h5>  
                      <input
                        type="checkbox"
                        
                        value="Java"
                        checked={this.state.skills.includes("Java")}
                        onChange ={this.handleSkillChange}
                      />Java

                      <input
                        type="checkbox"
                    
                        value="JavaScript"
                        checked={this.state.skills.includes("JavaScript")}
                        onChange ={this.handleSkillChange}
                      />JavaScript

                      <input
                        type="checkbox"
                        name="skills"
                        value="Python"
                        checked={this.state.skills.includes("Python")}
                        onChange ={this.handleSkillChange}
                      />Python

                     <input
                        type="checkbox"
                       
                        value="Node.js"
                        checked={this.state.skills.includes("Node.js")}
                        onChange ={this.handleSkillChange}
                      />Node.js

                      <input
                        type="checkbox"
                        
                        value="React.js"
                        checked={this.state.skills.includes("React.js")}
                        onChange ={this.handleSkillChange}
                      />React.js

                  </div>

                   <div>
                       <input 
                          type="checkbox"  
                          checked={this.state.agree} 
                          onChange={this.handleAgree} /> 
                          I agree to all the conditions
                   </div>

                   <button onClick={()=>{console.log(this.state)}} >Submit</button>
               </div>
               
                
            </div>
        )
    }
}


export default Inputs