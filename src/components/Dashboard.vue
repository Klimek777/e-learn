<template>
  <div class="bg-white py-24 sm:py-32 flex justify-center items-center">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto  lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Your Courses
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Develop your skills with courses on COURSEMATE
        </p>
      </div>
      <div
    class="pt-8 mx-auto mb-20 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-4 border-t border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
  >
    <article
      v-for="post in posts"
      :key="post.id"
      class="min-w-[13rem] bg-gray-100 h-[13rem] p-6 rounded-xl flex max-w-xl flex-col  justify-center items-center"
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
        <div class="text-sm leading-6">
          <p class="font-semibold text-gray-900">
            <span class="absolute inset-0"></span>
            Author: {{ post.author.name }}
          </p>
          <p class="text-gray-600">{{ post.author.role }}</p>
        </div>
      </div>
    </article>
  </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.checkSession();
    // this.getMyCourses();
  },

  mounted(){
    this.getMyCourses()
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
  },

  data() {
    return {
      // posts: [
      //   {
      //     id: 1,
      //     title: "Boost your conversion rate",
      //     href: "/course-details",
      //     description:
      //       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      //     date: "Mar 16, 2020",
      //     datetime: "2020-03-16",
      //     category: { title: "Marketing", href: "#" },
      //     author: {
      //       name: "Michael Foster",
      //       role: "Co-Founder / CTO",
      //       href: "#",
      //       imageUrl:
      //         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      //     },
      //   },
       
      
        
        
      // ],
      posts: [],
    };
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
    async getMyCourses() {
      try {
        const response_my_courses = await axios.get(
          "https://localhost:44389/courses/joined", {
            headers: {
              "userId": sessionStorage.getItem("userId")
            }
          }
        );
        console.log(response_my_courses.data);
        return response_my_courses.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  
};
</script>
