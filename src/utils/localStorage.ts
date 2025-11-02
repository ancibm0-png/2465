import { Book, User, Borrow, Reservation } from '../types';

const STORAGE_KEYS = {
  BOOKS: 'library_books',
  USERS: 'library_users',
  BORROWS: 'library_borrows',
  RESERVATIONS: 'library_reservations',
  CURRENT_USER: 'library_current_user',
};

export const initializeStorage = () => {
  if (!localStorage.getItem(STORAGE_KEYS.BOOKS)) {
    const initialBooks: Book[] = [
      {
        id: '1',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Classic',
        description: 'A classic novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.',
        coverImage: 'https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&w=400',
        totalCopies: 5,
        availableCopies: 3,
        isbn: '978-0743273565',
        publishedYear: 1925,
      },
      {
        id: '2',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Classic',
        description: 'A gripping tale of racial injustice and childhood innocence in the American South.',
        coverImage: 'https://images.pexels.com/photos/3358707/pexels-photo-3358707.jpeg?auto=compress&cs=tinysrgb&w=400',
        totalCopies: 4,
        availableCopies: 2,
        isbn: '978-0061120084',
        publishedYear: 1960,
      },
      {
        id: '3',
        title: '1984',
        author: 'George Orwell',
        genre: 'Science Fiction',
        description: 'A dystopian social science fiction novel and cautionary tale about totalitarianism.',
        coverImage: 'https://images.pexels.com/photos/4132938/pexels-photo-4132938.jpeg?auto=compress&cs=tinysrgb&w=400',
        totalCopies: 6,
        availableCopies: 4,
        isbn: '978-0451524935',
        publishedYear: 1949,
      },
      {
        id: '4',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        genre: 'Romance',
        description: 'A romantic novel of manners that satirizes the British landed gentry at the end of the 18th century.',
        coverImage: 'https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=400',
        totalCopies: 5,
        availableCopies: 5,
        isbn: '978-0141439518',
        publishedYear: 1813,
      },
      {
        id: '5',
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        genre: 'Classic',
        description: 'A story about teenage rebellion and alienation narrated by Holden Caulfield.',
        coverImage: 'https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&w=400',
        totalCopies: 4,
        availableCopies: 1,
        isbn: '978-0316769174',
        publishedYear: 1951,
      },
      {
        id: '6',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasy',
        description: 'A fantasy novel about the quest of home-loving Bilbo Baggins to win a share of treasure guarded by a dragon.',
        coverImage: 'https://images.pexels.com/photos/3358707/pexels-photo-3358707.jpeg?auto=compress&cs=tinysrgb&w=400',
        totalCopies: 7,
        availableCopies: 6,
        isbn: '978-0547928227',
        publishedYear: 1937,
      },
      {
        id: '7',
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J.K. Rowling',
        genre: 'Fantasy',
        description: 'The first novel in the Harry Potter series about a young wizard\'s first year at Hogwarts.',
        coverImage: 'https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400',
        totalCopies: 10,
        availableCopies: 8,
        isbn: '978-0439708180',
        publishedYear: 1997,
      },
      {
        id: '8',
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        genre: 'Mystery',
        description: 'A mystery thriller novel that follows symbologist Robert Langdon as he investigates a murder in Paris.',
        coverImage: 'https://images.pexels.com/photos/4132938/pexels-photo-4132938.jpeg?auto=compress&cs=tinysrgb&w=400',
        totalCopies: 5,
        availableCopies: 3,
        isbn: '978-0307474278',
        publishedYear: 2003,
      },
    ];
    localStorage.setItem(STORAGE_KEYS.BOOKS, JSON.stringify(initialBooks));
  }

  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify([]));
  }

  if (!localStorage.getItem(STORAGE_KEYS.BORROWS)) {
    localStorage.setItem(STORAGE_KEYS.BORROWS, JSON.stringify([]));
  }

  if (!localStorage.getItem(STORAGE_KEYS.RESERVATIONS)) {
    localStorage.setItem(STORAGE_KEYS.RESERVATIONS, JSON.stringify([]));
  }
};

export const getBooks = (): Book[] => {
  const books = localStorage.getItem(STORAGE_KEYS.BOOKS);
  return books ? JSON.parse(books) : [];
};

export const saveBooks = (books: Book[]) => {
  localStorage.setItem(STORAGE_KEYS.BOOKS, JSON.stringify(books));
};

export const getUsers = (): User[] => {
  const users = localStorage.getItem(STORAGE_KEYS.USERS);
  return users ? JSON.parse(users) : [];
};

export const saveUsers = (users: User[]) => {
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
};

export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  return user ? JSON.parse(user) : null;
};

export const setCurrentUser = (user: User | null) => {
  if (user) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  }
};

export const getBorrows = (): Borrow[] => {
  const borrows = localStorage.getItem(STORAGE_KEYS.BORROWS);
  return borrows ? JSON.parse(borrows) : [];
};

export const saveBorrows = (borrows: Borrow[]) => {
  localStorage.setItem(STORAGE_KEYS.BORROWS, JSON.stringify(borrows));
};

export const getReservations = (): Reservation[] => {
  const reservations = localStorage.getItem(STORAGE_KEYS.RESERVATIONS);
  return reservations ? JSON.parse(reservations) : [];
};

export const saveReservations = (reservations: Reservation[]) => {
  localStorage.setItem(STORAGE_KEYS.RESERVATIONS, JSON.stringify(reservations));
};
