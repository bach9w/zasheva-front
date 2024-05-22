import { v } from "convex/values";
import { Query } from "convex/server";
import { mutation, query } from "./_generated/server";

export const getAll_Rooms = query({
	args: {},
	handler: async (ctx) => {
		return await ctx.db.query("rooms").collect();
	},
});
