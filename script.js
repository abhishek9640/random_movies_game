const bollywoodMovies = [
    '3 Idiots', 'Dangal', 'Sholay', 'Kabhi Khushi Kabhie Gham', 'Lagaan',
    'Dilwale Dulhania Le Jayenge', 'Bajrangi Bhaijaan', 'Queen', 'Gully Boy',
    'Zindagi Na Milegi Dobara', 'PK', 'Baahubali: The Beginning', 'Chennai Express',
    'Barfi!', 'Taare Zameen Par', 'Jab We Met', 'Padmaavat', 'Andhadhun',
    'Badhaai Ho', 'Article 15', 'Raazi', 'Bajirao Mastani', 'Golmaal',
    'Munna Bhai M.B.B.S.', 'Mughal-e-Azam', 'Swades', 'Black', 'Veer-Zaara',
    'Gangaajal', 'My Name Is Khan', 'Rockstar', 'Kahaani', 'Stree', 'Haider',
    'Bhoothnath', 'Tanu Weds Manu', 'Manjhi: The Mountain Man', 'Khosla Ka Ghosla',
    'Bheja Fry', 'Delhi Belly', 'Vicky Donor', 'English Vinglish', 'Special 26',
    'Drishyam', 'A Wednesday', 'Paan Singh Tomar', 'Udaan', 'The Lunchbox',
    'Uri: The Surgical Strike', 'Sultan', 'Dhoom 3', 'Kal Ho Naa Ho', 'Deewaar',
    'Dil Chahta Hai', 'Hera Pheri', 'Don', 'Rang De Basanti', 'Gadar: Ek Prem Katha',
    'Jo Jeeta Wohi Sikandar', 'Dil Se', 'Yeh Jawaani Hai Deewani', 'Student of the Year',
    'Jodhaa Akbar', 'Don 2', 'Rock On!!', 'Airlift', 'Tamasha', 'Ae Dil Hai Mushkil',
    'Ra.One', 'Koi... Mil Gaya', 'Krrish', 'Chak De! India', 'Bhool Bhulaiyaa'
];

document.getElementById('select-movie-button').addEventListener('click', () => {
    const randomMovie = bollywoodMovies[Math.floor(Math.random() * bollywoodMovies.length)];
    document.getElementById('selected-movie').textContent = randomMovie;
});
