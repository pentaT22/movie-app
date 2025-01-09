const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    //auth key (v3)
    apiKey: '0a39c0eba68765b17160b745d0266b45',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;