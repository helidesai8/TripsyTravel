import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BlogPage.css'

const articles = [
  {
    id: 1,
    category: 'Family Holidays',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],
    quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',
    comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: true  }
    ]
  },
  {
    id: 2,
    category: 'Beaches',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],
    quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: true  }
    ]
  },
  {
    id: 3,
    category: 'Adventure travel',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],
    quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: false  }
    ]
  },
  {
    id: 4,
    category: 'Art and culture',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: false  }
    ]
  },
  {
    id: 5,
    category: 'Air travel',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: true  }
    ]
  },
  {
    id: 6,
    category: 'Adventure travel',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',
    comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: true  }
    ]
  },
  {
    id: 7,
    category: 'Art and culture',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: false  }
    ]
  },
  {
    id: 8,
    category: 'Air travel',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: false  }
    ]
  },
  {
    id: 9,
    category: 'Explore',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: true  }
    ]
  },
  {
    id: 10,
    category: 'Family Holidays',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: true  }
    ]
  },
  {
    id: 11,
    category: 'Beaches',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: false }
    ]
  },
  {
    id: 12,
    category: 'Explore',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: false  }
    ]
  },
  {
    id: 13,
    category: 'Beaches',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: true  }
    ]
  },
  {
    id: 14,
    category: 'Explore',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: true  }
    ]
  }
];

const BlogPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(article => article.id === parseInt(id || '0'));

  const [commentData, setCommentData] = useState({ name: '', comment: '' });
  const [comments, setComments] = useState(article?.comments || []);

  if (!article) {
    return <div style={{ padding: '2rem', fontFamily: 'Poppins, sans-serif' }}>Article not found</div>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (commentData.name && commentData.comment) {
      const newComment = { ...commentData };
      // @ts-ignore
      setComments([...comments, newComment]);
      setCommentData({ name: '', comment: '' });
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <div className="blog-page" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="hero-section" style={{ backgroundImage: `url(${article.mainimage})` }}>
        <div className="hero-content">
          <h1>{article.title}</h1>
          <p>{article.date}</p>
          <p>{article.content}</p>
        </div>
      </div>
      <div className="article-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vel convallis vestibulum, justo
          elit vehicula libero, ac facilisis odio urna et magna. Curabitur non mauris sit amet arcu condimentum
          aliquet.Sed ac orci eu nunc vestibulum vehicula. Integer ut purus eu sapien efficitur fermentum. Aenean at odio nec
          sapien ultrices hendrerit non non lorem. Sed vitae mauris sed velit vehicula mollis.Sed ac orci eu nunc vestibulum vehicula. Integer ut purus eu sapien efficitur fermentum. Aenean at odio nec
          sapien ultrices hendrerit non non lorem. Sed vitae mauris sed velit vehicula mollis.</p>
        <p>Sed ac orci eu nunc vestibulum vehicula. Integer ut purus eu sapien efficitur fermentum. Aenean at odio nec
          sapien ultrices hendrerit non non lorem. Sed vitae mauris sed velit vehicula mollis.Sed ac orci eu nunc vestibulum vehicula. Integer ut purus eu sapien efficitur fermentum. Aenean at odio nec
          sapien ultrices hendrerit non non lorem. Sed vitae mauris sed velit vehicula mollis.Sed ac orci eu nunc vestibulum vehicula. Integer ut purus eu sapien efficitur fermentum. Aenean at odio nec
          sapien ultrices hendrerit non non lorem. Sed vitae mauris sed velit vehicula mollis.Sed ac orci eu nunc vestibulum vehicula. Integer ut purus eu sapien efficitur fermentum. Aenean at odio nec
          sapien ultrices hendrerit non non lorem. Sed vitae mauris sed velit vehicula mollis.Sed ac orci eu nunc vestibulum vehicula. Integer ut purus eu sapien efficitur fermentum. Aenean at odio nec
          sapien ultrices hendrerit non non lorem. Sed vitae mauris sed velit vehicula mollis.</p>
        <div className="article-images">
          {article.otherimages.map((image, index) => (
              <img src={image} alt={`Placeholder ${index + 1}`} key={index}/>
          ))}
        </div>
        <blockquote>"{article.quote}"</blockquote>
        <p>Integer consectetur justo sed magna fermentum, sit amet tincidunt urna ultricies. Donec lacinia dolor nec
          quam facilisis, vel tristique nisl accumsan. Phasellus a feugiat magna.</p>
      </div>
      <div className="reviews-section">
        <h2>Reviews and Comments</h2>
        {comments.map((comment, index) => (
            <div className="review" key={index}>
              <img src={comment.photo} alt="Profile" className="comment-photo" />
            <div className="comment-content">
              <p><strong>{comment.name} {comment.isVerified && <span className="verified-icon">✔️</span>}</strong> - {comment.comment}</p>
            </div>
          </div>
        ))}
        <form className="comment-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={commentData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
          />
          <textarea
            name="comment"
            value={commentData.comment}
            onChange={handleInputChange}
            placeholder="Your Comment"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BlogPage;