const socialLinks = [
    {
        title: "GitHub",
        href: "https://github.com/Mayankpratapsingh022",
      },
    {
      title: "Twitter",
      href: "https://x.com/Mayank_022",
    },
   
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/mayankpratapsingh022/",
    },
     {
       title: "Blog",
       href: "https://blogs.mayankpratapsingh.in/",
     },

  ];
  
  const Social = () => {
    return (
      <nav className="flex items-center  gap-6 py-4 text-pretty dark:prose-invert">
        {socialLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors duration-300 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white"
          >
            {link.title}
          </a>
        ))}
      </nav>
    );
  };
  
  export default Social;
  