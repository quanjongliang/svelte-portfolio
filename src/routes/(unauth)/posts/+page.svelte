<script lang="ts">
  // import PostComponent from "$components/post-component.svelte";
  import type { Post } from "../../../common/common";
  import { callApi } from "../../../services/fetch-api.service";
  import type { ResponseCustom } from "../../../shared/shared";

  const state: {
    posts: Post[];
    isLoading: boolean;
  } = {
    posts: [],
    isLoading: false,
  };
  const fetchPosts = async () => {
    state.isLoading = true;
    try {
      const response: ResponseCustom<Array<Post>> = await callApi("/api");
      state.posts = response.data || [];
    } catch (error) {
      console.log(error);
    }
    state.isLoading = false;
  };
  fetchPosts();
</script>

<div>Posts</div>
<div class="post-container">
  {#if state.isLoading}
    <div class="loading">
      <h1>Loading...</h1>
    </div>
  {:else}
    <div>
      <ul>
        {#each state.posts as post}
          <div>
            <!-- <PostComponent {post} /> -->
          </div>
        {:else}
          <li>Empty list</li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style lang="scss">
  .post-container {
    width: 100vw;
  }
  .loading {
    width: 100vw;
    height: 100vh;
    background: gray;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
