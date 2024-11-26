# Qantas code challenge

Thi code is written by [Reza Fer](https://www.linkedin.com/in/reza-fer/) as part of the interview process.

## Approach

This project was initiated with the create vite and more dependencies were added for development. I used VSCode for my IDE therefore codes might look different in your ideal editor as it uses different formatter. I am using [Shadcn component library](https://ui.shadcn.com/) to accelerate the development and [Tailwind CSS](https://tailwindcss.com/). The main parser logic is located under lib folder and consist of grammar.ne, lexer.ts and parser function in utils. Some codes could have broken down into seperated files (like styled components) but I think for this code challenge, the code organised enough.

Please do not hesitate to contact me if you have any questions about this code challenge.


## Available Scripts

### yarn compile / npm run compile
Runs the Nearley.js compiler and create a fresh grammar.ts file.\
You need to run this command everytime you update the grammar.ne file.

### yarn dev / npm run dev
Runs the app in the development mode on port 5173.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### yarn dev-compile / npm run dev-compile
At first runs the Nearley compiler first and generate grammar.ts file and then runs app in the development mode on port 5173.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
