interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "John",
        year: 1983
    }  }
// destructuracion para no ingresar a la propiedad por medio del details.author se hace con las {}
const {
    song: songTitle,
    songDuration: duration,
    details :{author}
}= audioPlayer;

console.log(author)


// destructuracion de arreglos se hace con []

const[p1,p2,p3]: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.error('Personaje 1:'+ p1)


//si Trucks no existe en el arreglo podemos agregarlo pero tenemos que respetar el orden de la firma

const[,,trunks = 'notfound']: string[] = ['Goku', 'Vegeta'];

console.error('Personaje 1:'+ p3)
