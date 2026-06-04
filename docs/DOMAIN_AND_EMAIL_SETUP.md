# Custom domain + Resend email setup

## 1. Add your domain on Netlify

1. Open [Netlify](https://app.netlify.com) → your **jb-academy** site → **Domain management**.
2. Click **Add a domain** → **Add a domain you own**.
3. Enter your domain (e.g. `jbacademy.ltd`).
4. Netlify shows DNS records. At your domain registrar, add:
   - **A record** → Netlify load balancer IP (shown in dashboard), or
   - **CNAME** for `www` → your Netlify site URL (`something.netlify.app`)
5. Wait for DNS to propagate (often 15 minutes–48 hours).
6. Enable **HTTPS** (Netlify provisions a free certificate automatically).

Optional: set `jbacademy.ltd` as **primary domain** and redirect `www` → apex (or the reverse).

---

## 2. Verify your domain in Resend (required to send from info@jbacademy.ltd)

1. Sign in at [resend.com](https://resend.com).
2. Go to **Domains** → **Add Domain**.
3. Enter `jbacademy.ltd` (must match the domain you own).
4. Resend shows DNS records (SPF, DKIM, and optionally DMARC). Add **every** record at your registrar exactly as shown.
5. Click **Verify** in Resend when DNS has propagated.

Until the domain is verified, Resend will not send from `info@jbacademy.ltd`.

---

## 3. Create a Resend API key

1. In Resend: **API Keys** → **Create API Key**.
2. Copy the key (starts with `re_`). Store it securely — it is shown only once.

---

## 4. Add environment variables on Netlify

1. Netlify → your site → **Site configuration** → **Environment variables**.
2. Add:

| Variable | Value |
|----------|--------|
| `RESEND_API_KEY` | Your Resend API key (`re_...`) |
| `RESEND_FROM_EMAIL` | `info@jbacademy.ltd` |
| `CONTACT_TO_EMAIL` | `info@jbacademy.ltd` |

3. **Redeploy** the site (Deploys → Trigger deploy) so functions pick up the new variables.

---

## 5. Receiving email at info@jbacademy.ltd

The contact form sends mail **to** `CONTACT_TO_EMAIL` via Resend.

To **receive** mail at that address in a normal inbox (Gmail, Outlook, etc.), you also need **MX records** for `jbacademy.ltd`:

- If you use Resend only for **sending**, keep your existing MX records at your email host, or
- If Resend handles inbound for you, follow Resend’s inbound/MX documentation for your plan.

For most teams: use Resend for **outbound** (website form + notifications) and keep Google Workspace / Zoho / etc. for the actual mailbox, with MX pointing to that provider.

---

## 6. Test the contact form

1. Visit your live site → **Contact** section (or `/#contact`).
2. Submit the form.
3. Check `info@jbacademy.ltd` (or the inbox behind `CONTACT_TO_EMAIL`).
4. If it fails: Netlify → **Functions** → `send-email` → view logs.

---

## Local development

```bash
cp .env.example .env
# Fill in RESEND_API_KEY, then:
npx netlify dev
```

`netlify dev` runs the Vite app and serverless functions together so the form hits `/.netlify/functions/send-email` locally.
