# DjangoGram 💬

**Talk in real-time. Built with Django.**

DjangoGram is a real-time chat application powered by Django and Django Channels. It enables fast, live conversations over WebSockets with a clean, scalable backend and no JavaScript frameworks involved. Ideal for learning and building real-world chat features entirely in Python.

---

## 🚀 Features

- 🔌 Real-time WebSocket chat via Django Channels
- 👥 Multi-user public chatrooms
- 🔐 User authentication (login/register/logout)
- 🧠 Redis-backed channel layer for message delivery
- 💻 Clean frontend using Django templates and Tailwind CSS
- 🗃️ SQLite (default DB) with PostgreSQL-ready structure

---

## 🛠️ Tech Stack

| Layer        | Technology                   |
|--------------|------------------------------|
| Backend      | Django, Django Channels       |
| Frontend     | HTML, Tailwind CSS            |
| WebSockets   | ASGI, Channels Consumers      |
| Auth System  | Django Auth                   |
| Database     | SQLite (dev), PostgreSQL (prod) |
| Channel Layer| Redis (local + prod)          |
| Deployment   | Heroku / Railway (docs below) |

---

## 📁 Project Structure
DjangoGram/
├── coming soon enough

---

## 🧪 Getting Started (Local Development)

### 1. Clone the repo

```bash
git clone https://github.com/your-username/DjangoGram.git
cd DjangoGram
```
2. Create and activate a virtual environment
```
python -m venv venv
source venv/bin/activate
# Windows: venv\Scripts\activate
```
3. Install dependencies
```
pip install -r requirements.txt
```
4.  Run Redis locally
Ubuntu / Debian:
```
sudo apt install redis
sudo service redis-server start
```
Make sure Redis is running on `localhost:6379`.

📦 Dependencies

Key packages (see requirements.txt for full list):

    Django

    channels

    channels_redis

    daphne

    tailwindcss (via npm)

    asgiref

    python-dotenv 

✅ Roadmap

- [ ] Public chatrooms

- [ ] Django user authentication

- [ ] WebSocket message broadcasting

- [ ] Private 1-on-1 messaging

- [ ] Typing indicators

- [ ] User online/offline status

- [ ] Emoji picker + media sharing

- [ ] PWA support + mobile responsiveness

# 👨‍💻 Author

## Kushal Yadav
🎓 B.Tech. UIET, Panjab University

🌐 [LinkedIn](https://www.linkedin.com/in/kushal-yadav-799310318/)

✉️ [Email](net.kushalyadav@gmail.com)

# 📜 License
Licensed under the MIT License.

# ⭐ Support
If you like the project, drop a ⭐ on the repo — it helps a lot!
