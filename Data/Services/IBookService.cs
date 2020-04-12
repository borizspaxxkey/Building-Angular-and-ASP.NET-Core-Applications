using System.Collections.Generic;
using summaries.Controllers.Data.Models;

namespace summaries.Data.Services
{
    public interface IBookService
    {
    // Read
    List<Book> GetAllBooks();

    // Read
    Book GetBookById(int id);

    // Update
    void UpdateBook(int id, Book newBook);

    // Delete
    void DeleteBook(int id);

    // Create
    void AddBook(Book newBook);
  }
}