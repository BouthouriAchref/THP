import { Injectable } from '@angular/core';

export interface ICategory {
  id: number,
  name:string,
  image: string,
}

export interface IPlace {
  id: number,
  title:string,
  description:string,
  image:string,
  note: number,
  noteArray: any[],
  noteArray2: any[],
  longitude: number,
  latitude: number,
  
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getPlaces(){
    var places = [];

    var place1 : IPlace = {
      id: 1,
      title: "Tunis",
      description:"Tunis is the sprawling capital of Tunisia, a country in North Africa. It sits along Lake Tunis, just inland from the Mediterranean Sea’s Gulf of Tunis. It’s home to a centuries-old medina and the Bardo, an archaeology museum where celebrated Roman mosaics are displayed in a 15th-century palace complex. The parklike ruins of ancient Carthage sit in the city’s northern suburbs. ",
      image:"../../assets/Tunis.jpg",
      note:3,
      noteArray: [],
      noteArray2: [],
      longitude: 10.1815,
      latitude: 36.8065
    }
    var place2 : IPlace = {
      id: 2,
      title: "Bizerte",
      description:"Bizerte or Bizerta, the classical Hippo, is a town of Bizerte Governorate in Tunisia. It is the northernmost city in Africa, located 65 km north of the capital Tunis. It is one of the oldest known settlements in Tunisia, having been founded by settlers from the Phoenician port of Sidon around 1100 BC. ",
      image:"../../assets/Bizerte.jpg",
      note:2,
      noteArray: [],
      noteArray2: [],
      longitude: 9.8642,
      latitude: 37.2768
    }
    var place3 : IPlace = {
      id: 3,
      title: "Monastir",
      description:"Monastir, also called Mistīr, is a city on the central coast of Tunisia, in the Sahel area, some 20 kilometres south of Sousse and 162 kilometres south of Tunis. Traditionally a fishing port, Monastir is now a major tourist resort. Its population is about 93,306. It is the capital of Monastir Governorate",
      image:"../../assets/Monastir.jpg",
      note:3,
      noteArray: [],
      noteArray2: [],
      longitude: 10.8113,
      latitude: 35.7643
    }
    var place4 : IPlace = {
      id: 4,
      title: "Gabes",
      description:"Gabès, also spelled Cabès, Cabes, Kabes, Gabbs and Gaps, is the capital city of the Gabès Governorate in Tunisia. It is located on the coast of the Gulf of Gabès. With a population of 152,921, Gabès is the 6th largest Tunisian city.",
      image:"../../assets/Gabes.jpg",
      note:4,
      noteArray: [],
      noteArray2: [],
      longitude: 10.0975,
      latitude: 33.8881
    }
    var place5 : IPlace = {
      id: 5,
      title: "Béja",
      description:"Béja is a city in Tunisia. It is the capital of the Béja Governorate. It is located 105 kilometers from Tunis, between the Medjerdah River and the Mediterranean, against the foothills of the Khroumire, ...",
      image:"../../assets/Béja.jpg",
      note:4,
      noteArray: [],
      noteArray2: [],
      longitude: 9.1844,
      latitude: 36.7333
    }
    var place6 : IPlace = {
      id: 6,
      title: "Djerba",
      description:"Djerba, an island off the coast of Tunisia, is known for Mediterranean beaches and whitewashed desert towns influenced by Berber, Arab, Jewish and African cultures. Houmt Souk is the main city, known for its handicraft markets, fishing port and 16th-century fortress, Borj el Kebir. To the south is El Ghriba synagogue, a pilgrimage site for North African Jews.",
      image:"../../assets/Djerba.jpg",
      note:5,
      noteArray: [],
      noteArray2: [],
      longitude: 10.8451,
      latitude: 33.8076
    }
    places.push(place1, place2, place3, place4, place5, place6);

    return places;
    
  }

  


  
  
  getCategories(){
    var categories = [];

    var cat1 : ICategory = {
      id: 1,
      name:'Beach',
      image: '../../assets/beach.jpg'
    }
    var cat2 : ICategory = {
      id: 2,
      name:'Forest',
      image: '../../assets/forest.jpg'
    }
    var cat3 : ICategory = {
      id: 3,
      name:'Mountain',
      image: '../../assets/mountain.jpg'
    }
    var cat4 : ICategory = {
      id: 4,
      name:'Lake',
      image: '../../assets/lake.jpg'
    }

    categories.push(cat1, cat2, cat3, cat4);

    return categories;
  }
}
