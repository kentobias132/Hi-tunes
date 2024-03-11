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
    const searchData = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${term}`,
      { method: "GET", headers: { Authorization: `Bearer ${accessToken}` } }
    );

    const data = await searchData.json();
  },
};

export default Spotify;
