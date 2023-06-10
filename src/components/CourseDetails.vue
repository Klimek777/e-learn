<template>
    <div class="bg-white py-24 sm:py-32 flex justify-center items-center">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl">{{ courseTitle }}</h2>
        </div>
    
        <div class="mb-4 mt-4 px-2 w-full">
          <p id="courseDescription" class="text-lg">{{ courseDescription }}</p>
        </div>
        <div v-for="(module, index) in modules" :key="index" class="mb-8 mt-20">
          <h3 class="text-2xl font-bold mb-2">Module {{ index + 1 }}</h3>
          <div>
            <h4 class="text-xl font-medium mb-1 text-orange-500">{{ module.title }}</h4>
            <p class="text-lg"></p>
          </div>
          <div class="mt-4">
            <p class="text-lg">{{ module.content }}</p>
          </div>
          <div class="mt-4">
            <h4 class="text-xl font-medium mb-1">File:</h4>
            <p class="text-lg">{{ module.file }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        courseTitle: 'Level up your negotiation skills!',
        courseDescription: 'This course is here to help you level up your negotation skills. You can se several ways to use negotiation skills in your everyday life. ',
        modules: [
          {
            title: 'Master the art of negotiation and achieve win-win outcomes."',
            content: "In this module, you will learn the fundamental principles of negotiation and understand the importance of effective communication in achieving successful outcomes. We will cover the following topics:- Setting objectives: Understand how to set clear and achievable goals for your negotiation.\n- Identifying interests: Learn how to identify the underlying interests of all parties involved to create mutually beneficial solutions.\n- Creating value: Discover techniques for expanding the pie and finding creative solutions that satisfy everyone's needs.\n\nBy the end of this module, you will have a solid foundation in negotiation skills.",
            file: 'Module 1 File',
          },
          {
            title: 'Module 2 Title',
            content: 'Module 2 Content',
            file: 'Module 2 File',
          },
          // Add more modules as needed
        ],
      };
    },
  };
  </script>
  