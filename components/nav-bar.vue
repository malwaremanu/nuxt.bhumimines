<template>
  <nav class="bg-white border-bhumi-200 px-2 sm:px-4 py-2.5 rounded dark:bg-bhumi-800">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          <span class="text-bhumi-600">Sample</span> Company
        </span>
      </a>
      <div class="flex md:order-2 items-center">
        <NuxtLink to="/login">
          <BtnPrimary text="Login" />
        </NuxtLink>
      </div>
      <div
        class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
        id="mobile-menu-4"
      >
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <Anchor text="Home" />
          </li>
          <li>
            <Anchor text="About us" />
          </li>
          <li>
            <Anchor text="Services" />
          </li>
          <li>
            <Anchor text="Contacts" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>