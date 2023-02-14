import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Lead() {
    const data = localStorage.getItem('Role');
    const navigate = useNavigate()
    const [userList, setUserList] = useState([])
    useEffect(() => {
        fetchUsers()
    }, [])
    let fetchUsers = async () => {
        try {
            let userData = await axios.get("https://hackathon-p9ka.onrender.com/lead", {
                headers: {
                    Authorization: `${window.localStorage.getItem("token")}`
                }
            })
            setUserList(userData.data)
        } catch (error) {
            console.log('error')
        }
    }

    let addcon = async () => {
        if (data == "ADMIN") {
            try {

                navigate('/contact')

            }
            catch (error) {
                console.log('error')
            }

        }
        else {
            alert("You can't create the contact. Contact your Admin")
        }
    }
    let handleview = async (userData) => {

        try {

            navigate(`/leaddetails/${userData}`)

        }
        catch (error) {
            console.log('error')
        }


    }
    let handleedit = async (userData) => {
        if (data != "EMPLOYEE") {
            try {

                navigate(`/editlead/${userData}`)

            }
            catch (error) {
                console.log('error')
            }

        }
        else {
            alert("You cant edit...Contact Your Admin")
        }
    }
    return (
        <>



            <div className='container'>

                <h1 className="h3 mb-0 text-gray-800">Company Contact List</h1>
                <br></br>
                <table class="table table-success">
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Address</th>



                    </tr>
                    <tbody>{

                        userList.map((data) => {
                            return <tr>
                                <td>{data.fname}</td>
                                <td>{data.company}</td>
                                <td>{data.email}</td>
                                <td>{data.status}</td>
                                <td>{data.address}</td>

                                <td><button onClick={() => handleview(data._id)} className='btn btn-success '>View</button >   </td>
                                <td><button onClick={() => handleedit(data._id)} className='btn btn-primary'>Edit</button></td>



                            </tr>
                        })
                    }


                    </tbody>
                </table>
                <button onClick={() => addcon()} className='btn btn-primary text-right mb-2 ml-2'>Create Contact</button>
                <Link to={`/Home`}><button className='btn btn-primary text-right mb-2 ml-2'>Back</button> </Link>
                <button onClick={() => {
                    window.localStorage.removeItem("token");
                    navigate("/")
                }} className='btn btn-primary mb-2 ml-2'>Logout</button>
            </div>


        </>
    )
}

export default Lead
