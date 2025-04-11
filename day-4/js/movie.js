let data = [
    {
      "movieName": "The Shawshank Redemption",
      "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      "rating": 4.8,
      "bestScenes": [
        {
          "title": "Andy Dufresne escapes from prison",
          "duration": "15 mins"
        },
        {
          "title": "Brooks was here",
          "duration": "10 mins"
        }
      ]
    },
    {
      "movieName": "The Godfather",
      "actors": ["Marlon Brando", "Al Pacino", "James Caan"],
      "rating": 4.9,
      "bestScenes": [
        {
          "title": "Horse head in bed",
          "duration": "5 mins"
        },
        {
          "title": "Cannoli scene",
          "duration": "3 mins"
        }
      ]
    },
    {
      "movieName": "The Dark Knight",
      "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      "rating": 4.8,
      "bestScenes": [
        {
          "title": "Opening bank robbery",
          "duration": "12 mins"
        },
        {
          "title": "Why So Serious interrogation",
          "duration": "8 mins"
        }
      ]
    },
    {
      "movieName": "The Lord of the Rings: The Return of the King",
      "actors": ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
      "rating": 4.9,
      "bestScenes": [
        {
          "title": "Ride of the Rohirrim",
          "duration": "10 mins"
        },
        {
          "title": "Frodo destroys the One Ring",
          "duration": "7 mins"
        }
      ]
    }
  ]
  

function FindBestSceneDurationPerMovie(data){
    return data.map((movie)=>{
        let maxDuration=0;

        movie.bestScenes.forEach(scene=>{
            let durationInMinutes=parseInt(scene.duration);
            if(durationInMinutes > maxDuration){
               maxDuration=durationInMinutes;
            }
        });

        return {
            movieName: movie.movieName,
            longestSceneDuration: maxDuration
        };
    })
}

const result=FindBestSceneDurationPerMovie(data);
console.log(result);

function averageRating(data){
    let res= data.reduce((acc, curr)=>{
        acc + curr.rating}, 0)/data.length
    console.log("Average Rating:", res)
}
 
averageRating(data);

function  sortData(data){
    let res=data.sort((a,b)=> {
        if(b.rating !== a.rating) {
            return b.rating - a.rating;
        }
        if(b.movieName < a.movieName){
            return -1;
        }
        if(b.movieName > a.movieName){
            return 1;
        }
        return 0;
    })
    console.log(res);
}

sortData(data);


