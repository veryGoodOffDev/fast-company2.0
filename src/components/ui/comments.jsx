import React, { useEffect, useState } from "react";
import api from "../../api";

const Comments = ({ user, userId }) => {
  const [comments, setComments] = useState();
  useEffect(() => {
    api.comments.fetchCommentsForUser(userId).then((data) => setComments(data));
  }, []);
  console.log(comments);

  const handleDelete = (id) => {
    // console.log(id);
    // setComments(comments.filter((comment) => comment._id !== id));
    api.comments.remove(id);
    setComments(comments);
  };

  return comments ? (
    comments.map((comment) => (
      <div className="bg-light card-body  mb-3" key={comment._id}>
        <div className="row">
          <div className="col">
            <div className="d-flex flex-start ">
              <img
                src="https://api.dicebear.com/5.x/croodles/svg?seed=Aneka"
                className="rounded-circle shadow-1-strong me-3"
                alt="avatar"
                width="65"
                height="65"
              />
              <div className="flex-grow-1 flex-shrink-1">
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-1 ">
                      {user.name}
                      <span className="small">{comment.created_at}</span>
                    </p>
                    <button
                      className="btn btn-sm text-primary d-flex align-items-center"
                      onClick={() => handleDelete(comment._id)}
                    >
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </div>
                  <p className="small mb-0">{comment.content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <h1>Loading...</h1>
  );
};

export default Comments;
