using System.Collections.Generic;
using System.Threading.Tasks;
using Server.Models;

namespace Server.Services.Choice
{
    public interface IChoiceService
    {
        Task<Models.Choice> CreateChoiceAsync(string text, bool correct, int questionId);
        Task<Models.Choice> GetChoiceByIdAsync(int id);
        Task<IEnumerable<Models.Choice>> GetChoicesByQuestionIdAsync(int questionId);
        Task<Models.Choice> UpdateChoiceAsync(int id, string newText, bool correct);
        Task<bool> DeleteChoiceAsync(int id);
    }
}