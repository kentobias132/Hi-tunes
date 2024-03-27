# Hi Tunes

HiTunes is a web application that allows users to search for songs on Spotify and create custom playlists from the search results. Users can then add these playlists to their Spotify accounts seamlessly.

## Features

- **Search:** Users can search for songs by typing the song name in the search field. The app retrieves songs from the Spotify API based on the user's input.

- **Custom Playlist:** Users can create custom playlists by adding songs from the search results to their playlist.

- **Save to Spotify:** Users can add their custom playlists to their Spotify accounts with a single click.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Spotify API: Used to search for songs and manage playlists.
- Tailwind: For structuring and styling the user interface.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/kentobias132/Hi-tunes.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Spotify API credentials:

   - Obtain a client ID from the Spotify Developer Dashboard.
   - Update the `clientID` variable in `Spotify.js` with your client ID.
   - Add `http://localhost:3000` as a redirect URL in your Spotify Developer Dashboard.

4. Run the application:

   ```bash
   npm start
   ```

## Usage

1. Open the application in your browser.

2. Log in to your Spotify account if prompted.

3. Enter a song name in the search field and click search.

4. Browse through the search results and click the "Add to Playlist" button to add a song to your custom playlist.

5. Enter a name for your playlist in the designated field.

6. Click the "Save Playlist" button to add your custom playlist to your Spotify account.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -am 'Add some feature'
   ```

4. Push to your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request with a detailed description of your changes.




