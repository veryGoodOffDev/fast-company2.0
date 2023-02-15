import React from "react";

const BookMark = ({onClick, id, status}) => {
    // console.log(status)
    return <button onClick={()=>onClick(id)} className={status?"bi bi-balloon-heart-fill":"bi bi-balloon-heart"}></button>
}

export default BookMark;