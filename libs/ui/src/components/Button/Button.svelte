<script lang="ts">
  export let type: "button" | "submit" = "button";
  export let kind: "default" | "icon" = "default";
  export let size: "normal" | "small" | "large" = "normal";
</script>

<button {type} class="kind__{kind} size__{size}">
  <slot />
</button>

<style lang="postcss">
  button {
    appearance: none;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  .kind {
    &__default {
      border-radius: var(--base-radius);
      background-color: var(--color-accent100);
      color: var(--color-text-on-accent);
      transition: var(--transition);
      font-weight: 500;
    }
  }
  .size {
    &__normal {
      height: 28px;
      padding: 0 12px;
    }
    &__large {
      height: 42px;
      padding: 0 12px;
    }
  }
</style>
