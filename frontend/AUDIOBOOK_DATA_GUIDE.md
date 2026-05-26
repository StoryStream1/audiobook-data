# AudioBook Box - Data Management Guide

## How to Update Audiobook Data

All audiobook data is stored in a single file for easy editing:

**File Location:** `/app/frontend/src/data/audiobooks.ts`

## Quick Start: Replacing Placeholder Data

1. Open the file: `/app/frontend/src/data/audiobooks.ts`
2. Find the audiobook you want to update
3. Replace the `teraboxLink` and `coverImage` values

### Example:

**Before:**
```typescript
{
  id: '1',
  title: 'Think and Grow Rich',
  author: 'Napoleon Hill',
  category: 'Motivation',
  description: 'A timeless classic on success principles...',
  teraboxLink: 'https://terabox.com/s/1abc123example',  // ← Placeholder
  coverImage: 'https://via.placeholder.com/300x450/...'  // ← Placeholder
}
```

**After:**
```typescript
{
  id: '1',
  title: 'Think and Grow Rich',
  author: 'Napoleon Hill',
  category: 'Motivation',
  description: 'A timeless classic on success principles...',
  teraboxLink: 'https://terabox.com/s/1a2b3c4d5e6f7g',  // ← Your real link
  coverImage: 'https://yourdomain.com/covers/think-grow-rich.jpg'  // ← Your real image
}
```

## TeraBox Link Formats

The app supports both TeraBox link formats:
- Short format: `https://terabox.com/s/xxxxx`
- Long format: `https://www.terabox.com/sharing/link?surl=xxxxx`

## Cover Image Options

You have several options for audiobook cover images:

### Option 1: Image URL (Recommended)
Use a direct URL to an image hosted online:
```typescript
coverImage: 'https://yourdomain.com/covers/book-cover.jpg'
```

### Option 2: Base64 Encoded Image
Convert your image to base64 and embed it directly:
```typescript
coverImage: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...'
```

**To convert an image to base64:**
1. Use online tools like: base64-image.de or base64.guru
2. Copy the full base64 string including the `data:image/...` prefix
3. Paste it as the coverImage value

### Option 3: Keep Placeholder Images
The current placeholder images use via.placeholder.com and will work until you replace them.

**Image Specifications:**
- Recommended size: 300x450 pixels (2:3 aspect ratio)
- Supported formats: JPG, PNG, WebP
- File size: Keep under 200KB for fast loading

## Adding New Audiobooks

To add a new audiobook, add a new object to the `AUDIOBOOKS` array:

```typescript
{
  id: '13',  // Must be unique
  title: 'Your Book Title',
  author: 'Author Name',
  category: 'Motivation',  // Must be one of: Motivation, Business, Islamic, Stories, Self Improvement
  description: 'Short description of the audiobook (2-3 sentences)',
  teraboxLink: 'https://terabox.com/s/your-link-here'
}
```

### Available Categories:
- `Motivation`
- `Business`
- `Islamic`
- `Stories`
- `Self Improvement`

## Removing Audiobooks

Simply delete the entire audiobook object from the array, including the curly braces `{ }`.

## Best Practices

1. **Keep IDs Unique:** Each audiobook must have a unique `id`
2. **Use Valid Categories:** Only use the 5 predefined categories
3. **Write Clear Descriptions:** Keep descriptions concise (2-3 sentences)
4. **Test Links:** Make sure your TeraBox links work before adding them
5. **Restart App:** After making changes, restart the Expo service:
   ```bash
   sudo supervisorctl restart expo
   ```

## Data Structure Overview

```typescript
interface Audiobook {
  id: string;                    // Unique identifier
  title: string;                 // Book title
  author: string;                // Author name
  category: string;              // One of the 5 categories
  description: string;           // Short description
  teraboxLink: string;          // Your TeraBox share link
}
```

## Need Help?

If you encounter any issues:
1. Check that all syntax is correct (commas, quotes, brackets)
2. Ensure categories match exactly (case-sensitive)
3. Verify TeraBox links are valid
4. Restart the app after changes

---

**Note:** The app stores favorites locally on the user's device. Changing audiobook data won't affect users' saved favorites unless you change the `id` field.
