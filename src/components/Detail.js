import React from 'react';
import { connect } from 'react-redux';
import { FetchList } from '../action';

class PostList extends React.Component {

    componentDidMount() {
        if(this.props.StudentList.length>0){
            return null
        }
        this.props.FetchList();
    }


    renderedList() {
        return this.props.StudentList.map((item, i) => {
            if (this.props.match.params.rollNo == item.rollNo) {
                return (
                    <div className="item card" key={i}>
                        <i className="large middle aligned icon user" style={{ float: "left" }} />
                        <div className="content" style={{ float: "right" }}><br />
                            <div className="description">
                                <h5>NAME: {item.name}</h5>
                                <h6>Group:{item.group}</h6>
                                <h6>Class:{item.class}</h6>
                                <h6>RollNo:{item.rollNo}</h6>
                                <h6>Marks: s1:{item.marks.s1} s2:{item.marks.s2} s3:{item.marks.s3}</h6>
                            </div>
                        </div>
                    </div>
                );
            }
            else {
                return null;
            }

        });
    }


    render() {
        return (
            <div>
                <h3>Student Details</h3>
                {this.renderedList()}
                <button onClick={() => this.props.history.push('/')}>Cancel</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { StudentList: Object.values(state.StudentList) };
};

export default connect(mapStateToProps, { FetchList })(PostList);