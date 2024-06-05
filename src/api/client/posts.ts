export type Comment = {
  username: string;
  comment: string;
  replies?: Comment[];
};

export type BlogPost = {
  id: number;
  title: string;
  author: string;
  datePublished: string;
  content: string;
  comments: Comment[];
  reposts: number;
};

export const blogPosts: Array<BlogPost> = [
  {
    id: 1,
    title: 'The Future of Web Development',
    author: 'Alice Smith',
    datePublished: '2024-05-21',
    content:
      'The future of web development is rapidly evolving with new technologies and trends. Explore the potential of WebAssembly, advancements in CSS, and the latest in JavaScript frameworks. What innovations should developers keep an eye on to stay ahead in the field? Dive into emerging tools and methodologies that promise to make web development more efficient and dynamic.',
    comments: [
      {
        username: 'tech_guru',
        comment: "Great insights! I'm excited about the potential of WebAssembly.",
        replies: [
          {
            username: 'dev_jane',
            comment: 'Absolutely, WebAssembly is a game-changer!'
          }
        ]
      },
      {
        username: 'frontend_dev',
        comment: "I'm particularly interested in the advancements in CSS.",
        replies: []
      }
    ],
    reposts: 15
  },
  {
    id: 2,
    title: 'Understanding JavaScript Closures',
    author: 'Bob Johnson',
    datePublished: '2024-05-19',
    content:
      'JavaScript closures are a fundamental concept for developers. Discover how closures work and why they are essential for data privacy and encapsulation. Tips and examples will help clarify this powerful feature. Understanding closures will also enhance your ability to write cleaner, more modular code.',
    comments: [
      {
        username: 'code_master',
        comment: 'Thanks for the clear explanation!',
        replies: []
      },
      {
        username: 'newbie_coder',
        comment: 'This is still a bit confusing for me. Any tips?',
        replies: [
          {
            username: 'code_master',
            comment:
              'Practice is key. Try writing simple functions and gradually increase complexity.'
          }
        ]
      },
      {
        username: 'js_ninja',
        comment: 'Closures are powerful! They help with data privacy.',
        replies: []
      }
    ],
    reposts: 25
  },
  {
    id: 3,
    title: 'CSS Grid vs Flexbox',
    author: 'Clara Lee',
    datePublished: '2024-05-15',
    content:
      'CSS Grid and Flexbox are both powerful layout systems in CSS. This post compares their use cases, benefits, and limitations. Learn when to use each system to create responsive, efficient designs. Practical examples and scenarios will illustrate the strengths of both layout systems.',
    comments: [
      {
        username: 'design_pro',
        comment: 'Great comparison! I use both depending on the project.',
        replies: []
      },
      {
        username: 'layout_guru',
        comment: 'Grid is fantastic for 2D layouts, but Flexbox is perfect for 1D layouts.',
        replies: []
      },
      {
        username: 'css_fanatic',
        comment: 'I prefer Grid for its simplicity in complex layouts.',
        replies: []
      },
      {
        username: 'web_dev',
        comment: 'Flexbox is still my go-to for most projects.',
        replies: []
      }
    ],
    reposts: 30
  },
  {
    id: 4,
    title: 'Introduction to React Hooks',
    author: 'Daniel Green',
    datePublished: '2024-05-10',
    content:
      'React Hooks have revolutionized the way we write React components. Learn the basics of Hooks like useState and useEffect, and see how they simplify functional components and improve code readability. This post will also cover best practices and common pitfalls to avoid when using Hooks.',
    comments: [
      {
        username: 'react_fan',
        comment: 'Hooks make functional components so much easier to work with.',
        replies: [
          {
            username: 'js_dev',
            comment: 'Agreed! useState and useEffect are life savers.'
          }
        ]
      },
      {
        username: 'beginner_dev',
        comment: "I'm just starting with Hooks. This guide is very helpful!",
        replies: []
      },
      {
        username: 'old_school_dev',
        comment: 'I still prefer class components. Just a personal preference.',
        replies: []
      }
    ],
    reposts: 45
  },
  {
    id: 5,
    title: 'Mastering Git and GitHub',
    author: 'Evelyn Wright',
    datePublished: '2024-05-05',
    content:
      'Version control is crucial for developers. This post covers advanced Git commands and GitHub workflows. Discover branching strategies, collaborative features, and tips for efficient repository management. Enhance your version control skills to streamline your development process and improve team collaboration.',
    comments: [
      {
        username: 'git_master',
        comment: "Great tips! I've been using Git for years and still learned something new.",
        replies: []
      },
      {
        username: 'repo_maven',
        comment: 'Branching strategies are so important. Thanks for covering that!',
        replies: []
      },
      {
        username: 'dev_ops',
        comment: 'More posts on CI/CD with GitHub Actions would be awesome.',
        replies: [
          {
            username: 'evelyn',
            comment: "Noted! I'll definitely cover that in future posts."
          }
        ]
      }
    ],
    reposts: 35
  },
  {
    id: 6,
    title: 'A Guide to Progressive Web Apps',
    author: 'Fiona Adams',
    datePublished: '2024-05-01',
    content:
      'Progressive Web Apps (PWAs) offer an enhanced user experience. Learn how to build a PWA from scratch, including features like service workers, offline capabilities, and push notifications. Understand the benefits of PWAs and how they can increase engagement and performance of web applications.',
    comments: [
      {
        username: 'web_expert',
        comment: 'PWAs are the future! Great guide.',
        replies: []
      },
      {
        username: 'mobile_first',
        comment: 'Can you cover more on service workers?',
        replies: [
          {
            username: 'fiona',
            comment: "Absolutely! I'll include that in an upcoming post."
          }
        ]
      },
      {
        username: 'app_dev',
        comment: "I've started integrating PWAs in my projects. This is very helpful!",
        replies: []
      }
    ],
    reposts: 40
  },
  {
    id: 7,
    title: 'Diving into TypeScript',
    author: 'George Miller',
    datePublished: '2024-04-28',
    content:
      'TypeScript brings strong typing to JavaScript, improving code quality and maintainability. This post explains why you should consider using TypeScript and how to get started with it in your projects. Learn about key TypeScript features, such as type annotations and interfaces, that can help prevent bugs and enhance your development workflow.',
    comments: [
      {
        username: 'ts_fan',
        comment: 'TypeScript has improved my code quality significantly.',
        replies: []
      },
      {
        username: 'js_dev',
        comment: "I'm hesitant to switch. Is the learning curve steep?",
        replies: [
          {
            username: 'george',
            comment: "It takes some getting used to, but it's worth it in the long run."
          }
        ]
      },
      {
        username: 'backend_dev',
        comment: 'TypeScript is a must for large projects.',
        replies: []
      }
    ],
    reposts: 20
  },
  {
    id: 8,
    title: 'SEO Best Practices for 2024',
    author: 'Hannah Lee',
    datePublished: '2024-04-25',
    content:
      "SEO is constantly evolving. This post covers the best practices to follow in 2024 to improve your site's ranking. Learn about keyword research, content optimization, and technical SEO tips. Stay ahead of algorithm changes and ensure your content reaches the widest possible audience.",
    comments: [
      {
        username: 'seo_pro',
        comment: 'Great tips! Keeping up with SEO changes is challenging.',
        replies: []
      },
      {
        username: 'content_creator',
        comment: 'Can you do a post on keyword research?',
        replies: [
          {
            username: 'hannah',
            comment: "Sure! I'll cover that in the next post."
          }
        ]
      },
      {
        username: 'digital_marketer',
        comment: 'Thanks for the insights. Very useful!',
        replies: []
      }
    ],
    reposts: 50
  },
  {
    id: 9,
    title: 'Building Accessible Websites',
    author: 'Irene Chen',
    datePublished: '2024-04-20',
    content:
      'Accessibility is crucial for reaching all users. This post covers the basics of building accessible websites, including best practices, tools, and techniques to ensure your site is inclusive. Learn how to implement ARIA roles, keyboard navigation, and other accessibility features to enhance user experience.',
    comments: [
      {
        username: 'accessibility_advocate',
        comment: 'This is so important! Thanks for spreading awareness.',
        replies: []
      },
      {
        username: 'web_dev',
        comment: 'Can you cover more on ARIA roles?',
        replies: [
          {
            username: 'irene',
            comment: "Definitely! I'll include that in an upcoming post."
          }
        ]
      },
      {
        username: 'ux_designer',
        comment: 'Accessibility should be a priority for all web projects.',
        replies: []
      }
    ],
    reposts: 60
  },
  {
    id: 10,
    title: 'Getting Started with Docker',
    author: 'Jack Thompson',
    datePublished: '2024-04-15',
    content:
      'Docker simplifies application deployment. This post explains how to get started with Docker, including installation, basic commands, and creating your first containerized application. Understand how Docker can improve consistency across development and production environments, and streamline your CI/CD pipelines',
    comments: [
      {
        username: 'dev_ops',
        comment: 'Docker has transformed our deployment process.',
        replies: []
      },
      {
        username: 'cloud_dev',
        comment: 'Can you cover Docker Compose in your next post?',
        replies: [
          {
            username: 'jack',
            comment: 'Absolutely! Docker Compose is a powerful tool.'
          }
        ]
      },
      {
        username: 'sys_admin',
        comment: 'Thanks for the beginner-friendly guide!',
        replies: []
      }
    ],
    reposts: 55
  }
];
