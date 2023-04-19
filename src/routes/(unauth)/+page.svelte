<script lang="ts">
  const state = {
    img: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/333711483_3097620170538600_1643101765481105571_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RsLDzewCPC4AX81U0oT&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfAUdSVSws369Mvl5i5cg3WK6daFHhvki-UKd6gYSA5K2A&oe=6442B8B1",
    job: "UX/UI",
    name: "Huynh Bao Nghi",
    description: `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    socials: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/huynhnghi2409",
        style: "color: #2977ff;",
        img: "https://cdn-icons-png.flaticon.com/512/725/725289.png",
      },
      {
        name: "Behance",
        link: "https://www.behance.net/huynhbnghi",
        style: "color: #2977ff;",
        img: "https://cdn-icons-png.flaticon.com/512/216/216496.png",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/im.huangbyi/?fbclid=IwAR10964i4YYx1YGB8gseJQEbu7BNBhYSlxfjlLohi1fR0Td7ULGGBEHJgu4",
        style: "color: #ff0000;",
        img: "https://cdn-icons-png.flaticon.com/512/725/725278.png",
      },
      {
        name: "Email",
        link: "mailto: huynhbnghi2409@gmail.com",
        style: "color: #ff0000;",
        img: "https://cdn-icons-png.flaticon.com/512/324/324123.png",
      },
    ],
  };

  const products = [
    {
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/363b7c138005791.6215300509429.jpg",
      title: "Poster - The Veston Concert of HaAnhTuan",
      link: "https://www.behance.net/gallery/138005791/Poster-The-Veston-Concert-of-HaAnhTuan?tracking_source=project_owner_other_projects",
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/e5a74b138033769.6215bce53dc12.jpg",
      title: "THE VỆT COSMETICS - Cosmetics Branding",
      link: "https://www.behance.net/gallery/138033769/THE-VT-COSMETICS-Cosmetics-Branding?tracking_source=project_owner_other_projects",
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/2ced08103888305.5f5736d9888b7.jpeg",
      title: "OFÉLIA Cosmetics x Modern Matte Lipstick",
      link: "https://www.behance.net/gallery/103888679/OFELIA-Modern-Matte-Lipstick?tracking_source=project_owner_other_projects",
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/3102f2103888679.5f5738a5ebb23.jpeg",
      title: "Infinity Coffee x Latte Art",
      link: "https://www.behance.net/gallery/103888305/Infinity-Coffee?tracking_source=project_owner_other_projects",
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/61bcee137109427.620529988547e.jpg",
      title: `Whiteson Club - Tee "LOGO SS2020"`,
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/d99703137923385.621529d622ac5.jpg",
      title: `"GIA LẠC" - Peanut Candy Packaging`,
      link: "https://www.behance.net/gallery/137923385/GIA-LC-Peanut-Candy-Packaging?tracking_source=project_owner_other_projects",
    },
  ];
</script>

<html lang="">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="Portfolio" />
    <meta name="keywords" content="UX/UI Designer" />
    <meta name="author" content="Huynh Bao Nghi" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{state.description}</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <div class="p-10">
      <!-- <img
    src="https://instagram.fsgn2-9.fna.fbcdn.net/v/t51.2885-15/81964058_621095181984495_5242187696980269312_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fsgn2-9.fna.fbcdn.net&_nc_cat=103&_nc_ohc=1v3XN8s20B8AX99hvzA&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjIzMjA1NTMzMjQ5NzMzOTQwOA%3D%3D.2-ccb7-5&oh=00_AfAX_R05RXaLv3Z2VLGbV1V_hY4zAE4CXgO1SGE8DRHR1A&oe=6444D3D4&_nc_sid=6136e7"
    alt=""
    srcset=""
    crossorigin="anonymous"
  /> -->
      <div class="lg:xl:flex flex-row mb-5">
        <div class="description pr-5">
          <div class="w-max">
            <div class="flex justify-between">
              <h1 class="text-4xl font-bold">Hello! I'am</h1>
              <span
                class="bg-blue-100 text-blue-800 text-3xl font-medium ml-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                >{state.job}</span
              >
            </div>
            <h1 class="text-4xl font-bold">{state.name}</h1>
          </div>
          <p class="text-xl mt-10 mb-10">I'm {state.description}</p>
          <div class="social">
            <div>
              <h1 class="text-3xl font-bold mb-5">Contact</h1>
            </div>
            <div class="flex mb-5">
              {#each state.socials as social}
                <a href={social.link} target="_blank" class="mr-5">
                  <img src={social.img} alt="" width="40px" />
                  <!-- <p style={social.style}>{social.name}</p> -->
                </a>
              {/each}
            </div>
          </div>
        </div>
        <img
          src={state.img}
          alt=""
          srcset=""
          class="w-1/1 lg:xl:w-1/3 rounded-2xl"
        />
      </div>
      <div>
        <h1 class="text-3xl font-bold mb-5">Featured products</h1>
      </div>

      <div class="my-gallery">
        {#each products as { img, title, link }}
          <div style={`background-image: url(${img});`} class="relative">
            <a href={link} target="_blank">
              <p
                class="text-lime-600 font-bold text-3xl w-1/3 absolute bottom-5 right-5"
              >
                {title}
              </p>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </body>
</html>

<style lang="scss">
  .my-gallery {
    display: flex;
    height: 20rem;
    border-radius: 1rem;
    gap: 1rem;

    > div {
      flex: 1;
      border-radius: 1rem;
      background-position: center;
      background-repeat: no-repeat;
      // background-size: auto 100%;
      background-size: cover;
      transition: all 0.8s cubic-bezier(0.25, 0.4, 0.45, 1.4);
      // align-items: end;
      p {
        opacity: 0;
        text-shadow: -1px -1px 0 gray, 1px -1px 0 gray, -1px 1px 0 gray,
          1px 1px 0 gray;
      }
      &:hover {
        flex: 5;
        transform: scale(1.01);
        box-shadow: -2px 2px 25px 4px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: -2px 2px 25px 4px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -2px 2px 25px 4px rgba(0, 0, 0, 0.75);
        p {
          display: block;
          opacity: 1;
          transition: all 0.8s linear;
        }
      }
    }
  }
</style>
