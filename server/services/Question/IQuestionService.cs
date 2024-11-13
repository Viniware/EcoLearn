using System.Collections.Generic;
using System.Threading.Tasks;

namespace Server.Services.Question
{
    public interface IQuestionService
    {
        Task<Models.Question> CreateQuestionAsync(string text, int quizId);
        Task<Models.Question> GetQuestionByIdAsync(int id);
        Task<IEnumerable<Models.Question>> GetQuestionsByQuizIdAsync(int quizId);
        Task<Models.Question> UpdateQuestionAsync(int id, string newText);
        Task<bool> DeleteQuestionAsync(int id);
    }
}