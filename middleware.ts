import { createI18nMiddleware } from "next-international/middleware";
import type { NextRequest } from "next/server";

const I18nMiddleWare = createI18nMiddleware({
	locales: ["en", "bg"],
	defaultLocale: "bg",
});

export function middleware(request: NextRequest) {
	return I18nMiddleWare(request);
}

export const config = {
	matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
