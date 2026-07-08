export type Scene =
  | {
      type: "type";
      text: string;
      duration: number;
    }
  | {
      type: "progress";
      duration: number;
    }
  | {
      type: "stars";
      duration: number;
    }
  | {
    type: "match";
    duration: number;
  }
| {
    type: "mahi";
    duration: number;
  }
| {
    type: "countdown";
    duration: number;
  };

export const timeline: Scene[] = [
  {
    type: "type",
    text: "Searching for the happiest person today...",
    duration: 3500,
  },

  {
    type: "progress",
    duration: 2200,
  },

  {
    type: "type",
    text: "Scanning billions of stars...",
    duration: 3000,
  },

  {
    type: "stars",
    duration: 2500,
  },

  {
    type: "type",
    text: "Looking for someone extraordinary...",
    duration: 3500,
  },

  {
    type: "match",
    duration: 2500,
  },

  {
  type: "mahi",
  duration: 4000,
},

];