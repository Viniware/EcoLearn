using Server.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Server.Services.Article
{
    public interface IArticleService
    {
        Task<IEnumerable<Models.Article>> GetArticlesAsync();
        Task<Models.Article> GetArticleAsync(int id);
        Task<Models.Article> CreateArticleAsync(Models.Article article);
        Task<bool> UpdateArticleAsync(int id, Models.Article article);
        Task<bool> DeleteArticleAsync(int id);
    }
}