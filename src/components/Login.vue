
<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 class="font-thin">CourseMate</h1>
      <h2 class="mt-10 text-center text-2xl  leading-9 tracking-tight text-gray-900">Log in!</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="login" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900 flex">Email</label>
          <div class="mt-1">
            <input id="email" name="Email" v-model="email" type="email" autocomplete="email"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          

        </div>

        <div>
          <div class="flex items-center">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input id="password" name="Password" v-model="password" type="password" autocomplete="current-password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Log in</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <a href="/register" class="font-semibold leading-6 text-orange-500 hover:text-orange-500">Create an account!</a>
      </p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {


methods: {

async login(event) {
event.preventDefault(); 
// Zatrzymuje domyślne zachowanie formularza

try {
  const response = await axios.post('https://localhost:44389/login/authenticate', {
    email: this.email,
    password: this.password,
  });
  

  if(response.status == 200) {
     // Pobierz token z odpowiedzi
     const token = response.data.token;
    console.log(token)
// Zapisz token w lokalnym magazynie
    localStorage.setItem('token', token);
    sessionStorage.setItem('userId', response.data["userId"]);
    
    window.location.href='/dashboard'
    console.log('Logowanie powiodło się');
  }
} catch (error) {
  // Obsłuż błąd, jeśli wystąpił problem z żądaniem
  console.error(error);
  console.error('Wystąpił błąd:', error);
}
}
}
}

</script>