# Spotify-track-info

Node spotify track info that generates a `currentSong.txt` that can be used on OBS to show the current spotify song.

It can also serve the content to be used on browser source. Just point the location to http://localhost:9090

# Install

```
npm install
```

# Execute

```
npm start
```

# Execute a server instead

```
npm run server
```

Point to `http://localhost:9090/`

Customize the port by setting a env variable i.e. `PORT=7070 npm run server`

## Template

You can change the `template.txt`

## Template variables

The template suports the following variables:

- `{{artist}}`
- `{{album}}`
- `{{disc_number}}`
- `{{duration}}`
- `{{played_count}}`
- `{{track_number}}`
- `{{popularity}}`
- `{{id}}`
- `{{name}}`
- `{{album_artist}}`
- `{{artwork_url}}`
- `{{spotify_url}}`
