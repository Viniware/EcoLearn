using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Server.Models;

namespace Server.Services.Comment
{
    public interface ICommentService
    {
        Task<Models.Comment> CreateCommentAsync(string text, int userId, int articleId);

        Task<Models.Comment> GetCommentByIdAsync(int id);

        Task<IEnumerable<Models.Comment>> GetCommentsByArticleIdAsync(int articleId);

        Task<Models.Comment> UpdateCommentAsync(int id, string newText);

        Task<bool> DeleteCommentAsync(int id);
    }
}