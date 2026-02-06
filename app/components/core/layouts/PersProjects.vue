<template>
  <section class="projects">
    <div class="projects__grid" role="list">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @select="selectProject"
      />
    </div>

    <ProjectPreview :project="activeProject" />
  </section>
</template>

<script setup>
import { ref } from "vue";

const projects = [
  {
    id: "keyestudio",
    name: "Keyestudio House",
    image: "/images/project/Keyestudioo.webp",
    preview: "/images/project_preview/Keyestudioo_preview.jpg",
    description: "Petit projet fait en cours de domotique portant sur de l'électronique, utilisant micro python.",
  },
  {
    id: "CsharpGuildGame",
    name: "C# Guild Game",
    image: "/images/project/Csharp.png",
    preview: "/images/project_preview/Csharp_preview.png",
    description: "Guild Manager - Jeu de Gestion de Guilde en C Sharp Un jeu de stratégie tour par tour en C# où vous gérez une guilde d'aventuriers, planifiez des missions, gérez les ressources et entraînez vos héros.",
  },
  {
    id: "lol",
    name: "League of Legends",
    image: "/images/project/LeagueofLogo.webp",
    preview: "/images/project_preview/mastery.png",
    description: "League of legends est l'un de mes jeux favoris, un jeux d'équipe pour s'amuser / tryhard avec des potes c'est vraiment une expérience unique.",
  },
];

const activeProject = ref(projects[0]);

const selectProject = (project) => {
  activeProject.value = project;
};
</script>

<style scoped>
.projects {
  @apply grid gap-8 items-start bg-[rgb(23,22,22)] text-[aliceblue] grid-cols-[minmax(260px,1.1fr)_minmax(280px,1fr)];
}

.projects__grid {
  @apply grid gap-4 text-[aliceblue];
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
</style>
