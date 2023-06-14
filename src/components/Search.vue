<template>
  <div class="bg-white py-20 sm:py-20 justify-center items-center grid">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Search Course
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Gain new knowledge here! Search all courses on CourseMate!
        </p>
        <div
          class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl mt-6"
        >
          <div class="md:flex">
            <div class="w-full p-3">
              <div class="relative">
                <div class="mb-4 px-2">
                  <div class="relative">
                    <div
                      class="absolute left-0 inset-y-0 pl-3 flex items-center"
                    >
                      <svg
                        class="fill-current h-6 w-6 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                        />
                      </svg>
                    </div>
                    <input
                      v-model="searchText"
                      class="w-full border pl-12 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-lg text-black"
                      type="text"
                      placeholder="Search..."
                    />
                  </div>
                </div>
                <span class="absolute top-4 right-5 border-l pl-4"
                  ><i
                    class="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"
                  ></i
                ></span>
              </div>
              <!-- <div>
                <button v-on:click="search"
                  type="button"
                  class="mt-7 flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transform hover:scale-105 transition duration-300"
                >
                  Search
                </button>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="pt-8 mx-auto mb-20 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-4 border-t border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
    >
      <article
        v-for="post in filteredPosts"
        :key="post.id"
        class="min-w-[13rem] bg-gray-100 h-[13rem] p-6 rounded-xl flex max-w-xl flex-col justify-between justify-center items-center"
      >
        <img
          :src="post.author.imageUrl"
          alt=""
          class="h-20 w-20 rounded-full bg-gray-50"
        />
        <div class="group relative">
          <h3
            class="mt-5 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
          >
            <a :href="post.href">
              <span class="absolute inset-0"></span>
              {{ post.title }}
            </a>
          </h3>
        </div>
        <div class="relative mt-4 flex items-center gap-x-4">
          <!-- <img
            :src="post.author.imageUrl"
            alt=""
            class="h-10 w-10 rounded-full bg-gray-50"
          /> -->
          <div class="text-sm leading-6">
            <p class="font-semibold text-gray-900">
              <span class="absolute inset-0"></span>
              Author: {{ post.author.name }}
            </p>
            <!-- <p class="text-gray-600">{{ post.author.role }}</p> -->
          </div>
        </div>
      </article>
    </div>
  </div>
  <div class="bg-gray-100 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 class="text-2xl font-bold text-gray-700 mb-4">
        Recently Viewed Courses
      </h3>
      <div class="flex overflow-x-auto space-x-4">
        <div class="flex-shrink-0" v-for="course in recentlyViewedCourses">
          <div class="flex">
            <!-- Course tiles with example names -->
            <div
              class="bg-gray-200 rounded-md h-20 w-64 flex items-center justify-center"
            >
              <span class="text-lg font-bold text-gray-700"
                ><article
                  :key="course.id"
                  class="flex max-w-xl flex-col items-start justify-between justify-center items-center"
                >
                  <div class="group relative">
                    <a :href="course.href">
                      {{ course.title }}
                    </a>
                  </div>
                </article></span
              >
            </div>
            <!-- Add more course tiles as needed -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.checkSession(); // Sprawdzanie sesji przy tworzeniu komponentu
  },
  data() {
    return {
      posts: [],
      recentlyViewedCourses: [],
      searchText: "",
    };
  },
  mounted() {
    this.getCourses()
      .then((courses) => {
        courses.forEach((course) => {
          var post = {
            id: course.id,
            title: course.title,
            href: "/course-details/" + course.courseId, // Przykładowa ścieżka do szczegółów kursu
            description: course.description,
            date: "",
            datetime: "",
            category: {
              title: "",
              href: "#", // Przykładowa ścieżka do kategorii
            },
            author: {
              name: course.authorName,
              role: "",
              href: "#", // Przykładowa ścieżka do autora
              imageUrl:
                "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
          };
          this.posts.push(post);
        });
        console.log(this.posts);
      })
      .catch((error) => {
        console.error("Błąd pobierania kursów:", error);
      });

    this.getRecentlyViewedCourses()
      .then((courses) => {
        courses.forEach((course) => {
          var recView = {
            id: course.courseId,
            title: course.title,
            href: "/course-details/" + course.courseId, // Przykładowa ścieżka do szczegółów kursu
            description: course.description,
            date: "",
            datetime: "",
            category: {
              title: "",
              href: "#", // Przykładowa ścieżka do kategorii
            },
            author: {
              name: course.authorName,
              role: "",
              href: "#", // Przykładowa ścieżka do autora
              imageUrl: "",
            },
          };
          this.recentlyViewedCourses.push(recView);
        });
      })
      .catch((error) => {
        console.error("Błąd pobierania kursów:", error);
      });
  },
  computed: {
    filteredPosts() {
      // Filtrujemy posty na podstawie searchText
      return this.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
          post.author.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  methods: {
    async checkSession() {
      try {
        console.log(localStorage.getItem("token"));
        // Pobierz token z lokalnego magazynu
        const token = localStorage.getItem("token");

        // Wykonaj żądanie do backendu, aby sprawdzić poprawność tokena
        const response = await axios.get(
          "https://localhost:44389/session/check",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Token jest poprawny, użytkownik jest zalogowany
        console.log("Użytkownik jest zalogowany");

        // Możesz przekierować użytkownika na inną stronę lub wykonać inne działania dla zalogowanego użytkownika
        // window.location.href = '/search';
      } catch (error) {
        // W przypadku błędu lub braku aktywnej sesji, przekieruj użytkownika na stronę logowania
        console.log("Błąd uwierzytelnienia lub wygasła sesja");
        console.log(error);
        window.location.href = "/login";
      }
    },
    async getCourses() {
      try {
        const response_courses = await axios.get(
          "https://localhost:44389/courses/read"
        );
        return response_courses.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getRecentlyViewedCourses() {
      try {
        var coursesIDs = JSON.parse(sessionStorage.getItem("recentlyViewed"));
        const response_recently = await axios.get(
          "https://localhost:44389/courses/recently-viewed/read",
          {
            headers: {
              courses: coursesIDs,
            },
          }
        );
        console.log(response_recently.data);
        return response_recently.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
