export const volunteers = [
  {
    id: 1,
    name: "Michaela",
    role: "Requester",
    profilePic: "/FtestPic6.jpeg", // URL to profile picture or empty if there isn't one
  },
  {
    id: 2,
    name: "Grace",
    role: "Member",
    profilePic: "/FtestPic2.jpeg", // URL to profile picture or empty if there isn't one
  },
  {
    id: 3,
    name: "Wakil",
    role: "Member",
    profilePic: "/MtestPic1.png", // URL to profile picture or empty if there isn't one
  },
  {
    id: 4,
    name: "Larry",
    role: "member",
    profilePic: "/MtestPic2.jpeg", // URL to profile picture or empty if there isn't one
  },
  {
    id: 5,
    name: "Bob",
    role: "Member",
    profilePic: "/MtestPic3.jpeg", // URL to profile picture or empty if there isn't one
  },
  {
    id: 6,
    name: "Fredo",
    role: "Member",
    profilePic: "/MtestPic4.jpeg", // URL to profile picture or empty if there isn't one
  },
  {
    id: 7,
    name: "Gilbert",
    role: "Member",
    profilePic: "/MtestPic5.jpeg", // URL to profile picture or empty if there isn't one
  },
  {
    id: 8,
    name: "Sandra",
    role: "Member",
    profilePic: "/FtestPic3.jpeg", // URL to profile picture or empty if there isn't one
  },
  {
    id: 9,
    name: "Santino",
    role: "Member",
    profilePic: "/MtestPic4.jpeg", // URL to profile picture or empty if there isn't one
  },
  {
    id: 10,
    name: "Santino",
    role: "Member",
    profilePic: "/MtestPic4.jpeg", // URL to profile picture or empty if there isn't one
  },
  {
    id: 11,
    name: "Santino",
    role: "Member",
    profilePic: "/MtestPic4.jpeg", // URL to profile picture or empty if there isn't one
  },
  {
    id: 12,
    name: "Santino",
    role: "Member",
    profilePic: "/MtestPic4.jpeg", // URL to profile picture or empty if there isn't one
  },
];

