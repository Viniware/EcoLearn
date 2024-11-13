using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Server.Data;
using Server.Models;

namespace Server.Services.Question
{
    public class QuestionService : IQuestionService
    {
        private readonly ApplicationDbContext _context;

        public QuestionService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Models.Question> CreateQuestionAsync(string text, int quizId)
        {
            var question = new Models.Question
            {
                Text = text,
                Quiz = quizId
            };

            _context.Questions.Add(question);
            await _context.SaveChangesAsync();
            return question;
        }

        public async Task<Models.Question> GetQuestionByIdAsync(int id)
        {
            return await _context.Questions
                .Include(q => q.Quiz)
                .FirstOrDefaultAsync(q => q.Id == id);
        }

        public async Task<IEnumerable<Models.Question>> GetQuestionsByQuizIdAsync(int quizId)
        {
            return await _context.Questions
                .Where(q => q.Quiz == quizId)
                .ToListAsync();
        }

        public async Task<Models.Question> UpdateQuestionAsync(int id, string newText)
        {
            var question = await _context.Questions.FindAsync(id);
            if (question == null) return null;

            question.Text = newText;
            await _context.SaveChangesAsync();
            return question;
        }

        public async Task<bool> DeleteQuestionAsync(int id)
        {
            var question = await _context.Questions.FindAsync(id);
            if (question == null) return false;

            _context.Questions.Remove(question);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}