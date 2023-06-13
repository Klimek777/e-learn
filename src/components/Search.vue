<template>
  <div class="bg-white py-24 sm:py-32 flex justify-center items-center">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Search Course</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Gain new knowledge here! Search all courses on CourseMate!</p>
        <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl mt-6">
          <div class="md:flex">
            <div class="w-full p-3">
              <div class="relative">
                <div class="mb-4 px-2">
                  <div class="relative">
                    <div class="absolute left-0 inset-y-0 pl-3 flex items-center">
                      <svg class="fill-current h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" /></svg>
                    </div>
                    <input class="w-full border pl-12 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-lg" type="text" placeholder="Search..." />
                  </div>
                </div>
                <span class="absolute top-4 right-5 border-l pl-4"><i class="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i></span>
              </div>
              <div>
                <button type="submit" class="mt-7 flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transform hover:scale-105 transition duration-300">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-100 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 class="text-2xl font-bold text-gray-700 mb-4">Recently Searched Courses</h3>
      <div class="flex overflow-x-auto space-x-4">
        <div class="flex-shrink-0">
          <div class="flex">
            <!-- Course tiles with example names -->
            <div class="bg-gray-200 rounded-md h-20 w-64 flex items-center justify-center">
              <span class="text-lg font-bold text-gray-700">Course 1</span>
            </div>
            <div class="bg-gray-200 rounded-md h-20 w-64 ml-2 flex items-center justify-center">
              <span class="text-lg font-bold text-gray-700">Course 2</span>
            </div>
            <div class="bg-gray-200 rounded-md h-20 w-64 ml-2 flex items-center justify-center">
              <span class="text-lg font-bold text-gray-700">Course 3</span>
            </div>
            <div class="bg-gray-200 rounded-md h-20 w-64 ml-2 flex items-center justify-center">
              <span class="text-lg font-bold text-gray-700">Course 4</span>
            </div>
            <div class="bg-gray-200 rounded-md h-20 w-64 ml-2 flex items-center justify-center">
              <span class="text-lg font-bold text-gray-700">Course 5</span>
            </div>
            <div class="bg-gray-200 rounded-md h-20 w-64 ml-2 flex items-center justify-center">
              <span class="text-lg font-bold text-gray-700">Course 6</span>
            </div>
            <div class="bg-gray-200 rounded-md h-20 w-64 ml-2 flex items-center justify-center">
              <span class="text-lg font-bold text-gray-700">Course 7</span>
            </div>
            <!-- Add more course tiles as needed -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
