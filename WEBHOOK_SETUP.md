# GoHighLevel Webhook Setup

This guide explains how to configure the booking form to send submissions to your GoHighLevel account.

## Setup Instructions

### 1. Get Your Webhook URL from GoHighLevel

1. Log into your GoHighLevel account
2. Navigate to **Settings** → **Webhooks** → **Inbound Webhooks**
3. Click **Create Webhook**
4. Name it something like "Amuse-Bouche Booking Form"
5. Copy the webhook URL provided (it should look like: `https://your-account.gohighlevel.com/webhooks/...`)

### 2. Add the Webhook URL to Your Environment Variables

1. Open your `.env` file in the project root
2. Find or add the line: `GOHIGHLEVEL_WEBHOOK_URL=`
3. Paste your webhook URL after the equals sign:
   ```
   GOHIGHLEVEL_WEBHOOK_URL="https://your-account.gohighlevel.com/webhooks/your-webhook-id"
   ```

### 3. Restart Your Development Server

If the server is already running, restart it to pick up the new environment variable:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
bun run dev
```

## Data Format

The form sends the following data to your webhook:

```json
{
  "name": "Customer Full Name",
  "email": "customer@example.com",
  "phone": "+1 (242) 555-0100",
  "preferred_date": "2025-11-15",
  "source": "Amuse-Bouche Website",
  "timestamp": "2025-10-28T19:00:00.000Z"
}
```

## Testing the Form

1. Open your website: http://localhost:3000
2. Scroll to the "Reserve Your Experience" section
3. Fill out the form with test data
4. Click "Reserve Your Experience"
5. Check your GoHighLevel account for the submission

## Troubleshooting

### Form submissions aren't appearing in GoHighLevel

- Verify the `GOHIGHLEVEL_WEBHOOK_URL` is set correctly in your `.env` file
- Check that you restarted the dev server after adding the webhook URL
- Look at the browser console (F12) for any error messages
- Verify the webhook is active in your GoHighLevel account

### Error: "Webhook configuration missing"

This means the `GOHIGHLEVEL_WEBHOOK_URL` environment variable is not set. Follow step 2 above to add it.

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add `GOHIGHLEVEL_WEBHOOK_URL` to your hosting platform's environment variables
2. The value should be the same webhook URL from GoHighLevel
3. Redeploy your application for the changes to take effect

**Note:** Never commit your `.env` file to git. The `.gitignore` file is already configured to exclude it.
