const user = {
  name: "Liza",
  city: "New York",
  bio: "I made this!",
  color: "firebrick",
  links: [
    {
      text:'home',
      url:'https://github.com/liza'
    },
    {
      text:'About',
      url: 'https://www.linkedin.com/in/liza/'
    },
    {
      text:'Projects',
      url: 'https://www.linkedin.com/in/liza/'
    }
  ],
  projects: [
    {
      id: 1,
      name: "Reciplease",
      about: "A recipe tracking app",
      technologies: ["Rails", "Bootstrap CSS"],
    },
    {
      id: 2,
      name: "Kibbles N Bitz",
      about: "Tinder for dogs",
      technologies: ["React", "Redux"],
    },
    {
      id: 3,
      name: "Alienwares",
      about: "Etsy for aliens",
      technologies: ["React", "Redux", "Rails"],
    },
  ],
};

export default user;
