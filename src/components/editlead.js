import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'

function Editlead() {
    const navigate = useNavigate()
    let params = useParams()
    useEffect(async () => {
        {

            let userData = await axios.get(`https://hackathon-p9ka.onrender.com/leaddetails/${params.id}`, {
                headers: {
                    Authorization: `${window.localStorage.getItem("token")}`
                }
            })
            formik.setValues(userData.data)
        }
    }, [])


    const formik = useFormik({
        initialValues: {
            fname: "",
            email: "",
            lname: "",
            company: "",
            status: "",

        },

        onSubmit: async (values) => {
            try {


                await axios.put(`https://hackathon-p9ka.onrender.com/editlead/${params.id}`, values, {
                    headers: {
                        Authorization: `${window.localStorage.getItem("token")}`
                    }
                })
                alert("Lead Updated")
                navigate('/Lead/')
            }
            catch (error) {
                console.log('error')
            }
        }

    })
    return (
        <div className='row justify-content-center align-items-center'  >
            <div className="col-md-9 col-lg-6 col-xl-4 h-70 shadow p-3 mb-5 mt-10 rounded" style={{ backgroundColor: "white" }}>

                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>

                        <div className='col-lg-12'>
                            <label>Name</label>
                            <input type='text' name="fname"
                                className='form-control' onChange={formik.handleChange} value={formik.values.fname} />
                        </div>
                        <div className='col-lg-12'>
                            <label>Email</label>
                            <input type='text' name="email"
                                className='form-control' onChange={formik.handleChange} value={formik.values.email} />

                        </div>
                        <div className='col-lg-12'>
                            <label>Company</label>
                            <input type='text' name="company"
                                className='form-control' onChange={formik.handleChange} value={formik.values.company} />

                        </div>

                        <div className='form-group col-lg-12'>
                            <label>Status</label>
                            <br></br>
                            <select name="status" value={formik.values.status} onChange={formik.handleChange}>
                                <option selected>Select</option>
                                <option value="New" >New</option>
                                <option value="Qualified" >Qualified</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Lost">Lost</option>
                                <option value="Canceled">Canceled</option>
                                <option value="Confirmed">Confirmed</option>
                            </select>


                        </div>

                        <button type={"Submit"} className='btn btn-primary mt-3' style={{ "margin-left": "40%" }}>Update</button>
                        <Link to={`/lead`}> <button type='submit' className='btn btn-primary rounded  justify-content-center mt-3 ml-2' >Back</button></Link>


                    </div>
                </form>
            </div>
        </div>
    )
}

export default Editlead
