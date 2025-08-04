# 💻 yesuballa.live – Interactive 3D Portfolio

This repository contains the **main 3D portfolio site** for [yesuballa.live](https://my-portfolio-2yu6.onrender.com), an immersive and interactive personal portfolio combining 3D graphics with a 2D operating-system-like interface. Built using **React** and **Three.js**, the website showcases skills, projects, and experience in a dynamic and engaging format.

> 🎨 Looking for the 2D OS interface? Check it out [here](https://github.com/YesuBalla/My-Portfolio-InnerSite.git)

---

## 🌐 Live Project Links

- 🔗 Frontend 3D Portfolio: [https://yesuballa.live](https://my-portfolio-2yu6.onrender.com)
- 🔗 Backend API: [https://my-portfolio-service-2m7f.onrender.com](https://my-portfolio-service-2m7f.onrender.com)
- 🔗 2D OS Interface: [https://yesu-portfolio-innersite.netlify.app](https://yesu-portfolio-innersite.netlify.app)

---

## ✨ Features

- 🧭 **Interactive 3D Interface** using Three.js + React Three Fiber
- 🧠 **Custom OS-style Navigation** for showcasing resume, skills, projects, and contact form
- 📬 **Contact Form with Email Support** using Nodemailer + Gmail SMTP
- ⚡ **Fast Load Time** with optimized production builds and asset compression
- 🔐 **Secure Form Handling** via Express API with environment variable support
- 🚀 **Fully Deployed** using Render (backend) and Netlify (frontend)

---

## 🧰 Tech Stack

| Area         | Tech                             |
|--------------|----------------------------------|
| Frontend     | React.js, Tailwind CSS           |
| 3D Graphics  | Three.js, @react-three/fiber     |
| Backend      | Node.js, Express.js              |
| Email Service| Nodemailer                       |
| Deployment   | Netlify (frontend), Render (backend) |
| State & Tools| Vite, dotenv, compression, CORS  |

---

## 📁 Folder Structure

```
My-Portfolio/
├── public/                 # Static assets
├── src/                    # React source code
│   ├── Application/        # 3D and UI Components
│   └── index.html          # Main entry file
├── server/                 # Express backend (email handling)
├── .env.example            # Example environment config
├── README.md               # Project documentation
└── package.json            # Project dependencies and scripts
```

---

## 🛠️ Local Development Setup

### Prerequisites

- Node.js (v16+)
- Gmail account with 2FA + App Password enabled

### 1. Clone and Install

```bash
git clone https://github.com/YesuBalla/My-Portfolio.git
cd My-Portfolio
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory and add:

```
FOLIO_EMAIL=your.email@gmail.com
FOLIO_PASSWORD=your_app_password
```

> 🔐 For Gmail, ensure you’ve enabled 2FA and generated an **App Password**.

### 3. Start Development

```bash
npm run dev
```

This will launch the React frontend and auto-refresh on changes.

---

## 🚀 Production Deployment

### Build React App

```bash
npm run build
```

### Serve with Express

```bash
npm start
```

Your app will be served on the Express server, ideal for Render or other Node-friendly deployment platforms.

---

## 🧪 Troubleshooting

- **Email not sending?**
  - Double-check your `.env` variables
  - Ensure App Password is active and used in place of your actual password
  - Refer to [Gmail BadCredentials Docs](https://support.google.com/mail/?p=BadCredentials)


## 🙋‍♂️ Author & Contact

- 📧 Email: [yesuballa@gmail.com](mailto:yesuballa@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/yesuballa](https://www.linkedin.com/in/yesuballa/)

---

## 🪪 License

This project is open-source and available under the [MIT License](LICENSE).

---

Thanks for visiting my portfolio! Feel free to explore, connect, or leave feedback 🙌
