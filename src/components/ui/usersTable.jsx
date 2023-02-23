import React from 'react';
import BookMark from '../common/bookmark';
import QualitiesList from './qualities/qualitiesList';
import Table from '../common/table';
import { Link } from 'react-router-dom';

const UserTable = ({users, onSort, selectedSort, onToggleBookMark, onDelete}) => {
    // console.log(rest)
    const columns = {
        name:{path: "name", name: "Имя", component: (user) => (<Link to={`users/${user._id}`}>{user.name}</Link>)},
        qualities: {name:"Качества", component: (user) => (<QualitiesList qualities={user.qualities}/>)},
        professions: {path: "profession.name", name: "Профессия"},
        completedMeetings: {path: "completedMeetings", name: "Встретился, раз"},
        rate: {path:"rate", name: "Оценка"},
        bookmark: {
            path:"bookmark", 
            name: "Избранное", 
            component: (user) => (<BookMark status={user.bookmark} onClick={() => onToggleBookMark(user._id)}/>)
                    },
        delete:{component: (user)=> (
            <button
            onClick={() => onDelete(user._id)}
            className="btn btn-danger">
            delete
            </button>
        ),},
    }

    return (
        <>
        <Table onSort = {onSort} selectedSort = {selectedSort} columns = {columns} data = {users}/>
        {/* <TableHeader
            {...{onSort, selectedSort, columns}}
        />
        <TableBody {...{columns, data: users}}/> */}
        </>
    )
}

export default UserTable;