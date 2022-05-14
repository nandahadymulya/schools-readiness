<template>
  <div>
    <!-- Main Cover -->
    <main>
      <div class="flex w-full h-96 justify-center align-center text-center">
        <div class="flex flex-col justify-center">
          <h1 class="text-6xl font-extrabold text-blue-900">
            Inside School Readiness <br />
            <span class="text-yellow-500">for Blended-Learning </span>
          </h1>
          <p class="font-light lg:pt-5">
            clustering and classification of school readiness applying
            blended-learning <br />
            using algorithm: k-means and support vector machines.
          </p>
        </div>
      </div>
    </main>
    <!-- End -->

    <!-- Section Blended-Learning -->
    <section class="lg:py-28">
      <div class="flex h-96 justify-between align-center">
        <div
          class="flex flex-col w-1/2 justify-center align-center text-center"
        >
          <p class="text-blue-500">Topic of Readiness</p>
          <h1 class="text-4xl font-bold text-blue-900">Blended-Learning</h1>
          <p class="font-light lg:pt-5">
            Blended Learning is a learning strategy that can develop critical
            thinking skills <br />
            and optimize the use of information and technology <br />
            as well as improve learning outcomes.
          </p>
        </div>

        <div class="flex w-1/2 justify-center align-center">
          <img
            src="blendedlearning.jpg"
            class="rounded-md"
            alt="SCH Main Image"
          />
        </div>
      </div>
    </section>
    <!-- End -->

    <!-- Section K-Means -->
    <section class="lg:py-28">
      <div class="flex w-full h-96 justify-center align-center">
        <div class="flex w-1/2 justify-center align-center">
          <img src="kmeans.jpg" class="rounded-md" alt="SCH Main Image" />
        </div>

        <div
          class="flex flex-col w-1/2 justify-center align-center text-center"
        >
          <p class="text-blue-500">Algorithm Technology</p>
          <h1 class="text-4xl text-blue-900">K-Means</h1>
          <p class="font-light lg:pt-5">
            The K-Means algorithm is one of the Clustering algorithms <br />
            which is included in the unsupervised learning group <br />
            which is used to group data into several groups with a partition
            system.
          </p>
        </div>
      </div>
    </section>
    <!-- End -->

    <!-- Section Support Vector Machines -->
    <section class="lg:py-28">
      <div class="flex w-full h-96 justify-center align-center">
        <div
          class="flex flex-col w-1/2 justify-center align-center text-center"
        >
          <p class="text-blue-500">Algorithm Technology</p>
          <h1 class="text-4xl text-blue-900">Support Vector Machines</h1>
          <p class="font-light lg:pt-5">
            SVM or Support Vector Machine is a classification algorithm <br />
            with the aim of finding a separator function that can separate two
            data sets <br />
            from two different classes.
          </p>
        </div>

        <div class="flex w-1/2 justify-center align-center">
          <img src="svm.jpg" class="rounded-md" alt="SCH Main Image" />
        </div>
      </div>
    </section>
    <!-- End -->

    <!-- Section Developer -->
    <section class="lg:py-28">
      <div class="flex w-full h-96 justify-center align-center">
        <div class="flex w-1/2 justify-center align-center">
          <img src="developer.jpg" class="rounded-md" alt="SCH Main Image" />
        </div>

        <div
          class="flex flex-col w-1/2 justify-center align-center text-center"
        >
          <p class="text-blue-500">Developer</p>
          <h1 class="text-4xl text-blue-900">Nanda Hady Mulya</h1>
          <p class="font-light lg:pt-5">
            A final-year informatics engineering student, <br />
            concentrated in Artificial Intelligence (AI) whose highly motivated,
            visionary, <br />
            and have the capability to be a groundbreaker.
          </p>
        </div>
      </div>
    </section>
    <!-- End -->
  </div>
</template>
<script>
export default {
  name: 'AboutPage',
}
</script>
