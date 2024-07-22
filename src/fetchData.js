const productos = [
    {
        id: 1,
        nombre: "FIGURA KAKASHI",
        hash: "Naruto",
        marca: "Bandai",
        altura: "13cm",
        estado: "Disponible",
        anio: 2021,
        imagen: "https://www.banpresto.es/wp-content/uploads/2024/05/logo_89705_2697442_1-jpg.webp",
        precio: "$32.00",
        descripcion: "Banpresto presenta la figura de Kakashi Hatake del popular anime “Naruto Shippuden – Colosseum”. Esta figura está hecha en PVC mide unos 13 cm de alto e incluye una base soporte especial para exposición. \nBanpresto es uno de los mayores fabricantes Japoneses de Figuras a nivel mundial. Perteneciente al grupo Bandai Spirits, esta empresa ofrece una calidad precio única. Actualmente dispone de múltiples líneas diferentes para que todos los fans puedan tener en su colección una figura que se adapte a su manera de disfrutar del mundo de las figuras."
    },
    {
        id: 2,
        nombre: "FIGURA SASUKE",
        hash: "Naruto",
        marca: "Banpresto",
        altura: "9cm",
        estado: "Disponible",
        anio: 2024,
        imagen: "https://www.banpresto.es/wp-content/uploads/2023/12/logo_89267_2724226.jpg.avif",
        precio: "$34,90",
        descripcion: "Banpresto presenta la figura de Sasuke Uchiha del popular manga y anime “Naruto Shippuden – Panel Spectacle Special”. Esta figura está hecha en PVC mide unos 9 cm de alto e incluye una base soporte especial para exposición. \nBanpresto es uno de los mayores fabricantes Japoneses de Figuras a nivel mundial. Perteneciente al grupo Bandai Spirits, esta empresa ofrece una calidad precio única. Actualmente dispone de múltiples líneas diferentes para que todos los fans puedan tener en su colección una figura que se adapte a su manera de disfrutar del mundo de las figuras."
    },
    {
        id: 3,
        nombre: "FIGURA HYUGA NEJI",
        hash: "Naruto",
        marca: "Megahouse",
        altura: "10cm",
        estado: "A Pedido",
        anio: 2022,
        imagen: "https://www.banpresto.es/wp-content/uploads/2023/12/logo_89263_2690116_1.jpg.avif",
        precio: "$11.63",
        descripcion: "¡Añade la figura de Hyuga Neji a tu colección de figuras de Naruto! \nBanpresto presenta la figura de Hyuga Neji del popular manga y anime “Naruto – Memorable Saga”. Esta figura está hecha en PVC mide unos 10 cm de alto e incluye una base soporte especial para exposición"
    },
    {
        id: 4,
        nombre: "FIGURA NARUTO UZUMAKI",
        hash: "Naruto",
        marca: "Megahouse",
        altura: "14cm",
        estado: "Disponible",
        anio: 2022,
        imagen: "https://www.banpresto.es/wp-content/uploads/2024/07/bp89058_frente.jpg.webp",
        precio: "$11.63",
        descripcion: "Banpresto presenta la figura de Naruto Uzumaki V del popular manga y anime “Naruto Shippuden – Vibration Stars”. Esta figura está hecha en PVC mide unos 14 cm de alto e incluye una base soporte especial para exposición. \nBanpresto es uno de los mayores fabricantes Japoneses de Figuras a nivel mundial. Perteneciente al grupo Bandai Spirits, esta empresa ofrece una calidad precio única. Actualmente dispone de múltiples líneas diferentes para que todos los fans puedan tener en su colección una figura que se adapte a su manera de disfrutar del mundo de las figuras."
    },
    {
        id: 5,
        nombre: "FIGURA KAIDO THE BEAST",
        hash: "One Piece",
        marca: "Bandai",
        altura: "40cm",
        estado: "A Pedido",
        anio: 2022,
        imagen: "https://www.banpresto.es/wp-content/uploads/2024/05/716478-1-jpg.webp",
        precio: "$317.00",
        descripcion: "La marca de figuras “MAXIMUM” de la serie POP ONE PIECE es la más intrincada y detallada de la serie, y por fin el Comandante Supremo de los Piratas de las Bestias y uno de los Cuatro Emperadores: ¡Kaido se une a la colección! \nSe dice que es la criatura más fuerte del mundo, Kaido de las Bestias ha sido esculpida por MAS con pintura de Kenji Ando, ​​¡una pareja que tiene mucha experiencia creando figuras de los personajes más fuertes que existen!"
    },
    {
        id: 6,
        nombre: "FIGURA BOA HANCOCK",
        hash: "One Piece",
        marca: "Banpresto",
        altura: "20cm",
        estado: "Disponible",
        anio: 2024,
        imagen: "https://www.banpresto.es/wp-content/uploads/2024/07/logo_67058_1.jpg.webp",
        precio: "$24.33",
        descripcion: "¡Añade la figura de la línea Ichibansho de Boa Hancock a tu colección de figuras de One Piece! \nBanpresto nos presenta la encantadora figura de Boa Hancock de la colección Ichibansho One Piece (Memory Of Heroines). Figura de 20 cm de altura cuya principal característica es la especial recreación de los detalles del traje de Boa Hancock y de su pose. Además, al ser una figura de la colección Ichibansho, la hace muy coleccionable e ideal para ponerla al lado del resto de personajes que integran esta colección."
    },
    {
        id: 7,
        nombre: "KING BEASTS PIRATES",
        hash: "One Piece",
        marca: "Megahouse",
        altura: "30cm",
        estado: "A Pedido",
        anio: 2022,
        imagen: "https://www.banpresto.es/wp-content/uploads/2024/06/MH716485-1-jpg.webp",
        precio: "$209,55",
        descripcion: "Para celebrar el 20 aniversario de la serie POP, la marca “MAXIMUM” presenta una imponente figura del “Rey la Conflagración” de los Piratas de las Bestias. \nEsta figura captura la lealtad de King hacia Kaido y muestra sus rasgos lunares: alas negras, cabello blanco, piel oscura y llamas en su espalda. La figura incluye piezas intercambiables para una apariencia más dañada que recuerda a su batalla con Zoro."
    },
    {
        id: 8,
        nombre: "MONKEY D. LUFFY GEAR5",
        hash: "One Piece",
        marca: "Bandai",
        altura: "13cm",
        estado: "Disponible",
        anio: 2021,
        imagen: "https://www.banpresto.es/wp-content/uploads/2024/04/MH716430.png.avif",
        precio: "$73.00",
        descripcion: "Celebrando su vigésimo aniversario, la serie POP trae una obra maestra completamente nueva a la marca “MAXIMUM”, que revela la nueva forma de Luffy en el clímax del arco de Wano Country: ¡GEAR5! \nEsta figura da vida a la forma más fuerte de Luffy hasta el momento con una escultura dinámica y una pintura impresionante, mostrando su sonrisa que libera a las personas de sus penas, el divino color blanco puro de su nueva forma y sus extremidades que pueden moverse libremente sin articulaciones."
    },
    {
        id: 9,
        nombre: "FIGURA MAJIN BUU DRAGON",
        hash: "Dragon Ball Z",
        marca: "Banpresto",
        altura: "14cm",
        estado: "A Pedido",
        anio: 2024,
        imagen: "https://www.banpresto.es/wp-content/uploads/2024/04/logo-89641-2727648-1-jpg.webp",
        precio: "$11,90",
        descripcion: "¡Añade la figura de Majin Buu a tu colección de figuras de Dragon Ball! \nBanpresto presenta la figura de Majin Buu del popular manga y anime “Dragon Ball Z – Gxmateria”. Esta figura está hecha en PVC mide unos 14 cm de alto e incluye una base soporte especial para exposición."
    },
    {
        id: 10,
        nombre: "FIGURA RE: BIRTH DRAGON BALL Z",
        hash: "Dragon Ball Z",
        marca: "Megahouse",
        altura: "13cm",
        estado: "Disponible",
        anio: 2022,
        imagen: "https://www.banpresto.es/wp-content/uploads/2024/05/MH517816-jpg.webp",
        precio: "$20.00",
        descripcion: "Descubre la evolución de Goku con la Figura Puchirama DX Dracap Re Birth de Dragon Ball Z, una innovación de Megahouse. \nEsta figura única de 13 cm combina tres etapas clave de Goku: como niño, adulto y en su forma Super Saiyan, capturando su crecimiento y poder."
    },
    {
        id: 11,
        nombre: "FIGURA TRUNKS DRAGON BALL Z",
        hash: "Dragon Ball Z",
        marca: "Bandai",
        altura: "23cm",
        estado: "A Pedido",
        anio: 2021,
        imagen: "https://www.banpresto.es/wp-content/uploads/2023/11/65930_1.jpg.avif",
        precio: "$20.55",
        descripcion: "¡Añade la figura de la línea Ichibansho de Trunks a tu colección de figuras de Dragon Ball! \nBanpresto nos presenta la encantadora figura de Trunks de la colección Ichibansho Dragon Ball Z (Dueling To The Future). Figura de 23 cm de altura cuya principal característica es la especial recreación de los detalles del traje de Trunks y de su pose. Además, al ser una figura de la colección Ichibansho, la hace muy coleccionable e ideal para ponerla al lado del resto de personajes que integran esta colección."
    },
    {
        id: 12,
        nombre: "FIGURA GOHAN SS2",
        hash: "Dragon Ball Z",
        marca: "Banpresto",
        altura: "12cm",
        estado: "A Pedido",
        anio: 2024,
        imagen: "https://www.banpresto.es/wp-content/uploads/2024/04/bp88897_frente-2048x2048.webp",
        precio: "$29.91",
        descripcion: "¡Añade la figura de Gohan SS2 a tu colección de figuras de Dragon Ball! \nBanpresto presenta la figura de Gohan SS2 del popular manga y anime “Dragon Ball Z – History Box Vol.10”. Esta figura está hecha en PVC mide unos 12 cm de alto e incluye una base soporte especial para exposición."
    }
]

export default function fetchData (){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(productos);
        }, 3000)
    })
}