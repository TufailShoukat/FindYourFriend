
// import { connectDb } from "@/lib/DbConnect/dbConnect";
// import { UserModels } from "@/lib/module/moduleUser";
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// const handleUser = async (profile) => {
//   await connectDb();
//   let user = await UserModels.findOne({ email: profile.email });
//   if (user) return user;
  
//   let newUser = new UserModels({
//     fullName: profile.name,
//     email: profile.email,
//     profileImage: profile.picture,
//   });
  
//   newUser = await newUser.save();
//   return newUser;
// };

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async signIn({ account, profile }) {
//       console.log("profile", profile);
//       const user = await handleUser(profile);

//       // Add role and ID to the profile object
//       profile.role = user.role;
//       profile._id = user._id;
//       return true;
//     },
//     async jwt({ token, user }) {
//       console.log("token", token);
//       if (user) {
//         token.id = user._id;
//         token.role = user.role;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user.id = token.id;
//       session.user.role = token.role;
//       return session;
//     },
//   },
// });
