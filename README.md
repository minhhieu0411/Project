"# Project" 
2. Backend Setup (BE)
Initialize a Node.js + Express project.
mkdir backend && cd backend
npm install express mongoose dotenv cors firebase-admin
3. Frontend Setup (FE)
Initialize a Vite + React + TypeScript project.
mkdir frontend && cd frontend
npm create vite@latest frontend --template react-ts
cd frontend
npm install firebase axios react-router-dom
Configure Firebase Auth for user authentication.
Create basic pages (Home, Caregivers List, Profile, Login/Signup).
4. Connect Frontend & Backend
Use Axios to call backend APIs from the frontend.
Implement JWT-based authentication with Firebase.
5. Hosting & Deployment
Deploy frontend to Vercel.
Deploy backend to AWS (EC2 or Lambda).
Use MongoDB Atlas for database hosting.