////////OPDRACHT1
let jsonString = `{"firstname": "Judeska", "email": "judeska@example.com"}`;
let jsonObject = JSON.parse(jsonString);
console.log("id:", jsonObject.id);
console.log("firstname:", jsonObject.firstname);
console.log("lastname:", jsonObject.lastname);
/////////OPDRACHT1B
let jsonString2 = `{  "id": 1,
  "firstname":
 "John", 
  "lastname": "Doe",
    "email": "johndoe@example.com",
     "birthDate": "1973-01-22", 
     "phone": "(555) 555-1234",
      "website": "www.johndoe.com" }`;
let jsonObject2 = JSON.parse(jsonString2);
console.log("id:", jsonObject2.id);
console.log("firstname:", jsonObject2.firstname);
console.log("lastname:", jsonObject2.lastname); 
////////////////////OPDRACHT2
let jsonString3 = `{
    "id": 1,
    "slug": "lorem-ipsum",
    "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.",
    "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "status": "published",
    "category": "lorem",
    "publishedAt": "04/02/2023 13:25:21",
    "updatedAt": "14/03/2023 17:22:20",
    "userId": 1
  }`;
  let jsonObject3 = JSON.parse(jsonString3);
console.log("title:", jsonObject3.title);
console.log("content", jsonObject3.content);
console.log("publishedAt", jsonObject3.publishedAt);
//////OPDRACHT3
 let jsonString4 = `{
    "id": 4,
    "firstname": "Emily",
    "lastname": "Davis",
    "email": "emilydavis@example.com",
    "birthDate": "1974-11-30",
    "login": {
      "uuid": "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
      "username": "emilydavis",
      "password": "jsonplaceholder.org",
      "md5": "c1328472c5794a25723600f71c1b4586",
      "sha1": "35544a31cc19bd6520af116554873167117f4d94",
      "registered": "2022-07-10T11:21:20.033Z"
    },
    "address": {
      "street": "321 Maple Street",
      "suite": "Apt. 50",
      "city": "Anytown",
      "zipcode": "12345-6789",
      "geo": {
        "lat": "42.9012",
        "lng": "-71.5678"
      }
    },
    "phone": "(555) 555-3456",
    "website": "www.emilydavis.com",
    "company": {
      "name": "GHI Corporation",
      "catchPhrase": "Your success is our priority",
      "bs": "Consulting"
    }
  }`;
  let jsonObject4 = JSON.parse(jsonString4);
  console.log('email:',jsonObject4.email);
  console.log('username:',jsonObject4.login.username);
  console.log('city:',jsonObject4.address.city);
  console.log('compony name:',jsonObject4.company.name);
  ///OPDRACHT4
 let jsonString5 = `{
    "id": 11,
    "postId": 3,
    "userId": 2,
    "comment": "Cras convallis ipsum eget sapien hendrerit dignissim."
  }`;
  let jsonObject5 = JSON.parse(jsonString5);
  console.log('Object5',jsonObject5);
  /////OPDRACHT5
let jsonStringx = `[
    {
      "id": 1,
      "postId": 1,
      "userId": 1,
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "id": 2,
      "postId": 1,
      "userId": 1,
      "comment": "Nulla quis libero vel orci rutrum suscipit."
    },
    {
      "id": 3,
      "postId": 3,
      "userId": 2,
      "comment": "Cras ac elit sit amet mi placerat bibendum."
    }
  ]`;
  let jsonObjectx = JSON.parse(jsonStringx);
  console.log(jsonObjectx);
  for (let i = 0; i < jsonObjectx.length; i++) {
    const element = jsonObjectx[i];
    console.log("element=",element.comment);
  }
  
