export const donateData = {
    title: "Give Hope",
    subtitle: "Your generosity fuels the mission. Help us reach the nations with the light of the Gospel.",
    // Imagen: Manos dando, o algo simbólico y cálido
    headerImage: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop",

    intro: {
        title: "Why donate to Lampei?",
        description: "Your giving helps support the work of Lampei International Ministries as we seek to reach the world with the light of the Gospel through church planting, leadership development, and education.",
    },

    // Desglosamos el texto largo en 3 puntos de impacto visual
    impactAreas: [
        {
            title: "Church Planting",
            description: "Strengthen our existing church plants while providing opportunities to establish new churches and raise up new leaders.",
            icon: "church"
        },
        {
            title: "Christian Schools",
            description: "Support our schools to provide opportunities to educate more students with a strong Biblical worldview.",
            icon: "school"
        },
        {
            title: "Missionary Support",
            description: "Your gifts directly support our missionaries who are actively laboring on the field for the Gospel.",
            icon: "users"
        }
    ],

    methods: {
        online: {
            title: "Give Online",
            description: "The fastest way to support. Make a one-time gift or set up a recurring donation to provide consistent support.",
            buttonText: "Give Now",
            link: "#", // Aquí pondrás tu link de Stripe/PayPal después
            legal: "LIM is a 501(c)3 non-profit organization."
        },
        mail: {
            title: "Give by Mail",
            description: "Prefer to write a check? You can mail your donation directly to our headquarters.",
            address: [
                "Lampei International Ministries",
                "105 Schoolhouse Rd.",
                "Pownal, VT 05261"
            ],
            legal: "LIM is a 501(c)3 non-profit organization."
        }
    }
};
