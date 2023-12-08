import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://ai-textraction.p.rapidapi.com/textraction',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '8bd1f9b0eemshb1d349d8c94e815p1e7e2djsn307d1ff6cad3',
    'X-RapidAPI-Host': 'ai-textraction.p.rapidapi.com'
  },
  data: {
    text: 'John Doe is a software engineer with 5 years of experience. He specializes in web development and has expertise in multiple programming languages such as JavaScript, Python, and HTML. John has worked on various projects, including e-commerce websites and mobile applications. In his free time, John enjoys playing the guitar, hiking, and reading books.',
    entities: [
      {
        var_name: 'first_name',
        type: 'string',
        description: 'first name of the person'
      },
      {
        var_name: 'last_name',
        type: 'string',
        description: 'last name of the person'
      },
      {
        var_name: 'years_of_experience',
        type: 'integer',
        description: 'years of experience'
      },
      {
        var_name: 'programming_languages',
        type: 'array[string]',
        description: 'programming languages experienced with'
      },
      {
        var_name: 'hobbies',
        type: 'array[string]',
        description: 'hobbies'
      }
    ]
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}