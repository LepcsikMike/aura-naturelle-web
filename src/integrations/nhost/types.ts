// Nhost GraphQL types will be generated here
// You can use the Nhost CLI to generate types from your GraphQL schema

export interface User {
  id: string;
  email: string;
  displayName?: string;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: Error | null;
}