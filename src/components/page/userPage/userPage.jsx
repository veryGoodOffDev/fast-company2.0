import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from "../../../api"
import QualitiesList from '../../ui/qualities';

const UserPage = ({userId}) => {
    const history = useHistory();
    const [user, setUser] = useState()
    useEffect(()=> {
        api.users.getById(userId).then((data) => setUser(data))
        console.log(user)
    }, [])
  
    const handleReturn = () => {
        history.push("/users")
    }
    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    }

    console.log(user)
    if (user) {
        return (
            <div className='border border-success m-3'>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities = {user.qualities}/>
                <h3>Complete Meetings: {user.completedMeetings}</h3>
                <h3>Rate: <span className={user.rate<4?"badge bg-warning":"badge bg-success"}>{user.rate}</span></h3>
                <button 
                    onClick={handleClick} 
                    className='btn btn-secondary'>
                        Изменить данные
                </button>
            </div>
        )
    } else {
    return <h1>Loading...</h1>
    }
}
 
export default UserPage;