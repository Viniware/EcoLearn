using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Services.Choice;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChoiceController : ControllerBase
    {
        private readonly IChoiceService _choiceService;

        public ChoiceController(IChoiceService choiceService)
        {
            _choiceService = choiceService;
        }

        [HttpPost]
        public async Task<ActionResult<Choice>> CreateChoice([FromBody] Choice choice)
        {
            if (choice == null)
            {
                return BadRequest("Choice data is required.");
            }

            var createdChoice = await _choiceService.CreateChoiceAsync(choice.Text, choice.Correct, choice.Question);
            return CreatedAtAction(nameof(GetChoiceById), new { id = createdChoice.Id }, createdChoice);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Choice>> GetChoiceById(int id)
        {
            var choice = await _choiceService.GetChoiceByIdAsync(id);
            if (choice == null)
            {
                return NotFound();
            }

            return Ok(choice);
        }

        [HttpGet("question/{questionId}")]
        public async Task<ActionResult<IEnumerable<Choice>>> GetChoicesByQuestionId(int questionId)
        {
            var choices = await _choiceService.GetChoicesByQuestionIdAsync(questionId);
            return Ok(choices);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateChoice(int id, [FromBody] Choice choice)
        {
            var updatedChoice = await _choiceService.UpdateChoiceAsync(id, choice.Text, choice.Correct);
            if (updatedChoice == null)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteChoice(int id)
        {
            var success = await _choiceService.DeleteChoiceAsync(id);
            if (!success)
            {
                return NotFound();
            }

            return NoContent();
        }
        
    }
}