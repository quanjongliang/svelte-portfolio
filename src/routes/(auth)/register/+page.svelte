<script lang="ts">
  const user = {
    username: "",
    password: "",
    confirmPassword: "",
  };
  const renderForms = [
    {
      label: "Username",
      name: "username",
      data: user.username,
      type: "text",
    },
    {
      label: "Password",
      name: "password",
      data: user.password,
      type: "password",
    },
    {
      label: "Confirm password",
      name: "confirmPassword",
      data: user.confirmPassword,
      type: "password",
    },
  ];
</script>

<div class="grid place-items-center h-full">
  <div class="border-4 w-1/3 bg-slate-400 rounded-3xl">
    <div class="p-5">
      <h1 class="text-center text-3xl">Register</h1>
      <div>
        <form action="">
          <!-- <p>Username</p>
        <input type="text" placeholder="Username" /> -->
          {#each renderForms as render}
            <div>
              <p>
                {render.label}
              </p>
              <input
                class="bg-slate-300 rounded-lg p-2"
                type={render.type}
                name={render.name}
                placeholder={render.label}
              />
            </div>
          {/each}
        </form>
      </div>
    </div>
  </div>
</div>
