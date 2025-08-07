# DSV Shipment Tracking Backend

Node.js Express API server for DSV shipment tracking integration.

## 🚀 Features

- **DSV API Integration**: Secure connection to DSV tracking services
- **Token Management**: Automatic OAuth token handling
- **Dual Tracking**: Support for Booking ID and TMS ID tracking
- **Error Handling**: Comprehensive error management
- **CORS Enabled**: Cross-origin resource sharing
- **Environment Configuration**: Secure credential management

## 📋 Prerequisites

- Node.js 18 or higher
- npm or yarn
- DSV API credentials

## 🛠 Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

## ⚙️ Environment Configuration

Create a `.env` file in the root directory:

```env
CLIENT_ID=your_dsv_client_id
CLIENT_SECRET=your_dsv_client_secret
DSV_SUBSCRIPTION_KEY=your_subscription_key
DSV_TRACKING_KEY=your_tracking_key
PORT=5000
NODE_ENV=development
```

## 🚀 Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000`

## 📡 API Endpoints

### Authentication
```http
POST /api/token
```
**Description**: Get access token for DSV API
**Response**: 
```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

### Shipment Tracking

#### Track by Booking ID
```http
GET /api/shipment/:bookingId?access_token=TOKEN
```

#### Track by TMS ID
```http
GET /api/shipment/tms/:tmsId?access_token=TOKEN
```

**Response Example**:
```json
{
  "trackingId": "SDFW0000123",
  "status": "In Transit",
  "events": [
    {
      "timestamp": "2024-01-15T10:30:00Z",
      "statusDescription": "Package picked up"
    }
  ]
}
```

### Webhooks
```http
POST /api/webhook
```
**Description**: Receive DSV webhook notifications

## 📁 Project Structure

```
backend/
├── controllers/              # Request handlers
│   ├── tokenController.js   # Token management
│   ├── shipmentController.js # Booking ID tracking
│   ├── getShipmentByTmsId.js # TMS ID tracking
│   └── webhookController.js  # Webhook handling
├── routes/                   # API routes
│   ├── app.js               # Main app configuration
│   ├── tokenRoutes.js       # Token routes
│   ├── shipmentRoutes.js    # Shipment routes
│   └── webhookRoutes.js     # Webhook routes
├── .env                     # Environment variables
├── index.js                 # Server entry point
└── package.json            # Dependencies
```

## 🔒 Security Features

- Environment variable protection
- CORS configuration
- Input validation
- Error sanitization
- Access token verification

## 📊 Error Handling

The API returns standardized error responses:

```json
{
  "error": "Error description",
  "details": "Detailed error information"
}
```

## 🧪 Testing

```bash
# Test token endpoint
curl -X POST http://localhost:5000/api/token

# Test shipment tracking
curl "http://localhost:5000/api/shipment/BOOK123?access_token=YOUR_TOKEN"
```

## 📦 Dependencies

```json
{
  "express": "^5.1.0",
  "axios": "^1.11.0",
  "cors": "^2.8.5",
  "dotenv": "^17.2.1",
  "body-parser": "^2.2.0"
}
```

## 🔄 Development Scripts

```bash
npm start        # Start production server
npm run dev      # Start development server
npm run lint     # Code linting
npm test         # Run tests
```

## 📝 Logging

The server logs important events:
- API requests and responses
- Error details
- Token generation
- Webhook events

## 🤝 Contributing

1. Follow Node.js best practices
2. Use environment variables for configuration
3. Add proper error handling
4. Document new endpoints
5. Test thoroughly

---

**Backend API for DSV Shipment Tracking System**