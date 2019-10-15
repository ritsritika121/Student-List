import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AddNewStudent } from '../action';

let initialState = {
    Name: "", Group: "", Class: " ", RollNo: " ", Marks_s1:" ", Marks_s2:" ", Marks_s3:" ",
    nameError: "",
    grouplError: "",
    classError: "",
    rollNoError: "",
}

class FormAdd extends React.Component {
    state = initialState;

    validate = () => {

        let nameError = "";
        let groupError = "";
        let classError = "";
        let rollNoError = "";

        if (this.state.Name.length === 0) {
            nameError = "Name can't be empty"
        }

        if (this.state.Group.length < 3) {
            groupError = "group should be at least 3 characters long";
        }


        if (this.state.Class.length < 2) {
            classError = "class  should be at least 2 characters long";
        }

        if (this.state.RollNo.length < 3) {
            rollNoError = "rollNo should be at least 3 characters long";
        }

        if (nameError || groupError || classError || rollNoError) {
            this.setState({ nameError, groupError, classError, rollNoError });
            return false;
           
        } else {
             this.props.history.push('/')
            return true;    
        }

    }

    handleSubmit = (e) => {
         e.preventDefault();

     let validSubmit=  this.validate();

      if(validSubmit){
        this.props.AddNewStudent(this.state.Name, this.state.RollNo,this.state.Class,this.state.Group,this.state.Marks_s1,this.state.Marks_s2,this.state.Marks_s3)
      }

    }




    render() {
        
        return (
            <div>
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <h3>Enter Details Here</h3><br />

                    <label>Name</label>
                    <input type="text" className="form-control" onChange={(e) => this.setState({ Name: e.target.value })}  />
                    <div style={{ color: "red", fontSize: 12 }}>{this.state.nameError}</div>
                    <br /><br />

                    <label>Group</label>
                    <input type="text" className="form-control" onChange={(e) => this.setState({ Group: e.target.value })}  />
                    <div style={{ color: "red", fontSize: 12 }}>{this.state.groupError}</div>
                    <br /><br />


                    <label>Class</label>
                    <input type="text" className="form-control" onChange={(e) => this.setState({ Class: e.target.value })}  />
                    <div style={{ color: "red", fontSize: 12 }}>{this.state.classError}</div>
                    <br /><br />

                    <label>RollNo</label>
                    <input type="number" className="form-control" onChange={(e) => this.setState({ RollNo: e.target.value })}  />
                    <div style={{ color: "red", fontSize: 12 }}>{this.state.rollNoError}</div>

                    <label>Marks</label>
                    <input type="number" className="form-control" onChange={(e) => this.setState({ Marks_s1: Number(e.target.value) })}  />
                    <input type="number" className="form-control" onChange={(e) => this.setState({ Marks_s2: Number(e.target.value) })}  />
                    <input type="number" className="form-control" onChange={(e) => this.setState({ Marks_s3: Number(e.target.value) })}  />

                    
                        <button>Submit</button>

            

                    <button> <Link to="/" className="item">Cancel</Link></button>
                    <br /><br />
                </form>
            </div>
        );
    }

}




export default connect(null, {AddNewStudent}) (FormAdd);
