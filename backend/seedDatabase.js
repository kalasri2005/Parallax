const mongoose = require("mongoose");
const College = require("./models/College");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

const sampleData = [
  {
    city: "Mumbai",
    colleges: [
      {
        name: "IIT Bombay",
        link: "https://www.iitb.ac.in/",
        image: "https://etimg.etb2bimg.com/photo/103045886.cms",
      },
      {
        name: "VJTI Mumbai",
        link: "https://vjti.ac.in/",
        image: "https://images.shiksha.com/mediadata/images/1631590710phpnKQh0W_1280x960.jpg",
      },
      {
        name: "SPIT Mumbai",
        link: "https://www.spit.ac.in/",
        image: "https://img.collegepravesh.com/2018/11/SPIT-Mumbai.jpg",
      },
      {
        name: "DJ Sanghvi Mumbai",
        link: "https://www.djsce.ac.in/",
        image: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-02/26/full/20210226160425.jpg",
      },
    ],
  },
  {
    city: "Delhi",
    colleges: [
      {
        name: "IIT Delhi",
        link: "https://home.iitd.ac.in/",
        image: "https://www.sikshapedia.com/public/data/colleges/iit-delhi-new-delhi-delhi-ncr/iit-delhi-new-delhi-delhi-ncr-banner.webp",
      },
      {
        name: "NSIT Delhi",
        link: "http://www.nsit.ac.in/",
        image: "https://content3.jdmagicbox.com/v2/comp/delhi/40/011p66440/catalogue/netaji-subhash-institute-of-technology-dwarka-sector-3-delhi-engineering-colleges-1ojme7f.jpg",
      },
      {
        name: "DTU Delhi",
        link: "http://www.dtu.ac.in/",
        image: "https://images.shiksha.com/mediadata/images/1632465297phpyUzixv.jpeg",
      },
      {
        name: "IIIT Delhi",
        link: "https://www.iiitd.ac.in/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWRRR_XwmdVawDqtiJpN9teiMAKNJ4epoY5g&s",
      },
    ],
  },
  {
    city: "Hyderabad",
    colleges: [
      {
        name: "IIT Hyderabad",
        link: "https://www.iith.ac.in/",
        image: "https://ugcounselor-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/03/11172302/IIT-Hyderabad.jpg",
      },
      {
        name: "BITS Hyderabad",
        link: "https://www.bits-pilani.ac.in/",
        image: "https://www.bits-pilani.ac.in/wp-content/uploads/Home-image-Library.jpeg",
      },
      {
        name: "JNTU Hyderabad",
        link: "https://www.jntuh.ac.in/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfYN6HVQijPZb6meFTtVHxvzMGOvrE3ovFw&s",
      },
      {
        name: "IIIT Hyderabad",
        link: "https://www.iiit.ac.in/",
        image: "https://img.collegepravesh.com/2014/02/IIIT-Hyderbad.jpg",
      },
    ],
  },
  {
    city: "Kolkata",
    colleges: [
      {
        name: "IIT Kharagpur",
        link: "http://www.iitkgp.ac.in/",
        image: "https://images.shiksha.com/mediadata/images/1631607351phpvnRUQz.jpeg",
      },
      {
        name: "Jadavpur University",
        link: "http://www.jaduniv.edu.in/",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Jadavpur_University_MG_Square.jpg",
      },
      {
        name: "NIT Durgapur,Kolkata",
        link: "https://www.nitrkl.ac.in/",
        image: "https://img.collegepravesh.com/2014/05/NIT-Durgapur.jpg",
      },
      {
        name: "IIEST Shibpur,Kolkata",
        link: "https://www.iiests.ac.in/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOVA6jfAO75uL5HlOluVE5Zg-oBhWyZzNew&s",
      },
    ],
  },
  {
    city: "Chennai",
    colleges: [
      {
        name: "IIT Madras",
        link: "https://www.iitm.ac.in/",
        image: "https://images.shiksha.com/mediadata/images/1617870006phpWlnQXT.jpeg",
      },
      {
        name: "Anna University",
        link: "https://www.annauniv.edu/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-Fn4AV06F-UTlTS9hv5jPvYv5dmUO1JvKQ&s",
      },
      {
        name: "SRM University",
        link: "https://www.srmist.edu.in/",
        image: "https://images.shiksha.com/mediadata/images/articles/1632110005phpb6pZ7U.jpeg",
      },
      {
        name: "VIT Vellore",
        link: "https://www.vit.ac.in/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8dlOpYm5O9gVfr-rLDiUMWv25IxSNQvJxYA&s",
      },
    ],
  },
  {
    city: "Bangalore",
    colleges: [
      {
        name: "IISc Bangalore",
        link: "https://www.iisc.ac.in/",
        image: "https://iisc.ac.in/wp-content/uploads/2020/05/Main_Building.png",
      },
      {
        name: "RV College of Engineering",
        link: "https://www.rvce.edu.in/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNkQ9k5bTSZyN40q0sOw4B2NzhUg8MFg53VQ&s",
      },
      {
        name: "MSRIT",
        link: "https://www.msrit.edu/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHvC1Xw52QG86VXX7hA2dy03UiukSXaj8R1g&s",
      },
      {
        name: "NMIT",
        link: "https://www.nmit.ac.in/",
        image: "https://www.mbacollegesbangalore.in/wp-content/uploads/2017/08/Nitte-Meenakshi-Institute-of-Technology-1.jpg",
      },
    ],
  },
];

const seedDatabase = async () => {
  try {
    await College.deleteMany({});
    await College.insertMany(sampleData);
    console.log("Database seeded successfully!");
    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
