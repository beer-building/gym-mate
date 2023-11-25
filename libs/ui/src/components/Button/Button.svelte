<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let type: "button" | "submit" = "button";
  export let kind: "default" | "icon" = "default";
  export let size: "normal" | "small" | "large" = "normal";

  const dispatch = createEventDispatcher()
</script>

<button {type} class="kind__{kind} size__{size}" on:click={() => dispatch("click")}>
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

     &__icon {
      justify-content: center;
      border-radius: var(--base-radius);
      transition: var(--transition);
      width: var(--size);
      height: var(--size);
      &.size {
        &__small {
          --size: 24px
        }
        &__normal {
          --size: 28px;
        }
        &__large {
          --size: 42px;
        }
      }
      &:hover {
        background-color: var(--color-surface-on-background);
      }
    }
  }
  .size {
    &__small {
      height: 24px;
      padding: 0 12px;
      font-size: 0.9rem;
    }
    &__normal {
      height: 28px;
      padding: 0 12px;

    }
    &__large {
      height: 42px;
      padding: 0 12px;
      font-size: 1.1rem;
    }
  }
</style>
