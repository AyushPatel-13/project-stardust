export const memories = [
  {
    id: 1,
    title: "School Exams",
    description: "The classroom where one of our favourite memories began.",
    date: "Chapter One",

    image: "/memories/exam/exam1.jpg",

    x: 15,
    y: 30,
    connectTo: [2],
    path: "/memories/exam",
  },

  {
    id: 2,
    title: "Those Who Call You Home",
    description: "The people who make your world complete.",
    date: "Chapter Two",

    image: "/memories/loved-ones/bro1.jpg",

    x: 32,
    y: 60,
    connectTo: [1, 3],
    path: "/memories/loved-ones",
  },

  {
    id: 3,
    title: "Vrindavan",
    description: "The place your heart wishes to wake up in.",
    date: "Chapter Three",

    image: "/memories/vrindavan/temple.jpg",

    x: 48,
    y: 22,
    connectTo: [2, 4],
    path: "/memories/vrindavan",
  },

  {
    id: 4,
    title: "Ten Years Later",
    description: "A glimpse into the future you dream about.",
    date: "Chapter Four",

    image: "/memories/future/house.jpg",

    x: 65,
    y: 48,
    connectTo: [3, 5],
    path: "/memories/future",
  },

  {
    id: 5,
    title: "The Girl Who Keeps Moving Forward",
    description: "A reminder of the person you're becoming.",
    date: "Chapter Five",

    image: "/memories/girl/girl2.jpg",

    x: 52,
    y: 78,
    connectTo: [4, 6],
    path: "/memories/girl",
  },

  {
    id: 6,
    title: "Happy Birthday",
    description: "A celebration made especially for you.",
    date: "Chapter Six",

    image: "/memories/birthday/2025.jpg",

    x: 78,
    y: 22,
    connectTo: [5, 7],
    path: "/memories/birthday",
  },

  {
    id: 7,
    title: "The Man Who Inspired You",
    description: "The legend you admire the most.",
    date: "Chapter Seven",

    image: "/memories/dhoni/jersey.jpg",

    x: 86,
    y: 62,
    connectTo: [6, 8],
    path: "/memories/dhoni",
  },

  {
    id: 8,
    title: "One Last Thing...",
    description: "The final page of this universe.",
    date: "Chapter Eight",

    image: "/memories/last/moon.png",

    x: 68,
    y: 88,
    connectTo: [7],
    path: "/memories/last",
  },
];