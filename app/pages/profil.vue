<template>
  <section class="profil">
    <div class="profil__content">
      <div class="profil__cv">
        <img
          class="profil__cv-image"
          src="/images/cv.jpeg"
          alt="CV de Rafael Mornier"
        />
      </div>

      <div class="profil__about">
        <p class="profil__about-text">
          Salut ! Moi c'est Rafaël j'adore les jeux vidéos et l'informatique
          en général, actuellement je suis étudiant en informatique, je m'intéresse au domaine de la cybersécurité mais également 
          au développement de jeux vidéos
          depuis quelques temps maintenant. Ici je parlerai de mon
          parcours, de mes projets et de ce que j'explore, actuellement je cherche un stage et une alternance dans la cybersécurité.
          Apparemment en ce moment c'est la galère mais on tient bon :). 
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.profil {
  @apply min-h-[70vh] px-6 py-10 text-white flex flex-row;
}

.profil__content {
  @apply flex flex-wrap gap-8 items-start w-full max-w-6xl mx-auto;
}

.profil__cv {
  @apply rounded-2xl border border-white/15 bg-white/5 p-4 flex-1 min-w-[280px];
}

.profil__cv-image {
  @apply w-full h-auto rounded-xl object-cover;
}

.profil__about {
  @apply rounded-2xl border border-white/15 bg-white/5 p-6 flex-1 min-w-[260px];
}

.profil__about-text {
  @apply opacity-85 leading-relaxed text-lg text-black;
}

</style>
