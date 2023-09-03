import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, {
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  RegisterRequest: (state) => {
    state.loading = true;
  },
  RegisterSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  RegisterFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoadUserfailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  ClearErrors: (state) => {
    state.error = null;
  },
});

export const postOfFollowingReducer = createReducer(initialState, {
  PostOfFollowingRequest: (state) => {
    state.loading = true;
  },
  PostOfFollowingSuccess: (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  },
  PostOfFollowingFailure: (state, action) => {
    state.loading = false;
    state.errors = action.payload;
  },
  ClearErrors: (state) => {
    state.error = null;
  },
});

export const allUsersReducer = createReducer(initialState, {
  AllUsersRequest: (state) => {
    state.loading = true;
  },
  AllUsersSuccess: (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  },
  AllUsersFailure: (state, action) => {
    state.loading = false;
    state.errors = action.payload;
  },
  ClearErrors: (state) => {
    state.error = null;
  },
});

export const userProfileReducer = createReducer(initialState, {
  UserProfileRequest: (state) => {
    state.loading = true;
  },
  UserProfileSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  UserProfileFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  ClearErrors: (state) => {
    state.error = null;
  },
});
