
# 🛡️ Cybersec Maroc OSINT

> **Open-Source Intelligence (OSINT) platform for monitoring Moroccan industrial sectors against cyber threats**

🔗 **Live demo:** [cybersec-maroc-osint.vercel.app](https://cybersec-maroc-osint.vercel.app/)

---

## 📌 Overview

`Cybersec Maroc OSINT` is a web-based intelligence dashboard that leverages public data and threat feeds to provide situational awareness on cyber risks targeting **Moroccan companies**, especially in **industrial sectors**.

🚀 Powered by **Vercel**, this OSINT platform helps security researchers, analysts, and decision-makers monitor:

- Breaches and leaks
- Phishing domains
- Vulnerable assets
- Malicious IPs & URLs
- Sector-based threat mapping

---

## 📊 Features

- 📡 **Real-time monitoring** via external OSINT sources (Shodan, AbuseIPDB, etc.)
- 🏭 **Industry filter** to focus on energy, telecom, logistics, and more
- 🌐 **Threat map** of malicious activities targeting Moroccan IPs
- 📁 Exportable **PDF/CSV** threat reports
- 🔍 Quick search by company name, ASN, or domain
- 🧠 Integrated MITRE ATT&CK matrix (upcoming)

---

## ⚙️ Tech Stack

| Frontend | Deployment | Data |
|----------|------------|------|
| Next.js / React | Vercel | OSINT APIs (e.g., PublicWWW, AlienVault, URLScan) |
| TailwindCSS | GitHub Pages (legacy) | Static JSON + live API calls |

---

## 📁 Project Structure

```

cybersec-maroc-osint/
├── components/
├── pages/
├── public/
├── styles/
└── utils/

````

---

## 🚀 Getting Started (Dev Mode)

```bash
git clone https://github.com/Kabilala/cybersec-maroc-osint.git
cd cybersec-maroc-osint
npm install
npm run dev
````

Then go to `http://localhost:3000`

---

## ✅ Deployment

The project is live on **Vercel** and auto-updates with each `main` branch push.

> [vercel.com/dashboard](https://vercel.com/dashboard)

---

## 🔐 Disclaimer

This project is **for educational and research purposes only**. It does **not engage in active reconnaissance or intrusion**. All sources are public and legally accessible.

---

## 🙌 Contribution

Feel free to fork, open issues, and submit pull requests. If you're passionate about OSINT, cyber defense, or threat intelligence — **join the mission!**

---

## 👩‍💻 Author

**Kaouthar Belkebir**
🛡️ Cybersecurity Enthusiast | OSINT Analyst
🔗 [LinkedIn](https://www.linkedin.com/in/kaouthar-belkebir-ab453223b

--
