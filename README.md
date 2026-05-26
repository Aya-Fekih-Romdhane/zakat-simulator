# 🌙 محاسب الزكاة الإسلامي — Simulateur de Zakat Islamique

> **Islamic Zakat Calculator** — A full-stack web application for calculating all types of Islamic Zakat, with a modern Arabic-first UI, multilingual support, and multi-currency handling.

---

## ✨ Features

- 🕌 **6 Zakat types** fully implemented with Islamic jurisprudence rules
- 🌍 **3 languages** — العربية (RTL) · Français · English
- 💱 **12 currencies** — TND, DZD, MAD, USD, EUR, GBP, SAR, AED, QAR, KWD, EGP, LYD
- 🎨 **Modern Islamic design** — Cairo & Amiri Arabic fonts, green/gold palette
- 📱 **Responsive** — works on desktop and mobile

---

## 🕌 Zakat Types Covered

| Type | Arabic | Nisab | Rate |
|------|--------|-------|------|
| Zakat al-Mal | زكاة المال | 85g gold | 2.5% |
| Zakat Gold & Silver | زكاة الذهب والفضة | 85g gold / 595g silver | 2.5% |
| Zakat al-Tijarah | زكاة التجارة | 85g gold | 2.5% |
| Zakat al-Ziraa | زكاة الزراعة | 653 kg | 10% / 5% |
| Zakat al-Mawashi | زكاة المواشي | 5 camels / 30 cattle / 40 sheep | Variable |
| Zakat al-Fitr | زكاة الفطر | — | 2.5 kg/person |

---

## 🛠️ Tech Stack

### Backend
- **Java 17** + **Spring Boot 3.2**
- REST API with 6 POST endpoints under `/api/zakat/*`
- Bean Validation (Jakarta) · Lombok · Maven

### Frontend
- **Angular 21** (standalone components)
- **TypeScript** · SCSS · Reactive Forms
- Google Fonts: **Cairo** (UI) + **Amiri** (headings)

---

## 🚀 Getting Started

### Prerequisites
- Java 17+
- Maven 3.8+
- Node.js 18+ & npm

### Run the Backend

```bash
cd backend
mvn spring-boot:run
```

The API will start on **http://localhost:8080**

### Run the Frontend

```bash
cd frontend
npm install
npx ng serve
```

The app will open on **http://localhost:4200**

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/api/zakat/health` | Health check |
| `POST` | `/api/zakat/mal` | Zakat al-Mal |
| `POST` | `/api/zakat/gold-silver` | Gold & Silver Zakat |
| `POST` | `/api/zakat/tijarah` | Trade Zakat |
| `POST` | `/api/zakat/ziraa` | Agriculture Zakat |
| `POST` | `/api/zakat/mawashi` | Livestock Zakat |
| `POST` | `/api/zakat/fitr` | Zakat al-Fitr |

### Example Request — Zakat al-Mal

```json
POST /api/zakat/mal
{
  "cashSavings": 5000,
  "bankDeposits": 10000,
  "investments": 3000,
  "debtsOwedToYou": 1000,
  "debtsYouOwe": 2000,
  "goldPricePerGram": 325,
  "currency": "TND"
}
```

### Example Response

```json
{
  "type": "Zakat al-Mal",
  "typeAr": "زكاة المال",
  "zakatDue": true,
  "nisabValue": 27625.0,
  "totalAssets": 17000.0,
  "zakatAmount": 425.0,
  "zakatRate": 2.5,
  "currency": "TND",
  "notes": "Nisab = 85g of gold × price per gram",
  "notesAr": "النصاب = 85 غرام ذهب × سعر الغرام"
}
```

---

## 📁 Project Structure

```
zakat-simulator/
├── backend/
│   └── src/main/java/com/zakat/simulator/
│       ├── controller/     # ZakatController.java
│       ├── service/        # ZakatService.java
│       ├── model/          # Request & Result DTOs
│       └── config/         # CORS configuration
│
└── frontend/
    └── src/app/
        ├── models/         # zakat.models.ts · translations.ts · currency.config.ts
        ├── services/       # zakat.service.ts · language.service.ts
        ├── app.ts          # Main component logic
        ├── app.html        # Template (RTL/LTR aware)
        └── app.scss        # Islamic design system
```

---

## 🌍 Supported Currencies (default: TND)

| Code | Currency | Default Gold/g |
|------|----------|----------------|
| TND | Dinar tunisien | 325 |
| DZD | Dinar algérien | 27 000 |
| MAD | Dirham marocain | 1 050 |
| USD | US Dollar | 98 |
| EUR | Euro | 90 |
| GBP | British Pound | 77 |
| SAR | Riyal saoudien | 367 |
| AED | Dirham EAU | 362 |
| QAR | Riyal qatarien | 358 |
| KWD | Dinar koweïtien | 30 |
| EGP | Livre égyptienne | 4 800 |
| LYD | Dinar libyen | 480 |

> Gold prices are indicative defaults — always editable in the form.

---

## 📜 License

This project is open source under the [MIT License](LICENSE).

---

<div align="center">

**﴿ وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ ﴾**
*سورة البقرة: 43*

---

Developed with ❤️ by **Ing. Aya Fekih Romdhane** © 2026

</div>
