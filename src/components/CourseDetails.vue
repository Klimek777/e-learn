<template>
  <div class="bg-white py-24 sm:py-12 flex justify-center items-center">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 w-full">
      <div class="flex justify-end">
        <button v-on:click="joinCourse"
                  type="button"
                  class="max-w-[10rem] mt-7 flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transform hover:scale-105 transition duration-300"
                >
                  Join course!
                </button>
      </div>
      <div class="mx-auto lg:mx-0 text-center">
        <h2
          class="text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl"
        >
          {{ courseDetails.courseTitle }}
        </h2>
      </div>

      <div class="mb-4 mt-4 px-2 w-full">
        <p id="courseDescription" class="text-lg text-gray-900">
          {{ courseDetails.courseDescription }}
        </p>
      </div>

      <div v-for="(module, index) in courseDetails.modules" :key="index" class="mb-8 mt-20">
        <div
          class="bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          <h3 class="text-2xl font-bold mb-2">Module {{ index + 1 }}</h3>

          <div>
            <h4 class="text-xl font-medium mb-1 text-orange-500">
              {{ module.title }}
            </h4>
            <p class="text-lg">{{ module.content }}</p>
          </div>

          <div class="mt-4" v-if="module.file.length > 0">
            <h4 class="text-xl font-medium mb-1">File:</h4>
            <a :download="module.file[0].fileName" :href="getDownloadUrl(module.file[0].fileContent)"><p class="text-lg">{{ module.file[0].fileName }}</p></a>
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
    var recentlyViewed = [];

  if (sessionStorage.getItem("recentlyViewed")) {
    recentlyViewed = JSON.parse(sessionStorage.getItem("recentlyViewed"));
  }

  if(!recentlyViewed.includes(this.$route.params.id))
  recentlyViewed.unshift(this.$route.params.id);
  if(recentlyViewed.length>7) {
    recentlyViewed.pop();
  }
  sessionStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));

  console.log(recentlyViewed);
},
  data() {
    return {
      courseDetails: [],
    };
  },
  mounted() {
    this.getCourseDetails()
      .then((details) => {
        const modulePromises = details.modules.map((module, index) => {
          return this.getFile(details.courseId, index + 1).then((response) => {
            module.file = response.data;
          });
        });

        Promise.all(modulePromises).then(() => {
          this.courseDetails = {
            courseTitle: details.courseTitle,
            courseDescription: details.courseDescription,
            modules: details.modules,
          };
          console.log(this.courseDetails);
        });
      })
      .catch((error) => {
        console.error("Błąd pobierania kursów:", error);
      });
  },
  methods: {

    async joinCourse() {
      try {
        const response_course_details = await axios.get(
          "https://localhost:44389/course/" + this.$route.params.id + "/join", {
            headers: {
              "userId": sessionStorage.getItem("userId"),
            }
          }
        );
        alert("Join succeded!");
        return "Join succeded!";
      } catch (error) {
        console.log(error);
      }
    },

    getDownloadUrl(fileContent) {
  const blob = this.base64ToBlob(fileContent);
  const url = URL.createObjectURL(blob);
  return url;
},

base64ToBlob(base64Data) {
  const byteCharacters = atob(base64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: "application/octet-stream" });
  return blob;
},
    async checkSession() {
      try {
        console.log(localStorage.getItem("token"));
        // Pobierz token z lokalnego magazynu
        const token = localStorage.getItem("token");

        // Wykonaj żądanie do backendu, aby sprawdzić poprawność tokena
        const response = await axios.get("https://localhost:44389/session/check", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

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
    async getCourseDetails() {
      try {
        const response_course_details = await axios.get(
          "https://localhost:44389/course-details/" + this.$route.params.id + "/read"
        );
        console.log(response_course_details.data);
        return response_course_details.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getFile(courseId, moduleNumber) {
      const response_files = await axios.get(
        "https://localhost:44389/course-details/" +
          courseId.toString() +
          "/" +
          moduleNumber.toString() +
          "/files"
      );
      return response_files;
    },
  },
};
</script>
