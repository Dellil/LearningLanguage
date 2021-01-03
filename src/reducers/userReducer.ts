import { createReducer, createAction } from "@reduxjs/toolkit";
import { UserProfile } from "types/reducer.type";

const profile = createAction<UserProfile>("profile");

const userReducer = createReducer(
	{
		name: "",
		photoURL: "",
	},
	(builder) => {
		builder
			.addCase(profile, (state, action) => {
				const {
					payload: { name, photoURL },
				} = action;
				state.name = name;
				state.photoURL = photoURL;
			})
			.addDefaultCase((state, action) => {});
	},
);

export default userReducer;
