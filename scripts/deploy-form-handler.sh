#!/bin/bash
set -e

cd "$(dirname "$0")/../form-handler"

echo "Installing dependencies..."
npm install

echo "Deploying to Cloudflare Workers..."
npx wrangler deploy

echo ""
echo "=== Post-deploy steps ==="
echo "Set the recipient email address:"
echo "  npx wrangler secret put TO_EMAIL"
echo ""
echo "Optionally set a custom sender (default: contact@jordanchristley.com):"
echo "  npx wrangler secret put FROM_EMAIL"
echo ""
echo "Make sure the sender domain is onboarded for Email Sending:"
echo "  npx wrangler email sending enable yourdomain.com"
