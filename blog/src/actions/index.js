// import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
   await dispatch(fetchPosts());
//    const userIds = _.uniq(_.map(getState().posts, "userId"));
   const userIds = new Set(getState().posts.map(p => p.userId));
//    console.log(new Set(userIds));
   userIds.forEach(id => dispatch(fetchUser(id)));
}

export const fetchPosts = () => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch( {
        type: "FETCH_POSTS",
        payload: response.data
    });
};

export const fetchUser = id => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get(`users/${id}`);

    dispatch( {
        type: "FETCH_USER",
        payload: response.data
    });
};

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`users/${id}`);

//     dispatch( {
//         type: "FETCH_USER",
//         payload: response.data
//     });
// });