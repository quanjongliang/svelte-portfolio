<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Post } from "../common/common";
  export let post: Post;
  const tags = ["funny", "danger", "wao"];
  const getHour = (createdAt: string | Date) => {
    const currentTime = new Date().getTime();
    const createdTime = new Date(createdAt).getTime();
    return new Date(currentTime - createdTime).getHours();
  };

  const navigateDetail = () => {
    goto(`/posts/${post.id}`);
  };
</script>

<div>
  <img
    src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    alt=""
  />
  <div class="content">
    <p>
      {post.content}
    </p>
  </div>
  <div class="author">
    <div class="avatar">
      <img
        src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
        alt=""
      />
    </div>
    <div class="information">
      <p class="author-name">John Cell</p>
      <div class="post-info">
        <p>Created for</p>
        <p>
          {getHour(post.createdAt)} hours
        </p>
      </div>
    </div>
  </div>
  <div>
    <button on:click={navigateDetail}>Go to</button>
  </div>
  <div class="tags">
    {#each tags as tag}
      <a href={`https://google.com/search?oq=${tag}`} target="_blank">#{tag}</a>
    {/each}
  </div>
</div>

<style lang="scss">
  .tags {
    display: flex;
    > a {
      margin-right: 10px;
    }
  }
  .author {
    .avatar {
      > img {
        width: 50px;
      }
    }
    .information {
      p {
        margin: 5px 0 5px 0;
      }
      .post-info {
        display: flex;
        p {
          margin-right: 5px;
          &:last-child {
            color: blue;
          }
        }
      }
    }
    display: flex;
    align-items: center;
  }
</style>
