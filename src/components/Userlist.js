
import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function UserList() {
    const data = localStorage.getItem('Role');
    const token = localStorage.getItem('token');
    console.log(data)
    const [userList, setUserList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchUsers()
    }, [])
    let fetchUsers = async () => {
        try {
            let userData = await axios.get(`https://hackathon-p9ka.onrender.com/userlist`, {
                headers: {
                    Authorization: `${window.localStorage.getItem("token")}`
                }
            });
            setUserList(userData.data)
        } catch (error) {
            console.log('error')
        }
    }
    let handleDelete = async (userData) => {
        console.log(userData)
        if (data != "EMPLOYEE") {
            try {

                await axios.delete(`https://hackathon-p9ka.onrender.com/user/${userData}`, {
                    headers: {
                        Authorization: `${window.localStorage.getItem("token")}`
                    }
                })
                alert('userdeleted')
                fetchUsers()

            }
            catch (error) {
                console.log("Error")
            }
        }
        else {
            alert("You can't delete. Contact your Admin")
        }

    }

    let handleedit = async (userData) => {
        if (data != "EMPLOYEE") {
            try {

                navigate(`/edit/${userData}`)

            }
            catch (error) {
                console.log('error')
            }

        }
        else {
            alert("You can't Edit. Contact your Adminr")
        }
    }

    let handleview = async (userData) => {

        try {

            navigate(`/Userdata/${userData}`)

        }
        catch (error) {
            console.log('error')
        }


    }


    let addemp = async () => {
        if (data != "EMPLOYEe") {
            try {

                navigate('/Addemployee')

            }
            catch (error) {
                console.log('error')
            }

        }
        else {
            alert("You can't Add the User. Contact your Admin")
        }
    }






    return (

        <>
            <button onClick={() => addemp()} className='btn btn-primary text-right mb-2 ml-2'>Add Employee</button>

            <Link to={`/Home`}><button className='btn btn-primary text-right mb-2 ml-2'>Back</button> </Link>
            <button onClick={() => {
                window.localStorage.removeItem("token");
                navigate("/")
            }} className='btn btn-primary mb-2  ml-2'>Logout</button>

            <div className="d-sm-flex align-items-flex-end justify-content-center mb-4">


            </div>



            <div className="container">

                <table class="table table-success">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>

                    </tr>
                    <tbody>{

                        userList.map((data) => {
                            return <tr>
                                <td>{data.fname}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>{data.role}</td>


                                <td><button onClick={() => handleview(data._id)} className='btn btn-success '>View</button >   </td>
                                <td><button onClick={() => handleedit(data._id)} className='btn btn-primary'>Edit</button></td>

                                <td><button onClick={() => handleDelete(data._id)} className='btn btn-danger'>Delete</button></td>

                            </tr>
                        })
                    }



                    </tbody>
                </table>


            </div >

        </>
    )
}

export default UserList
