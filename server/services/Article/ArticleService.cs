using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Server.Services.Article
{
    public class ArticleService : IArticleService
    {
        private readonly EcoLearnDbContext _context;

        public ArticleService(EcoLearnDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Models.Article>> GetArticlesAsync()
        {
            return await _context.Articles.ToListAsync();
        }

        public async Task<Models.Article> GetArticleAsync(int id)
        {
            return await _context.Articles.FindAsync(id);
        }

        public async Task<Models.Article> CreateArticleAsync(Models.Article article)
        {
            _context.Articles.Add(article);
            await _context.SaveChangesAsync();
            return article;
        }

        public async Task<bool> UpdateArticleAsync(int id, Models.Article article)
        {
            if (id != article.Id)
            {
                return false;
            }

            _context.Entry(article).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Articles.Any(e => e.Id == id))
                {
                    return false;
                }
                else 
                {
                    throw;
                }
            }
            return true;
        }

        public async Task<bool> DeleteArticleAsync(int id)
        {
            var article = await _context.Articles.FindAsync(id);
            if (article == null)
            {
                return false;
            }

            _context.Articles.Remove(article);
            await _context.SaveChangesAsync();
            return true;
        }

    }
}