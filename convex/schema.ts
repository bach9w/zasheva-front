import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	members: defineTable({
		roleId: v.id("roles"),
		searchable: v.string(),
		teamId: v.id("teams"),
		userId: v.id("users"),
	}),
	rooms: defineTable({
		room_Number: v.string(),
		room_Type: v.string(),
		room_Status: v.string(),
		room_Price: v.string(),
		room_Description: v.string(),
		room_Image: v.string(),
	}),
	reservations: defineTable({
		roomId: v.id("rooms"),
		duration: v.string(),
		arivalDate: v.string(),
		departureDate: v.string(),
		numberOfGuests: v.string(),
		priceToCollect: v.string(),
	}),
	messages: defineTable({
		arivalDate: v.string(),
		departureDate: v.string(),
		isArrived: v.boolean(),
		isBooking: v.boolean(),
		isCleaned: v.boolean(),
		isDeparted: v.boolean(),
		isPaid: v.boolean(),
		memberId: v.id("members"),
		note: v.string(),
		numberOfGuests: v.string(),
		priceToCollect: v.string(),
		roomNumber: v.string(),
		teamId: v.id("teams"),
		text: v.string(),
	}),
	permissions: defineTable({ name: v.string() }),
	roles: defineTable({
		isDefault: v.boolean(),
		name: v.string(),
	}),
	roles_to_permissions: defineTable({
		permissionsId: v.id("permissions"),
		rolesId: v.id("roles"),
	}),
	teams: defineTable({
		isPersonal: v.boolean(),
		name: v.string(),
		slug: v.string(),
	}),
	users: defineTable({
		email: v.string(),
		fullName: v.string(),
		pictureUrl: v.string(),
		tokenIdentifier: v.string(),
	}),
});
