<script lang="ts">
  import { callApi } from "../../../services/fetch-api.service";
  import type { LoginForm } from "../../../types/type";

  const login = {
    username: "",
    password: "",
    showPassword: false,
  };

  const onConfirm = async () => {
    console.log(login);
    callApi("/login", { method: "post", body: JSON.stringify(login) })
      .then((res) => {
        console.log("res", res);
      })
      .catch((error) => {
        console.log("error", error);
        window.alert(error.message);
      });
  };

  const onChangeInput = (e: Event) => {
    // console.log(e);
    if (e.target) {
      const { name = "", value = "" } = e.target as HTMLTextAreaElement;
      console.log(name, value);
    }
  };
  const ref = (node: HTMLInputElement, type: string) => {
    node.type = login.showPassword ? "text" : type;
  };

  const form = {
    title: "Login",
    inputs: [
      {
        name: "username" as keyof LoginForm,
        label: "Username",
        value: login.username,
        type: "text",
      },
      {
        name: "password" as keyof LoginForm,
        label: "Password",
        value: login.password,
        type: "password",
      },
    ],
    confirm: {
      onClick: () => onConfirm(),
      title: "Login",
    },
    showPassword: {
      title: "Show password",
      value: login.showPassword,
    },
  };
</script>

<div class="grid place-items-center h-full">
  <div class="w-1/3 h-3/4 bg-slate-50 rounded-xl p-10">
    <div>
      <h1 class="text-3xl text-center">{form.title}</h1>
      <div>
        {#each form.inputs as { label: placeholder, name, type, value }}
          <div class="m-5">
            <p class="mb-2 text-xl">
              {placeholder}
            </p>
            <input
              class="w-full p-5 rounded-md"
              {placeholder}
              {name}
              {...{ type: login.showPassword ? "text" : type }}
              bind:value={login[name]}
            />
          </div>
        {/each}
        <div class="m-5">
          <input
            class="p-5"
            type="checkbox"
            value={form.showPassword.value}
            placeholder={form.showPassword.title}
            bind:checked={login["showPassword"]}
          />
        </div>
      </div>
      <button on:click={form.confirm.onClick}>{form.confirm.title}</button>
    </div>
  </div>
</div>
