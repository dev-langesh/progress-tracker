import { config } from "@/data";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: config.client_id,
      clientSecret: config.client_secret,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
