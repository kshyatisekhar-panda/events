# 🇸🇪 Nordic Google Cloud Summit 2025 - Stockholm

Welcome to my documentation for the **Nordic Google Cloud Summit 2025**, held in Stockholm. This event brought together cloud professionals, developers, and AI enthusiasts to explore cutting-edge solutions from Google Cloud — from Gemini AI to Firebase Studio and beyond.

---

## 🗓️ Event Summary
- **Date**: June 11, 2025
- **Location**: Avicii Arena, Stockholm, Sweden
- **Focus Areas**: AI, Gemini, Vertex AI, Firebase Studio, Multimodal Applications, Gmail Analysis, Cloud Databases, Startups, Certification

---

## 🧠 Sessions Attended

### 🔹 Partner Session: Cognizant  
**Title**: Real-life AI / Agentic AI Use Cases  
**Overview**: Discussed enterprise automation using agentic AI models. Covered topics like workflow orchestration, business logic with AI agents, and next-gen digital labor.

### 🔹 Vibe Coding: Prompt to Production  
**With**: Firebase Studio & Gemini Code Assist  
**Overview**: Live coding demonstration that showed how Firebase Studio integrates with Gemini to go from natural language prompts to production-grade backend logic.

### 🔹 Spotify x Google Cloud: Scaling Innovation Together  
**Overview**: A collaborative session showcasing how Spotify migrated to Google Cloud Platform (GCP), their architectural journey, scalability improvements, and the evolution of their developer productivity tools using GCP services.

### 🔹 Databases Spotlight: What's New in Google Cloud Databases in the AI Era  
**Overview**: Introduction to AI-native databases and updates on Cloud Spanner, AlloyDB, and vector search capabilities. Emphasis on performance, scalability, and how databases now support AI workloads natively.

---

## 🧪 Hands-on Workshops

### ✅ Gmail Sentiment Analysis with Gemini and Vertex AI  
Used a Gmail thread to analyze sentiment and categorize conversations using Gemini and Vertex AI.

### ✅ Solving Multimodal Video Transcription with Gemini  
Provided a YouTube video and watched Gemini generate multimodal context-aware transcriptions.

---

## 🎓 GCP Certification & Career Growth

I also had the opportunity to:
- Discuss Google Cloud certification pathways with Googlers and partners.
- Learn about new **discount offers** and **bundled courses** available for AI/ML specialization.
- Understand how companies value hands-on GCP credentials and real-world demo projects like those from this summit.

---

## 🚀 AI Startups & Product Ecosystem

The summit floor featured many visionary startups building tools that ranged from:
- **Coder productivity agents** to **no-code ERP platforms**
- **AI-native design tools**, **healthcare copilots**, and **compliance automation**
- Early-stage founders demoing integrations with Gemini, Vertex AI, and Firebase-backed microservices

A truly inspiring collection of innovation — all thriving on GCP.

---

## 💻 Scripts & Code

In the [`scripts/`](./scripts/) folder:
- `vertex-ai-image-gen.gs` – Google Apps Script to generate an image using Gemini's Imagen 4.0 model via Vertex AI and save it to Drive.

Required scopes defined in [`appsscript.json`](./appsscript.json):
```json
"oauthScopes": [
  "https://www.googleapis.com/auth/drive",
  "https://www.googleapis.com/auth/script.external_request"
]
