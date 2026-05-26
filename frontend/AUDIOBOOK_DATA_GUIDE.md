# AudioBook Box - Data Management Guide

## How to Update Audiobook Data

All audiobook data is stored in a single file for easy editing:

**File Location:** `/app/frontend/src/data/audiobooks.ts`

## Quick Start: Replacing Placeholder Links

1. Open the file: `/app/frontend/src/data/audiobooks.ts`
2. Find the audiobook you want to update
3. Replace the `teraboxLink` value with your actual TeraBox link

### Example:

**Before:**
```typescript
{
  id: '1',
  title: 'Think and Grow Rich',
  author: 'Napoleon Hill',
  category: 'Motivation',
  description: 'A timeless classic on success principles...',
  teraboxLink: 'https://terabox.com/s/1abc123example'  // ← Placeholder
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
  teraboxLink: 'https://terabox.com/s/1a2b3c4d5e6f7g'  // ← Your real link
}
```

## TeraBox Link Formats

The app supports both TeraBox link formats:
- Short format: `https://terabox.com/s/xxxxx`
- Long format: `https://www.terabox.com/sharing/link?surl=xxxxx`

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
