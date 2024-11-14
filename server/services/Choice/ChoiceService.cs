using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;

namespace Server.Services.Choice
{
    public class ChoiceService : IChoiceService
    {
        private readonly ApplicationDbContext _context;

        public ChoiceService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Models.Choice> CreateChoiceAsync(string text, bool correct, int questionId)
        {
            var choice = new Models.Choice
            {
                Text = text,
                Correct = correct,
                Question = questionId
            };

            _context.Choices.Add(choice);
            await _context.SaveChangesAsync();

            return choice;
        }

        public async Task<Models.Choice> GetChoiceByIdAsync(int id)
        {
            return await _context.Choices.FindAsync(id);
        }

        public async Task<IEnumerable<Models.Choice>> GetChoicesByQuestionIdAsync(int questionId)
        {
            return await _context.Choices
                .Where(c => c.Question == questionId)
                .ToListAsync();
        }

        public async Task<Models.Choice> UpdateChoiceAsync(int id, string newText, bool correct)
        {
            var choice = await _context.Choices.FindAsync(id);
            if (choice != null)
            {
                choice.Text = newText;
                choice.Correct = correct;
            
                await _context.SaveChangesAsync();
            }

            return choice;
        }

        public async Task<bool> DeleteChoiceAsync(int id)
        {
            var choice = await _context.Choices.FindAsync(id);
            if (choice != null)
            {
                _context.Choices.Remove(choice);
                await _context.SaveChangesAsync();
                return true;
            }

            return false;
        }
    }
}