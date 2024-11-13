using System.ComponentModel.DataAnnotations;

namespace Server.Models 
{
    public class Question
    {
        [Key]

        public int Id { get; set; }

        [Required]
        public string Text { get; set; }
        
        public int Quiz { get; set; }
    }
}