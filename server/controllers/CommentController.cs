using Server.Models;
using Server.Services.Comment;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentService _commentService;

        public CommentController(ICommentService commentService)
        {
            _commentService = commentService;
        }

        [HttpPost]
        public async Task<ActionResult<Comment>> CreateComment([FromBody] Comment comment)
        {
            if (comment == null)
            {
                return BadRequest("Comment data is required.");
            }

            var createdComment = await _commentService.CreateCommentAsync(comment.Text, comment.User, comment.Article);
            return CreatedAtAction(nameof(GetComment), new { id = createdComment.Id }, createdComment);
        }

        [HttpGet("article/{articleId}")]
        public async Task<ActionResult<IEnumerable<Comment>>> GetCommentsByArticleId(int articleId)
        {
            var comments = await _commentService.GetCommentsByArticleIdAsync(articleId);
            return Ok(comments);
        }

        [HttpGet("id")]
        public async Task<ActionResult<Comment>> GetComment(int id)
        {
            var comment = await _commentService.GetCommentByIdAsync(id);
            if (comment == null)
            {
                return NotFound();
            }
            return Ok(comment);
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateComment(int id, [FromBody] string newText)
        {
            var updatedComment = await _commentService.UpdateCommentAsync(id, newText);
            if (updatedComment == null)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComment(int id)
        {
            var success = await _commentService.DeleteCommentAsync(id);
            if (!success)
            {
                return NotFound();
            }
            return NoContent();
        }

        
    }
}