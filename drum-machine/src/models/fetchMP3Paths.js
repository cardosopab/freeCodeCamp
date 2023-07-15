export default function fetchMP3Paths() {
    const mp3Paths = require.context('../assets', true, /\.mp3$/);
    return mp3Paths.keys().map((key) => mp3Paths(key));
}