<script lang="ts">
  import { page } from "$app/stores";
  import type { Post } from "../../../common/common";
  const postId = $page.params["id"];
  let post: Partial<Post> | null = null;
  fetch("https://6435108883a30bc9ad571361.mockapi.io/blogs/1").then(
    async (res) => {
      post = await res.json();
    }
  );
</script>

<div>
  Post {postId}
  {JSON.stringify(post)}
</div>
