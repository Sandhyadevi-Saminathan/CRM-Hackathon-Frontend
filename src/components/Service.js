import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Service() {
    const data = localStorage.getItem('Role');
    const [userList, setUserList] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        fetchUsers()
    }, [])
    let fetchUsers = async () => {
        try {
            let userData = await axios.get("https://hackathon-p9ka.onrender.com/service", {
                headers: {
                    Authorization: `${window.localStorage.getItem("token")}`
                }
            })
            setUserList(userData.data)
        } catch (error) {
            console.log('error')
        }
    }
    let addser = async () => {
        if (data !== "EMPLOYEE") {
            try {

                navigate('/rservice')

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

            navigate(`/servicedetails/${userData}`)

        }
        catch (error) {
            console.log('error')
        }


    }
    let handleedit = async (userData) => {
        if (data != "EMPLOYEE") {
            try {

                navigate(`/editservice/${userData}`)

            }
            catch (error) {
                console.log('error')
            }

        }
        else {
            alert("You cant edit..Contact your Admin")
        }
    }

    return (
        <>
            <button onClick={() => {
                window.localStorage.removeItem("token");
                navigate("/")
            }} className='btn btn-primary mt -3 ml-2'>Logout</button>


            <div className='container'>
                <h1 className="h3 mb-0 text-gray-800">SERVICE REQUEST</h1>
                <table class="table table-success">
                    <tr>
                        <th>Company</th>
                        <th>Service Request</th>
                        <th>Details</th>
                        <th>Request Date</th>
                        <th>Status</th>
                        <th>Solved Date</th>



                    </tr>
                    <tbody>{

                        userList.map((data) => {
                            return <tr>
                                <td>{data.company}</td>
                                <td>{data.service}</td>
                                <td>{data.details}</td>
                                <td>{data.rdate}</td>
                                <td>{data.status}</td>
                                <td>{data.sdate}</td>


                                <td><button onClick={() => handleview(data._id)} className='btn btn-success '>View</button >   </td>
                                <td><button onClick={() => handleedit(data._id)} className='btn btn-primary'>Edit</button></td>



                            </tr>
                        })
                    }



                    </tbody>
                </table>
                <button onClick={() => addser()} className='btn btn-primary text-right mb-2 ml-2'>Create Service</button>
                <Link to={`/Home`}><button className='btn btn-primary text-right mb-2 ml-2'>Back</button> </Link>
            </div>

        </>
    )
}

export default Service
