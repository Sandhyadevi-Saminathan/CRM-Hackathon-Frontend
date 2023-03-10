import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Leaddetails() {
    const navigate = useNavigate()
    const [userList, setUserList] = useState({})
    let params = useParams()
    useEffect(() => {
        fetchUsers()
    }, [])
    let fetchUsers = async () => {
        try {
            let userData = await axios.get(`https://hackathon-p9ka.onrender.com/leaddetails/${params.id}`, {
                headers: {
                    Authorization: `${window.localStorage.getItem("token")}`
                }
            })
            console.log(userData.data);
            setUserList(userData.data)
        } catch (error) {
            console.log('error')
        }
    }
    let handlehome = async (userList) => {
        console.log(userList.role);
        try {

            navigate(`/lead/`)
        }
        catch (error) {
            console.log('error')
        }
    }

    return (

        <>
            <div className='container' style={{ "width": "50rem" }}>
                <div class="card text-center card text-dark bg-info mb-3">
                    <h3> <div class="card-header">
                        User Details
                    </div></h3>
                    <div class="card-body">
                        <h4 class="card-text"> Name: {userList.fname}</h4>
                        <h4 class="card-text">Company: {userList.company}</h4>
                        <h4 class="card-text">Email: {userList.email}</h4>
                        <h4 class="card-text">Status: {userList.status}</h4>
                        <h4 class="card-text">Address: {userList.address}</h4>
                        <button onClick={() => handlehome(userList)} className='btn btn-primary mt -2'>Back</button>



                    </div>
                </div>
            </div>

        </>
    )
}


export default Leaddetails