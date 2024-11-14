using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
    public class Choice
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Text { get; set; }

        public bool Correct { get; set; }

        public int Question { get; set; }
    }
}