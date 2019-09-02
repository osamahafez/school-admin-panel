import React, { Component } from 'react'
import SidebarTemplate from '../common/SidebarTemplate/SidebarTemplate';
import Spinner from '../common/Spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStudents, setMessage, deleteStudent } from '../../actions/studentActions';

class Students extends Component {

    state = {
        feedback_msg: null
    }

    static getDerivedStateFromProps(props, state) {
        if(props.message.msg) {
            return {
                feedback_msg: props.message.msg
            }
        }
        return null;
    }

    componentDidMount() {
        const searchData = {
            stage: 'primary'
        }
        this.props.getStudents(searchData);
    }

    componentWillUnmount() {
        this.props.setMessage(null);
    }

    searchStudent = (stage) => {
        const searchData = {
            stage: stage
        }
        this.props.getStudents(searchData);
    }

    addStudent = () => {
        this.props.history.push('/add-student');
    }

    onDeleteStudent = (student_id, student_stage) => {
        if(window.confirm('Are You Sure ?')) {
            this.props.deleteStudent(student_id, student_stage);
            // this.props.getStudents({stage: student_stage});
        }
    }

    render() {

        const { students, loading } = this.props.student;

        let tableContent;
        if(loading === true && students === null) {
            tableContent = <div className='text-center'><Spinner /></div>;
        }
        else if(loading === false && students === null) {
            tableContent = <h1 className="display-4 text-danger">No Students Found :(</h1>
        }
        else {        
            let studentsTable = students.map(student => {
                return(
                    <tr key={student._id}>
                        <td>{student.full_name}</td>
                        <td>{student.stage}</td>
                        <td>{student.level}</td>
                        <td>
                            <button className='btn btn-success btn-sm mr-1'>Update</button>
                            <button className='btn btn-danger btn-sm' onClick={() => this.onDeleteStudent(student._id, student.stage)}>Delete</button>
                        </td>
                    </tr>
                );
            });

            tableContent = (
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Stage</th>
                        <th scope="col">Level</th>
                        <th scope="col">Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsTable}
                    </tbody>
                </table>
            );
        }

        return (
            <SidebarTemplate>

                {/* Start Success Message */}
                {(this.state.feedback_msg) ? 
                    <div className={`alert alert-${this.state.feedback_msg.type} alert-dismissible fade show mt-3`} role="alert">
                        <strong>{this.state.feedback_msg.content}</strong>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                  : null}
                {/* End Success Message */}

                <button className='btn btn-primary float-right mt-2' onClick={this.addStudent}><i className='fas fa-plus'></i> Add New Student</button> <br/> <br/>
                <div className='text-center mt-3'>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-dark btn-lg" onClick={() => this.searchStudent('primary')}>Primary</button>
                        <button type="button" className="btn btn-dark btn-lg" onClick={() => this.searchStudent('preparatory')}>Preparatory</button>
                        <button type="button" className="btn btn-dark btn-lg" onClick={() => this.searchStudent('secondary')}>Secondary</button>
                    </div>
                </div>
                <div className='mt-5'>
                  {tableContent}
                </div>
            </SidebarTemplate>
        );
    }
}

Students.propTypes = {
    student: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
    getStudents: PropTypes.func.isRequired,
    setMessage: PropTypes.func.isRequired,
    deleteStudent: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    student: state.student,
    message: state.message
})

export default connect(mapStateToProps, { getStudents, setMessage, deleteStudent })(Students);
