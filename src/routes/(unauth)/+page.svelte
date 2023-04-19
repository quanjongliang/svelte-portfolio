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
        style: "color: #2977ff;",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/im.huangbyi/?fbclid=IwAR10964i4YYx1YGB8gseJQEbu7BNBhYSlxfjlLohi1fR0Td7ULGGBEHJgu4",
        style: "color: #ff0000;",
        img: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
      },
    ],
  };

  const banners = [
    "https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/70317033_126024208771494_5390122555627536384_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=19026a&_nc_ohc=QNFSc4xqtMAAX_anwy9&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDF0TtVA3mTrtU7Vh7xdGPyW1A-2mLQCTpEHVBQcrvwYw&oe=6466C400",
    "https://img.freepik.com/free-vector/dark-blue-abstract-banner-half-tone-style-design_1017-39869.jpg",
    "https://static.vecteezy.com/system/resources/previews/008/552/477/original/abstract-banner-background-with-lines-pattern-illustration-free-vector.jpg",
    "https://img.freepik.com/free-vector/stylish-abstract-web-banner-with-text-space_1017-39039.jpg?w=2000",
    "https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg",
    "https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg",
  ];
</script>

<h1>Welcome</h1>
<div class="p-10">
  <!-- <img
    src="https://instagram.fsgn2-9.fna.fbcdn.net/v/t51.2885-15/81964058_621095181984495_5242187696980269312_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fsgn2-9.fna.fbcdn.net&_nc_cat=103&_nc_ohc=1v3XN8s20B8AX99hvzA&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjIzMjA1NTMzMjQ5NzMzOTQwOA%3D%3D.2-ccb7-5&oh=00_AfAX_R05RXaLv3Z2VLGbV1V_hY4zAE4CXgO1SGE8DRHR1A&oe=6444D3D4&_nc_sid=6136e7"
    alt=""
    srcset=""
    crossorigin="anonymous"
  /> -->
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
        <img src={social.img} alt="" width="40px" />
        <p style={social.style}>{social.name}</p>
      </a>
    {/each}
  </div>
  <div class="my-gallery">
    {#each banners as banner}
      <div style={`background-image: url(${banner});`} />
    {/each}
  </div>
</div>

<style lang="scss">
  .my-gallery {
    display: flex;
    height: 20rem;
    gap: 1rem;
    > div {
      flex: 1;
      border-radius: 1rem;
      background-position: center;
      background-repeat: no-repeat;
      background-size: auto 100%;
      transition: all 0.8s cubic-bezier(0.25, 0.4, 0.45, 1.4);
      &:hover {
        flex: 5;
      }
    }
  }
</style>
