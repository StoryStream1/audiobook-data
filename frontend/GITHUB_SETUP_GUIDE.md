# 🚀 GitHub Setup Guide - Update Your App Without Rebuilding!

## 🎯 What This Does

Your AudioBook Box app fetches audiobook data from a JSON file hosted on GitHub.
This means you can **update audiobooks anytime** by simply editing the file on GitHub!

✅ **FREE forever** (no hosting costs)  
✅ **Instant updates** (all users see new data immediately)  
✅ **No technical knowledge needed**  
✅ **No backend, no database, no maintenance**

---

## 📋 One-Time Setup (5 Minutes)

### Step 1: Create a GitHub Account (Skip if you have one)
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Create your free account

### Step 2: Create a New Repository
1. Click the **"+"** icon in top right → **"New repository"**
2. Name it: `audiobook-data` (or any name you prefer)
3. Set to **Public** (important - needed for app to access it)
4. Click **"Create repository"**

### Step 3: Upload Your audiobooks.json File
1. In your new repository, click **"uploading an existing file"**
2. Drag and drop the `audiobooks.json` file from `/app/frontend/audiobooks.json`
3. Click **"Commit changes"**

### Step 4: Get the Raw URL
1. Click on the `audiobooks.json` file in your repository
2. Click the **"Raw"** button (top right of the file content)
3. Copy the URL from your browser - it will look like:
   ```
   https://raw.githubusercontent.com/YOUR_USERNAME/audiobook-data/main/audiobooks.json
   ```

### Step 5: Configure Your App
1. Open `/app/frontend/src/config/data-source.ts`
2. Replace the placeholder URL with YOUR Raw URL from Step 4:
   ```typescript
   GITHUB_RAW_URL: 'https://raw.githubusercontent.com/YOUR_USERNAME/audiobook-data/main/audiobooks.json',
   ```
3. Save the file
4. Rebuild and export your APK

✅ **Done! Your app now fetches data from GitHub!**

---

## 🔄 How to Update Audiobooks (After Setup)

### Method 1: Edit Directly on GitHub (Easiest)

1. Go to your repository on GitHub
2. Click on `audiobooks.json`
3. Click the **pencil icon** (Edit this file) in top right
4. Make your changes:
   - **Add new audiobook:** Copy an existing entry and modify it
   - **Update TeraBox link:** Change the `teraboxLink` value
   - **Update poster:** Change the `coverImage` URL
   - **Edit description:** Change the `description` text
   - **Remove audiobook:** Delete the entire `{ }` block
5. Scroll down and click **"Commit changes"**
6. ✅ Done! All users will see updates within 5 minutes

### Method 2: Upload New File

1. Edit `audiobooks.json` locally on your computer
2. Go to your GitHub repository
3. Upload the new file (it will replace the old one)
4. ✅ Done!

---

## 📝 JSON Format Reference

Each audiobook follows this structure:

```json
{
  "id": "1",
  "title": "Book Title",
  "author": "Author Name",
  "category": "Motivation",
  "description": "Short description of the book...",
  "teraboxLink": "https://terabox.com/s/your-link",
  "coverImage": "https://example.com/cover.jpg"
}
```

### Available Categories
Must be EXACTLY one of these:
- `"Motivation"`
- `"Business"`
- `"Islamic"`
- `"Stories"`
- `"Self Improvement"`

### Important Rules
- ✅ Each audiobook MUST have a unique `id` (use sequential numbers: "1", "2", "3"...)
- ✅ Categories are case-sensitive
- ✅ Don't forget the comma between audiobook entries
- ✅ The whole file must be valid JSON (use [jsonlint.com](https://jsonlint.com) to verify)

---

## 🖼️ Cover Image Options

### Option 1: Use Image URLs (Recommended)
Host your images anywhere and use direct links:
- **Imgur** (free): Upload to imgur.com, copy direct link
- **Cloudinary** (free): cloudinary.com
- **ImgBB** (free): imgbb.com
- **GitHub** (free): Upload to your repo, use raw URL

### Option 2: Use Same GitHub Repo for Images
1. Create a folder `covers/` in your repository
2. Upload images there
3. Use URLs like: `https://raw.githubusercontent.com/USERNAME/REPO/main/covers/book1.jpg`

### Image Specifications
- **Recommended size:** 300x450 pixels (book cover ratio)
- **Format:** JPG or PNG
- **Max file size:** 500KB (for fast loading)

---

## 🎯 Example: Adding a New Audiobook

**Before:**
```json
[
  {
    "id": "1",
    "title": "Book 1",
    ...
  }
]
```

**After (added new book):**
```json
[
  {
    "id": "1",
    "title": "Book 1",
    ...
  },
  {
    "id": "13",
    "title": "New Audiobook",
    "author": "New Author",
    "category": "Motivation",
    "description": "A great new audiobook",
    "teraboxLink": "https://terabox.com/s/new-link",
    "coverImage": "https://example.com/new-cover.jpg"
  }
]
```

---

## ⚡ Performance & Caching

The app uses smart caching for fast performance:

- **5-minute cache:** App caches data for 5 minutes to reduce network requests
- **Pull-to-refresh:** Users can pull down to force refresh
- **Offline fallback:** If GitHub is unreachable, app shows last cached data
- **Bundled fallback:** If no cache, shows default audiobooks bundled with app

To change cache duration, edit `CACHE_DURATION` in `/app/frontend/src/config/data-source.ts`

---

## 🔒 Security Notes

- ✅ **Your repo can be PUBLIC** - the JSON file is just data, no secrets
- ✅ **TeraBox links remain secure** - they have their own access controls
- ⚠️ **Don't put passwords or API keys in audiobooks.json**
- ⚠️ **Only YOU can edit** the file (your GitHub account)

---

## 🐛 Troubleshooting

### App still shows old data?
- Wait 5 minutes (cache duration)
- Or pull down to refresh in the app
- Or restart the app

### App shows "No audiobooks found"?
- Check your GitHub URL is correct in `data-source.ts`
- Verify the file is at the URL (open in browser)
- Make sure JSON is valid at [jsonlint.com](https://jsonlint.com)

### Images not showing?
- Verify image URLs are public and accessible
- Check image format (JPG/PNG)
- Try opening image URL in browser

### App not connecting?
- Check device has internet
- Verify GitHub URL is HTTPS (not HTTP)
- Make sure repository is PUBLIC

---

## 💡 Pro Tips

1. **Test before committing:** Use [jsonlint.com](https://jsonlint.com) to validate JSON
2. **Keep backups:** GitHub keeps full history - revert anytime if needed
3. **Bulk updates:** Edit file locally, then upload to GitHub
4. **Multiple admins:** Add collaborators to your GitHub repo
5. **Mobile editing:** Use GitHub mobile app to edit on the go

---

## 🎉 Benefits of This Approach

| Feature | GitHub JSON | Paid Backend |
|---------|-------------|--------------|
| **Cost** | FREE forever | $10+/month |
| **Setup** | 5 minutes | Hours |
| **Updates** | Instant | Instant |
| **Maintenance** | None | Server management |
| **Backups** | Automatic (GitHub) | Manual |
| **History** | Full version control | Limited |
| **Reliability** | 99.99% (GitHub) | Depends on host |

---

## 📞 Need Help?

If you have any issues:
1. Check the troubleshooting section above
2. Verify your JSON at [jsonlint.com](https://jsonlint.com)
3. Test your GitHub URL in a browser first

**Your AudioBook Box app is now FREE forever and easy to update! 🎉**
