using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Services.Article;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly IArticleService _articleService;

        public ArticleController(IArticleService articleService)
        {
            _articleService = articleService;
        }

        [HttpPost]
        public async Task<ActionResult<Article>> CreateArticle([FromBody] Article article)
        {
            if (article == null)
            {
                return BadRequest("Article data is required.");
            }

            var createdArticle = await _articleService.CreateArticleAsync(article);

            if (createdArticle == null)
            {
                return BadRequest("Unable to create article.");
            }

            return CreatedAtAction(nameof(GetArticle), new { id = createdArticle.Id }, createdArticle);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Article>>> GetArticles()
        {
            var articles = await _articleService.GetArticlesAsync();
            return Ok(articles);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Article>> GetArticle(int id)
        {
            var article = await _articleService.GetArticleAsync(id);
            if (article == null)
            {
                return NotFound();
            }
            return Ok(article);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateArticle(int id, Article article)
        {
            var success = await _articleService.UpdateArticleAsync(id, article);
            if (!success)
            {
                return BadRequest();
            }
            return NoContent();
        }    
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArticle(int id)
        {
            var success = await _articleService.DeleteArticleAsync(id);
            if (!success)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}