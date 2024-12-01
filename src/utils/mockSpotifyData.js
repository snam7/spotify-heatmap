export const generateMockSpotifyData = () => {
  const songs = [
    // English Songs
    { name: 'Blinding Lights', artist: 'The Weeknd' },
    { name: 'Levitating', artist: 'Dua Lipa' },
    { name: 'Save Your Tears', artist: 'The Weeknd' },
    { name: 'Bad Guy', artist: 'Billie Eilish' },
    { name: 'Shape of You', artist: 'Ed Sheeran' },
    { name: 'drivers license', artist: 'Olivia Rodrigo' },
    { name: 'Stay', artist: 'The Kid LAROI, Justin Bieber' },
    { name: 'Peaches', artist: 'Justin Bieber' },
    { name: 'Watermelon Sugar', artist: 'Harry Styles' },
    { name: 'Happier Than Ever', artist: 'Billie Eilish' },

    // Hindi Songs
    { name: 'Kesariya', artist: 'Arijit Singh' },
    { name: 'Tum Hi Ho', artist: 'Arijit Singh' },
    { name: 'Channa Mereya', artist: 'Arijit Singh' },
    { name: 'Tera Ban Jaunga', artist: 'Arijit Singh' },
    { name: 'Apna Bana Le', artist: 'Arijit Singh' },
    { name: 'Riha', artist: 'Anuv Jain' },
    { name: 'Baarishein', artist: 'Anuv Jain' },
    { name: 'Alag Aasmaan', artist: 'Anuv Jain' },
    { name: 'Gul', artist: 'Anuv Jain' },
    { name: 'Mishri', artist: 'Anuv Jain' },
    { name: 'Bekhayali', artist: 'Sachet Tandon' },
    { name: 'Dil Dhadakne Do', artist: 'Farhan Akhtar, Priyanka Chopra' },
    { name: 'Tera Yaar Hoon Main', artist: 'Arijit Singh' },
    { name: 'Phir Kabhi', artist: 'Arijit Singh' },
    { name: 'Jeene Ke Hain Chaar Din', artist: 'Salman Khan' },
    { name: 'Zara Sa', artist: 'KK' },
    { name: 'Ae Mere Humsafar', artist: 'Mithoon, Tulsi Kumar' },
    { name: 'Tum Se Hi', artist: 'Mohit Chauhan' },
    { name: 'Kal Ho Naa Ho', artist: 'Sonu Nigam' },
    { name: 'Tujh Mein Rab Dikhta Hai', artist: 'Roop Kumar Rathod' },
  ];

  const mockData = [];
  const startDate = new Date('2022-01-01');
  const endDate = new Date('2024-11-30'); // Today's date or your desired end date

  while (startDate <= endDate) {
    const month = `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}`;

    // Select a random song for the top track
    const randomSong = songs[Math.floor(Math.random() * songs.length)];

    const mockEntry = {
      month,
      count: Math.floor(Math.random() * 200), // Random number of songs played (0-200)
      totalMinutes: Math.floor(Math.random() * 600), // Random listening time (0-600 minutes)
      topTrack: `${randomSong.name} - ${randomSong.artist}`, // Use real song names and artists
    };

    if (!mockData.find((entry) => entry.month === month)) {
      mockData.push(mockEntry);
    }

    startDate.setMonth(startDate.getMonth() + 1); // Move to the next month
  }

  return mockData;
};
