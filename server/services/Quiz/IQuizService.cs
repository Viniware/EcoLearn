using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Server.Models;

namespace Server.Services.Quiz
{
    public interface IQuizService
    {
        Task<Models.Quiz> CreateQuizAsync(string name, string description, int totalPoints, int articleId);

        Task<Models.Quiz> GetQuizByIdAsync(int id);

        Task<IEnumerable<Models.Quiz>> GetQuizzesByArticleIdAsync(int articleId);

        Task<Models.Quiz> UpdateQuizAsync(int id, string name, string description, int totalPoints);

        Task<bool> DeleteQuizAsync(int id);
    }
}