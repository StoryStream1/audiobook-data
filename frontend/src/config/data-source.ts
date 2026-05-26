// ⭐ CONFIGURATION - UPDATE THIS WITH YOUR GITHUB URL ⭐
//
// HOW TO USE:
// 1. Upload audiobooks.json (from project root) to your GitHub repository
// 2. Get the RAW URL by clicking the file on GitHub and clicking "Raw" button
// 3. The URL will look like: https://raw.githubusercontent.com/username/repo/main/audiobooks.json
// 4. Replace the URL below with your actual GitHub Raw URL
// 5. Save the file and rebuild your app
//
// EXAMPLE:
// https://raw.githubusercontent.com/yourname/audiobook-data/main/audiobooks.json
//
// After this is set up:
// - Edit audiobooks.json on GitHub anytime to update audiobooks
// - All users will see new audiobooks automatically (no app update needed!)
// - Update posters by changing coverImage URLs
// - Update TeraBox links by changing teraboxLink values

export const DATA_SOURCE_CONFIG = {
  // ⭐ CHANGE THIS URL TO YOUR GITHUB RAW URL ⭐
  GITHUB_RAW_URL: 'https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/audiobooks.json',
  
  // Cache duration in milliseconds (default: 5 minutes)
  // Lower = fresher data, Higher = less network requests
  CACHE_DURATION: 5 * 60 * 1000, // 5 minutes
  
  // If true, uses local bundled data when GitHub is unreachable
  // If false, shows error message
  USE_FALLBACK: true,
};
