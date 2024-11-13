using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Services.Quiz;
using System.Threading.Tasks;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizController : ControllerBase
    {
        private readonly IQuizService _quizService;

        public QuizController(IQuizService quizService)
        {
            _quizService = quizService;
        }

        [HttpPost]
        public async Task<ActionResult<Quiz>> CreateQuiz([FromBody] Quiz quiz)
        {
            if (quiz == null)
            {
                return BadRequest("Quiz data is required.");
            }

            var createdQuiz = await _quizService.CreateQuizAsync(quiz.Name, quiz.Description, quiz.TotalPoints, quiz.Article);
            return CreatedAtAction(nameof(GetQuiz), new { id = createdQuiz.Id }, createdQuiz);
        }

        [HttpGet("article/{articleId}")]
        public async Task<ActionResult<IEnumerable<Quiz>>> GetQuizByArticleId(int articleId)
        {
            var quizzes = await _quizService.GetQuizzesByArticleIdAsync(articleId);
            return Ok(quizzes);
        }

        [HttpGet("id")]
        public async Task<ActionResult<Quiz>> GetQuiz(int id)
        {
            var quiz = await _quizService.GetQuizByIdAsync(id);
            if (quiz == null)
            {
                return NotFound();
            }
            return Ok(quiz);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateQuiz(int id, [FromBody] Quiz quiz)
        {
            var updatedQuiz = await _quizService.UpdateQuizAsync(id, quiz.Name, quiz.Description, quiz.TotalPoints);
            if (updatedQuiz == null)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuiz(int id)
        {
            var success = await _quizService.DeleteQuizAsync(id);
            if (!success)
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpGet("{quizId}/questions")]
        public async Task<ActionResult<IEnumerable<Question>>> GetQuestionsForQuiz(int quizId)
        {
            var questions = await _quizService.GetQuestionsForQuizAsync(quizId);
            return Ok(questions);
        }
        
        [HttpGet("{quizId}/choices")]
        public async Task<ActionResult<IEnumerable<Choice>>> GetChoicesForQuiz(int quizId)
        {
            var choices = await _quizService.GetChoicesForQuizAsync(quizId);
            return Ok(choices);
        }



       
    }
}