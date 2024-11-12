using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Data;
using Server.Models;
using Microsoft.EntityFrameworkCore;

namespace Server.Services.Comment
{
    public class CommentService : ICommentService
    {
        private readonly ApplicationDbContext _context;

        public CommentService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Models.Comment> CreateCommentAsync(string text, int userId, int articleId)
        {
            var comment = new Models.Comment
            {
                Text = text,
                Upvote = 0,
                Downvote = 0,
                Date = DateTime.Now.Date,
                Time = DateTime.Now.TimeOfDay,
                User = userId,
                Article = articleId
            };

            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();
            return comment;
        }

        public async Task<Models.Comment> GetCommentByIdAsync(int id)
        {
            return await _context.Comments
                .FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<IEnumerable<Models.Comment>> GetCommentsByArticleIdAsync(int articleId)
        {
            return await _context.Comments
                .Where(c => c.Article == articleId)
                .ToListAsync();
        }

        public async Task<Models.Comment> UpdateCommentAsync(int id, string newText)
        {
            var comment = await _context.Comments
                .FirstOrDefaultAsync(c => c.Id == id);

            if (comment == null)
                return null;

            comment.Text = newText;
            await _context.SaveChangesAsync();

            return comment;
        }

        public async Task<bool> DeleteCommentAsync(int id)
        {
            var comment = await _context.Comments
                .FirstOrDefaultAsync(c => c.Id == id);

            if (comment == null)
                return false;

            _context.Comments.Remove(comment);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}