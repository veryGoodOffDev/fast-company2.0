import React from 'react';

const TableHeader = ({onSort, selectedSort, columns}) => {
    
    const handleSort = (item) => {
        if(selectedSort.path === item) {
            onSort(({...selectedSort, order:selectedSort.order==="asc"?"desc":"asc"}))
        } else {
            onSort({path:item, order:"asc"})
        }
    }
    const renderSortArrow = (selectedSort, currentPath) => {
        if (selectedSort.path === currentPath) {
            if (selectedSort.order === "asc") {
                return <i className="bi bi-caret-down-fill"></i>;
            } else {
                return <i className="bi bi-caret-up-fill"></i>;
            }
        }
        return null;
    };

    return     (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}{" "}
                        {renderSortArrow(selectedSort, columns[column].path)}
                    </th>
                ))}
            </tr>
        </thead>
//     <thead>
//     <tr>
//         {Object.keys(columns).map((column) => {
//            return <th key={column} onClick={()=>handleSort(columns[column].path)} scope="col">
//                 {columns[column].name} <button className="bi bi-caret-up-fill"></button>
//             </th>
// })}
        
//         {/* <th scope="col">Качества</th>
//         <th onClick={()=>handleSort('profession.name')} scope="col">Профессия</th>
//         <th onClick={()=>handleSort('completedMeetings')} scope="col">Встретился, раз</th>
//         <th onClick={()=>handleSort('rate')} scope="col">Оценка</th>
//         <th onClick={()=>handleSort('bookmark')} scope="col">Избранное</th>
//         <th /> */}
//     </tr>
// </thead>)
    )
}

export default TableHeader;