import React, { Component } from 'react';
import firebase from 'firebase';
import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            fName: '',
            age: '',
            email: '',
            number: '',
            address: '',
            city: '',
            zip: '',
            data: [],
        }
    }

    inputHandler = (e) => {
        let nam = e.target.name;
        let value = e.target.value;
        this.setState({
            [nam]: value,
        })
        console.log(this.state.data)
    }

    addData = () => {
        firebase.database().ref().child('Users').push({
            name: this.state.name,
            fName: this.state.fName,
            age: this.state.age,
            email: this.state.email,
            number: this.state.number,
            address: this.state.address,
            city: this.state.city,
            zip: this.state.zip,
        })
    }

    getData = () => {
        let database = firebase.database().ref('Users');
        database.on('value',
            (data) => {
                let userData = data.val();
                let keys = Object.keys(userData);

                let dataArray = [];

                for (const key of keys) {
                    dataArray.push({
                        key: key,
                        name: userData[key].name,
                        fName: userData[key].fName,
                        age: userData[key].age,
                        email: userData[key].email,
                        number: userData[key].number,
                        address: userData[key].address,
                        city: userData[key].city,
                        zip: userData[key].zip,
                    })
                }
                console.log(dataArray)
                this.setState({
                    data: dataArray
                })
            }
        )
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div className="row justify-content-center my-5 pl-4 pr-4 m-0">
                <div className="form bg-white p-5 my-5">
                    <form>
                        <div className="form-row">
                            <div className="col-md-4 mb-4">
                                <input type="text" name="name" value={this.state.name} className="form-control" placeholder='Name' onChange={this.inputHandler} />
                            </div>
                            <div className="col-md-4 mb-4">
                                <input type="text" name="fName" value={this.state.fName} className="form-control" placeholder='Father Name' onChange={this.inputHandler} />
                            </div>
                            <div className="col-md-4 mb-4">
                                <input type="text" name="age" value={this.state.age} className="form-control" placeholder='Age' onChange={this.inputHandler} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-4">
                                <input type="email" name="email" value={this.state.email} className="form-control" placeholder='Email' onChange={this.inputHandler} />
                            </div>

                            <div className="col-md-6 mb-4">
                                <input type="text" name="number" value={this.state.number} className="form-control" placeholder='Phone Number' onChange={this.inputHandler} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-12 mb-4">
                                <input type="text" name="address" value={this.state.address} className="form-control" placeholder='Address' onChange={this.inputHandler} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-4">
                                <input type="text" name="city" value={this.state.city} className="form-control" placeholder='City' onChange={this.inputHandler} />
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" name="zip" value={this.state.zip} className="form-control" placeholder='Zip' onChange={this.inputHandler} />
                            </div>
                        </div>
                    </form>
                    <div className='text-center text-md-left'>
                        <button className="btn btn-primary" onClick={this.addData}>Add</button>
                        <button className="btn btn-success">Update</button>
                        <button className="btn btn-danger">Remove</button>
                    </div>
                </div>
                <div className='table-responsive text-nowrap col-md-11 p-0' id="table_background">
                    <table id="tablePreview" className="table table-hover data_table mb-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Father Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Phone No.</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Zip</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                            {this.state.data.map((dataObject, index) => {
                                return (
                                    <tr key={dataObject.key}>
                                        <td>{index + 1}</td>
                                        <td>{dataObject.name}</td>
                                        <td>{dataObject.fName}</td>
                                        <td>{dataObject.age}</td>
                                        <td>{dataObject.email}</td>
                                        <td>{dataObject.number}</td>
                                        <td>{dataObject.address}</td>
                                        <td>{dataObject.city}</td>
                                        <td>{dataObject.zip}</td>
                                        <td>
                                            <button class='update' data-key={dataObject.key} onClick={() => this.update(dataObject.key)}>
                                                <i class='fas fa-pencil-alt'></i>
                                            </button>
                                            <button class='remove' data-key={dataObject.key} onClick={() => this.remove(dataObject.key)}>
                                                <i class='fas fa-times'></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default App;
