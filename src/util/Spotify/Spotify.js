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

      if (response.ok) {
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
      } else {
        console.log("Response error");
      }
    } catch (error) {
      console.log(error);
    }

    const data = await searchData.json();
  },
};

export default Spotify;
