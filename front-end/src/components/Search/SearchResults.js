import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteStudent } from '../../actions/studentActions';

class SearchResults extends Component {

    onUpdateStudent = (student_id) => {        
        this.props.history.push(`update-student/${student_id}`);
    }
    
    onDeleteStudent = (student_id, student_stage) => {
        if(window.confirm('Are You Sure ?')) {
            this.props.deleteStudent(student_id, student_stage);
        }
    }

    render() {

        let studentsTable = this.props.students.map(student => {
            return(
                <tr key={student._id}>
                    <td>{student.full_name}</td>
                    <td>{student.stage}</td>
                    <td>{student.level}</td>
                    <td>
                        <button className='btn btn-success btn-sm mr-1' onClick={() => this.onUpdateStudent(student._id)}>Update</button>
                        <button className='btn btn-danger btn-sm' onClick={() => this.onDeleteStudent(student._id, student.stage)}>Delete</button>
                    </td>
                </tr>
            );
        });

        return (
            <table className='table table-striped table-sm'>
                <thead>
                    <tr>
                        <th scope='col'>Full Name</th>
                        <th scope='col'>Stage</th>
                        <th scope='col'>Level</th>
                        <th scope='col'>Control</th>
                    </tr>
                </thead>
                <tbody>{studentsTable}</tbody>
            </table>
        );
    }
}



export default connect(null, { deleteStudent })(withRouter(SearchResults));
