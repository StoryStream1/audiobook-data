# 📚 AudioBook Box

A beautiful, dark-themed mobile app for managing and sharing TeraBox audiobook links.

## ✨ Features

- **📱 Home Screen** - Browse all audiobooks with search functionality
- **🔍 Smart Search** - Search by title, author, or category
- **📑 Categories** - Filter by: Motivation, Business, Islamic, Stories, Self Improvement
- **❤️ Favorites** - Save your favorite audiobooks locally
- **🎨 Dark Theme** - Clean, modern dark UI design
- **🔗 TeraBox Integration** - Opens links in browser or TeraBox app
- **📊 Ad Space** - Banner ad placeholder (Google AdMob ready)

## 🚀 Quick Start

The app is ready to use with 12 placeholder audiobooks. Simply:

1. View the preview at: `https://terabox-audio.preview.emergentagent.com`
2. Scan the QR code with Expo Go app for mobile testing
3. Update audiobook data with your real TeraBox links

## 📝 How to Update Audiobook Data

See [AUDIOBOOK_DATA_GUIDE.md](./AUDIOBOOK_DATA_GUIDE.md) for detailed instructions.

**Quick Update:**
1. Open `/app/frontend/src/data/audiobooks.ts`
2. Replace the `teraboxLink` values with your actual TeraBox links
3. Restart the app: `sudo supervisorctl restart expo`

## 🛠️ Tech Stack

- **Framework:** React Native with Expo
- **Router:** Expo Router (file-based routing)
- **Navigation:** React Navigation (Bottom Tabs)
- **Storage:** AsyncStorage (for favorites)
- **Icons:** Expo Vector Icons (Ionicons)
- **Styling:** React Native StyleSheet

## 📁 Project Structure

```
frontend/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx        # Tab navigation
│   │   ├── home.tsx            # Home screen with search
│   │   ├── categories.tsx      # Category filtering
│   │   └── favorites.tsx       # Saved favorites
│   ├── _layout.tsx             # Root layout
│   └── index.tsx               # Entry point (redirects to home)
├── src/
│   ├── components/
│   │   ├── AudiobookCard.tsx   # Reusable audiobook card
│   │   ├── SearchBar.tsx       # Search input component
│   │   └── AdBanner.tsx        # Ad placeholder
│   ├── data/
│   │   └── audiobooks.ts       # ⭐ ALL AUDIOBOOK DATA HERE
│   ├── hooks/
│   │   ├── useFavorites.ts     # Favorites logic
│   │   └── use-icon-fonts.ts   # Icon font loading
│   └── utils/
│       └── storage/            # Storage utilities
└── app.json                    # App configuration
```

## 🎯 Key Features Explained

### 1. Home Screen
- Displays all audiobooks in a scrollable list
- Search bar filters by title, author, or category
- Each card shows: title, author, category badge, description, and action button

### 2. Categories Screen
- Horizontal scrollable category chips
- Click a category to filter audiobooks
- Shows count for each category

### 3. Favorites Screen
- Lists all favorited audiobooks
- Syncs with favorite hearts across the app
- Empty state with helpful message

### 4. TeraBox Link Opening
- Supports both TeraBox link formats:
  - `https://terabox.com/s/xxxxx`
  - `https://www.terabox.com/sharing/link?surl=xxxxx`
- Opens in external browser or TeraBox app if installed

## 🎨 Design Details

- **Color Scheme:**
  - Background: `#0a0a0a` (Deep black)
  - Cards: `#1a1a1a` (Dark gray)
  - Borders: `#2a2a2a` (Medium gray)
  - Primary: `#4a90e2` (Blue)
  - Text: `#fff` (White), `#999` (Light gray), `#666` (Gray)

- **Typography:**
  - Headers: 28px bold
  - Titles: 18px semi-bold
  - Body: 14px regular
  - Small: 12px

- **Spacing:**
  - Card padding: 16px
  - Card margin: 8px vertical, 16px horizontal
  - Element spacing: 8-12px

## 📲 Testing

### Web Preview
Visit: `https://terabox-audio.preview.emergentagent.com`

### Mobile Testing (Expo Go)
1. Install Expo Go on your device
2. Scan the QR code from the terminal
3. Test all features on actual device

### Features to Test
- ✅ Search functionality
- ✅ Category filtering
- ✅ Favorite toggle and persistence
- ✅ TeraBox link opening
- ✅ Navigation between tabs
- ✅ Scroll performance
- ✅ Dark theme consistency

## 🔧 Maintenance

### Adding New Audiobooks
1. Open `/app/frontend/src/data/audiobooks.ts`
2. Add new object to `AUDIOBOOKS` array
3. Ensure unique `id` and valid `category`
4. Restart app

### Editing Existing Audiobooks
1. Find audiobook by `id` in the data file
2. Update any fields except `id` (changing ID breaks favorites)
3. Restart app

### Removing Audiobooks
1. Delete the audiobook object from array
2. Restart app
3. Note: Users who favorited it will see empty state

## 🚀 Future Enhancements

### Ready to Implement:
- **Google AdMob Ads:** Banner space is ready
  - Install: `expo install expo-ads-admob`
  - Replace AdBanner component with actual ads

- **Backend Integration:** Easy to add
  - Admin panel for managing audiobooks
  - Analytics and download tracking
  - User accounts and cloud sync

- **Advanced Features:**
  - Audio preview
  - Download progress tracking
  - Ratings and reviews
  - Share audiobooks with friends
  - Recently played history
  - Playlist creation

## 📱 App Configuration

Edit `/app/frontend/app.json` to customize:
- App name and slug
- Bundle identifiers
- App icon and splash screen
- Orientation and theme

## 🎯 No Storage of Audio Files

**Important:** This app does NOT store any audio files. It only stores:
- Audiobook metadata (title, author, description, category)
- TeraBox links (text URLs)
- User favorites (audiobook IDs only)

All audio files remain on TeraBox. The app simply provides a beautiful interface to organize and access your TeraBox audiobook links.

## 📄 License

All placeholder audiobook data is for demonstration only. Replace with your own TeraBox links and content.

## 🙋 Support

For issues with:
- **App Features:** Check this README and data guide
- **TeraBox Links:** Verify links work in browser first
- **Data Updates:** See AUDIOBOOK_DATA_GUIDE.md

---

**Built with ❤️ using React Native + Expo**
