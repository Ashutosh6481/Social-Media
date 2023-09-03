import axios from "axios";

export const likePost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "LikeRequest",
    });

    const { data } = await axios.get(`/api/v1/post/${id}`);

    dispatch({
      type: "LikeSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LikeFailure",
      payload: error.response.data.message,
    });
  }
};

export const addCommentOnPost = (id, comment) => async (dispatch) => {
  try {
    dispatch({
      type: "AddCommentRequest",
    });

    const { data } = await axios.put(
      `/api/v1/post/comment/${id}`,
      { comment },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    dispatch({
      type: "AddCommentSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "AddCommentFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteCommentOnPost = (id, commentId) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteCommentRequest",
    });

    const { data } = await axios.delete(`/api/v1/post/comment/${id}`, {
      data: commentId,
    });

    dispatch({
      type: "DeleteCommentSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DeleteCommentFailure",
      payload: error.response.data.message,
    });
  }
};
