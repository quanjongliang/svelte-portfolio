<script lang="ts">
  const state = {
    active: false,
    img: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/333711483_3097620170538600_1643101765481105571_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RsLDzewCPC4AX81U0oT&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfAUdSVSws369Mvl5i5cg3WK6daFHhvki-UKd6gYSA5K2A&oe=6442B8B1",
    job: "UX/UI",
    name: "Huynh Bao Nghi",
    description: `
    Hi there! Im' Huynh Bao Nghi, a graphic designer based in Ho Chi Minh City. Im' ready to graduate and currently working as a freelancer. I consider myself a hard-working person. I'm willing to do my best for the growth of the company with my abilities.`,
    socials: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/huynhnghi2409",
        img: "https://cdn-icons-png.flaticon.com/512/725/725289.png",
      },
      {
        name: "Behance",
        link: "https://www.behance.net/huynhbnghi",
        img: "https://cdn-icons-png.flaticon.com/512/216/216496.png",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/im.huangbyi/?fbclid=IwAR10964i4YYx1YGB8gseJQEbu7BNBhYSlxfjlLohi1fR0Td7ULGGBEHJgu4",
        img: "https://cdn-icons-png.flaticon.com/512/725/725278.png",
      },
      {
        name: "Email",
        link: "mailto: huynhbnghi2409@gmail.com",
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
  setTimeout(() => {
    state.active = true;
  }, 1000);
</script>

<html lang="">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="Portfolio" />
    <meta name="keywords" content="UX/UI Designer" />
    <meta name="author" content="Huynh Bao Nghi" />
    <meta property="og:image" content={state.img} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{state.description}</title>
  </head>
  <body>
    <div class={`p-5`}>
      <div class="lg:xl:flex flex-row mb-2">
        <div class="description pr-5 flex flex-col justify-between">
          <div class="w-max">
            <div class="flex justify-between">
              <h1 class="text-4xl font-bold">Hello! I'am</h1>
              <span
                class="bg-blue-100 text-blue-800 text-3xl font-medium ml-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                >{state.job}</span
              >
            </div>
            <div class="flex mt-2">
              <h1 class="text-4xl font-bold mr-5">
                {state.name}
              </h1>
              <a href="/pdf" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7257/7257803.png"
                  alt=""
                  width="40px"
                /></a
              >
            </div>
          </div>
          <p class="text-xl">I'm {state.description}</p>
          <div class="social">
            <h1 class="text-3xl font-bold">Contact</h1>
            <div class="flex mb-5 mt-5">
              {#each state.socials as social}
                <a href={social.link} target="_blank" class="mr-5">
                  <img src={social.img} alt="" width="40px" />
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
          <div style={`background-image: url(${img});`} class="relative flex-1">
            <a href={link} target="_blank">
              <p
                class="bg-blue-800 bg-opacity-75 text-blue-100 rounded-3xl p-5 dark:bg-blue-800 dark:text-blue-300 font-bold text-2xl w-1/2 absolute bottom-5 right-5"
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
  body {
    background-image: url("https://img.freepik.com/premium-photo/white-watercolor-paper-background-texture-full-frame_136875-2771.jpg?w=2000");
    animation: 1s ease-out 0s 1 slideInFromLeft;
  }
  .my-gallery {
    display: flex;
    height: 20rem;
    border-radius: 1rem;
    gap: 1rem;

    > div {
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
          opacity: 0.75;
          transition: all 1s linear;
        }
      }
    }
  }

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
