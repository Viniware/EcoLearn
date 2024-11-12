using System;

namespace Server.Models
{
    public class Comment
    {
        public int Id { get; set; }

        public string Text { get; set; }

        public int Upvote { get; set; }

        public int Downvote { get; set; }

        public DateTime Date { get; set; }

        public TimeSpan Time { get; set; }

        public int User { get; set; }

        public int Article { get; set; }
    }
}