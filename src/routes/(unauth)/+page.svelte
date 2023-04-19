<script lang="ts">
  const state = {
    img: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/333711483_3097620170538600_1643101765481105571_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RsLDzewCPC4AX81U0oT&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfAUdSVSws369Mvl5i5cg3WK6daFHhvki-UKd6gYSA5K2A&oe=6442B8B1",
    title: "What is Lorem Ipsum?",
    description: `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    socials: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/huynhnghi2409",
        icon: {
          class: "fab fa-facebook fa-2xl",
          style: "color: #2977ff;",
        },
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/im.huangbyi/?fbclid=IwAR10964i4YYx1YGB8gseJQEbu7BNBhYSlxfjlLohi1fR0Td7ULGGBEHJgu4",
        icon: {
          class: "fab fa-instagram fa-2xl",
          style: "color: #ff0000;",
        },
      },
    ],
  };
</script>

<h1>Welcome</h1>
<div class="p-10">
  <div class="lg:xl:flex flex-row">
    <div class="description pr-5">
      <h1 class="text-4xl">{state.title}</h1>
      <p class="text-xl mt-5">{state.description}</p>
    </div>
    <img src={state.img} alt="" srcset="" class="w-1/1 lg:xl:w-1/4" />
  </div>
  <div class="social flex">
    {#each state.socials as social}
      <a href={social.link} target="_blank" class="mr-2">
        <i
          class={social.icon.class}
          style={`${social.icon.style} font-size:30px`}
        />
        <p style={social.icon.style}>{social.name}</p>
      </a>
    {/each}
  </div>
</div>
