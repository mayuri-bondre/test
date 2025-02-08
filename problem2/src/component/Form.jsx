import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { getdata, useradd, userdelete, useredit } from "../Slice/userSlice";
const Form = () => {
    const [newuser, setnewuser] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const [edituser, setedituser] = useState({})
    const dispatch = useDispatch()
    const { data, error, status } = useSelector((store) => store.apidata)
    console.log('dataa', data)

    useEffect(() => {
        if (status == 'idel') {
            dispatch(getdata())
        }
    }, [dispatch, status])

    if (status == 'loading') {
        return <h1>loadingg</h1>
    }
    if (status == 'failed') {
        return <h1>{error}</h1>
    }

    const handleadd = () => {
        const user = {
            ...newuser,
            id: uuidv4()
        }
        dispatch(useradd(user))
        setnewuser({
            name: '',
            phone: '',
            email: ''
        })
    }
    const handleedit=()=>{
        dispatch(useredit(edituser))
        setedituser({
            name:'',
            email:'',
            phone:''
        })
    }
    return (
        <>
            {
                edituser.id ?
                 (<div className="m-auto h-[50vh] w-[30vw] bg-gray-200 mt-5 flex justify-center items-center flex-col gap-5">
                    <input type="text" name="name" value={edituser.name} placeholder="name" onChange={(e) => setedituser({ ...edituser, name: e.target.value })} className="p-3 text-gray-600 w-[80%] rounded-lg text-lg outline-none"/>
                    <input type="text" name="email" value={edituser.email} placeholder="email" onChange={(e) => setedituser({ ...edituser, email: e.target.value })} className="p-3 text-gray-600 w-[80%] rounded-lg text-lg outline-none"/>
                    <input type="text" name="phone" value={edituser.phone} placeholder="phone" onChange={(e) => setedituser({ ...edituser, phone: e.target.value })} className="p-3 text-gray-600 w-[80%] rounded-lg text-lg outline-none"/>
                    <button onClick={handleedit}  className="p-3 bg-blue-700 text-white text-lg font-bold rounded-lg w-[80%]">edit</button>
                </div>)
                    : 
                    (<div className="m-auto h-[50vh] w-[30vw] bg-gray-200 mt-5 flex justify-center items-center flex-col gap-5">
                        <input type="text" name="name" value={newuser.name} placeholder="name" onChange={(e) => setnewuser({ ...newuser, name: e.target.value })} className="p-3 text-gray-600 w-[80%] rounded-lg text-lg outline-none"/>
                        <input type="text" name="email" value={newuser.email} placeholder="email" onChange={(e) => setnewuser({ ...newuser, email: e.target.value })} className="p-3 text-gray-600 w-[80%] rounded-lg text-lg outline-none"/>
                        <input type="text" name="phone" value={newuser.phone} placeholder="phone" onChange={(e) => setnewuser({ ...newuser, phone: e.target.value })} className="p-3 text-gray-600 w-[80%] rounded-lg text-lg outline-none" />
                        <button onClick={handleadd} className="p-3 bg-blue-700 text-white text-lg font-bold rounded-lg w-[80%]">submit</button>
                    </div>)
            }

            <table className="m-auto mt-8">
                <tr className="p-3 text-lg font-bold">
                    <td>name</td>
                    <td>phome</td>
                    <td>email</td>
                    <td>action</td>
                </tr>
                
                    {
                        data.map((user, i) => {
                            return (
                                <tr key={i + 1} className="p-3 text-lg mt-3 ml-3">
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button onClick={() => dispatch(userdelete(user.id))} className="p-3 bg-red-400 text-white rounded-lg m-3">delete</button>
                                        <button onClick={() => setedituser({ ...edituser, name: user.name, email: user.email, phone: user.phone, id: user.id })} className="p-3 bg-yellow-500 text-white rounded-lg m-3">edit</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
         
            </table>
        </>
    )
}
export default Form;