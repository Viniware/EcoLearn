using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Data;
using Microsoft.EntityFrameworkCore;

namespace Server.Services.Quiz
{
    public class QuizService : IQuizService
    {
        private readonly ApplicationDbContext _context;

        public QuizService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Models.Quiz> CreateQuizAsync(string name, string description, int totalPoints, int articleId)
        {
            var quiz = new Models.Quiz
            {
                Name = name,
                Description = description,
                Date = DateTime.Now.Date,
                TotalPoints = totalPoints,
                Article = articleId
            };

            _context.Quizzes.Add(quiz);
            await _context.SaveChangesAsync();
            return quiz;
        }

        public async Task<Models.Quiz> GetQuizByIdAsync(int id)
        {
            return await _context.Quizzes
                .FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<IEnumerable<Models.Quiz>> GetQuizzesByArticleIdAsync(int articleId)
        {
            return await _context.Quizzes
                .Where(c => c.Article == articleId)
                .ToListAsync();
        }

        public async Task<Models.Quiz> UpdateQuizAsync(int id, string name, string description, int totalPoints)
        {
            var quiz = await _context.Quizzes
                .FirstOrDefaultAsync(c => c.Id == id);

            if (quiz == null)
                return null;

            quiz.Name = name;
            quiz.Description = description;
            quiz.TotalPoints = totalPoints;
            await _context.SaveChangesAsync();

            return quiz;
        }

        public async Task<bool> DeleteQuizAsync(int id)
        {
            var quiz = await _context.Quizzes
                .FirstOrDefaultAsync(c => c.Id == id);

            if (quiz == null)
                return false;

            _context.Quizzes.Remove(quiz);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}