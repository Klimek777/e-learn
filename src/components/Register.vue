
<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 class="font-thin">CourseMate</h1>
        <h2 class="mt-10 text-center text-2xl  leading-9 tracking-tight text-gray-900">Register!</h2>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form  @submit.prevent="register" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900 flex">Name</label>
            <div class="mt-1">
              <input id="name" name="Name" type="name" v-model="name" autocomplete="name"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            
  
          </div>
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900 flex">Email</label>
            <div class="mt-1">
              <input id="email" name="Email" type="email" v-model="email" autocomplete="email"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            
  
          </div>
  
          <div>
            <div class="flex items-center">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            </div>
            <div class="mt-2">
              <input id="password" name="Password" type="password" v-model="password" autocomplete="current-password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Register</button>
          </div>
        </form>
  
        <p class="mt-10 text-center text-sm text-gray-500">
          Already a member?
          {{ ' ' }}
          <a href="/login" class="font-semibold leading-6 text-orange-500 hover:text-orange-500">Log in!</a>
        </p>
      </div>
    </div>
  </template>

  <script>
  import axios from 'axios'
  export default {

    data() {
    return {
      name:'',
      email: '',
      password: '',
    };
  },
  

  methods: {

  async register(event) {
    event.preventDefault(); 
// Zatrzymuje domyślne zachowanie formularza
    
    try {
      const response = await axios.post('https://localhost:44389/register/create', {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      
      console.log(response.data); // Możesz np. wyświetlić odpowiedź w konsoli

      if(response.status == 200) {
        window.location.href='/login'
      }
    } catch (error) {
      // Obsłuż błąd, jeśli wystąpił problem z żądaniem
      console.error(error);
    }
  }
}
  }

</script>