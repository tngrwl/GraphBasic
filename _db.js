const books = [
  {
    id: "1",
    name: "Pride and Prejudice",
    genre: ["Romance", "Classic"],
    price: 12.99,
    author_id: "1", // Jane Austen
  },
  {
    id: "2",
    name: "1984",
    genre: ["Dystopian", "Political Fiction", "Science Fiction"],
    price: 14.99,
    author_id: "2", // George Orwell
  },
  {
    id: "3",
    name: "Harry Potter and the Sorcerer's Stone",
    genre: ["Fantasy", "Adventure", "Young Adult"],
    price: 19.99,
    author_id: "3", // J.K. Rowling
  },
  {
    id: "4",
    name: "Adventures of Huckleberry Finn",
    genre: ["Adventure", "Classic"],
    price: 10.99,
    author_id: "4", // Mark Twain
  },
  {
    id: "5",
    name: "Emma",
    genre: ["Romance", "Classic"],
    price: 11.99,
    author_id: "1", // Jane Austen
  },
];

const reviews = [
  {
    id: "1",
    description: "This book was absolutely fantastic! I couldn't put it down.",
    rating: 5,
    book_id: "1",
  },
  {
    id: "2",
    description:
      "It was good, but it could have used more character development.",
    rating: 3,
    book_id: "2",
  },
  {
    id: "3",
    description: "A disappointing read. The plot was predictable and boring.",
    rating: 2,
    book_id: "3",
  },
  {
    id: "4",
    description: "An engaging story with great twists. Highly recommended!",
    rating: 4,
    book_id: "4",
  },
];

const authors = [
  {
    id: "1",
    name: "Jane Austen",
    verified: true,
  },
  {
    id: "2",
    name: "George Orwell",
    verified: false,
  },
  {
    id: "3",
    name: "J.K. Rowling",
    verified: true,
  },
  {
    id: "4",
    name: "Mark Twain",
    verified: true,
  },
];

export default { books, reviews, authors };
