import axios from 'axios';

const searchImages= async(term) =>{
 const response=  await axios.get("https://api.unsplash.com/search/photos",{
headers:{
 Authorization:'Client-ID oQ4w9Vk4crHuphwuNW9XCbIjZcw5yn_Aucs8kcOuja4',
},
params: {
    query:term,

}
    });
    console.log(response );
    return response.data.results;
};
export default searchImages;