// src/data/music.ts

export interface MusicVideo {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
  }
  
  export interface FocusArea {
    title: string;
    description: string;
    icon: 'music' | 'mic-2' | 'users';
  }
  
  export interface MusicData {
    title: string;
    subtitle: string;
    headerImage: string;
    intro: {
      title: string;
      content: string[];
    };
    focusAreas: FocusArea[];
    videos: MusicVideo[];
  }
  
  export const musicData: MusicData = {
    title: "Lampei Music",
    subtitle: "Using the universal language of music to worship God and reach the nations.",
    // Imagen de alta calidad: Un concierto o equipo de adoración
    headerImage: "https://images.unsplash.com/photo-1514525253361-bee8718a7439?q=80&w=2073&auto=format&fit=crop",
    
    intro: {
      title: "Worship & Evangelism",
      content: [
        "At Lampei, music is more than just a performance. We believe that music is a gift from God intended for His glory and for the furtherance of the Gospel.",
        "Through our local church worship teams and evangelistic concerts, we strive for musical excellence that points people to the beauty of Christ and the message of hope found in Him."
      ]
      
    },
  
    focusAreas: [
      {
        title: "Local Church Worship",
        description: "Equipping our churches in Morelia and Chile with biblical, high-quality music that leads the congregation in true worship and spiritual growth.",
        icon: "music"
      },
      {
        title: "Evangelistic Concerts",
        description: "Taking the Gospel to public squares, parks, and schools through professional concerts that open doors for the message of Jesus.",
        icon: "mic-2"
      },
      {
        title: "Training & Growth",
        description: "Developing musicians who are not only skilled in their instruments but are also committed disciples with a servant's heart.",
        icon: "users"
      }
    ],
  
    // Sección de los dos videos destacados del ministerio
    videos: [
      {
        id: "PhdfwdLlsT8", // Sustituye por el ID real del video de Lampei
        title: "Lampei Worship Live",
        description: "Experience a night of worship with our team in Morelia, Mexico.",
        thumbnail: "https://images.unsplash.com/photo-1585464233364-285d13ef0433?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: "7JnODPfsjVs", // Sustituye por el ID real del video de Lampei
        title: "Music & Missions",
        description: "See how we use music as a tool to plant churches and reach new communities.",
        thumbnail: "https://images.unsplash.com/photo-1585464233364-285d13ef0433?q=80&w=800&auto=format&fit=crop"
      }
    ]
  };