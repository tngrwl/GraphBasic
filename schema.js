export const typeDef = `#graphql

type Book {
  id: ID!
  name: String!
  genre: [String]!
  price: Float!
  author: Author
}

type Review {
  id: ID!
  description: String!
  rating: Int
  book: Book
}

type Author {
  id: ID!
  name: String!
  verified: Boolean
  books: [Book!]
}

type Query {
  reviews: [Review]
  review(id:ID!): Review
  books: [Book]
  book(id: ID!): Book
  authors: [Author]
  author(id: ID!): Author
}

type Mutation{
addBook(book: addMutationInput): Book
    deleteBooks(id:ID!) : [Book]
    editBook(id:ID!, book: editMutationInput): Book
}

input addMutationInput{
    name: String!
  genre: [String]!
  price: Float!
  author_id: String
}

input editMutationInput{
    name: String
  genre: [String!]
  price: Float
  author_id: String
}
`;
