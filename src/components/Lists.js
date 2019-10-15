import React from 'react';
import { connect } from 'react-redux';
import { FetchList } from '../action';
import { Show } from '../action';
import { Link } from 'react-router-dom';
// import SearchBar from './SearchBar';

class PostList extends React.Component {
    state = { List: this.props.StudentList }

    componentDidMount() {
        if (this.props.StudentList.length > 0) {
            return null
        }
        this.props.FetchList();
    }


    renderedList() {
        console.log("Props", this.props.ShowDetails)
        return this.props.StudentList.map((item, i) => {
            return (
                <div className="item card" key={i}
                // onClick={() => this.props.history.push(`/Detail/${item.rollNo}`)}
                >
                    <i className="large middle aligned icon user" style={{ float: "left" }} />
                    <div className="content" style={{ float: "right" }}>
                        <div className="description">
                            <h5>NAME: {item.name}</h5>
                            {/* <p>Avg Marks:{(item.marks.s1 + item.marks.s2 + item.marks.s3) / (3)}</p> */}
                            <button onClick={() => this.props.Show(i)}>Show</button>
                            {this.props.ShowDetails === i
                                ?
                                <div>
                                    <h5>NAME: {item.name}</h5>
                                    <h6>Group:{item.group}</h6>
                                    <h6>Class:{item.class}</h6>
                                    <h6>RollNo:{item.rollNo}</h6>
                                </div>
                                :
                                null
                            }
                        </div>
                    </div>
                </div>
            );
        });
    }

    onSearch = (e) => {
        const data = this.props.StudentList.filter(item =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        this.setState({ List: data });

        // console.log(data);
    }


    render() {
        return (
            <div>
                {/* <div className="ui segment">
                    <form  className="ui form" autoComplete="off">
                        <div className="field">
                            <label><h2>Search:</h2></label>
                            <input id="input" type="text" value={this.state.term} onChange={this.onSearch} />
                        </div>
                    </form>
                    <br />

                    <Link to="/AddStudent" className="btn btn-info">
                        AddStudent
                </Link>
                </div> */}
                <div>Rendered List</div>
                {this.renderedList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        StudentList: Object.values(state.StudentList),
        ShowDetails: state.ShowDetails
    };
};

export default connect(mapStateToProps, { FetchList, Show })(PostList);

