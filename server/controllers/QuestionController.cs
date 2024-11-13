using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Services.Question;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IQuestionService _questionService;

        public QuestionController(IQuestionService questionService)
        {
            _questionService = questionService;
        }

        [HttpPost]
        public async Task<ActionResult<Question>> CreateQuestion([FromBody] Question question)
        {
            if (question == null)
            {
                return BadRequest("Question data is required.");
            }

            var createdQuestion = await _questionService.CreateQuestionAsync(question.Text, question.Quiz);
            return CreatedAtAction(nameof(GetQuestion), new { id = createdQuestion.Id}, createdQuestion);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Question>> GetQuestion(int id)
        {
            var question = await _questionService.GetQuestionByIdAsync(id);
            if (question == null)
            {
                return NotFound();
            }
            return Ok(question);
        }

        [HttpGet("quiz/{quizId}")]
        public async Task<ActionResult<IEnumerable<Question>>> GetQuestionsByQuizId(int quizId)
        {
            var questions = await _questionService.GetQuestionsByQuizIdAsync(quizId);
            return Ok(questions);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateQuestion(int id, [FromBody] Question question)
        {
            var updatedQuestion = await _questionService.UpdateQuestionAsync(id, question.Text);
            if (updatedQuestion == null)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuestion(int id)
        {
            var success = await _questionService.DeleteQuestionAsync(id);
            if (!success)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}