export const volunteerRequests = [
  {
    id: 1,
    title: "Help Needed: Park Cleanup",
    description: "Join us this Saturday to clean up the local park.",
    location: "Central Park",
    urgency: 10,
    type: "task",
    date: "2024-03-27",
    time: "10:00 AM",
    status: "unfulfilled",
    volunteers: [1, 5, 6, 7, 8],
    requesterId: 1,
  },
  {
    id: 2,
    title: "Volunteer: Food Drive",
    description:
      "We need volunteers to help organize the food drive next week.",
    location: "Community Center",
    urgency: 5,
    type: "task",
    date: "2024-04-02",
    time: "12:00 PM",
    status: "unfulfilled",
    volunteers: [2, 12, 7],
    requesterId: 9,
  },
  {
    id: 3,
    title: "Urgent: Elderly Assistance",
    description:
      "Looking for volunteers to assist with grocery shopping for elderly residents.",
    location: "Various Locations",
    urgency: 8,
    type: "task",
    date: "2024-04-05",
    time: "09:00 AM",
    status: "unfulfilled",
    volunteers: [8, 9, 10, 5, 1, 2],
    requesterId: 4,
  },
  {
    id: 4,
    title: "School Supplies Drive",
    description:
      "Collecting school supplies for underprivileged children. Donations needed!",
    location: "Local Library",
    urgency: 7,
    type: "material",
    date: "2024-04-12",
    time: "10:00 AM",
    status: "unfulfilled",
    volunteers: [5, 6],
    requesterId: 1,
  },
  {
    id: 5,
    title: "Community Garden Volunteer",
    description: "Help maintain our community garden. No experience necessary!",
    location: "Greenway Community Garden",
    urgency: 4,
    type: "task",
    date: "2024-04-19",
    time: "08:00 AM",
    status: "unfulfilled",
    volunteers: [1, 3, 8, 9],
    requesterId: 3,
  },
  {
    id: 6,
    title: "Beach Clean-Up Event",
    description:
      "Join our monthly effort to keep our beaches clean. Meet at the main pier.",
    location: "Seaview Beach",
    urgency: 9,
    type: "task",
    date: "2024-04-26",
    time: "07:00 AM",
    status: "unfulfilled",
    volunteers: [1, 6, 3, 9, 12, 2],
    requesterId: 5,
  },
  {
    id: 7,
    title: "Charity Run for Health",
    description:
      "Volunteers needed to manage stations during our charity run event.",
    location: "City Park",
    urgency: 6,
    type: "task",
    date: "2024-05-03",
    time: "09:00 AM",
    status: "unfulfilled",
    volunteers: [5, 6, 7, 8],
    requesterId: 10,
  },
  {
    id: 8,
    title: "Local Museum Guides",
    description:
      "Interested in art or history? Volunteer as a guide at our local museum.",
    location: "City Museum",
    urgency: 3,
    type: "task",
    date: "2024-05-10",
    time: "01:00 PM",
    status: "unfulfilled",
    volunteers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    requesterId: 1,
  },
  {
    id: 9,
    title: "Homework Helpers",
    description:
      "Volunteer to help students with homework after school. Background check required.",
    location: "Community Youth Center",
    urgency: 8,
    type: "task",
    date: "2024-05-15",
    time: "03:30 PM",
    status: "unfulfilled",
    volunteers: [12, 10, 11],
    requesterId: 2,
  },
  {
    id: 10,
    title: "Winter Coat Drive",
    description:
      "Collecting gently used winter coats for distribution to those in need.",
    location: "Town Hall",
    urgency: 7,
    type: "material",
    date: "2024-11-01",
    time: "10:00 AM",
    status: "unfulfilled",
    volunteers: [6, 1, 9],
    requesterId: 7,
  },
  {
    id: 11,
    title: "Help Needed: Park Cleanup",
    description: "Join us this Saturday to clean up the local park.",
    location: "Central Park",
    urgency: 10,
    type: "task",
    date: "2024-04-18",
    time: "08:00 AM",
    status: "unfulfilled",
    volunteers: [10, 13, 14],
    requesterId: 8,
  },
  {
    id: 12,
    title: "Volunteer: Food Drive",
    description:
      "We need volunteers to help organize the food drive next week.",
    location: "Community Center",
    urgency: 5,
    type: "task",
    date: "2024-06-05",
    time: "09:00 AM",
    status: "unfulfilled",
    volunteers: [1, 2, 3, 7, 8],
    requesterId: 1,
  },
  {
    id: 13,
    title: "Urgent: Elderly Assistance",
    description:
      "Looking for volunteers to assist with grocery shopping for elderly residents.",
    location: "Various Locations",
    urgency: 8,
    type: "task",
    date: "2024-06-12",
    time: "02:00 PM",
    status: "unfulfilled",
    volunteers: [12, 1, 2, 3],
    requesterId: 12,
  },
  {
    id: 14,
    title: "School Supplies Drive",
    description:
      "Collecting school supplies for underprivileged children. Donations needed!",
    location: "Local Library",
    urgency: 7,
    type: "material",
    date: "2024-08-20",
    time: "10:00 AM",
    status: "unfulfilled",
    volunteers: [5, 4, 2, 12],
    requesterId: 11,
  },
  {
    id: 15,
    title: "Community Garden Volunteer",
    description: "Help maintain our community garden. No experience necessary!",
    location: "Greenway Community Garden",
    urgency: 4,
    type: "task",
    date: "2024-07-10",
    time: "08:00 AM",
    status: "unfulfilled",
    volunteers: [8, 7, 2],
    requesterId: 9,
  },
  {
    id: 16,
    title: "Beach Clean-Up Event",
    description:
      "Join our monthly effort to keep our beaches clean. Meet at the main pier.",
    location: "Seaview Beach",
    urgency: 9,
    type: "task",
    date: "2024-07-22",
    time: "07:00 AM",
    status: "unfulfilled",
    volunteers: [1, 12, 8, 3],
    requesterId: 1,
  },
  {
    id: 17,
    title: "Charity Run for Health",
    description:
      "Volunteers needed to manage stations during our charity run event.",
    location: "City Park",
    urgency: 6,
    type: "task",
    date: "2024-08-05",
    time: "09:00 AM",
    status: "unfulfilled",
    volunteers: [12, 8, 7],
    requesterId: 1,
  },
  {
    id: 18,
    title: "Local Museum Guides",
    description:
      "Interested in art or history? Volunteer as a guide at our local museum.",
    location: "City Museum",
    urgency: 3,
    type: "task",
    date: "2024-08-15",
    time: "10:00 AM",
    status: "unfulfilled",
    volunteers: [2, 3, 6, 9],
    requesterId: 2,
  },
  {
    id: 19,
    title: "Homework Helpers",
    description:
      "Volunteer to help students with homework after school. Background check required.",
    location: "Community Youth Center",
    urgency: 8,
    type: "task",
    date: "2024-09-01",
    time: "03:00 PM",
    status: "unfulfilled",
    volunteers: [8, 2, 6, 9],
    requesterId: 1,
  },
  {
    id: 20,
    title: "Winter Coat Drive",
    description:
      "Collecting gently used winter coats for distribution to those in need.",
    location: "Town Hall",
    urgency: 7,
    type: "material",
    date: "2024-11-15",
    time: "10:00 AM",
    status: "unfulfilled",
    volunteers: [1, 4, 9],
    requesterId: 1,
  },
];

export const chatItms = [
  {
    key: 1,
    image:
      "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
    type: "",
    msg: "Hi Tim, How are you?",
  },
  {
    key: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    type: "other",
    msg: "I am fine.",
  },
  {
    key: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    type: "other",
    msg: "What about you?",
  },
  {
    key: 4,
    image:
      "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
    type: "",
    msg: "Awesome these days.",
  },
  {
    key: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    type: "other",
    msg: "Finally. What's the plan?",
  },
  {
    key: 6,
    image:
      "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
    type: "",
    msg: "what plan mate?",
  },
  {
    key: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    type: "other",
    msg: "I'm taliking about the tutorial",
  },
];

export const chatUsers = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    id: 1,
    name: "Tim Hover",
    active: true,
    isOnline: true,
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
    id: 2,
    name: "Ayub Rossi",
    active: false,
    isOnline: false,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    id: 3,
    name: "Hamaad Dejesus",
    active: false,
    isOnline: false,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
    id: 4,
    name: "Eleni Hobbs",
    active: false,
    isOnline: true,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
    id: 5,
    name: "Elsa Black",
    active: false,
    isOnline: false,
  },
  {
    image:
      "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
    id: 6,
    name: "Kayley Mellor",
    active: false,
    isOnline: true,
  },
];
