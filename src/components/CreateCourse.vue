<template>
    <div class="bg-white py-24 sm:py-32 flex justify-center items-center">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create Course</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">Good knowledge of some niche? Share it with others and help them grow!</p>
        </div>
        <div class="mb-4 mt-4 px-2 w-full">
          <label class="block mb-1 text-lg" for="courseTitle">Course title:</label>
          <input id="courseTitle" class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none" type="text" autofocus placeholder="Full course name...." />
        </div>
        <div class="mb-4 mt-4 px-2 w-full">
          <label class="block mb-1 text-lg" for="courseDescription">Description:</label>
          <input id="courseDescription" class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none" type="text" autofocus placeholder="Short course description...." />
        </div>
        <div v-for="(module, index) in modules" :key="index" class="mb-4 mt-4 px-2 w-full">
          <h3 class="text-xl font-bold tracking-tight text-gray-900">Module {{ index + 1 }}</h3>
          <div class="mb-4 mt-2">
            <label class="block mb-1 text-lg" :for="'moduleTitle-' + index">Module title:</label>
            <input :id="'moduleTitle-' + index" class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none" type="text" v-model="module.title" placeholder="Module title...." />
          </div>
          <div class="mb-4 mt-2">
            <label class="block mb-1 text-lg" :for="'moduleContent-' + index">Content:</label>
            <textarea :id="'moduleContent-' + index" class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none" rows="5" v-model="module.content" placeholder="Module content...."></textarea>
          </div>
          <div class="mb-4 mt-2">
            <label class="block mb-1 text-lg" :for="'moduleFile-' + index">File:</label>
            <input :id="'moduleFile-' + index" class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none" type="file" v-on:change="module.file" />
          </div>
          <div class="mb-2">
            <button @click="removeModule(index)" class="bg-red-500 hover:bg-red-700 text-white font-light py-2 px-4 rounded">Remove Module</button>
          </div>
        </div>
        <div class="mb-4 mt-4 px-2 w-full">
          <button @click="addModule" class="bg-orange-500 hover:bg-orange-700 text-white font-light py-2 px-4 rounded">Add Module</button>
        </div>
        <div class="mb-4 mt-4 px-2 w-full">
          <button @click="submit" class="bg-green-500 hover:bg-green-700 text-white font-light py-2 px-4 rounded">Submit</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        modules: [
          {
            title: '',
            content: '',
            file: null,
          },
        ],
      };
    },
    methods: {
      addModule() {
        this.modules.push({
          title: '',
          content: '',
          file: null,
        });
      },
      removeModule(index) {
        this.modules.splice(index, 1);
      },
      submit() {
        // Perform submission logic with course title, description, and modules data
        // You can access them using `this.courseTitle`, `this.courseDescription`, and `this.modules`
      },
    },
  };
  </script>
  