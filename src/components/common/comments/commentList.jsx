import React from "react";
import Comment from "./comment";

const CommentsList = ({ comments, onRemove }) => {
  return comments.map((comment) => {
    <Comment key={comment._id} {...comment} onRemove={onRemove} />;
  });
};

export default CommentsList;
