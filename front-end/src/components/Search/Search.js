import React, { Component } from 'react';
import SidebarTemplate from '../common/SidebarTemplate/SidebarTemplate';
import classnames from 'classnames';
import SearchResults from './SearchResults';
import Spinner from '../common/Spinner';
import { connect } from 'react-redux';
import { getStudents, clearErrors } from '../../actions/studentActions';

class Search extends Component {
    state = {
        full_name: '',
        birth_date: '',
        location: '',
        stage: '',
        level: '',
        parent_name: '',
        phone: '',
        national_id: '',
        primaryCheck: true,
        errors: {}
    };

    componentWillUnmount() {
        this.props.clearErrors();
    }

    static getDerivedStateFromProps(props, state) {
        if (props.errors) {
            return {
                errors: props.errors
            };
        }
    }

    submitStudent = (e) => {
        e.preventDefault();

        const searchData = {};

        if(this.state.full_name) searchData.full_name = this.state.full_name;
        if(this.state.birth_date) searchData.birth_date = this.state.birth_date;
        if(this.state.location) searchData.location = this.state.location;
        if(this.state.stage) searchData.stage = this.state.stage;
        if(this.state.level) searchData.level = this.state.level;
        if(this.state.parent_name || this.state.phone || this.state.national_id) searchData.parent_info = {};
        if(this.state.parent_name) searchData.parent_info.full_name = this.state.parent_name;
        if(this.state.phone) searchData.parent_info.phone = this.state.phone;
        if(this.state.national_id) searchData.parent_info.national_id = this.state.national_id;
        
        // console.log(searchData)
        this.props.getStudents(searchData);
    };

    onChangeHandler = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.name === 'stage') {
            if (e.target.value === 'primary')
                this.setState({ primaryCheck: true });
            else this.setState({ primaryCheck: false });
        }
    };

    render() {
        const { errors } = this.state;

        const { students, loading } = this.props.student;

        let tableContent;
        if(loading === true && students === null) {
            tableContent = <div className='text-center'><Spinner /></div>;
        }
        else if(loading === false && students === null) {
            tableContent = <h1 className="display-4 text-danger">No Students Found :(</h1>
        }
        else {   
            tableContent= <SearchResults students={students} />;
        }


        const primary_level = (
            <select
                className={classnames('custom-select', {
                    'is-invalid': errors.level
                })}
                name='level'
                id='level'
                onChange={this.onChangeHandler}
            >
                <option value={0}>Not Specified</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
            </select>
        );

        const preparatory_secondary_level = (
            <select
                className={classnames('custom-select', {
                    'is-invalid': errors.level
                })}
                name='level'
                id='level'
                onChange={this.onChangeHandler}
            >
                <option value={0}>Not Specified</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
        );

        return (
            <SidebarTemplate>
                <form onSubmit={this.submitStudent}>
                    <div className='mt-3 mb-3 text-center'>
                        <button
                            type='submit'
                            className='btn btn-success btn-block'
                        >
                            Search
                        </button>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='full_name'>Student Full Name</label>
                        <input
                            type='text'
                            id='full_name'
                            name='full_name'
                            className={classnames('form-control', {'is-invalid':errors.full_name})}
                            onChange={this.onChangeHandler} 
                        />
                        <div className="invalid-feedback">
                            <strong>{errors.full_name}</strong>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <label htmlFor='birth_date'>Birth Date</label>
                            <input
                                type='date'
                                id='birth_date'
                                name='birth_date'
                                className={classnames('form-control', {'is-invalid':errors.birth_date})}
                                onChange={this.onChangeHandler}
                            />
                            <div className="invalid-feedback">
                                <strong>{errors.birth_date}</strong>
                            </div>
                        </div>

                        <div className='form-group col-md-6'>
                            <label htmlFor='location'>Location</label>
                            <input
                                type='text'
                                className='form-control'
                                id='location'
                                name='location'
                                onChange={this.onChangeHandler}
                            />
                        </div>

                        <div className='form-group col-md-6'>
                            <label htmlFor='stage'>Stage</label>
                            <select
                                className={classnames('custom-select', {
                                    'is-invalid': errors.stage
                                })}
                                name='stage'
                                id='stage'
                                onChange={this.onChangeHandler}
                            >
                                <option value={0}>Not Specified</option>
                                <option value='primary'>Primary</option>
                                <option value='preparatory'>Preparatory</option>
                                <option value='secondary'>Secondary</option>
                            </select>
                            <div className='invalid-feedback'>
                                <strong>{errors.stage}</strong>
                            </div>
                        </div>

                        <div className='form-group col-md-6'>
                            <label htmlFor='level'>Level</label>
                            {this.state.primaryCheck
                                ? primary_level
                                : preparatory_secondary_level}

                            <div className='invalid-feedback'>
                                <strong>{errors.level}</strong>
                            </div>
                        </div>

                        <div className='form-group col-md-4'>
                            <label htmlFor='parent_name'>Parent Name</label>
                            <input
                                type='text'
                                id='parent_name'
                                name='parent_name'
                                className={classnames('form-control', {'is-invalid':errors.parent_info_full_name})}
                                onChange={this.onChangeHandler}
                            />
                            <div className="invalid-feedback">
                                <strong>{errors.parent_info_full_name}</strong>
                            </div>
                        </div>
                        <div className='form-group col-md-4'>
                            <label htmlFor='phone'>Phone</label>
                            <input
                                type='text'
                                id='phone'
                                name='phone'
                                className={classnames('form-control', {'is-invalid':errors.parent_info_phone})}
                                onChange={this.onChangeHandler}
                            />
                            <div className="invalid-feedback">
                                <strong>{errors.parent_info_phone}</strong>
                            </div>
                        </div>
                        <div className='form-group col-md-4'>
                            <label htmlFor='national_id'>National ID</label>
                            <input
                                type='text'
                                id='national_id'
                                name='national_id'
                                className={classnames('form-control', {'is-invalid':errors.parent_info_national_id})}
                                onChange={this.onChangeHandler}
                            />
                            <div className="invalid-feedback">
                                <strong>{errors.parent_info_national_id}</strong>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='mt-3'>
                    {tableContent}
                </div>
            </SidebarTemplate>
        );
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    student: state.student
})

export default connect(mapStateToProps, { getStudents, clearErrors })(Search);
