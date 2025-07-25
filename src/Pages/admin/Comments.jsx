import React from "react";
import { useEffect, useState } from "react";
import { comments_data } from "../../assets/assets.js";
import CommentTable from "./CommentTable.jsx";
import { useAppContext } from "../../Context/AppContext.jsx";
import { toast } from "react-hot-toast";

const Comments = () => {
  const [comments, setComments] = useState([]);

  const [filter, setFilter] = useState("Not Approved");
  const { axios } = useAppContext();

  const fetchComments = async () => {
    try {
      const { data } = await axios.get("/api/admin/comments");
      if (data.success) {
        setComments(data.comments);
      } else {
         toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-16 sm:pl-16 bg-blue-50/50">
      <div className="flex justify-between items-center max-w-3xl">
        <h1>Comments</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setFilter("Approved")}
            className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${
              filter == "Approved" ? "text-green-500" : "text-gray-700"
            }`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter("Not Approved")}
            className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${
              filter == "Not Approved" ? "text-primary" : "text-gray-700"
            }`}
          >
            Not Approved
          </button>
        </div>
      </div>

      <div className="relative h-4/5 max-w-3xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white mt-4">
        <table className="w-full texxt-sm text-gray-500">
          <thead className="text-xs text-gray-700 text-left uppercase">
            <tr>
              <th scope="col" className="px-2 py-2 xl:px-6">
                Blog Title & Comment
              </th>
              <th scope="col" className="px-2 py-2 xl:px-6">
                Date
              </th>
              <th scope="col" className="px-2 py-2 xl:px-6">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {comments
              .filter((comment) => {
                if (filter == "Approved") return comment.isApproved == true;
                return comment.isApproved == false;
              })
              .map((comment, index) => (
                <CommentTable
                  key={comment._id}
                  comment={comment}
                  index={index + 1}
                  fetchComments={fetchComments}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;
