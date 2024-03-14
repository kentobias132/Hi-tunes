let accessToken;
const clientID = "b5a746da8a224a479ae0cb549f22baaa";
const redirectUrl = "http://localhost:3000";

const Spotify = {
  getAccessToken() {
    if (accessToken) return accessToken;

    const tokenInUrl = window.location.href.match(/access_token=([^&]*)/);
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenInUrl && expiryTime) {
      // setting access token and expire time
      accessToken = tokenInUrl[1];
      const expiresIn = Number(expiryTime[1]);

      // setting the access token to expire at the value of expiration time
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);

      // clearing the Url after the access token has expired
      window.history.pushState("access_token", null, "/");

      return accessToken;
    }

    // Redirect user to log into their account if the first and second check is false

    const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
    window.location = redirect;
  },

  async search(term) {
    accessToken = Spotify.getAccessToken();

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?type=track&q=${term}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      if (!response.ok) {
        throw new Error("Search terms error");
      }
      const data = await response.json();
      console.log(data.tracks.items);
      const tracksDetailsResponse = data.tracks.items;

      const tracks = tracksDetailsResponse.map((track) => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
      }));

      return tracks;
    } catch (error) {
      console.log(error);
    }
  },

  // Save playlist to spotify app function
  async savePlaylist(name, trackURI) {
    // fetch access token and api url
    const token = Spotify.getAccessToken();
    const apiUrl = "https://api.spotify.com/v1";
    const header = { Authorization: `Bearer ${token}` };

    try {
      if (!name || !trackURI) {
        alert("Please enter a valid playlist name or add song to playlist");
        throw new Error(
          "Please enter a valid playlist name or add song to playlist"
        );
      }
      // get user profile details
      const userId = await getUserProfile();

      // create playlist
      const playlistId = await createPlaylist(name, userId);

      // add track to playlist
      const playlistTrack = await addTrackToPlaylist(playlistId, trackURI);

      return playlistTrack;
    } catch (error) {
      console.error(`Error in saving playlist to spotify: ${error}`);
    }

    async function getUserProfile() {
      let response = await fetch(`${apiUrl}/me`, { headers: header });
      if (!response.ok) {
        throw new Error("Fail to fetch user profile");
      }
      let user = await response.json();
      return user.id;
    }

    async function createPlaylist(name, userId) {
      let response = await fetch(`${apiUrl}/users/${userId}/playlists`, {
        method: "post",
        body: JSON.stringify({ name: name }),
        headers: header,
      });

      if (!response.ok) {
        throw new Error("Failed to create playlist");
      }

      let playlist = await response.json();
      console.log(playlist);
      return playlist.id;
    }

    async function addTrackToPlaylist(playlistId, trackURI) {
      const response = await fetch(`${apiUrl}/playlists/${playlistId}/tracks`, {
        method: "post",
        headers: header,
        body: JSON.stringify({ uris: trackURI }),
      });

      console.log(playlistId, trackURI);
      alert("Playlist added to your  Spotify account successfully");
      window.location.reload();
      if (!response.ok) {
        throw new Error("Fail to add track to playlist");
      }
      return response;
    }
  },
};

export default Spotify;
