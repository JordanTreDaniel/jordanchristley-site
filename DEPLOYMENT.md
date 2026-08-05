# GitHub Pages Deployment Guide

## Quick Setup Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Enable GitHub Pages (New Method)

GitHub has updated their Pages workflow. Follow these steps:

1. **Go to your repository** → **Settings** → **Pages**
2. **Under "Build and deployment"**:
   - **Source**: Select **"GitHub Actions"** (not "Deploy from a branch")
3. The GitHub Action workflow (`.github/workflows/deploy.yml`) will automatically:
   - Build your Next.js app
   - Deploy to GitHub Pages
   - Include the CNAME file for your custom domain

### 3. Set Custom Domain

After the first deployment completes (you'll see a green checkmark in the Actions tab):

1. Go back to **Settings** → **Pages**
2. You should now see a **"Custom domain"** field
3. Enter: `jordanchristley.com`
4. Click **Save**

### 4. Configure DNS

At your DNS provider (where you manage `jordanchristley.com`), add these records:

**For apex domain (jordanchristley.com):**
- Type: `A`
- Name: `@` (or root)
- Value: `185.199.108.153`
- TTL: 3600

Add 3 more A records with these IPs:
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**Optional - for www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `jordanchristley.github.io` (or your GitHub username/repo)
- TTL: 3600

### DNS Records for Custom Domain — Lessons Learned

- **The 4 A records are for GitHub Pages, not Zoho.** The apex (`@`) records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153` are GitHub's IPs for resolving `jordanchristley.com`. Deleting them breaks the site.
- **Leave the `www` CNAME alone.** The `www` CNAME pointing to `jordanchristley.github.io.` is also GitHub's — do not touch it.
- **Always verify before deleting.** Check [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) before removing any DNS record. GitHub's IPs look generic and are easy to mistake for other services.

### 5. Wait for DNS Propagation

- DNS changes can take 24-48 hours, but usually propagate within a few hours
- GitHub will show a warning until DNS is configured correctly
- Once DNS is correct, GitHub will automatically provision an SSL certificate

## Troubleshooting

### "Custom domain" field not showing?

1. Make sure the repository is **public**
2. Make sure you've selected **"GitHub Actions"** as the source (not a branch)
3. Wait for the first deployment to complete in the Actions tab
4. The field appears after the first successful deployment

### Site not loading?

1. Check the Actions tab to ensure the workflow completed successfully
2. Verify DNS records are correct (use `dig jordanchristley.com` or online DNS checker)
3. Check that the CNAME file is in the `out` directory after build (it should be automatically)

### Manual Verification

To verify the CNAME file is included:
```bash
npm run build
ls -la out/CNAME  # Should show the file
cat out/CNAME     # Should show: jordanchristley.com
```

## Notes

- The site will be available at `https://jordanchristley.com` once DNS is configured
- GitHub Pages provides free SSL certificates automatically
- The workflow runs on every push to `main` branch
- You can also trigger it manually from the Actions tab
