import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'fed uo',
      credentials: {
        username: { label: 'username', type: 'text', placeholder: 'deadpool' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials, req) {},
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
