import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDef } from "./schema.js";
import db from "./_db.js";

const resolvers = {
  Query: {
    reviews: () => db.reviews,
    books: () => db.books,
    authors: () => db.authors,
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    book(_, args) {
      return db.books.find((book) => book.id === args.id);
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
  },
  Book: {
    author(parent) {
      return db.authors.find((author) => author.id === parent.author_id);
    },
  },
  Review: {
    book(parent) {
      return db.books.find((book) => book.id === parent.book_id);
    },
  },
  Author: {
    books(parent) {
      return db.books.filter((book) => book.author_id === parent.id);
    },
  },
  Mutation: {
    deleteBooks(_, args) {
      db.books = db.books.filter((book) => book.id != args.id);
      return db.books;
    },
    addBook(_, args) {
      const book = {
        ...args.book,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      db.books.push(book);
      return book;
    },
    editBook(_, args) {
      db.books = db.books.map((b) => {
        if (b.id === args.id) {
          return { ...b, ...args.book };
        }
        return b;
      });
      return db.books.find((g) => g.id === args.id);
    },
  },
};
const server = new ApolloServer({
  typeDefs: typeDef,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("server listeing at ", 4000);
