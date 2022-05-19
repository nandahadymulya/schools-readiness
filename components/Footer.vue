<template>
  <footer
    class="bg-gray-50 footer flex flex-col justify-center align-items-center text-center gap-2"
  >
    <div class="text-center">
      <p>&copy; Copyright 2022.</p>
      <p>Nanda Hady Mulya - All right reserved.</p>
    </div>
    <div class="flex gap-2 justify-center align-items-center">
      <a href="https://linkedin.com/in/nandahadymulya">
        <img src="assets/logo/linkedin.svg" alt="linkedin" />
      </a>
      <a href="https://github.com/nandahadymulya">
        <img src="assets/logo/github.svg" alt="linkedin" />
      </a>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterComponent',
}
</script>
<style lang="postcss" scoped>
.footer {
  height: 362px;
  /* background-color: #fafafa; */
}
</style>
