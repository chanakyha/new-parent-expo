export const logs: Log[] = [
  {
    name: "Feed",
    image: require("@/assets/images/logs/feed.png"),
    topBarImage: require("@/assets/images/topbar/feed.png"),
  },
  {
    name: "Sleep",
    image: require("@/assets/images/logs/sleep.png"),
    topBarImage: require("@/assets/images/topbar/sleep.png"),
  },
  {
    name: "Nappy",
    image: require("@/assets/images/logs/nappy.png"),
    topBarImage: require("@/assets/images/topbar/nappy.png"),
  },
  {
    name: "Growth",
    image: require("@/assets/images/logs/growth.png"),
    topBarImage: require("@/assets/images/topbar/growth.png"),
  },
  {
    name: "Health",
    image: require("@/assets/images/logs/health.png"),
    topBarImage: require("@/assets/images/topbar/health.png"),
  },
];

const markdownText = `
# Project Name: **AI Chatbot**

## Introduction
This project aims to develop an AI-powered chatbot that can assist users with various tasks, including answering questions, providing recommendations, and performing simple tasks.

## Features
- **Natural Language Processing (NLP)**
- **Contextual Understanding**
- **Multi-language Support**
- **Integration with APIs**

## Installation
To install the necessary packages, run:
\`\`\`bash
pip install -r requirements.txt
\`\`\`

## Usage
To start the chatbot, use the following command:
\`\`\`bash
python chatbot.py
\`\`\`

## Contributing
1. Fork the repository.
2. Create a new branch: \`git checkout -b feature-branch\`.
3. Make your changes.
4. Commit your changes: \`git commit -m 'Add some feature'\`.
5. Push to the branch: \`git push origin feature-branch\`.
6. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
`;

export const babycareBlogs: Blog[] = [
  {
    id: 1,
    image: require("@/assets/images/baby-blog-1.png"),
    title:
      "Sunt enim est enim sint sit cupidatat duis ad amet labore magna culpa.",
    description:
      "Officia mollit veniam id occaecat. Tempor esse occaecat anim tempor consequat id enim. Officia sit excepteur fugiat et magna Lorem do. Velit aute sit ex velit do. Ullamco excepteur est amet deserunt reprehenderit cupidatat proident mollit.",
    type: "blog",
    markdownDescription: markdownText,
  },
  {
    id: 2,
    image: require("@/assets/images/baby-blog-1.png"),
    title: "Duis est quis sunt ut pariatur.",
    description:
      "Culpa occaecat ex sint est fugiat. Officia non ex reprehenderit qui reprehenderit anim consequat culpa fugiat. Ut veniam magna ad id sit qui incididunt enim aliquip pariatur incididunt enim sint in. Incididunt qui officia nulla tempor cupidatat voluptate aliquip duis. Non occaecat reprehenderit magna commodo irure sunt minim do est nostrud et aute id tempor. Velit ea commodo ea minim aliquip sint. Nisi nisi amet mollit deserunt veniam magna laborum enim deserunt labore pariatur culpa est.",
    type: "guide",
    markdownDescription: markdownText,
  },
  {
    id: 3,
    image: require("@/assets/images/baby-blog-1.png"),
    title: "Mollit ex proident quis cupidatat voluptate mollit cupidatat duis.",
    description:
      "Ipsum consectetur est nostrud sint laborum anim ipsum cillum. Sunt consequat ad deserunt proident Lorem nostrud fugiat sunt veniam adipisicing enim laborum adipisicing cupidatat. Reprehenderit labore consequat irure laborum est consectetur amet sint ullamco labore irure ea occaecat.",
    type: "blog",
    markdownDescription: markdownText,
  },
];
