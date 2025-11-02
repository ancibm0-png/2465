export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  coverImage: string;
  totalCopies: number;
  availableCopies: number;
  isbn: string;
  publishedYear: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'librarian';
}

export interface Borrow {
  id: string;
  bookId: string;
  userId: string;
  borrowDate: string;
  dueDate: string;
  returnDate?: string;
  status: 'active' | 'returned' | 'overdue';
}

export interface Reservation {
  id: string;
  bookId: string;
  userId: string;
  reservationDate: string;
  status: 'pending' | 'fulfilled' | 'cancelled';
}
