// Placeholder audiobook data
// To update: 
// 1. Edit the teraboxLink field with your actual TeraBox links
// 2. Replace coverImage with your real poster images (URL or base64)

export interface Audiobook {
  id: string;
  title: string;
  author: string;
  category: 'Motivation' | 'Business' | 'Islamic' | 'Stories' | 'Self Improvement';
  description: string;
  teraboxLink: string;
  coverImage: string; // URL or base64 image string
}

export const CATEGORIES = [
  'Motivation',
  'Business',
  'Islamic',
  'Stories',
  'Self Improvement'
] as const;

export const AUDIOBOOKS: Audiobook[] = [
  {
    id: '1',
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    category: 'Motivation',
    description: 'A timeless classic on success principles and the power of desire, faith, and persistence in achieving wealth.',
    teraboxLink: 'https://terabox.com/s/1abc123example',
    coverImage: 'https://via.placeholder.com/300x450/ff6b6b/ffffff?text=Think+and+Grow+Rich'
  },
  {
    id: '2',
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen Covey',
    category: 'Self Improvement',
    description: 'Learn the seven powerful habits that will transform your personal and professional effectiveness.',
    teraboxLink: 'https://www.terabox.com/sharing/link?surl=abc123example',
    coverImage: 'https://via.placeholder.com/300x450/f39c12/ffffff?text=7+Habits'
  },
  {
    id: '3',
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    category: 'Business',
    description: 'What the rich teach their kids about money that the poor and middle class do not.',
    teraboxLink: 'https://terabox.com/s/2def456example',
    coverImage: 'https://via.placeholder.com/300x450/4a90e2/ffffff?text=Rich+Dad+Poor+Dad'
  },
  {
    id: '4',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Stories',
    description: 'A magical story about following your dreams and listening to your heart.',
    teraboxLink: 'https://terabox.com/s/3ghi789example',
    coverImage: 'https://via.placeholder.com/300x450/9b59b6/ffffff?text=The+Alchemist'
  },
  {
    id: '5',
    title: 'In the Footsteps of the Prophet',
    author: 'Tariq Ramadan',
    category: 'Islamic',
    description: 'Lessons from the life of Muhammad - a profound exploration of Islamic teachings.',
    teraboxLink: 'https://www.terabox.com/sharing/link?surl=def456example',
    coverImage: 'https://via.placeholder.com/300x450/2ecc71/ffffff?text=Footsteps+of+Prophet'
  },
  {
    id: '6',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self Improvement',
    description: 'Tiny changes, remarkable results. Learn how to build good habits and break bad ones.',
    teraboxLink: 'https://terabox.com/s/4jkl012example',
    coverImage: 'https://via.placeholder.com/300x450/f39c12/ffffff?text=Atomic+Habits'
  },
  {
    id: '7',
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    category: 'Motivation',
    description: 'A guide to spiritual enlightenment and living in the present moment.',
    teraboxLink: 'https://terabox.com/s/5mno345example',
    coverImage: 'https://via.placeholder.com/300x450/ff6b6b/ffffff?text=Power+of+Now'
  },
  {
    id: '8',
    title: 'Start With Why',
    author: 'Simon Sinek',
    category: 'Business',
    description: 'How great leaders inspire everyone to take action by starting with why.',
    teraboxLink: 'https://www.terabox.com/sharing/link?surl=ghi789example',
    coverImage: 'https://via.placeholder.com/300x450/4a90e2/ffffff?text=Start+With+Why'
  },
  {
    id: '9',
    title: 'The Secret',
    author: 'Rhonda Byrne',
    category: 'Motivation',
    description: 'Discover the secret to success, happiness, and fulfillment through the law of attraction.',
    teraboxLink: 'https://terabox.com/s/6pqr678example',
    coverImage: 'https://via.placeholder.com/300x450/ff6b6b/ffffff?text=The+Secret'
  },
  {
    id: '10',
    title: 'The Road to Mecca',
    author: 'Muhammad Asad',
    category: 'Islamic',
    description: 'A remarkable spiritual journey and conversion to Islam.',
    teraboxLink: 'https://terabox.com/s/7stu901example',
    coverImage: 'https://via.placeholder.com/300x450/2ecc71/ffffff?text=Road+to+Mecca'
  },
  {
    id: '11',
    title: 'The Lean Startup',
    author: 'Eric Ries',
    category: 'Business',
    description: 'How today\'s entrepreneurs use continuous innovation to create radically successful businesses.',
    teraboxLink: 'https://www.terabox.com/sharing/link?surl=jkl012example',
    coverImage: 'https://via.placeholder.com/300x450/4a90e2/ffffff?text=Lean+Startup'
  },
  {
    id: '12',
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    category: 'Stories',
    description: 'A timeless tale about love, loss, and the importance of seeing with the heart.',
    teraboxLink: 'https://terabox.com/s/8vwx234example',
    coverImage: 'https://via.placeholder.com/300x450/9b59b6/ffffff?text=Little+Prince'
  }
];
